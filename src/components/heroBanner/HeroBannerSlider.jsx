"use client";
import React, { useState, useEffect, useCallback, useRef, useId } from "react";
import Image from "next/image";
import BookingButton from "@/components/button/bookingButton";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { HiPhone, HiHeart, HiStar } from "react-icons/hi";
import "./hero-banner-slider.css";

import newbanner from "@/assets/Home/newbanner.webp";
import freecampmobile from "@/assets/Home/freecampmobile.webp";
import successstories from "@/assets/Home/successstories.webp";
import homebannerbg from "@/assets/Home/homebannerbg.webp";


const slides = [
  {
    heading: "Welcome the Sweet Sound of Laughter",
    btnText: "Schedule your free consultation",
    description:
      "Our experts are here to take away your years of waiting and help you start your family. Because your home deserves the beautiful chaos of tiny baby footsteps and endless joy",
    img: newbanner,
    mobileImg: newbanner,
  },
  {
    heading: "For everyone who is tired of looking at an empty cradle",
    btnText: "Begin your free parenthood Journey",
    description:
      "We have spent forty years changing quiet, lonely houses into happy homes filled with laughter. Our forty-year legacy is written in the smiles of over one lakh IVF babies born here",
    img: freecampmobile,
    mobileImg: freecampmobile,
  },
  {
    heading: "You do not have to travel far or face this alone",
    btnText: "Register for your free Consultation today",
    description:
      "We have opened 40+ Centres across South India so you can get expert medical help close to home. Come sit down for a private, completely free chat with our doctors at our next neighborhood camp",
    img: successstories,
    mobileImg: successstories,
  },
];



const SLIDE_INTERVAL = 5000;
const PHONE_DISPLAY = "+91 76 7007 6006";
const PHONE_HREF = "tel:+917670076006";

const HeroBannerSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const timerRef = useRef(null);
  // const headingId = useId();

  useEffect(() => {
    // Use 1280px so phone link only shows when there's room alongside CTA button
    const mql = window.matchMedia("(min-width: 1280px)");
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

  const goPrev = () => goTo(activeIndex - 1);
  const goNext = () => goTo(activeIndex + 1);

  useEffect(() => {
    timerRef.current = setTimeout(() => goTo(activeIndex + 1), SLIDE_INTERVAL);
    return () => clearTimeout(timerRef.current);
  }, [activeIndex, goTo]);

  const activeSlide = slides[activeIndex];

  return (
    <div className={`hero-banner-slider`}>

      {/* ── Background image, one per slide ── */}
      <div className="hero-decorative-canvas" aria-hidden="true">
        <div key={activeIndex} className="hero-bg-slide">
          <Image
            src={homebannerbg}
            alt=""
            fill
            sizes="100vw"
            quality={80}
            priority={activeIndex === 0}
            className="object-cover"
          />
        </div>
        <div className="watercolor-leak" />
      </div>

      <div className="hero-section-wrap">
        <div className="hero-card">
          <div className="hero-grid">

            {/* Left Column Content Block */}
            <div className="hero-text-col ">
              <div className="hero-slide-panel">
                <h1 className="hero-heading">{activeSlide.heading}</h1>
                <p className="hero-description">{activeSlide.description}</p>

                <div className="hero-cta-row">
                  <BookingButton variant="primary" title={activeSlide.btnText} />
                  {isDesktop && (
                    <a href={PHONE_HREF} className="hero-phone-link">
                      <span className="hero-phone-icon-wrap">
                        <HiPhone size={18} />
                      </span>
                      {PHONE_DISPLAY}
                    </a>
                  )}
                </div>
              </div>

              {/* Slider Dots */}
              <div className="hero-pagination-inline">
                <button onClick={goPrev} className="hero-pg-arrow" aria-label="Previous slide">
                  <MdChevronLeft size={18} />
                </button>
                <div className="hero-pg-dots">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className={`hero-pg-dot ${i === activeIndex ? "is-active" : ""}`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
                <button onClick={goNext} className="hero-pg-arrow" aria-label="Next slide">
                  <MdChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Right Column Frame Block */}
            <div className="hero-image-col">
              <div className="hero-image-blob-wrap">
                <div className="hero-image-blob">
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`hero-image-slide ${index === activeIndex ? "is-active" : ""}`}
                    >
                      <Image
                        src={slide.img}
                        alt={slide.heading}
                        fill
                        sizes="(min-width: 1024px) 42vw, 100vw"
                        quality={85}
                        priority={index === 0}
                        className="object-cover"
                        style={{ objectPosition: slide.imgPosition }}
                      />
                    </div>
                  ))}
                </div>

                <div className="hero-glass-badge hero-glass-badge--top-left">
                  <span><HiStar size={18} /></span>
                  <div>
                    <strong>98% Success Rate</strong>
                    <span style={{ fontSize: "0.68rem", display: "block" }}>IVF live birth success</span>
                  </div>
                </div>

                <div className="hero-glass-badge hero-glass-badge--bottom-right">
                  <span><HiHeart size={18} /></span>
                  <div>
                    <strong>Every heartbeat matters</strong>
                    <span style={{ fontSize: "0.68rem", display: "block" }}>Real-time care monitoring</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerSlider;