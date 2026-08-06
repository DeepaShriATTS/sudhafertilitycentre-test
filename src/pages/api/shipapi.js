
// Server-only env var — do NOT prefix with NEXT_PUBLIC_
const baseUrl = (process.env.CRM_BASE_URL || "").trim();
console.log("baseUrl : ", baseUrl)

if (!baseUrl) {
  // Warn at import time; the app still boots but CRM calls will fail.
  // This helps catch missing env config before the first request.
  console.warn(
    "[shipapi] Missing env var: CRM_BASE_URL. " +
    "Add it to .env.local — see .env.example for reference."
  );
}

export const branchtableListEndpoint = `${baseUrl}/organizations/branch-website-lead/`;
export const websiteleadCreateListEndpoint = `${baseUrl}/lead/websitelead/`;
export const leadDuplicateCheckEndpoint = `${baseUrl}/lead/lead-duplicate-check/`;
