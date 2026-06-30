/**
 * Centralised Axios instances for the Sudha Fertility Centre app.
 *
 * WHY two instances?
 *  - `apiClient`      → used in client components (browser). Attaches CSRF token
 *                        from the meta tag and redirects on 401.
 *  - `serverApiClient`→ used in Next.js API routes (Node.js). Uses an internal
 *                        service token from env vars only — never exposed to the
 *                        client bundle.
 */

import axios from "axios";

const DEFAULT_TIMEOUT = 10_000; // 10 seconds — prevents hanging requests

// ---------------------------------------------------------------------------
// CLIENT-SIDE INSTANCE
// Used in browser components / hooks. Safe to import in 'use client' files.
// ---------------------------------------------------------------------------
export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "",
  timeout: DEFAULT_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach CSRF token from <meta name="csrf-token"> if present (browser only).
// Also attaches an auth token from sessionStorage if one exists.
apiClient.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      // CSRF: read from meta tag injected by the server on page load
      const csrfMeta = document.querySelector('meta[name="csrf-token"]');
      if (csrfMeta) {
        config.headers["X-CSRF-Token"] = csrfMeta.getAttribute("content");
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Standardise error responses and handle 401 globally.
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (typeof window !== "undefined" && error.response?.status === 401) {
      // Redirect to home on unauthorised — adjust as needed
      window.location.href = "/";
    }

    // Normalise to a plain error message — never expose raw Axios internals
    const message =
      error.response?.data?.error ||
      error.response?.data?.message ||
      "An unexpected error occurred. Please try again.";

    const customError = new Error(message);
    customError.response = error.response;

    return Promise.reject(customError);
  }
);

// ---------------------------------------------------------------------------
// SERVER-SIDE INSTANCE
// Used ONLY in Next.js API routes (pages/api/*). Never import in client
// components — this file path should be excluded from the client bundle via
// server-only imports or by only using it inside API route handlers.
// ---------------------------------------------------------------------------
export const serverApiClient = axios.create({
  timeout: DEFAULT_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach the internal service token from env (never in client bundle).
serverApiClient.interceptors.request.use(
  (config) => {
    const internalToken = process.env.INTERNAL_API_TOKEN;
    if (internalToken) {
      config.headers["Authorization"] = `Bearer ${internalToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Log errors in a structured, non-sensitive way.
serverApiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Log only status + URL — no request body or sensitive data
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "[serverApiClient] Request failed",
        error.response?.status,
        error.config?.url
      );
    }
    const message =
      error.response?.data?.error ||
      error.response?.data?.message ||
      "External service error";
    return Promise.reject(new Error(message));
  }
);
