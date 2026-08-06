// src/components/ClientLayout.js (CLIENT COMPONENT ✅)
"use client";

// VerticalSidebar is now rendered in layout.js (outside site-content-wrapper)
// so it floats independently of the page content flow.
export default function ClientLayout({ children }) {
  return <>{children}</>;
}
