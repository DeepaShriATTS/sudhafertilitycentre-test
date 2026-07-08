"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import BookingButton from "@/components/button/bookingButton";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { HiPhone } from "react-icons/hi";
import "./hero-banner-slider.css";

import newbanner from "@/assets/Home/newbanner.webp";
import freecamp from "@/assets/Home/freecamp.webp";
import freecampmobile from "@/assets/Home/freecampmobile.webp";
import successstories from "@/assets/Home/successstories.webp";

const slides = [
  {
    heading: "Putting your health first with empathy and skill",
    description:
      "We are a leading fertility facility across South India, dedicated to providing exceptional care and world-class treatments for all patients on their parenthood journey.",
    btnText: "Get Started",
    img: newbanner,
    mobileImg: newbanner,
  },
  {
    heading: "Welcome the sweet sound of laughter into your home",
    description:
      "Our experts are here to take away your years of waiting and help you start your family. Because your home deserves the beautiful chaos of tiny baby footsteps and endless joy.",
    btnText: "Begin your journey",
    img: freecamp,
    mobileImg: freecampmobile,
  },
  {
    heading: "You do not have to travel far or face this alone",
    description:
      "We have opened 40+ Centres across South India so you can get expert medical help close to home. Come sit down for a free chat with our doctors.",
    btnText: "Register for free consultation",
    img: successstories,
    mobileImg: successstories,
  },
];

const SLIDE_INTERVAL = 5000;

const HeroBannerSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const timerRef = useRef(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  const goTo = useCallback((next) => {
    setActiveIndex(() => {
      const len = slides.length;
      return ((next % len) + len) % len;
    });
  }, []);

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  useEffect(() => {
    if (isPausedRef.current) return;
    timerRef.current = setTimeout(() => goTo(activeIndex + 1), SLIDE_INTERVAL);
    return () => clearTimeout(timerRef.current);
  }, [activeIndex, goTo]);

  const togglePause = useCallback(() => {
    isPausedRef.current = !isPausedRef.current;
    if (isPausedRef.current) {
      clearTimeout(timerRef.current);
    } else {
      timerRef.current = setTimeout(() => goTo(activeIndex + 1), SLIDE_INTERVAL);
    }
  }, [activeIndex, goTo]);

  const handleBannerClick = useCallback(
    (e) => {
      if (e.target.closest("button") || e.target.closest("a")) return;
      togglePause();
    },
    [togglePause]
  );

  const activeSlide = slides[activeIndex];

  return (
    <div className="hero-banner-slider" onClick={handleBannerClick}>
      <div className="hero-decorative-wrap">
        <div className="hero-circle-outline-lg" />
        <div className="hero-circle-gold" />
        <div className="hero-circle-outline-xl" />
      </div>

      <div className="hero-section-wrap container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero-card">
          <div className="hero-grid">
            {/* Text column — always renders first in DOM, sits left at desktop */}
            <div className="hero-text-col flex flex-col justify-center px-5 sm:px-8 lg:px-14 py-6 sm:py-8 lg:py-12">
              {isDesktop
                ? slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`hero-slide-panel flex flex-col justify-center px-5 sm:px-8 lg:px-14 py-6 sm:py-8 lg:py-12 ${
                        index === activeIndex ? "is-active" : "is-inactive"
                      }`}
                    >
                      <h1 className="hero-heading font-outfit font-bold leading-tight mb-3 sm:mb-4">
                        {slide.heading}
                      </h1>
                      <p className="hero-description text-gray-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                        {slide.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                        <BookingButton
                          title={slide.btnText}
                          className="hero-cta-btn rounded-full text-sm sm:text-base font-medium px-5 sm:px-6 py-2.5 sm:py-3"
                        />
                        <a
                          href="tel:+917670076006"
                          className="hero-phone-link flex items-center gap-2 text-sm sm:text-base font-medium transition-colors"
                        >
                          <span className="hero-phone-icon-wrap w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center">
                            <HiPhone size={16} color="#173366" />
                          </span>
                          Call us now!
                        </a>
                      </div>
                    </div>
                  ))
                : (
                    <div className="hero-slide-panel flex flex-col justify-center is-active">
                      <h1 className="hero-heading font-outfit font-bold leading-tight mb-3 sm:mb-4">
                        {activeSlide.heading}
                      </h1>
                      <p className="hero-description text-gray-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                        {activeSlide.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                        <BookingButton
                          title={activeSlide.btnText}
                          className="hero-cta-btn rounded-full text-sm sm:text-base font-medium px-5 sm:px-6 py-2.5 sm:py-3"
                        />
                        <a href="tel:+917670076006"
                          className="hero-phone-link flex items-center gap-2 text-sm sm:text-base font-medium transition-colors"
                        >
                          <span className="hero-phone-icon-wrap w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center">
                            <HiPhone size={16} color="#173366" />
                          </span>
                          Call us now!
                        </a>
                      </div>
                    </div>
                  )}
            </div>

            {/* Image column — order:1 at desktop pushes it right */}
            <div className="hero-image-panel">
              <div className="hero-image-base" />

              {isDesktop
                ? slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`hero-image-slide ${
                        index === activeIndex ? "is-active" : "is-inactive"
                      }`}
                    >
                      <Image
                        src={slide.img}
                        alt={slide.heading}
                        fill
                        sizes="50vw"
                        quality={80}
                        loading={index === 0 ? "eager" : "lazy"}
                        className="object-cover object-center"
                      />
                    </div>
                  ))
                : (
                    <Image
                      src={activeSlide.mobileImg}
                      alt={activeSlide.heading}
                      fill
                      sizes="100vw"
                      quality={80}
                      loading="eager"
                      className="object-cover object-center"
                    />
                  )}

              <div className="hero-diagonal-accent" />
              <div className="hero-image-accent-bar" />

              <div className="hero-nav-wrap">
                <div className="hero-dots-track">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        goTo(i);
                      }}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`hero-dot ${i === activeIndex ? "is-active" : ""}`}
                    />
                  ))}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  aria-label="Previous slide"
                  className="hero-arrow-btn"
                >
                  <MdChevronLeft size={16} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  aria-label="Next slide"
                  className="hero-arrow-btn"
                >
                  <MdChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerSlider;