"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { cn } from "@/lib/utility";
import Image from "next/image";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BookingButton from "../button/bookingButton";

const MetricsTabs = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const containerRef = useRef(null);

  const isButtonScrollRef = useRef(false);
  const scrollEndTimeout = useRef(null);

  // Only auto-advance tabs via scroll position on large screens. On mobile/
  // tablet, content (esp. images) can be taller than one viewport slice, so
  // scroll-driven advancing would yank the user to the next tab mid-read.
  // There, navigation is button-only and scroll just... scrolls.
  const isLargeScreenRef = useRef(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)"); // Tailwind's `lg`
    const update = () => {
      isLargeScreenRef.current = mql.matches;
    };
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isLargeScreenRef.current) return; // mobile: scroll never auto-advances
    if (isButtonScrollRef.current) return;

    const index = Math.min(
      tabs.length - 1,
      Math.max(0, Math.floor(latest * tabs.length))
    );
    setSelectedTab(index);
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!isButtonScrollRef.current) return;
      if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current);
      scrollEndTimeout.current = setTimeout(() => {
        isButtonScrollRef.current = false;
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current);
    };
  }, []);

  const scrollToTab = useCallback(
    (index) => {
      const container = containerRef.current;
      if (!container) return;

      // On mobile, tabs aren't scroll-linked at all — just snap the sticky
      // panel into view and let the button-driven state change handle the
      // rest, so no smooth-scroll math against variable content height.
      if (!isLargeScreenRef.current) {
        container.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      isButtonScrollRef.current = true;
      if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current);
      scrollEndTimeout.current = setTimeout(() => {
        isButtonScrollRef.current = false;
      }, 800);

      const rect = container.getBoundingClientRect();
      const containerTop = rect.top + window.scrollY;
      const sliceHeight = container.offsetHeight / tabs.length;
      const target = containerTop + sliceHeight * index + sliceHeight / 2;
      window.scrollTo({ top: target, behavior: "smooth" });
    },
    [tabs.length]
  );

  const goToTab = useCallback(
    (index) => {
      const clamped = Math.min(tabs.length - 1, Math.max(0, index));
      setSelectedTab(clamped);
      scrollToTab(clamped);
    },
    [tabs.length, scrollToTab]
  );

  const handlePrev = () => goToTab(selectedTab - 1);
  const handleNext = () => goToTab(selectedTab + 1);

  return (
    <div
      ref={containerRef}
      // On mobile the track no longer needs to be tabs.length * 100vh tall,
      // since scroll doesn't drive tab switching there — just let it size
      // to content so there's no dead scroll space to click through.
      className="relative lg:[height:var(--track-h)]"
      style={{ "--track-h": `${tabs.length * 100}vh` }}
    >
      <div className="lg:sticky lg:top-0 min-h-screen flex items-center">
        <div className="relative w-full lg:bg-[#EBF2FE] rounded-2xl">
          <div className="max-w-7xl mx-auto p-2 lg:p-6 font-outfit">
            <div className="flex flex-col items-start">
              <motion.div
                className="hidden lg:flex flex-row overflow-x-auto no-scrollbar p-2 pt-3 pb-3 mb-8 flex-wrap justify-between bg-white rounded-full w-full flex-shrink-0 gap-0"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {tabs.map((tab, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToTab(index)}
                    title={tab.label}
                    className={cn(
                      "rounded-full font-medium transition-all flex items-center justify-center gap-1 group whitespace-nowrap",
                      "px-6 py-3",
                      index === selectedTab
                        ? "bg-[#173366] text-white"
                        : "text-[#000] hover:bg-[#173366] hover:text-white"
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{tab.label}</span>
                  </motion.button>
                ))}
              </motion.div>

              <div className="flex-1 min-w-0 w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#EBF2FE] lg:bg-transparent rounded-3xl p-4 lg:p-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 md:flex-col-reverse gap-8">
                      <motion.div
                        className="space-y-4 flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div>
                          <h2 className="text-2xl font-bold">
                            {tabs[selectedTab].content.heading}
                          </h2>
                          <p className="text-gray-600 leading-relaxed mt-3">
                            {tabs[selectedTab].content.description}
                          </p>
                          <div className="mt-5">
                            <BookingButton title={"Get a Free Consultation"} />
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="relative w-full "
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <div className="rounded-3xl overflow-hidden h-full mb-4">
                          <Image
                            src={tabs[selectedTab].content.image}
                            alt={tabs[selectedTab].content.heading}
                            className="rounded-2xl"
                          />
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Prev / next controls, mobile & tablet only */}
              <div className="flex lg:hidden items-center justify-between w-full mt-4 px-1">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={selectedTab === 0}
                  aria-label="Previous"
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all shrink-0",
                    selectedTab === 0
                      ? "bg-white/60 text-gray-300 cursor-not-allowed"
                      : "bg-white text-[#173366] hover:bg-[#173366] hover:text-white active:scale-95"
                  )}
                >
                  <ChevronLeft size={18} />
                </button>

                <span className="text-sm font-medium text-[#173366]">
                  {tabs[selectedTab].label}
                  <span className="text-gray-400 font-normal">
                    {" "}
                    · {selectedTab + 1}/{tabs.length}
                  </span>
                </span>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={selectedTab === tabs.length - 1}
                  aria-label="Next"
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all shrink-0",
                    selectedTab === tabs.length - 1
                      ? "bg-white/60 text-gray-300 cursor-not-allowed"
                      : "bg-white text-[#173366] hover:bg-[#173366] hover:text-white active:scale-95"
                  )}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsTabs;