/**
 * /api/saveData — Secure appointment form submission endpoint.
 *
 * Security layers applied (in order):
 *   1. Method check (POST only)
 *   2. Rate limiting  (5 req / 15 min per IP)
 *   3. Content-Type check
 *   4. Zod schema validation
 *   5. Server-side input sanitization
 *   6. Server-side phone validation (libphonenumber-js)
 *   7. Google Sheets forwarding (fire-and-forget)
 *   8. CRM submission (proxied — never called from the client)
 *
 * Response shape:
 *   Success → { success: true,  data: {...} }
 *   Error   → { success: false, message: "...", code: "ERROR_CODE" }
 */

import { appointmentSchema } from "@/schemas/appointmentSchema";
import { sanitizers } from "@/lib/security/inputSanitizer";
import { validatePhoneNumber } from "@/lib/validators/phoneValidator";
import { checkRateLimit, getClientIp } from "@/lib/rateLimit";
import { serverApiClient } from "@/lib/axios/instance";

// ---------------------------------------------------------------------------
// Environment variable validation — fail fast if required secrets are missing.
// This surfaces misconfiguration immediately instead of silently at runtime.
// ---------------------------------------------------------------------------
const CRM_ENDPOINT = (process.env.CRM_ENDPOINT || "").trim();
const SHEET_SCRIPT_URL_1 = process.env.SHEET_SCRIPT_URL_1;
const SHEET_SCRIPT_URL_2 = process.env.SHEET_SCRIPT_URL_2;

// LOCAL_API_BASE is used in development when the external CRM is unavailable.
// Set it to http://localhost:3000 in .env.local to route CRM calls through
// the local mock endpoints (/api/lead/websitelead, /api/lead/lead-duplicate-check).
const LOCAL_API_BASE = (process.env.LOCAL_API_BASE || "").trim();

if (!CRM_ENDPOINT) {
  throw new Error(
    "[saveData] Missing required env var: CRM_ENDPOINT. " +
    "Add it to .env.local — see .env.example for reference."
  );
}

const getCrmEndpoints = () => {
  // If LOCAL_API_BASE is set, override CRM calls to route through local mock
  if (LOCAL_API_BASE) {
    const localBase = LOCAL_API_BASE.endsWith("/") ? LOCAL_API_BASE.slice(0, -1) : LOCAL_API_BASE;
    if (process.env.NODE_ENV !== "production") {
      console.log("[saveData] Using local CRM mock at:", localBase);
    }
    return {
      create: `${localBase}/api/lead/websitelead`,
      duplicateCheck: `${localBase}/api/lead/lead-duplicate-check`,
    };
  }

  const endpoint = CRM_ENDPOINT;
  let base = "";
  if (endpoint.includes("/lead/websitelead")) {
    try {
      const url = new URL(endpoint);
      base = url.origin;
    } catch {
      base = endpoint.split("/lead/websitelead")[0];
    }
  } else {
    base = endpoint.endsWith("/") ? endpoint.slice(0, -1) : endpoint;
  }

  return {
    create: `${base}/lead/websitelead/`,
    duplicateCheck: `${base}/lead/lead-duplicate-check/`,
  };
};

// Build the Sheets URL list from env vars; filter out any unset entries
const SHEET_SCRIPT_URLS = [SHEET_SCRIPT_URL_1, SHEET_SCRIPT_URL_2].filter(Boolean);

