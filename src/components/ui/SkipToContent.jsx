import React from "react";

/**
 * SkipToContent
 * 
 * A key accessibility component placed at the very top of the application.
 * Allows keyboard users to bypass navigation and jump directly to the main content.
 * Complies with Lighthouse accessibility rules.
 */
export default function SkipToContent({ contentId = "main-content" }) {
  return (
    <a
      href={`#${contentId}`}
      className="absolute left-4 top-[-100px] z-[9999] bg-[#173366] text-white px-4 py-2 rounded-md font-semibold focus:top-4 transition-all duration-200"
    >
      Skip to main content
    </a>
  );
}
