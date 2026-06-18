"use client";

import { LuStethoscope, LuMicroscope, LuClipboardList, LuHeartPulse } from "react-icons/lu";
import { GiBabyFace } from "react-icons/gi";
import BookingButton from "@/components/button/bookingButton";

const steps = [
  {
    id: 1,
    title: "A Comfy, Quiet Chat",
    duration: "First Visit",
    icon: LuStethoscope,
    description:
      "You sit down and talk with our friendly fertility specialist who truly listens to your life, health history, and dreams."
    },
  {
    id: 2,
    title: "Finding True Clarity",
    duration: "Assessment",
    icon: LuMicroscope,
    description:
      "We take you through a stress-free fertility test, leaving no stone unturned as we are on a mission to provide a safe pregnancy."
    },
  {
    id: 3,
    title: "Your Personal Fertility Map",
    duration: "Treatment Planning",
    icon: LuClipboardList,
    description:
     "Our dedicated doctor for you builds a medication styled 100% to your specific requirement. So, you aren’t just another medical folder file to us."
    },
  {
    id: 4,
    title: "The Magic Touch",
    duration: "Procedure Day",
    icon: LuHeartPulse,
    description:
     "We gently collect the eggs and combine them with sperm inside our laboratory. We ensure the future baby is protected by elite scientific safeguards and safely placed inside the mother’s womb."
    },
  {
    id: 5,
    title: "The Miracle Alert",
    duration: "Pregnancy Confirmation",
    icon: GiBabyFace,
    description:
      "Finally, the long-awaited moment arrives with an early blood test confirming the baby's formation. Our team won’t say goodbye once you’re pregnant; we walk with you safely into your first trimester!",
  },
];

export default function IVFProcessTimeline() {
  return (
   
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#173366] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Step by step
          </p>
          {/* <h2 className="font-outfit text-3xl font-semibold text-[#ffc65c] mb-3">
            The 5-Step IVF Process
          </h2> */}
          <p className="text-gray-600 text-base">
            Every step carefully managed to maximise your chance of success
          </p>
        </div>

        {/* Stepper */}
        <div className="relative">

          {/* Horizontal connector line — vertically centered through the circles (circle is 80px, center = 40px) */}
          <div
            className="absolute hidden md:block"
            style={{
              top: 40,
              left: "calc(10% + 40px)",
              right: "calc(10% + 40px)",
              height: 1,
              backgroundColor: "#C9D9EE",
            }}
          />

          {/* Steps row */}
          <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-0">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className="flex flex-col items-center text-center flex-1 relative px-3"
                >
                  {/* Circle icon */}
                  <div
                    className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-5 shrink-0"
                    style={{
                      backgroundColor: "#EEF4FB",
                      border: "1.5px solid #C9D9EE",
                    }}
                  >
                    <Icon size={28} color="#173366" />
                  </div>

                  {/* Step label */}
                  <p
                    className="text-xs font-bold tracking-widest uppercase mb-1"
                    style={{ color: "#ffc65c" }}
                  >
                    Step {step.id}
                  </p>

                  {/* Duration badge */}
                  <span className="inline-block px-3 py-0.5 rounded-full text-md font-medium mb-2 bg-[#EEF4FB] text-[#173366]">
                    {step.duration}
                  </span>

                  {/* Title */}
                  <p className="text-sm font-semibold text-[#173366] mb-2 leading-snug">
                    {step.title}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="button hidden lg:flex justify-center mt-8">
          <BookingButton
            title="Register for your free Consultation today"
            className="bg-white/20 text-white border-2 border-white/40 rounded-full hover:bg-[#FFC65C] hover:text-blue-900 hover:border-[#FFC65C] transition-all duration-300 w-fit text-sm sm:text-base"
          />
        </div>


      </div>
   
  );
}