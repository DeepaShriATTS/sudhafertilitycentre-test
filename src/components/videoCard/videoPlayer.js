// app/api/playlist/route.js
//
// Server-side YouTube playlist scraper (no API key required).
//
// Fetches https://www.youtube.com/playlist?list=<id>, pulls the embedded
// `ytInitialData` JSON blob out of the page, and extracts a light list of
// { id, title, thumbnail, duration } for each video. Runs entirely on the
// server — the client only ever receives a small JSON payload, so this has
// no impact on client bundle size or Lighthouse Performance score.
//
// Results are cached in-memory per playlist id for 1 hour (CACHE_TTL_MS)
// to avoid re-scraping YouTube on every modal open. Swap the in-memory
// cache for Redis/KV if you're running multiple server instances.
//
// Usage: GET /api/playlist?list=PLxxxxxxxxxxxxxxxx&limit=25

const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour
const cache = new Map(); // playlistId -> { data, expiresAt }

function extractInitialData(html) {
  // ytInitialData is embedded as a <script>var ytInitialData = {...};</script>
  // block. We locate it without a fragile regex across the whole document by
  // scanning for the assignment and balancing braces from there.
  const marker = "var ytInitialData = ";
  const startIdx = html.indexOf(marker);
  if (startIdx === -1) return null;

  const jsonStart = startIdx + marker.length;
  let depth = 0;
  let inString = false;
  let escapeNext = false;
  let endIdx = -1;

  for (let i = jsonStart; i < html.length; i++) {
    const char = html[i];

    if (escapeNext) {
      escapeNext = false;
      continue;
    }
    if (char === "\\") {
      escapeNext = true;
      continue;
    }
    if (char === '"') {
      inString = !inString;
      continue;
    }
    if (inString) continue;

    if (char === "{") depth++;
    if (char === "}") {
      depth--;
      if (depth === 0) {
        endIdx = i + 1;
        break;
      }
    }
  }

  if (endIdx === -1) return null;

  const jsonStr = html.slice(jsonStart, endIdx);
  try {
    return JSON.parse(jsonStr);
  } catch {
    return null;
  }
}

function pickBestThumbnail(thumbnails) {
  if (!thumbnails || !thumbnails.length) return null;
  // thumbnails are ordered smallest -> largest; take the largest available
  return thumbnails[thumbnails.length - 1]?.url || thumbnails[0]?.url || null;
}

function flattenText(runsObj) {
  if (!runsObj) return "";
  if (typeof runsObj.simpleText === "string") return runsObj.simpleText;
  if (Array.isArray(runsObj.runs)) {
    return runsObj.runs.map((r) => r.text).join("");
  }
  return "";
}

function findPlaylistVideoRenderers(node, results = []) {
  if (!node || typeof node !== "object") return results;

  if (node.playlistVideoRenderer) {
    results.push(node.playlistVideoRenderer);
  }

  if (Array.isArray(node)) {
    for (const item of node) findPlaylistVideoRenderers(item, results);
  } else {
    for (const key in node) {
      // Skip huge irrelevant branches for speed
      if (key === "trackingParams" || key === "clickTrackingParams") continue;
      findPlaylistVideoRenderers(node[key], results);
    }
  }

  return results;
}

function parsePlaylistVideos(initialData, limit) {
  const renderers = findPlaylistVideoRenderers(initialData);

  const videos = renderers
    .map((r) => {
      const id = r.videoId;
      if (!id) return null;

      const title = flattenText(r.title);
      const thumbnail =
        pickBestThumbnail(r.thumbnail?.thumbnails) ||
        `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
      const duration = r.lengthText ? flattenText(r.lengthText) : null;
      const index = r.index ? flattenText(r.index) : null;

      return { id, title, thumbnail, duration, index };
    })
    .filter(Boolean);

  // De-dupe by video id (playlist pages can sometimes repeat renderers
  // across continuation sections during initial load)
  const seen = new Set();
  const deduped = [];
  for (const v of videos) {
    if (seen.has(v.id)) continue;
    seen.add(v.id);
    deduped.push(v);
    if (deduped.length >= limit) break;
  }

  return deduped;
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const playlistId = searchParams.get("list");
  const limit = Math.min(
    parseInt(searchParams.get("limit") || "25", 10) || 25,
    50
  );

  if (!playlistId) {
    return Response.json(
      { error: "Missing required 'list' query parameter" },
      { status: 400 }
    );
  }

  const cacheKey = `${playlistId}:${limit}`;
  const cached = cache.get(cacheKey);
  if (cached && cached.expiresAt > Date.now()) {
    return Response.json(
      { videos: cached.data, cached: true },
      { headers: { "Cache-Control": "public, max-age=300" } }
    );
  }

  try {
    const res = await fetch(
      `https://www.youtube.com/playlist?list=${encodeURIComponent(
        playlistId
      )}`,
      {
        headers: {
          // A standard browser UA avoids YouTube serving a stripped-down page
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          "Accept-Language": "en-US,en;q=0.9",
        },
        // Revalidate on YouTube's side too, on top of our own in-memory cache
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      return Response.json(
        { error: `Failed to fetch playlist (status ${res.status})` },
        { status: 502 }
      );
    }

    const html = await res.text();
    const initialData = extractInitialData(html);

    if (!initialData) {
      return Response.json(
        { error: "Could not parse playlist data" },
        { status: 502 }
      );
    }

    const videos = parsePlaylistVideos(initialData, limit);

    cache.set(cacheKey, { data: videos, expiresAt: Date.now() + CACHE_TTL_MS });

    return Response.json(
      { videos, cached: false },
      { headers: { "Cache-Control": "public, max-age=300" } }
    );
  } catch (err) {
    return Response.json(
      { error: "Unexpected error fetching playlist", detail: String(err) },
      { status: 500 }
    );
  }
}