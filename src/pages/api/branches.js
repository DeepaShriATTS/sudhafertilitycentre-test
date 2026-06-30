/**
 * /api/branches — Server-side proxy for the branch list.
 *
 * WHY a proxy?
 *   The external CRM base URL (shipcrm.atts.in) should never appear in the
 *   client bundle. By proxying through this route, we:
 *     1. Keep the external endpoint hidden from browser network inspection
 *     2. Apply server-side sanitization before returning data to the client
 *     3. Have a single place to add caching or auth headers in the future
 */

import { serverApiClient } from "@/lib/axios/instance";
import { sanitizers } from "@/lib/security/inputSanitizer";

// Strict env var read — no hardcoded fallback.
// Missing var surfaces at boot rather than silently using a wrong URL.
const BRANCH_ENDPOINT = (process.env.BRANCH_API_ENDPOINT || "").trim();

if (!BRANCH_ENDPOINT) {
  throw new Error(
    "[/api/branches] Missing required env var: BRANCH_API_ENDPOINT. " +
    "Add it to .env.local — see .env.example for reference."
  );
}

export default async function handler(req, res) {
  // Only allow GET
  if (req.method !== "GET") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  try {
    const { data } = await serverApiClient.get(BRANCH_ENDPOINT);
    const rawList = data?.data?.list || [];

    // Sanitize branch_name to prevent XSS if this data is rendered client-side
    const sanitisedList = rawList.map((branch) => ({
      ...branch,
      branch_name: sanitizers.text(branch.branch_name || ""),
    }));

    return res.status(200).json({
      success: true,
      data: { list: sanitisedList },
    });
  } catch (err) {
    // Log only that the fetch failed — no URL or credentials in the log
    if (process.env.NODE_ENV !== "production") {
      console.warn("[/api/branches] Failed to fetch branch list:", err.message);
    }

    return res.status(502).json({
      success: false,
      message: "Unable to load branch list. Please try again.",
    });
  }
}
