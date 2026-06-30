/**
 * Server-side phone number validation using libphonenumber-js.
 *
 * WHY server-side? Client-side phone validation can be bypassed by anyone
 * with devtools. libphonenumber-js gives us proper E.164 parsing including
 * country-code awareness, significantly stronger than a regex alone.
 */

import { isValidPhoneNumber } from "libphonenumber-js";

/**
 * Validate a phone number string for a given country.
 *
 * Handles these input formats (all treated as valid Indian numbers):
 *   - "9876543210"   → raw 10-digit
 *   - "919876543210" → with country code, no +
 *   - "+919876543210"→ E.164 format
 *
 * @param {string} value   Raw phone value from the form (may include country code)
 * @param {string} country ISO 3166-1 alpha-2 country code, defaults to 'IN'
 * @returns {{ valid: boolean; error?: string }}
 */
export function validatePhoneNumber(value, country = "IN") {
  if (!value || typeof value !== "string") {
    return { valid: false, error: "Phone number is required" };
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return { valid: false, error: "Phone number is required" };
  }

  // Strip all non-digit characters except the leading +
  const cleaned = trimmed.startsWith("+")
    ? `+${trimmed.substring(1).replace(/\D/g, "")}`
    : trimmed.replace(/\D/g, "");

  try {
    // 1. If starts with +, check as E.164
    if (cleaned.startsWith("+")) {
      if (isValidPhoneNumber(cleaned)) {
        return { valid: true };
      }
    } else {
      // 2. Try parsing against default country code (e.g. local 10-digit format)
      if (isValidPhoneNumber(cleaned, country)) {
        return { valid: true };
      }

      // 3. Try prepending "+" (in case of country code present but no "+")
      if (isValidPhoneNumber(`+${cleaned}`)) {
        return { valid: true };
      }
    }

    return { valid: false, error: "Please enter a valid phone number" };
  } catch {
    return { valid: false, error: "Invalid phone number format" };
  }
}
