// src/components/ClientLayout.js (CLIENT COMPONENT ✅)
"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";

const VerticalSidebar = dynamic(
  () => import("@/components/VerticalSidebar/VerticalSidebar"),
  { ssr: false }
);

export default function ClientLayout({ children }) {
//   useEffect(() => {
//     const disableEvent = (e) => e.preventDefault();
//     const disableShortcuts = (e) => {
//       if (
//         e.key === "F12" ||
//         (e.ctrlKey && e.shiftKey && e.key === "I") ||
//         (e.ctrlKey && e.key === "u")
//       ) {
//         e.preventDefault();
//       }
//     };

//     document.addEventListener("contextmenu", disableEvent);
//     document.addEventListener("keydown", disableShortcuts);

//     return () => {
//       document.removeEventListener("contextmenu", disableEvent);
//       document.removeEventListener("keydown", disableShortcuts);
//     };
//   }, []);

  return (
    <>
      {children}
      <VerticalSidebar />
    </>
  );
}
