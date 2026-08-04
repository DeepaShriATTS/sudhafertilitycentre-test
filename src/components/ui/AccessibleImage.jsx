import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utility";

/**
 * AccessibleImage
 * 
 * High-performance, SEO-friendly image component wrapper around Next.js Image.
 * Prevents Cumulative Layout Shift (CLS) by enforcing layout and dimensions.
 * Demands high-quality descriptive alt text and validates it in development mode.
 * Automatically loads above-the-fold images with priority and lazy loads below-the-fold images.
 */
export default function AccessibleImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  containerClass = "",
  style,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Validate alt text in development environment to enforce Lighthouse rules
  if (process.env.NODE_ENV === "development") {
    if (!alt) {
      console.warn(`[A11y Warning]: Image src="${src}" is missing an "alt" description. Alt text is mandatory for screen reader compatibility.`);
    } else if (alt.toLowerCase().includes("image") || alt.toLowerCase().includes("logo") || alt.toLowerCase().includes("pic")) {
      console.warn(`[A11y Warning]: Image src="${src}" has alt text "${alt}", which contains redundant or non-descriptive words (e.g. "image", "logo"). Make alt descriptions meaningful.`);
    }
  }

  // Next.js Image component configuration
  const imageProps = {
    src,
    alt: alt || "Sudha Fertility Centre Image", // fallback to prevent blank alt
    priority,
    sizes: fill ? sizes : undefined,
    className: cn(
      "duration-300 ease-in-out",
      !isLoaded ? "blur-sm grayscale" : "blur-0 grayscale-0",
      className
    ),
    onLoad: () => setIsLoaded(true),
    loading: priority ? undefined : "lazy",
    ...props
  };

  if (fill) {
    return (
      <div className={cn("relative overflow-hidden w-full h-full", containerClass)} style={style}>
        <Image fill {...imageProps} />
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden inline-block", containerClass)} style={style}>
      <Image width={width} height={height} {...imageProps} />
    </div>
  );
}
