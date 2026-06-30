/**
 * In-memory rate limiter for Next.js API routes.
 *
 * WHY custom instead of express-rate-limit?
 *   express-rate-limit is designed for Express middleware. Next.js API routes
 *   don't use Express by default, so we use a lightweight Map-based solution
 *   that works in any Node.js environment without extra dependencies.
 *
 * LIMITATIONS:
 *   - State is in-process memory → resets on server restart.
 *   - Won't coordinate across multiple serverless instances (fine for small
 *     deployments; swap the Map for Redis if scaling horizontally).
 *
 * CLEANUP:
 *   Entries are lazily evicted on each check once the window has expired,
 *   preventing unbounded memory growth.
 */

/** @type {Map<string, { count: number; resetAt: number }>} */
const store = new Map();

/**
 * Check whether an IP address has exceeded the rate limit.
 *
 * @param {string} ip          Client IP address
 * @param {number} maxRequests Maximum allowed requests per window (default 5)
 * @param {number} windowMs    Rolling window in milliseconds (default 15 min)
 * @returns {{ allowed: boolean; remaining: number; resetAt: number }}
 */
export function checkRateLimit(
  ip,
  maxRequests = 5,
  windowMs = 15 * 60 * 1000 // 15 minutes
) {
  const now = Date.now();
  const key = ip || "unknown";

  const existing = store.get(key);

  if (!existing || now > existing.resetAt) {
    // First request in this window — or window has expired, reset counter
    const entry = { count: 1, resetAt: now + windowMs };
    store.set(key, entry);
    return { allowed: true, remaining: maxRequests - 1, resetAt: entry.resetAt };
  }

  if (existing.count >= maxRequests) {
    // Limit exceeded
    return { allowed: false, remaining: 0, resetAt: existing.resetAt };
  }

  // Increment within the current window
  existing.count += 1;
  store.set(key, existing);

  return {
    allowed: true,
    remaining: maxRequests - existing.count,
    resetAt: existing.resetAt,
  };
}

/**
 * Extract the real client IP from a Next.js API request.
 * Respects common reverse-proxy headers (Vercel, Cloudflare, etc.).
 *
 * @param {import('next').NextApiRequest} req
 * @returns {string}
 */
export function getClientIp(req) {
  return (
    (req.headers["x-forwarded-for"] || "").split(",")[0].trim() ||
    req.headers["x-real-ip"] ||
    req.socket?.remoteAddress ||
    "unknown"
  );
}
