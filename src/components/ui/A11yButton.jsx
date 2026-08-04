import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utility";

/**
 * A11yButton
 * 
 * A highly accessible, high-performance button and link component.
 * Solves the critical anti-pattern of nesting <button> within <Link> (an accessibility violation).
 * Dynamically renders an <a> when `href` is provided, or a <button> when `onClick` or form actions are needed.
 * Features built-in touch target size protection (minimum height 48px), loading states, ARIA compliance, and focus styling.
 */
export default function A11yButton({
  children,
  onClick,
  href,
  type = "button",
  variant = "primary", // primary, secondary, outline, text
  disabled = false,
  isLoading = false,
  className = "",
  ariaLabel,
  target,
  rel,
  ...props
}) {
  // Base classes for consistent sizing, touch target (min-h-12 / 48px), and hover effects
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#173366] focus:ring-offset-2 min-h-[48px] px-6 rounded-lg select-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#173366] text-white hover:bg-[#1c3e7a]",
    secondary: "bg-[#FFC65C] text-[#0f2347] hover:bg-[#e6b250]",
    outline: "border border-[#173366] text-[#173366] hover:bg-[#173366]/5",
    text: "text-[#173366] hover:underline px-2 min-h-[40px] focus:ring-offset-0",
  };

  const currentClasses = cn(baseClasses, variants[variant], className);
  const accessibilityProps = {
    "aria-label": ariaLabel,
    ...props
  };

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("//");
    const safeRel = rel || (isExternal ? "noopener noreferrer" : undefined);
    const safeTarget = target || (isExternal ? "_blank" : undefined);

    return (
      <Link
        href={href}
        className={currentClasses}
        target={safeTarget}
        rel={safeRel}
        aria-disabled={disabled}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
            return;
          }
          if (onClick) onClick(e);
        }}
        {...accessibilityProps}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            Loading...
          </span>
        ) : (
          children
        )}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={currentClasses}
      aria-busy={isLoading}
      {...accessibilityProps}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
}
