"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utility";
import { FcGoogle } from "react-icons/fc";


function ReviewCard({ item }) {
  return (
    <div
      className="bg-white rounded-[20px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.06)] relative flex flex-col justify-between hover:shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] transition-shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] duration-300"
      style={{
        width: "clamp(240px, 82vw, 334px)",
        height: "clamp(270px, 78vw, 334px)",
        padding: "clamp(18px, 5vw, 30px)",
      }}
    >
      {/* Rating and Google logo section */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-[#FFC65C]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <FcGoogle size={28} />
      </div>

      {/* Quote section */}
      <p className="text-sm text-gray-700 line-clamp-3 flex-grow">{item.quote}</p>

      {/* Account details section */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-[#E8F0FE] flex items-center justify-center text-[#1A73E8] font-medium">
          {item.name[0]}
        </div>
        <span className="text-sm font-medium">{item.name}</span>
      </div>
    </div>
  );
}


function MobileReviewSlider({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mql.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!items || items.length <= 1 || isPaused) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(id);
  }, [items, isPaused]);

  if (!items || items.length === 0) return null;

  const slideOffset = reducedMotion ? 0 : 40;

  const goTo = (index) => setActiveIndex(index);

  return (
    <div
      className="w-full flex flex-col items-center gap-4 py-8"
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full flex justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: slideOffset }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -slideOffset }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <ReviewCard item={items[activeIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      
    </div>
  );
}


export const InfiniteMovingReviews = ({
  items,
  direction = "left",
  speed = "fast",
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);
  const [duplicatedItems, setDuplicatedItems] = useState([]);

  useEffect(() => {
    // We need enough items to fill the screen twice for a smooth infinite scroll.
    // 15 items is plenty for standard screens (334px each = ~5000px).
    const minItems = 15; 

    // Ensure items exist and have length greater than 0
    if (!items || items.length === 0) {
      setDuplicatedItems([]);
      return;
    }

    // Always duplicate at least once (needed for seamless scroll logic)
    const duplicatesNeeded = Math.max(2, Math.ceil(minItems / items.length));

    const duplicatedArray = Array.from({ length: duplicatesNeeded }, () => [...items])
      .flat()
      .map((item, index) => ({
        ...item,
        key: `${item.name}-${index}`
      }));

    setDuplicatedItems(duplicatedArray);

    if (containerRef.current) {
      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [items, direction, speed]);

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "slow") {
        containerRef.current.style.setProperty("--animation-duration", "1000s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <>
      {/* Mobile: single-card auto-advancing slider */}
      <div className="md:hidden w-full">
        <MobileReviewSlider items={items} />
      </div>

      {/* Tablet/Desktop: original infinite marquee, untouched */}
      <div
        ref={containerRef}
        style={{ minHeight: "398px" }}
        className={cn(
          "hidden md:block scroller relative z-10 w-full overflow-hidden group",
          "hover:[--pause-animation:paused]",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          style={{ minHeight: "398px" }}
          className={cn(
            "flex min-w-full shrink-0 gap-4 py-8 w-max flex-nowrap",
            start && "animate-scroll motion-reduce:animate-none",
            "[animation-play-state:var(--pause-animation,running)]"
          )}
        >
          {duplicatedItems.map((item) => (
            <li key={item.key} className="flex-shrink-0">
              <ReviewCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default InfiniteMovingReviews;