"use client";

import { useRef, useState, useEffect } from "react";

/**
 * LazySection
 *
 * Defers rendering children until the section scrolls into the viewport.
 * Uses IntersectionObserver with a 200px root margin so content begins
 * loading just before it becomes visible.
 *
 * FIX L-6: Added `aria-live="polite"` so screen readers are notified when
 * the deferred content appears. The placeholder div is aria-hidden to
 * prevent assistive tech from announcing empty space.
 *
 * @param {{
 *   children: React.ReactNode,
 *   height?: string,
 *   fallback?: React.ReactNode,
 *   className?: string,
 * }} props
 */
export default function LazySection({
  children,
  height = "300px",
  fallback = null,
  className = "",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} aria-live="polite">
      {visible
        ? children
        : fallback ?? (
            <div
              style={{ minHeight: height }}
              aria-hidden="true"
            />
          )}
    </div>
  );
}
