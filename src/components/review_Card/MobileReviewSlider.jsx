'use client'

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReviewCard from "./ReviewCardComponent";
import ReviewCardSkeleton from "../loaders/ReviewCardSkeleton";


export default function MobileReviewSlider({ items }) {
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


  const slideOffset = reducedMotion ? 0 : 40;

  const goTo = (index) => setActiveIndex(index);

  return (
    <>
    {items && items.length > 0 ? 
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
    :
     <ReviewCardSkeleton/>
      }
    </>
  );
}