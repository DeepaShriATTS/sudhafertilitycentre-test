"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { FcGoogle } from "react-icons/fc";

/* ─────────────────────────────────────────────
   ReviewCardsSection
   Dark-themed testimonial carousel inspired by
   the reference design with center-focused card,
   flanking preview cards, and dot navigation.
   ───────────────────────────────────────────── */

const ReviewCardsSection = ({ reviews = [], title = "What our patients say" }) => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef(null);
  const total = reviews.length;

  // Auto-rotate
  useEffect(() => {
    if (total <= 1) return;
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, [total]);

  const goTo = useCallback(
    (index) => {
      if (isAnimating || index === current) return;
      clearInterval(timerRef.current);
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 500);

      // Restart auto-rotate
      timerRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % total);
      }, 5000);
    },
    [current, isAnimating, total]
  );

  if (total === 0) return null;

  const prevIndex = (current - 1 + total) % total;
  const nextIndex = (current + 1) % total;

  // Calculate pagination dots (max 2 groups of visible dots for large lists)
  const maxDots = Math.min(total, 6);
  const dotStart = Math.max(0, Math.min(current - 2, total - maxDots));
  const dots = Array.from({ length: maxDots }, (_, i) => dotStart + i);

  return (
    <section className="review-cards-section relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Dark background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)",
        }}
      />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
        }}
      />

      <div className="relative z-[2] container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2
          className="text-center font-outfit font-semibold text-white mb-10 sm:mb-14"
          style={{
            fontStyle: "italic",
            fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
          }}
        >
          {title}
        </h2>

        {/* Cards Container */}
        <div className="relative flex items-center justify-center gap-0 sm:gap-3 lg:gap-5 max-w-5xl mx-auto">
          {/* ── Previous card (left flank) ── */}
          {total > 1 && (
            <div
              className="hidden sm:block flex-shrink-0 cursor-pointer"
              onClick={() => goTo(prevIndex)}
              style={{
                width: "200px",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              <ReviewCardPreview review={reviews[prevIndex]} />
            </div>
          )}

          {/* ── Active card (center) ── */}
          <div
            className="relative flex-shrink-0 w-full sm:w-auto"
            style={{
              maxWidth: "480px",
              transition: "transform 0.5s ease",
            }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="w-full"
                style={{
                  display: index === current ? "block" : "none",
                  animation:
                    index === current
                      ? "reviewCardFadeIn 0.5s ease forwards"
                      : "none",
                }}
              >
                <ReviewCardMain review={review} />
              </div>
            ))}
          </div>

          {/* ── Next card (right flank) ── */}
          {total > 1 && (
            <div
              className="hidden sm:block flex-shrink-0 cursor-pointer"
              onClick={() => goTo(nextIndex)}
              style={{
                width: "200px",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              <ReviewCardPreview review={reviews[nextIndex]} />
            </div>
          )}
        </div>

        {/* ── Pagination dots ── */}
        {total > 1 && (
          <div className="flex items-center justify-center gap-2.5 mt-8 sm:mt-10">
            {dots.map((dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => goTo(dotIndex)}
                aria-label={`Go to review ${dotIndex + 1}`}
                className="transition-all duration-300 rounded-sm"
                style={{
                  width: dotIndex === current ? "32px" : "12px",
                  height: "12px",
                  background:
                    dotIndex === current
                      ? "#3b82f6"
                      : "rgba(59, 130, 246, 0.4)",
                  borderRadius: "4px",
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Keyframe animation for card transitions */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes reviewCardFadeIn {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}} />
    </section>
  );
};

/* ─────────────────────────────────────────────
   Main (center) review card
   ───────────────────────────────────────────── */
const ReviewCardMain = ({ review }) => {
  return (
    <div
      className="relative rounded-2xl p-6 sm:p-8"
      style={{
        background:
          "linear-gradient(145deg, #2a2a2a 0%, #1f1f1f 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow:
          "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05) inset",
      }}
    >
      {/* Stars */}
      <div className="flex items-center gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5"
            fill="#f59e0b"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p
        className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 6,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        &ldquo;{review.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white font-bold text-sm">
          {review.name?.[0] || "?"}
        </div>
        <div>
          <p className="text-white font-semibold text-sm sm:text-base">
            {review.name}
          </p>
          <p className="text-gray-500 text-xs sm:text-sm">
            {review.title || "Patient"}
          </p>
        </div>
        <div className="ml-auto">
          <FcGoogle size={24} />
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   Preview (flanking) review card — smaller,
   blurred feel with just the author name visible
   ───────────────────────────────────────────── */
const ReviewCardPreview = ({ review }) => {
  return (
    <div
      className="rounded-xl p-5 h-[320px] flex flex-col justify-end relative overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #252525 0%, #1a1a1a 100%)",
        border: "1px solid rgba(255,255,255,0.05)",
        boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
      }}
    >
      {/* Soft overlay to dim */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 100%)",
        }}
      />
      <div className="relative z-[1]">
        <p className="text-gray-400 text-xs truncate">{review.name}</p>
      </div>
    </div>
  );
};

export default ReviewCardsSection;
