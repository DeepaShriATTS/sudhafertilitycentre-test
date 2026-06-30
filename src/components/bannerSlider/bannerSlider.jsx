"use client";
import React, { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import BookingButton from "@/components/button/bookingButton";
import freecamp from "@/assets/Home/freecamp.webp";
import newbanner from "@/assets/Home/newbanner.webp";
import successstories from "@/assets/Home/successstories.webp";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const slides = [
  {
    heading: "Welcome the Sweet Sound of Laughter",
    btnText: "Schedule your free consultation",
    description:
      "Our experts are here to take away your years of waiting and help you start your family. Because your home deserves the beautiful chaos of tiny baby footsteps and endless joy",
    img: newbanner,
  },
  {
    heading: "For everyone who is tired of looking at an empty cradle",
    btnText: "Begin your free parenthood Journey",
    description:
      "We have spent forty years changing quiet, lonely houses into happy homes filled with laughter. Our forty-year legacy is written in the smiles of over one lakh IVF babies born here",
    img: freecamp,
  },
  {
    heading: "You do not have to travel far or face this alone",
    btnText: "Register for your free Consultation today",
    description:
      "We have opened 40+ Centres across South India so you can get expert medical help close to home. Come sit down for a private, completely free chat with our doctors at our next neighborhood camp",
    img: successstories,
  },
];

const SLIDE_DURATION = 4500;
const FADE_MS = 1400;

const BannerSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isPausedRef = useRef(false);
  const timerRef = useRef(null);

  const goTo = useCallback((next) => {
    setActiveIndex((prev) => {
      const len = slides.length;
      return ((next % len) + len) % len;
    });
  }, []);

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  // Autoplay loop — restarts whenever activeIndex changes (manual or auto)
  useEffect(() => {
    if (isPausedRef.current) return;
    timerRef.current = setTimeout(() => {
      goTo(activeIndex + 1);
    }, SLIDE_DURATION);
    return () => clearTimeout(timerRef.current);
  }, [activeIndex, goTo]);

  const toggle = useCallback(() => {
    isPausedRef.current = !isPausedRef.current;
    setIsPaused(isPausedRef.current);
    if (isPausedRef.current) {
      clearTimeout(timerRef.current);
    } else {
      timerRef.current = setTimeout(() => {
        goTo(activeIndex + 1);
      }, SLIDE_DURATION);
    }
  }, [activeIndex, goTo]);

  const handleBannerClick = useCallback(
    (e) => {
      if (e.target.closest("button")) return;
      toggle();
    },
    [toggle]
  );

  return (
    <div
      className="relative w-full h-full my-2 overflow-hidden"
      style={{ height: "95vh" }}
      onClick={handleBannerClick}
    >
   
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={index}
            className="absolute inset-0"
            style={{
              opacity: isActive ? 1 : 0,
              transition: `opacity ${FADE_MS}ms ease-in-out`,
              zIndex: isActive ? 1 : 0,
              pointerEvents: isActive ? "auto" : "none",
            }}
          >
            {/* Slow continuous zoom on the active slide only — mimics the
                always-moving feel of a video background, so the crossfade
                cut never lands on a totally static frame. */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                transform: isActive ? "scale(1.08)" : "scale(1)",
                transition: isActive
                  ? `transform ${SLIDE_DURATION + FADE_MS}ms linear`
                  : "none",
              }}
            >
              {/* <Image
                src={slide.img}
                alt={slide.heading}
                fill
                priority={index === 0}
                fetchPriority={index === 0 ? "high" : "auto"}
                quality={75}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                className="object-cover object-center"
              /> */}
              <Image
                src={slide.img}
                alt={slide.heading}
                fill
                priority={index === 0}
                fetchPriority={index === 0 ? "high" : "auto"}
                loading={index === 0 ? "eager" : "lazy"}
                quality={index === 0 ? 80 : 70}
                sizes="(max-width: 480px) 480px,
                (max-width: 768px) 768px,
                (max-width: 1280px) 1280px,
                 1920px"
                className="object-cover object-center"
              />
            </div>

            {/* Main gradient — covers left ~60% on desktop, full width on mobile */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(105deg, rgba(20,25,100,0.97) 0%, rgba(20,25,100,0.88) 40%, rgba(20,25,100,0.3) 75%, transparent 100%)",
              }}
            />
            {/* Bottom gradient — feathers into the controls bar */}
            <div
              className="absolute inset-x-0 bottom-0"
              style={{
                height: "140px",
                background:
                  "linear-gradient(to top, rgba(10,14,60,0.98) 0%, rgba(10,14,60,0.6) 60%, transparent 100%)",
              }}
            />

            {/* ── Slide content ── */}
            <div className="absolute inset-0 flex flex-col justify-between">
              <div className="container mx-auto w-full flex-1 flex flex-col justify-between px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between pt-44 lg:pt-48 pb-14 sm:pb-16 lg:pb-20">

                  {/* Text + CTA — fades with the same opacity/timing as the
                      image, no transition-delay, so the whole slide moves
                      as one piece instead of parts arriving separately. */}
                  <div className="flex-1 flex items-center">
                    <div className="max-w-lg xl:max-w-xl text-white w-full">
                      <h1 className="text-[#FFC65C] font-outfit font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-snug mb-3 sm:mb-4">
                        {slide.heading}
                      </h1>
                      <p className="text-white/80 text-sm sm:text-base leading-[1.7] mb-4 sm:mb-6 max-w-md">
                        {slide.description}
                      </p>
                      <BookingButton
                        title={slide.btnText}
                        className="bg-white/20 text-white border-2 border-white/40 rounded-full hover:bg-[#FFC65C] hover:text-blue-900 hover:border-[#FFC65C] transition-all duration-300 w-fit text-sm sm:text-base"
                      />
                      <p className="text-[10px] sm:text-[11px] text-[#FFC65C]/80 px-3">
                        We will reach you within 45 minutes *
                      </p>
                    </div>
                  </div>

                  {/* Controls only need to render once, not per-slide — see below */}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* ── Controls — rendered once, sits above all slides ── */}
      <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto pb-14 sm:pb-16 lg:pb-20 flex items-start justify-end">
            <div className="flex items-center gap-1.5 sm:gap-2 pointer-events-auto">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                aria-label="Previous slide"
                className="w-7 h-7 rounded-full flex items-center justify-center bg-white/10 border border-white/25 text-white hover:bg-[#FFC65C] hover:border-[#FFC65C] hover:text-blue-900 transition-all duration-200"
              >
                <MdChevronLeft size={16} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                aria-label="Next slide"
                className="w-7 h-7 rounded-full flex items-center justify-center bg-white/10 border border-white/25 text-white hover:bg-[#FFC65C] hover:border-[#FFC65C] hover:text-blue-900 transition-all duration-200"
              >
                <MdChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;