export default async function handler(req, res) {
  // ------------------------------------------------------------------
  // 1. Method guard
  // ------------------------------------------------------------------
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed", code: "METHOD_NOT_ALLOWED" });
  }

  // ------------------------------------------------------------------
  // 2. Rate limiting — 5 requests per 15 minutes per IP
  // ------------------------------------------------------------------
  const ip = getClientIp(req);
  const rateResult = checkRateLimit(
    ip,
    Number(process.env.RATE_LIMIT_MAX_REQUESTS) || 5,
    Number(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000
  );

  if (!rateResult.allowed) {
    res.setHeader("Retry-After", Math.ceil((rateResult.resetAt - Date.now()) / 1000));
    return res.status(429).json({
      success: false,
      message: "Too many requests. Please wait a few minutes before trying again.",
      code: "RATE_LIMIT_EXCEEDED",
    });
  }

  // ------------------------------------------------------------------
  // 3. Content-Type guard
  // ------------------------------------------------------------------
  const contentType = req.headers["content-type"] || "";
  if (!contentType.includes("application/json")) {
    return res.status(415).json({
      success: false,
      message: "Unsupported content type.",
      code: "UNSUPPORTED_MEDIA_TYPE",
    });
  }

  try {
    const body = req.body;

    // ----------------------------------------------------------------
    // 4. Honeypot check — bots fill all fields; real users leave this empty
    // ----------------------------------------------------------------
    if (body._honeypot) {
      // Silently appear to succeed to confuse bots; don't actually process
      return res.status(200).json({ success: true, data: {} });
    }

    // ----------------------------------------------------------------
    // 5. Zod schema validation
    // ----------------------------------------------------------------
    const parseResult = appointmentSchema.safeParse(body);

    if (!parseResult.success) {
      const validationErrors = {};
      parseResult.error.issues.forEach((issue) => {
        validationErrors[issue.path[0]] = issue.message;
      });
      return res.status(400).json({
        success: false,
        errors: validationErrors,
        message: "Please correct the highlighted fields.",
        code: "VALIDATION_ERROR",
      });
    }

    const validated = parseResult.data;

    // ----------------------------------------------------------------
    // 6. Server-side input sanitization (defence-in-depth after Zod)
    // ----------------------------------------------------------------
    const sanitisedName = sanitizers.name(validated.name);
    const sanitisedPhone = sanitizers.phoneNumber(validated.mobile);
    const sanitisedFormType = sanitizers.text(validated.formType || "");

    // Branch can be string or number — sanitize accordingly
    const sanitisedBranch =
      typeof validated.branch === "number"
        ? validated.branch
        : sanitizers.id(String(validated.branch || ""));

    // ----------------------------------------------------------------
    // 7. Server-side phone validation (libphonenumber-js)
    // ----------------------------------------------------------------
    const phoneCheck = validatePhoneNumber(sanitisedPhone, "IN");
    if (!phoneCheck.valid) {
      return res.status(400).json({
        success: false,
        errors: { mobile: phoneCheck.error || "Invalid phone number" },
        message: "Please enter a valid phone number.",
        code: "INVALID_PHONE",
      });
    }

    // ----------------------------------------------------------------
    // 7.5 Server-side duplicate lead check (CRM duplicate check)
    // ----------------------------------------------------------------
    const endpoints = getCrmEndpoints();
    try {
      const dupCheckRes = await serverApiClient.post(endpoints.duplicateCheck, {
        phone: sanitisedPhone,
      });

      if (dupCheckRes?.data?.duplicate === true) {
        return res.status(400).json({
          success: false,
          duplicate: true,
          errors: { mobile: dupCheckRes.data.message || "Lead already exists." },
          message: dupCheckRes.data.message || "Lead already exists.",
          code: "DUPLICATE_LEAD",
        });
      }
    } catch (dupErr) {
      // CRM/duplicate check API failures should be treated as non-fatal
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          "[saveData] Duplicate check failed, proceeding with submission:",
          dupErr?.message
        );
      }
    }

    // ----------------------------------------------------------------
    // 8. Build the payload for external services
    // ----------------------------------------------------------------
    const formPayload = {
      name: sanitisedName,
      mobile: sanitisedPhone,
      branch: sanitisedBranch,
      formType: sanitisedFormType,
      // Include optional fields if present
      ...(validated.appointmentDate && {
        appointmentDate: validated.appointmentDate.toISOString().split("T")[0],
        appointment_date: validated.appointmentDate.toISOString().split("T")[0],
      }),
      ...(validated.location && { location: sanitizers.text(validated.location) }),
      ...(validated.remarks && { remarks: sanitizers.text(validated.remarks) }),
      ...(validated.typeofenquiry && { typeofenquiry: sanitizers.text(validated.typeofenquiry) }),
      ...(validated.enquiry && { enquiry: validated.enquiry }),
    };

    // ----------------------------------------------------------------
    // 9. Forward to Google Sheets (parallel, with timeout)
    // Both Sheets fire in parallel; we don't fail the request if they
    // error — logging data should never block a user form submission.
    // ----------------------------------------------------------------
    const controller = new AbortController();
    const sheetsTimeout = setTimeout(() => controller.abort(), 10_000);

    Promise.all(
      SHEET_SCRIPT_URLS.map((url) =>
        fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formPayload).toString(),
          signal: controller.signal,
        }).catch(() => {
          // Non-critical — log only that it failed, not the payload
          if (process.env.NODE_ENV !== "production") {
            console.warn("[saveData] Sheet submission failed silently");
          }
        })
      )
    ).finally(() => clearTimeout(sheetsTimeout));

    // ----------------------------------------------------------------
    // 10. CRM submission — proxied here so CRM_ENDPOINT stays server-only
    // ----------------------------------------------------------------
    const crmPayload = {
      name: sanitisedName,
      branch: sanitisedBranch,
      mobile: sanitisedPhone,
      source_type: "21",
      lead_type: "4",
    };

    try {
      await serverApiClient.post(endpoints.create, crmPayload);
    } catch (crmErr) {
      if (process.env.NODE_ENV !== "production") {
        console.warn("[saveData] CRM submission failed:", crmErr.message);
      }
      return res.status(500).json({
        success: false,
        message: "Failed to submit lead to CRM. Please try again later.",
        code: "CRM_SUBMISSION_FAILED",
      });
    }

    // ----------------------------------------------------------------
    // 11. Success response
    // ----------------------------------------------------------------
    return res.status(200).json({
      success: true,
      data: { received: true },
    });
  } catch (err) {
    // Catch-all: never expose stack traces or internal details to the client
    if (process.env.NODE_ENV !== "production") {
      console.warn("[saveData] Unhandled error:", err?.message);
    }
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
      code: "INTERNAL_ERROR",
    });
  }
}
