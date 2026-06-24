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

    const timer = setTimeout(() => {
      loadFacebookPixel();
    }, 4500);

    return () => clearTimeout(timer);
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
