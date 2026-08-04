"use client";

import { useState, useEffect } from "react";

/**
 * useMediaQuery
 * Subscribes to a CSS media query and returns whether it currently matches.
 *
 * Starts as `false` on the server (and during SSR hydration) so that
 * Server-rendered HTML always matches the initial client render, preventing
 * hydration mismatches on mobile devices.
 *
 * @param {string} query - A CSS media query string, e.g. "(max-width: 768px)"
 * @returns {boolean} true when the query matches the current viewport
 *
 * @example
 * const isMobile = useMediaQuery("(max-width: 767px)");
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    // Sync immediately after mount so first client render is accurate
    setMatches(mql.matches);

    const handler = (e) => setMatches(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return matches;
}
