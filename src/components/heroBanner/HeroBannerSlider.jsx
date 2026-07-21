"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import BookingButton from "@/components/button/bookingButton";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { HiPhone } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi2";
import "./hero-banner-slider.css";

import newbanner1 from "@/assets/Home/newbanner1.webp";
import freecampmobile1 from "@/assets/Home/freecampmobile1.webp";
import success_stories1 from "@/assets/Home/success_stories1.webp";

/*
  Each slide's heading is split into `heading` (normal) + `highlight`
  (rendered in the gold accent colour). `imgPosition` is per-slide because
  each source photo frames its subject differently — don't rely on a
  single global object-position.
*/

// const slides = [
//   {
//     heading: "Turning Hope Into",
//     highlight: "Happiness",
//     btnText: "Book Appointment",
//     description:
//       "Advanced fertility treatments with compassionate care to help you experience the joy of parenthood.",
//     img: newbanner1,
//     imgPosition: "center 38%",
//   },
//   {
//     heading: "Forty Years of",
//     highlight: "Legacy",
//     btnText: "Begin Your Free Journey",
//     description:
//       "We have spent forty years changing quiet, lonely houses into happy homes filled with laughter — over one lakh IVF babies born here.",
//     img: freecampmobile1,
//     imgPosition: "center 45%",
//   },
//   {
//     heading: "Expert Care, Close to",
//     highlight: "Home",
//     btnText: "Register for Free Consultation",
//     description:
//       "We have opened 40+ centres across South India, so you never have to travel far to sit down for a private, completely free chat with our doctors.",
//     img: success_stories1,
//     imgPosition: "center 45%",
//   },
// ];


const slides = [
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
    heading: "For Everyone Tired of Looking at an Empty Cradle",
    highlight: "Everyone",
    btnText: " Book a Free expert fertility check",
    description:
      "We have spent forty years changing quiet, lonely houses into happy homes filled with laughter. Our forty-year legacy is written in the smiles of over one lakh IVF babies born here.",
    img: freecampmobile1,
    imgPosition: "center 45%",
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

/*
  value = numeric target, suffix = trailing unit ("+" / "L+").
  Split this way (instead of a display string) so the counter can animate
  the number while keeping the suffix static.
*/
const STATS = [
  { value: 40, suffix: "+", label: "Years of Legacy" },
  { value: 1, suffix: "L+", label: "Families Blessed" },
  { value: 30, suffix: "+", label: "Branches" },
];

const SLIDE_INTERVAL = 5000;
const PHONE_DISPLAY = "+91 76 7007 6006";
const PHONE_HREF = "tel:+917670076006";
const STAT_ANIM_DURATION = 1600; // ms

/* Counts 0 → value with an ease-out curve once `shouldAnimate` flips true.
   Kept as its own component so each stat gets an independent rAF loop. */
const AnimatedStat = ({ value, suffix, label, shouldAnimate }) => {
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
  }, [shouldAnimate, value]);

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

const HeroBannerSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

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
    timerRef.current = setTimeout(() => goTo(activeIndex + 1), SLIDE_INTERVAL);
    return () => clearTimeout(timerRef.current);
  }, [activeIndex, goTo]);

  // Fire the count-up once the stats row scrolls into view, then stop
  // watching — no need to re-trigger on every scroll.
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

  const renderHeading = (heading, highlight) => {
    const idx = heading.indexOf(highlight);

    // If the highlight word isn't found in the heading, just render the
    // plain heading so nothing silently disappears.
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
    <section className="hero-banner-slider">
      {/* Decorative soft-blur background — pure CSS, no image needed */}
      <div className="hero-decorative-canvas" aria-hidden="true">
        <span className="hero-blob hero-blob--teal" />
        <span className="hero-blob hero-blob--gold" />
        <span className="hero-dot-grid" />
      </div>

      <div className="hero-section-wrap">
        <div className="hero-grid">
          {/* ── Left: text column ── */}
          <div className="hero-text-col">
            <div className="hero-slide-panel">
              <span className="hero-eyebrow">
                <span className="hero-eyebrow-dash" />
                Trusted Care Since 1995
              </span>

              <h1 className="hero-heading">
                {renderHeading(activeSlide.heading, activeSlide.highlight)}
              </h1>

              <p className="hero-description">{activeSlide.description}</p>

              <div className="hero-cta-row">
                <div className="hero-book-btn-wrap">
                  <BookingButton variant="primary" title={activeSlide.btnText} />
                    {/* <p className="text-[12px] sm:text-[10px] font-semibold text-[#173366]/85 text-start mx-2">
                    We will reach you within 45 minutes <span className="text-red-500">*</span>
                   </p> */}
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
                  {/* key includes activeIndex so the component remounts on every
                      slide change (prev/next/auto-advance) — remount re-runs the
                      count-up effect from 0, replaying the animation each time */}
                  <AnimatedStat
                    key={`${stat.label}-${activeIndex}`}
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

          {/* ── Right: image column — bleeds to the edge, no card shadow ── */}
          <div className="hero-image-col">
            <div className="hero-image-bleed">
              {/* Ambient gradient glow, sits behind everything in this stack */}
              <div className="hero-image-glow" aria-hidden="true" />

              {/* Thin halo ring — mobile only (desktop uses the wavy accent instead) */}
              <div className="hero-image-ring" aria-hidden="true" />

              {/* ── Photo: ALWAYS a plain circle crop. This can never distort,
                  regardless of what size .hero-image-bleed resolves to. ── */}
              <div className="hero-image-frame">
                <div key={activeIndex} className="hero-image-slide is-active">
                  <Image
                    src={activeSlide.img}
                    alt={activeSlide.heading + " " + activeSlide.highlight}
                    fill
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    quality={85}
                    priority={activeIndex === 0}
                    loading={activeIndex === 0 ? "eager" : undefined}
                    className="object-cover"
                    style={{ objectPosition: activeSlide.imgPosition }}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBannerSlider;