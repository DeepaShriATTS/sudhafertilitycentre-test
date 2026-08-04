import React from "react";

/**
 * ScreenReaderOnly
 * 
 * Hides children visually while keeping them accessible to screen readers (visually-hidden pattern).
 * Useful for icon-only buttons, off-screen descriptions, and additional context.
 */
export default function ScreenReaderOnly({ children, as: Component = "span" }) {
  return (
    <Component className="sr-only">
      {children}
    </Component>
  );
}
