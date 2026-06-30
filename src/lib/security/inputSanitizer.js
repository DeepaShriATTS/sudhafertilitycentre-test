/**
 * Centralised input sanitization utilities.
 *
 * IMPORTANT: These functions are designed to be server-safe (no DOMPurify
 * dependency) and use regex-based stripping instead. DOMPurify is a
 * browser-only library; on the server we rely on strict allowlists which
 * are actually *safer* than a HTML sanitizer for structured data fields.
 *
 * All sanitizers follow these rules:
 *   - Handle null/undefined gracefully (return empty string)
 *   - Trim leading/trailing whitespace
 *   - Enforce max lengths to prevent payload bloat
 *   - Strip characters outside the expected charset
 */

const MAX_NAME_LENGTH = 50;
const MAX_TEXT_LENGTH = 500;
const MAX_PHONE_LENGTH = 15;

/**
 * A collection of field-level sanitizers.
 */
export const sanitizers = {
  /**
   * Sanitize a person's name:
   *  - Only letters (a-z, A-Z), spaces, and dots allowed
   *  - Collapse multiple consecutive spaces into one
   *  - Max 50 characters
   */
  name(input) {
    if (input === null || input === undefined) return "";
    return String(input)
      .replace(/[^a-zA-Z\s.]/g, "") // strip disallowed chars
      .replace(/\s+/g, " ")          // collapse whitespace
      .trim()
      .slice(0, MAX_NAME_LENGTH);
  },

  /**
   * Sanitize general text fields (e.g. remarks, enquiry type):
   *  - Strip HTML tags via regex (avoids DOMPurify dependency)
   *  - Strip script injection patterns
   *  - Max 500 characters
   */
  text(input) {
    if (input === null || input === undefined) return "";
    return String(input)
      .replace(/<[^>]*>/g, "")            // strip HTML tags
      .replace(/javascript\s*:/gi, "")     // strip JS protocol
      .replace(/on\w+\s*=/gi, "")          // strip inline event handlers
      .trim()
      .slice(0, MAX_TEXT_LENGTH);
  },

  /**
   * Sanitize a phone number:
   *  - Strip everything except digits and leading +
   *  - Max 15 characters (E.164 max length)
   */
  phoneNumber(input) {
    if (input === null || input === undefined) return "";
    const str = String(input).trim();
    // Preserve leading + for international format, strip all other non-digits
    const hasPlus = str.startsWith("+");
    const digitsOnly = str.replace(/\D/g, "").slice(0, MAX_PHONE_LENGTH);
    return hasPlus ? `+${digitsOnly}` : digitsOnly;
  },

  /**
   * Sanitize an ID value (branch ID, etc.):
   *  - Only alphanumeric chars, hyphens, and underscores
   *  - Max 50 characters
   */
  id(input) {
    if (input === null || input === undefined) return "";
    return String(input)
      .replace(/[^a-zA-Z0-9_-]/g, "")
      .trim()
      .slice(0, 50);
  },
};
