"use client";

import { useEffect } from "react";

/**
 * DeferredFBPixel
 *
 * Loads the Facebook Pixel script only after the first user interaction,
 * preventing TBT cost during initial page load.
 *
 * FIX C-3: Pixel ID is now sourced from NEXT_PUBLIC_FB_PIXEL_ID environment
 * variable. If the variable is not set, pixel loading is skipped entirely
 * (no invalid IDs sent to Facebook's servers).
 *
 * Required env var: NEXT_PUBLIC_FB_PIXEL_ID=<your-pixel-id>
 */
export function DeferredFBPixel() {
  useEffect(() => {
    const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

    // Skip silently if pixel ID is not configured (dev / staging environments)
    if (!pixelId) return;

    // Stub fbq so any early calls on other pages don't throw
    if (typeof window !== "undefined") {
      window.fbq =
        window.fbq ||
        function () {
          (window.fbq.q = window.fbq.q || []).push(arguments);
        };
      window._fbq = window._fbq || window.fbq;
    }

    let initialised = false;

    function initFB() {
      if (initialised) return;
      initialised = true;
      loadFacebookPixel(pixelId);
    }

    const events = ["scroll", "mousemove", "keydown", "touchstart", "click"];

    function trigger() {
      initFB();
      events.forEach((e) => window.removeEventListener(e, trigger));
    }

    events.forEach((e) =>
      window.addEventListener(e, trigger, { passive: true, once: true })
    );

    return () => {
      events.forEach((e) => window.removeEventListener(e, trigger));
    };
  }, []);

  return null;
}

/** @param {string} pixelId */
function loadFacebookPixel(pixelId) {
  const script = document.createElement("script");
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("init", pixelId);
      window.fbq("track", "PageView");
    }
  };
}
