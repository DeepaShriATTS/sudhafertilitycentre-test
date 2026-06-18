"use client";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utility";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import BookingButton from "../button/bookingButton";

const MetricsTabs = ({tabs}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setSelectedTab(0);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative xl:bg-[#EBF2FE] rounded-2xl" ref={containerRef}>
      <div className="max-w-7xl mx-auto p-2 xl:p-6 font-outfit">
        <motion.div
          className="flex flex-col md:flex-col xl:flex-row overflow-x-auto no-scrollbar p-3 xl:pt-3 lg:pb-3 pb-7 pt-7 mb-8 xl:flex-wrap xl:justify-between bg-[#EBF2FE] xl:bg-white rounded-xl xl:rounded-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {tabs.map((tab, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedTab(index)}
              className={cn(
                "px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 lg:gap-1  group whitespace-nowrap",
                "w-full lg:w-auto", // Full width until lg breakpoint
                "mb-2 lg:mb-0 lg:mr-0 last:mb-0 lg:last:mr-0", // Vertical margins until lg breakpoint
                index === selectedTab
                  ? "bg-[#173366] text-white"
                  : "text-[#000] hover:bg-[#173366] hover:text-white"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* <Image
                src={tab.icon}
                alt="icon"
                className="w-5 h-5 group-hover:invert"
                style={{
                  filter: index === selectedTab ? "invert(1)" : "",
                }}
              /> */}
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-[#EBF2FE] xl:bg-transparent rounded-3xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 md:flex-col-reverse gap-8">
              <motion.div
                className="space-y-4 flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div>
                <h2 className="text-2xl font-bold">
                  {tabs[selectedTab].content.heading}
                </h2>
                <p className="text-gray-600 leading-relaxed mt-3">
                  {tabs[selectedTab].content.description}
                </p>
                <div className="mt-5">
                <BookingButton title={"Get a Free Consultation"} />
                </div>
                </div>
              </motion.div>

              <motion.div
                className="relative w-full "
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="rounded-3xl overflow-hidden h-full mb-4">
                  <Image
                    src={tabs[selectedTab].content.image}
                    alt={tabs[selectedTab].content.heading}
                    // layout="fill"
                    // objectFit="cover"
                    className="rounded-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MetricsTabs;