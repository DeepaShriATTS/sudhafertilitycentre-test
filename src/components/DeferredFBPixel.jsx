'use client';

import { useEffect } from 'react';

const FB_PIXEL_ID = 'YOUR_PIXEL_ID'; // Replacing with generic ID, but stubbing it to prevent errors

export function DeferredFBPixel() {
  useEffect(() => {
    // Stub the fbq function globally so immediate calls on other pages don't crash
    if (typeof window !== 'undefined') {
      window.fbq = window.fbq || function() {
        (window.fbq.q = window.fbq.q || []).push(arguments);
      };
      window._fbq = window._fbq || window.fbq;
    }

    let initialised = false;
    function initFB() {
      if (initialised) return;
      initialised = true;
      loadFacebookPixel();
    }

    const events = ['scroll', 'mousemove', 'keydown', 'touchstart', 'click'];
    function trigger() {
      initFB();
      events.forEach((e) => {
        window.removeEventListener(e, trigger);
      });
    }

    events.forEach((e) => {
      window.addEventListener(e, trigger, { passive: true, once: true });
    });

    return () => {
      events.forEach((e) => {
        window.removeEventListener(e, trigger);
      });
    };
  }, []);

  return null;
}

function loadFacebookPixel() {
  const script = document.createElement('script');
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('init', FB_PIXEL_ID);
      window.fbq('track', 'PageView');
    }
  };
}
