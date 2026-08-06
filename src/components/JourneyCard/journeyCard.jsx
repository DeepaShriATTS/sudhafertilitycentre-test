"use client";

import { useState, useRef, useLayoutEffect, useCallback, useEffect } from "react";
import { LuStethoscope, LuMicroscope, LuClipboardList, LuHeartPulse, LuChevronDown } from "react-icons/lu";
import { GiBabyFace } from "react-icons/gi";
import BookingButton from "@/components/button/bookingButton";
import { IVFProcessTimelineSkeleton } from "../loaders/ReviewCardSkeleton";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const steps = [
  {
    id: 1,
    title: "A Comfy, Quiet Chat",
    duration: "First Visit",
    icon: LuStethoscope,
    description:
      "You sit down and talk with our friendly fertility specialist who truly listens to your life, health history, and dreams.",
  },
  {
    id: 2,
    title: "Finding True Clarity",
    duration: "Assessment",
    icon: LuMicroscope,
    description:
      "We take you through a stress-free fertility test, leaving no stone unturned as we are on a mission to provide a safe pregnancy.",
  },
  {
    id: 3,
    title: "Your Personal Fertility Map",
    duration: "Treatment Planning",
    icon: LuClipboardList,
    description:
      "Our dedicated doctor for you builds a medication styled 100% to your specific requirement. So, you aren't just another medical folder file to us.",
  },
  {
    id: 4,
    title: "The Magic Touch",
    duration: "Procedure Day",
    icon: LuHeartPulse,
    description:
      "We gently collect the eggs and combine them with sperm inside our laboratory. We ensure the future baby is protected by elite scientific safeguards and safely placed inside the mother's womb.",
  },
  {
    id: 5,
    title: "The Miracle Alert",
    duration: "Pregnancy Confirmation",
    icon: GiBabyFace,
    description:
      "Finally, the long-awaited moment arrives with an early blood test confirming the baby's formation. Our team won't say goodbye once you're pregnant; we walk with you safely till your Postpartum!",
  },
];

