"use client";

import { useState, useRef, useLayoutEffect, useCallback } from "react";
import { LuStethoscope, LuMicroscope, LuClipboardList, LuHeartPulse, LuChevronDown } from "react-icons/lu";
import { GiBabyFace } from "react-icons/gi";
import BookingButton from "@/components/button/bookingButton";

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

  const toggle = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const measure = useCallback(() => {
    const next = {};
    steps.forEach((step) => {
      const el = descRefs.current[step.id];
      if (el) {
        next[step.id] = el.scrollHeight > el.clientHeight + 1;
      }
    });
    setOverflowing(next);
  }, []);

  useLayoutEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header — tighter bottom margin on mobile */}
      <div className="text-center mb-5 md:mb-16">
        <p className="text-[#173366] text-xs font-semibold tracking-[0.2em] uppercase mb-2 md:mb-3">
          Step by step
        </p>
        <p className="text-gray-600 text-sm md:text-base">
          Every step carefully managed to maximise your chance of success
        </p>
      </div>

      {/* Stepper */}
      <div className="relative">
        {/* Horizontal connector line — desktop only anyway */}
        <div
          className="absolute hidden md:block"
          style={{
            top: 40,
            left: "calc(10% + 40px)",
            right: "calc(10% + 40px)",
            height: 1,
            backgroundColor: "#e5e7eb",
          }}
        />

        {/* Steps grid — smaller gap on mobile, larger from md up */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 items-stretch">
          {steps.map((step) => {
            const Icon = step.icon;
            const isOpen = !!expanded[step.id];
            const doesOverflow = !!overflowing[step.id];
            return (
              <div key={step.id} className="flex flex-col items-center text-center relative">
                {/* Circle icon — smaller on mobile */}
                <div
                  className="relative z-10 w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-3 md:mb-5 shrink-0"
                  style={{
                    backgroundColor: "#EEF4FB",
                    border: "1.5px solid #C9D9EE",
                  }}
                >
                  <Icon size={22} className="md:hidden" color="#173366" />
                  <Icon size={28} className="hidden md:block" color="#173366" />
                </div>

                {/* Step label */}
                <p
                  className="text-[10px] md:text-xs font-bold tracking-widest uppercase px-2 py-0.5 md:py-1 rounded-md mb-2 md:mb-3"
                  style={{ backgroundColor: "#ffc65c", color: "#053081ff" }}
                >
                  Step {step.id}
                </p>

                {/* Duration badge */}
                <span className="inline-block px-2.5 md:px-3 py-0.5 rounded-full text-xs md:text-md font-medium mb-2 md:mb-3 bg-[#EEF4FB] text-[#173366]">
                  {step.duration}
                </span>

                {/* Card — reduced padding on mobile */}
                <div
                  className="flex flex-col items-center w-full h-full box-border rounded-2xl px-3 py-3 md:px-5 md:py-6"
                  style={{
                    border: "1px solid #EEF2F8",
                    backgroundColor: "#FAFBFE",
                  }}
                >
                  {/* Title — shorter reserved height on mobile */}
                  <p className="text-sm font-semibold text-[#173366] leading-snug mb-2 md:mb-3 min-h-[1.75rem] md:min-h-[2.5rem] flex items-center">
                    {step.title}
                  </p>

                  {/* Description */}
                  <p
                    ref={(el) => (descRefs.current[step.id] = el)}
                    className={`text-sm text-gray-600 leading-relaxed ${
                      isOpen ? "" : "line-clamp-4"
                    }`}
                  >
                    {step.description}
                  </p>

                  {/* Read more / less — only when this card's text overflows */}
                  {doesOverflow && (
                    <button
                      type="button"
                      onClick={() => toggle(step.id)}
                      aria-expanded={isOpen}
                      className="mt-1.5 md:mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#173366] hover:text-[#FFC65C] transition-colors"
                    >
                      {isOpen ? "Show less" : "Read more"}
                      <LuChevronDown
                        size={14}
                        className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>

                {/* Vertical connector line on mobile — shorter */}
                {step.id !== 5 && (
                  <div className="w-[2px] h-4 md:h-8 bg-gray-200 mt-3 md:mt-6 block md:hidden" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="button flex justify-center mt-5 md:mt-8">
        <BookingButton
          title="Register for your free Consultation today"
          className="bg-white/20 text-white border-2 border-white/40 rounded-full hover:bg-[#FFC65C] hover:text-blue-900 hover:border-[#FFC65C] transition-all duration-300 w-fit text-sm sm:text-base"
        />
      </div>
    </div>
  );
}