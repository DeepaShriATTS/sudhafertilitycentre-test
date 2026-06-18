"use client";
import React, { useRef, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import BookingButton from "@/components/button/bookingButton";
import freecamp from "@/assets/Home/freecamp.webp";
import newbanner from "@/assets/Home/newbanner.webp";
import successstories from "@/assets/Home/successstories.webp";
import { MdChevronLeft, MdChevronRight, MdPause, MdPlayArrow } from "react-icons/md";

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

const SLIDE_DURATION = 3000;

const BannerSlider = () => {
  const swiperRef   = useRef(null);
  const wrapperRef  = useRef(null);
  const isPausedRef = useRef(false);

  const [isPaused,    setIsPaused]    = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = useCallback(() => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;
    if (isPausedRef.current) {
      swiper.autoplay.start();
      isPausedRef.current = false;
      setIsPaused(false);
    } else {
      swiper.autoplay.stop();
      isPausedRef.current = true;
      setIsPaused(true);
    }
  }, []);

  const handleBannerClick = useCallback((e) => {
    if (e.target.closest("button")) return;
    toggle();
  }, [toggle]);

  const goPrev = useCallback(() => swiperRef.current?.swiper?.slidePrev(), []);
  const goNext = useCallback(() => swiperRef.current?.swiper?.slideNext(), []);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full h-full my-2"
       style={{ height: "95vh" }}
      onClick={handleBannerClick}
    >
      {/* ── Swiper ── */}
      <Swiper
        ref={swiperRef}
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{ delay: SLIDE_DURATION, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        style={{ position: "absolute", inset: 0, height: "100%", width: "100%" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full ">
              <Image
                src={slide.img}
                alt={slide.heading}
                fill
                priority={index === 0}
                fetchPriority={index === 0 ? "high" : "auto"}
                sizes="100vw"
                className="object-cover object-center"
              />

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

              {/* ── Slide content ──
                  Matches the site-wide max-w-7xl / px-4 sm:px-6 lg:px-8 margin system.
                  flex-col + justify-between pushes controls to the bottom. */}
              <div className="absolute inset-0 flex flex-col justify-between">

                {/* Inner content wrapper — mirrors every other section's margin */}
                <div className="container mx-auto w-full flex-1 flex flex-col justify-between px-4 sm:px-6 lg:px-8">
                  <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between pt-44 lg:pt-48 pb-14 sm:pb-16 lg:pb-20">

                    {/* Text + CTA — vertically centred in available space */}
                    <div className="flex-1 flex items-center">
                      <div className="max-w-lg xl:max-w-xl text-white w-full">
                        <h2 className="text-[#FFC65C] font-outfit font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-snug mb-3 sm:mb-4">
                          {slide.heading}
                        </h2>
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

                    {/* Center Navigation */}
                    {/* <div className="absolute inset-0 z-30">
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          goPrev();
                        }}
                        aria-label="Previous"
                        className="
                        absolute
                        left-6
                        top-1/2
                        -translate-y-1/2
                        w-8 h-8
                        rounded-full
                        bg-[#1B1F73]
                        backdrop-blur-md
                        border border-[#e5e7eb]/30
                        flex items-center justify-center
                        text-[#e5e7eb]
                        hover:bg-[#FFC65C]
                        hover:text-[#1B1F73]
                        transition-all
                        duration-300
                        shadow-lg
                        "
                      >
                        <MdChevronLeft size={28} className="text-white/70"  />
                      </button>

                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          goNext();
                        }}
                        aria-label="Next"
                      className="
                        absolute
                        left-6
                        top-1/2
                        -translate-y-1/2
                        w-8 h-8
                        rounded-full
                        bg-[#1B1F73]
                        backdrop-blur-md
                        border border-[#e5e7eb]/30
                        flex items-center justify-center
                        text-[#e5e7eb]
                        hover:bg-[#FFC65C]
                        hover:text-[#1B1F73]
                        transition-all
                        duration-300
                        shadow-lg
                        "
                      >
                        <MdChevronRight size={28} className="text-white/70"  />
                      </button>
                    </div> */}

                    {/* ── Controls — pinned to bottom of content wrapper ── */}
                    <div className="flex items-start justify-end">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <button
                          onClick={(e) => { e.stopPropagation(); goPrev(); }}
                          aria-label="Previous slide"
                          className="w-7 h-7 rounded-full flex items-center justify-center bg-white/10 border border-white/25 text-white hover:bg-[#FFC65C] hover:border-[#FFC65C] hover:text-blue-900 transition-all duration-200"
                        >
                          <MdChevronLeft size={16} />
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); goNext(); }}
                          aria-label="Next slide"
                          className="w-7 h-7 rounded-full flex items-center justify-center bg-white/10 border border-white/25 text-white hover:bg-[#FFC65C] hover:border-[#FFC65C] hover:text-blue-900 transition-all duration-200"
                        >
                          <MdChevronRight size={16} />
                        </button>
                      </div>

                      {/* <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-white/50 text-[11px] sm:text-xs">
                          <span className="text-[#FFC65C] text-xs sm:text-sm font-bold">
                            {String(activeIndex + 1).padStart(2, "0")}
                          </span>
                          {" "}/ {String(slides.length).padStart(2, "0")}
                        </span>
                        <button
                          onClick={(e) => { e.stopPropagation(); toggle(); }}
                          aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
                          className="w-7 h-7 rounded-full flex items-center justify-center bg-white/10 border border-white/25 text-white hover:bg-white/20 transition-all duration-200"
                        >
                          {isPaused ? <MdPlayArrow size={14} /> : <MdPause size={14} />}
                        </button>
                      </div> */}
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;