export default function IVFProcessTimeline() {
  const [expanded, setExpanded] = useState({});
  const [overflowing, setOverflowing] = useState({});
  const descRefs = useRef({});

  // FIX H-4: Replaced window.innerWidth + mounted state pattern.
  // useMediaQuery starts false on server/hydration, preventing mismatch.
  // Shows skeleton for the first render cycle until the hook syncs.
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggle = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    if (!mounted) return;

    const resizeObserver = new ResizeObserver(() => {
      window.requestAnimationFrame(() => {
        const next = {};
        steps.forEach((step) => {
          const el = descRefs.current[step.id] || descRefs.current[`m-${step.id}`];
          if (el) {
            next[step.id] = el.scrollHeight > el.clientHeight + 1;
          }
        });
        setOverflowing(next);
      });
    });

    steps.forEach((step) => {
      const el = descRefs.current[step.id];
      const mel = descRefs.current[`m-${step.id}`];
      if (el) resizeObserver.observe(el);
      if (mel) resizeObserver.observe(mel);
    });

    return () => {
      resizeObserver.disconnect();
    };
  }, [mounted, isMobile]);

  if (!mounted) {
    return <IVFProcessTimelineSkeleton />;
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-5">
          <h3 className="font-outfit font-semibold">
               Step by step
              <span className="lg:block"></span>
            </h3>
       
          <p className="text-gray-600 text-center mt-2">
          Every step carefully managed to maximise your chance of success
        </p>
      </div>

      {/* ---------- MOBILE LAYOUT (horizontal timeline list) ---------- */}
      {isMobile && (
        <div className="flex flex-col">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isOpen = !!expanded[step.id];
            const doesOverflow = !!overflowing[step.id];
            const isLast = idx === steps.length - 1;

            return (
              <div key={step.id} className="flex gap-3">
                {/* Left column: icon + duration + connector */}
                <div className="flex flex-col items-center shrink-0 w-14">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#EEF4FB", border: "1.5px solid #C9D9EE" }}
                  >
                    <Icon size={22} color="#173366" />
                  </div>
                  {!isLast && <div className="w-[2px] flex-1 min-h-[24px] bg-gray-200 my-2" />}
                </div>

                {/* Right column: badges, title, description */}
                <div className={`flex-1 min-w-0 ${isLast ? "pb-1" : "pb-5"}`}>
                  <div className="flex items-center flex-wrap gap-2 mb-1.5 pt-1">
                    <span
                      className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md"
                      style={{ backgroundColor: "#ffc65c", color: "#053081ff" }}
                    >
                      Step {step.id}
                    </span>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#EEF4FB] text-[#173366]">
                      {step.duration}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-[#173366] leading-snug mb-1">
                    {step.title}
                  </p>

                  <p
                    ref={(el) => (descRefs.current[`m-${step.id}`] = el)}
                    className={`text-sm text-gray-600 leading-relaxed ${isOpen ? "" : "line-clamp-3"}`}
                  >
                    {step.description}
                  </p>

                  {doesOverflow && (
                    <button
                      type="button"
                      onClick={() => toggle(step.id)}
                      aria-expanded={isOpen}
                      className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-[#173366]"
                    >
                      {isOpen ? "Show less" : "Read more"}
                      <LuChevronDown
                        size={14}
                        className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ---------- DESKTOP LAYOUT (card grid) ---------- */}
      {!isMobile && (
        <div className="relative">
          {/* Horizontal connector line */}
          <div
            className="absolute"
            style={{
              top: 40,
              left: "calc(10% + 40px)",
              right: "calc(10% + 40px)",
              height: 1,
              backgroundColor: "#e5e7eb",
            }}
          />

          <div className="grid grid-cols-5 gap-6 items-start">
            {steps.map((step) => {
              const Icon = step.icon;
              const isOpen = !!expanded[step.id];
              const doesOverflow = !!overflowing[step.id];
              return (
                <div key={step.id} className="flex flex-col items-center text-center relative">
                  <div
                    className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-5 shrink-0"
                    style={{ backgroundColor: "#EEF4FB", border: "1.5px solid #C9D9EE" }}
                  >
                    <Icon size={28} color="#173366" />
                  </div>

                  <p
                    className="text-xs font-bold tracking-widest uppercase px-2 py-1 rounded-md mb-3"
                    style={{ backgroundColor: "#ffc65c", color: "#053081ff" }}
                  >
                    Step {step.id}
                  </p>

                  <span className="inline-block px-3 py-0.5 rounded-full text-md font-medium mb-3 bg-[#EEF4FB] text-[#173366]">
                    {step.duration}
                  </span>

                  {/* Card — min-h instead of fixed h, so it grows with expanded content */}
                  <div
                    className="flex flex-col items-center w-[200px] min-h-[200px] box-border rounded-2xl px-2 py-4"
                    style={{ border: "1px solid #EEF2F8", backgroundColor: "#FAFBFE" }}
                  >
                    <p className="text-sm font-semibold text-[#173366] leading-snug mb-3 min-h-[1.5rem] flex items-center">
                      {step.title}
                    </p>

                    <p
                      ref={(el) => (descRefs.current[step.id] = el)}
                      className={`text-sm text-gray-600 leading-relaxed ${isOpen ? "" : "line-clamp-4"}`}
                    >
                      {step.description}
                    </p>

                    {doesOverflow && (
                      <button
                        type="button"
                        onClick={() => toggle(step.id)}
                        aria-expanded={isOpen}
                        className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#173366] hover:text-[#FFC65C] transition-colors"
                      >
                        {isOpen ? "Show less" : "Read more"}
                        <LuChevronDown
                          size={14}
                          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="button flex justify-center mt-5 md:mt-8">
        <BookingButton
          title="Register for your free Consultation today"
          className="bg-white/20 text-white border-2 border-white/40 rounded-full hover:bg-[#FFC65C] hover:text-blue-900 hover:border-[#FFC65C] transition-all duration-300 w-fit text-sm sm:text-base"
        />
      </div>
    </div>
  );
}