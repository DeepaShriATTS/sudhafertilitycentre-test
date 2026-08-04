"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const FloatingButton = dynamic(
  () => import("@/components/FloatingButton"),
  { ssr: false, loading: () => null }
);

export default function HomeClientShell() {
  const [showFloat, setShowFloat] = useState(false);

  useEffect(() => {
    const launch = () => setShowFloat(true);

    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(launch, { timeout: 2000 });
      return () => cancelIdleCallback(id);
    }

    const t = setTimeout(launch, 2000);
    return () => clearTimeout(t);
  }, []);

  return showFloat ? <FloatingButton /> : null;
}
