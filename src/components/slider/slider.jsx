"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Custom hook to get and track the current window width.
 * This is crucial for responsive design as it allows components
 * to re-render and adjust based on screen size changes.
 */
function useWindowWidth() {
  // Initialize width with window.innerWidth if available (client-side), otherwise 0 for server-side rendering
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    // Handler to update the width state on window resize
    function handleResize() {
      setWidth(window.innerWidth);
    }

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial call to set the width immediately on component mount
    handleResize();

    // Cleanup: remove event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return width;
}

/**
 * Responsive Slider Component
 * Displays a different number of slides based on screen width.
 */
export default function Slider({ slides, autoplay = true, delay = 3000 }) {
  const width = useWindowWidth(); // Get current window width
  const [startIndex, setStartIndex] = useState(0); // State for the starting index of visible slides
  const totalSlides = slides.length; // Total number of slides available
  const intervalRef = useRef(null); // Ref for autoplay interval ID
  const isHovered = useRef(false); // Ref to track if the slider is hovered (to pause autoplay)

  // --- Responsive Logic for Number of Slides to Show ---
  let slidesToShow = 3; // Default: show 3 slides for desktop (large screens)
  if (width < 640) {
    slidesToShow = 1; // For mobile (screens less than 640px wide), show 1 slide
  } else if (width >= 640 && width < 1024) {
    // For tablet/medium screens (between 640px and 1023px),
    // we'll still show 3 slides as per the "desktop 3" request.
    // You could change this to 2 if you wanted a distinct tablet view.
    slidesToShow = 3;
  }

  // Calculate the maximum possible starting index to prevent showing empty space
  // if there aren't enough slides to fill the `slidesToShow` count.
  const maxStartIndex = Math.max(0, totalSlides - slidesToShow);

  // Function to move to the next set of slides
  const next = () => {
    setStartIndex((prev) => (prev < maxStartIndex ? prev + 1 : 0)); // Loop back to start if at the end
  };

  // Function to move to the previous set of slides
  const prev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxStartIndex)); // Loop back to end if at the beginning
  };

  // --- Effect to Clamp `startIndex` on `slidesToShow` change ---
  // This ensures that if the screen resizes and `slidesToShow` changes,
  // the `startIndex` doesn't point to an out-of-bounds position.
  useEffect(() => {
    if (startIndex > maxStartIndex) {
      setStartIndex(maxStartIndex);
    }
  }, [maxStartIndex, startIndex]); // Dependencies: maxStartIndex and startIndex

  // --- Autoplay Logic ---
  useEffect(() => {
    if (!autoplay) return; // If autoplay is disabled, do nothing

    // Clear any existing interval to prevent multiple intervals running
    clearInterval(intervalRef.current);

    // Set a new interval for autoplay
    intervalRef.current = setInterval(() => {
      if (!isHovered.current) { // Only advance if not hovered
        next();
      }
    }, delay);

    // Cleanup: clear the interval when the component unmounts or dependencies change
    return () => clearInterval(intervalRef.current);
  }, [startIndex, autoplay, delay, slidesToShow, next]); // Dependencies:
  // - startIndex: to re-evaluate the interval if the slide changes
  // - autoplay, delay: if these props change
  // - slidesToShow: if the number of visible slides changes (e.g., on resize)
  // - next: (stability for memoized next function if it were memoized, here it's fine)

  return (
    <div
      className="relative w-full max-w-7xl mx-auto mt-10 overflow-hidden"
      onMouseEnter={() => (isHovered.current = true)} // Pause autoplay on hover
      onMouseLeave={() => (isHovered.current = false)} // Resume autoplay on mouse leave
    >
      <div className="flex gap-4 justify-center transition-all duration-300">
        <AnimatePresence mode="wait">
          {/* Render only the currently visible slides */}
          {slides.slice(startIndex, startIndex + slidesToShow).map((slide, idx) => (
            <motion.div
              key={idx + startIndex} // Key should be unique and stable. idx + startIndex works here.
              initial={{ opacity: 0, y: 20 }} // Initial animation state
              animate={{ opacity: 1, y: 0 }} // Animation target state
              exit={{ opacity: 0, y: -20 }} // Animation state when removed from DOM
              transition={{ duration: 0.3 }} // Animation duration
              className="w-full max-w-sm flex-shrink-0 bg-white shadow-[0px_0px_30px_0px_rgba(0,0,0,0.08)] rounded-lg p-5 font-outfit"
            >
              <div className="flex flex-col items-center text-center md:text-left">
                <h3 className="font-semibold text-white bg-[#173366] w-full p-2 rounded-lg text-center mb-3">
                  {slide.title}
                </h3>
                <div className="flex justify-between w-full gap-4 text-left mt-5">
                  <div className="w-1/2">
                    <h4 className="font-semibold text-black">{slide.date}</h4>
                    <h6 className="text-gray-600 leading-[1.6] font-semibold mt-1">
                      {slide.month}
                      <span className="text-[#173366] font-bold"> {slide.dateyear}</span>
                      <br />
                      {slide.day}
                    </h6>
                  </div>
                  <div className="w-1/2">
                    <h4 className="font-semibold text-black">{slide.time}</h4>
                    <h6 className="text-gray-600 leading-[1.6] font-semibold mt-1">
                      {slide.morning}
                      <span className="text-[#173366] font-bold"> {slide.timesec} </span> {slide.content} <br />
                      {slide.afternoon}
                      <span className="text-[#173366] font-bold"> {slide.etimesec} </span> {slide.end}
                    </h6>
                  </div>
                </div>
                <hr className="my-5 w-full" />
                <div className="w-full text-left">
                  <h4 className="font-semibold text-black mb-2">{slide.venue}</h4>
                  <h6 className="text-gray-600 leading-[1.6] font-semibold">{slide.address}</h6>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        // Disable conditions:
        // 1. If we are showing multiple slides and are at the very first "page".
        // 2. If we are showing a single slide, we want the arrows to always be enabled for looping.
        disabled={slidesToShow > 1 && startIndex === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#173366] text-white p-2 rounded-full shadow-md hover:bg-[#10254f] disabled:opacity-30"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={next}
        // Disable conditions:
        // 1. If we are showing multiple slides and are at the very last "page".
        // 2. If we are showing a single slide, we want the arrows to always be enabled for looping.
        disabled={slidesToShow > 1 && startIndex >= maxStartIndex}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#173366] text-white p-2 rounded-full shadow-md hover:bg-[#10254f] disabled:opacity-30"
      >
        <ChevronRight />
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {/* Calculate number of dots based on how many "pages" of slides exist.
            Ensures at least one dot even if totalSlides <= slidesToShow. */}
        {Array.from({ length: Math.max(1, totalSlides - slidesToShow + 1) }).map((_, i) => (
          <div
            key={i}
            onClick={() => setStartIndex(i)} // Clicking a dot jumps to that "page"
            className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${
              i === startIndex ? "bg-[#173366]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}