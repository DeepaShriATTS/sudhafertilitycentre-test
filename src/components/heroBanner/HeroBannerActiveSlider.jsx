"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import BookingButton from "@/components/button/bookingButton";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { HiPhone, HiSparkles } from "react-icons/hi";
import { SkeletonBox } from "@/components/loaders/SkeletonCardLoader"; // adjust path to your file

import newbanner1 from "@/assets/Home/newbanner1.webp";
import freecampmobile1 from "@/assets/Home/freecampmobile1.webp";
import success_stories1 from "@/assets/Home/success_stories1.webp";

const slides = [
  {
    heading: "For Everyone Tired of Looking at an Empty Cradle",
    highlight: "Everyone",
    btnText: " Book a Free expert fertility check",
    description:
      "We have spent forty years changing quiet, lonely houses into happy homes filled with laughter. Our forty-year legacy is written in the smiles of over one lakh IVF babies born here.",
    img: freecampmobile1,
    imgPosition: "center 45%",
  },
  {
    heading: "Welcome the Sweet Sound of Laughter",
    highlight: "Laughter",
    btnText: "Schedule Your Free Consultation",
    description:
      "Our experts are here to take away your years of waiting and help you start your family. Because your home deserves the beautiful chaos of tiny baby footsteps and endless joy.",
    img: newbanner1,
    imgPosition: "center 38%",
  },
  {
    heading: "You Don't Have to Travel Far or Face This Alone",
    highlight: "Travel Far",
    btnText: "Register for Your Free Consultation Today",
    description:
      "We have opened 40+ centres across South India so you can get expert medical help close to home. Come sit down for a private, completely free chat with our doctors at our next neighborhood camp.",
    img: success_stories1,
    imgPosition: "center 45%",
  },
];

const STATS = [
  { value: 40, suffix: "+", label: "Years of Legacy" },
  { value: 1, suffix: "L+", label: "Families Blessed" },
  { value: 30, suffix: "+", label: "Branches" },
];

const SLIDE_INTERVAL = 3000;
const PHONE_DISPLAY = "+91 76 7007 6006";
const PHONE_HREF = "tel:+917670076006";
const STAT_ANIM_DURATION = 1600; // ms

const AnimatedStat = ({ value, suffix, label, shouldAnimate, replayTrigger }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    let startTime = null;
    let rafId;

    const tick = (timestamp) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / STAT_ANIM_DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.round(eased * value));

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [shouldAnimate, value, replayTrigger]);

  return (
    <div className="hero-stat">
      <strong>
        {count}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
};

export default function HeroBannerActiveSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(false);
  const [loadedIndices, setLoadedIndices] = useState([0]);
  const [imageReadyMap, setImageReadyMap] = useState({});

  useEffect(() => {
    setLoadedIndices((prev) =>
      prev.includes(activeIndex) ? prev : [...prev, activeIndex]
    );
  }, [activeIndex]);

  const handleImageLoad = useCallback((i) => {
    setImageReadyMap((prev) => (prev[i] ? prev : { ...prev, [i]: true }));
  }, []);

  const statsRef = useRef(null);
  const [statsInView, setStatsInView] = useState(false);

  const goTo = useCallback((next) => {
    setActiveIndex(() => {
      const len = slides.length;
      return ((next % len) + len) % len;
    });
  }, []);

  const goPrev = () => goTo(activeIndex - 1);
  const goNext = () => goTo(activeIndex + 1);

  useEffect(() => {
    let timerId;
    const handleLoad = () => {
      timerId = setTimeout(() => setAutoPlayEnabled(true), 3000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      if (timerId) clearTimeout(timerId);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    if (!autoPlayEnabled) return;
    timerRef.current = setTimeout(() => goTo(activeIndex + 1), SLIDE_INTERVAL);
    return () => clearTimeout(timerRef.current);
  }, [activeIndex, goTo, autoPlayEnabled]);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const activeSlide = slides[activeIndex];
  const isActiveImageReady = !!imageReadyMap[activeIndex];

  const renderHeading = (heading, highlight) => {
    const idx = heading.indexOf(highlight);
    if (idx === -1) return heading;

    const before = heading.slice(0, idx);
    const after = heading.slice(idx + highlight.length);

    return (
      <>
        {before}
        <span className="hero-heading-accent">{highlight}</span>
        {after}
      </>
    );
  };

  return (
    <div className="hero-section-wrap">
      <div className="hero-grid">
        {/* ── Left: text column ── */}
        <div className="hero-text-col">
          <div className="hero-slide-panel">
            <span className="hero-eyebrow">
              <span className="hero-eyebrow-dash">
                <HiSparkles size={11} />
              </span>
              Trusted Care Since 1995
            </span>

            <h3 className="hero-heading">
              {renderHeading(activeSlide.heading, activeSlide.highlight)}
            </h3>

            <p className="hero-description">{activeSlide.description}</p>

            <div className="hero-cta-row">
              <div className="hero-book-btn-wrap">
                <div className="flex flex-col">
                  <BookingButton variant="primary" title={activeSlide.btnText} />
                  <p className="text-[12px] sm:text-[10px] font-semibold text-[#14213D]/85 text-start mx-2">
                    We will reach you within 45 minutes <span className="text-red-500">*</span>
                  </p>
                </div>
              </div>

              <a href={PHONE_HREF} className="hero-phone-link">
                <span className="hero-phone-icon-wrap">
                  <HiPhone size={18} />
                </span>
                <span className="hero-phone-text">
                  <span className="hero-phone-label">Call Us Now</span>
                  <span className="hero-phone-number">{PHONE_DISPLAY}</span>
                </span>
              </a>
            </div>
          </div>

          <div className="hero-stats-row" ref={statsRef}>
            {STATS.map((stat, i) => (
              <React.Fragment key={stat.label}>
                {i > 0 && <span className="hero-stat-divider" aria-hidden="true" />}
                <AnimatedStat
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  shouldAnimate={statsInView}
                />
              </React.Fragment>
            ))}
          </div>

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

        {/* ── Right: image column ── */}
        <div className="hero-image-col">
          <div className="hero-canvas">
            {/* Ambient background glow */}
            <div className="hero-canvas-glow" aria-hidden="true" />

            {/* Signature ring — one quiet echo of the background arc,
                instead of a stack of separate decorations */}
            <div className="hero-frame-ring" aria-hidden="true" />

            {/* The Main Image Frame */}
            <div className="hero-main-frame relative">
              {/* Reusable skeleton fills the frame until the active image loads */}
              {!isActiveImageReady && (
                <SkeletonBox className="absolute inset-0 h-full w-full rounded-2xl" />
              )}

              {slides.map((slide, i) => {
                const isLoaded = loadedIndices.includes(i);
                if (!isLoaded) return null;

                return (
                  <div
                    key={i}
                    className={`hero-image-slide ${i === activeIndex ? "is-active" : "pointer-events-none"}`}
                    style={{
                      opacity: i === activeIndex && imageReadyMap[i] ? 1 : 0,
                      visibility: i === activeIndex ? "visible" : "hidden",
                      transition: "opacity 0.6s ease-in-out, visibility 0.6s ease-in-out",
                    }}
                  >
                    <Image
                      src={slide.img}
                      alt={slide.heading + " " + slide.highlight}
                      fill
                      sizes="(min-width: 1024px) 46vw, 100vw"
                      quality={85}
                      priority={i === 0}
                      fetchPriority={i === 0 ? "high" : "auto"}
                      className="object-cover"
                      style={{ objectPosition: slide.imgPosition }}
                      onLoad={() => handleImageLoad(i)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}