"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause, ArrowRight } from "lucide-react";
import Image from "next/image";
import { tabs } from "../../utils/homepageData"; // <-- your tabs array (40+ Years, Affordable, Trusted, Success Rate, Specialists)

const AUTOPLAY_MS = 5000;
const DRAG_THRESHOLD = 80;

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function TrustedFamiliesSlider({ initialIndex = 2 }) {
  // initialIndex defaults to 2 ("Trusted by 1Lakh + Families") to match the reference mock
  const [index, setIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const isAnimatingRef = useRef(false);
  const timerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const total = tabs.length;
  const activeTab = tabs[index];
  const ActiveIcon = activeTab.icon;

  const goTo = useCallback(
    (newIndex, dir) => {
      if (isAnimatingRef.current) return; // guard against rapid clicks
      isAnimatingRef.current = true;
      setDirection(dir);
      setIndex(((newIndex % total) + total) % total);
      window.setTimeout(() => {
        isAnimatingRef.current = false;
      }, 550); // matches transition duration
    },
    [total]
  );

  const handleNext = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const handlePrev = useCallback(() => goTo(index - 1, -1), [goTo, index]);


  // Autoplay
  useEffect(() => {
    if (!isPlaying || isHovering) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      goTo(index + 1, 1);
    }, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, [isPlaying, isHovering, index, goTo]);

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -DRAG_THRESHOLD) {
      handleNext();
    } else if (info.offset.x > DRAG_THRESHOLD) {
      handlePrev();
    }
  };

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#eef1fb] to-[#f7f8fd] px-6 py-16 md:px-16">
      {/* decorative dot grid */}
      <div className="absolute left-10 top-10 grid grid-cols-3 gap-2 opacity-40">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="h-1 w-1 rounded-full bg-slate-400" />
        ))}
      </div>

      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* LEFT: text content */}
        <div>
         

          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${index}`}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={textVariants}
              transition={{ duration: 0.5, ease: "easeInOut" }}

              className="cursor-grab select-none active:cursor-grabbing"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
            >
              <span className="mb-4 block h-1 w-10 rounded-full bg-amber-400" />
              {ActiveIcon ? (
                <ActiveIcon size={28} className="mb-3 text-amber-500" />
              ) : null}
              <h3 className="mb-4 text-3xl font-bold text-[#0f1f4d] md:text-4xl">
                {activeTab.content.heading}
              </h3>
              <p className="mb-8 whitespace-pre-line text-slate-600">
                {activeTab.content.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 rounded-full bg-[#0f1f4d] px-6 py-3 font-semibold text-white shadow-lg transition-shadow hover:shadow-xl"
              >
                Get a Free Consultation
                <ArrowRight size={18} />
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT: image slider */}
        <motion.div
          className="relative mx-auto h-[260px] xs:h-[320px] sm:h-[380px] md:h-[420px] w-full max-w-[420px] cursor-grab select-none active:cursor-grabbing"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
        >
          {/* rear stacked cards */}
          <motion.div
            className="absolute inset-0 rounded-3xl bg-slate-300 shadow-xl"
            animate={{
              x: 14,
              y: 14,
              rotate: 4,
              opacity: 0.5,
            }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-0 rounded-3xl bg-slate-400 shadow-xl"
            animate={{
              x: 7,
              y: 7,
              rotate: 2,
              opacity: 0.7,
            }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
          />

          {/* front card */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl shadow-2xl">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={activeTab.content.image}
                  alt={activeTab.content.heading}
                  fill
                  sizes="(max-width: 768px) 90vw, 420px"
                  className="object-cover"
                  priority={index === initialIndex}
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* navigation controller */}
          <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/95 px-3 py-2 shadow-lg backdrop-blur">
            <motion.button
              type="button"
              aria-label="Previous slide"
              onClick={handlePrev}
              whileHover={{ scale: 1.08, boxShadow: "0 4px 14px rgba(15,31,77,0.25)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0f1f4d] shadow"
            >
              <ChevronLeft size={18} />
            </motion.button>

            <motion.button
              type="button"
              aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
              onClick={() => setIsPlaying((p) => !p)}
              whileHover={{ scale: 1.08, boxShadow: "0 4px 14px rgba(15,31,77,0.25)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0f1f4d] shadow"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isPlaying ? "pause" : "play"}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            <motion.button
              type="button"
              aria-label="Next slide"
              onClick={handleNext}
              whileHover={{ scale: 1.08, boxShadow: "0 4px 14px rgba(15,31,77,0.25)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0f1f4d] shadow"
            >
              <ChevronRight size={18} />
            </motion.button>

            <span className="mx-1 h-5 w-px bg-slate-200" />

            <div className="relative flex w-14 items-center justify-center overflow-hidden text-sm font-semibold text-[#0f1f4d]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}