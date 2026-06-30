"use client";

/**
 * BranchForm — Dark-theme wrapper around AppointmentFormCore.
 *
 * Used on individual branch pages as the hero-section contact form.
 * The glassmorphism card shell (motion.div, Calendar icon) is kept here
 * since it is purely presentational and specific to this context.
 *
 * All form logic (fetch, submit, validation, honeypot) lives in:
 *   - useAppointmentForm (hook)
 *   - AppointmentFormCore (component)
 */

import { motion } from "framer-motion";
import React from "react";
import Calendar from "@/assets/branch/ambatur/callender.svg";
import Image from "next/image";
import AppointmentFormCore from "@/components/forms/AppointmentFormCore";

function BranchForm() {
  return (
    <div>
      <motion.div
        className="w-full lg:w-[450px] bg-white/10 backdrop-blur-xl rounded-lg p-6 mt-8 lg:mt-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Card header — unique to BranchForm's dark hero context */}
        <div className="flex justify-between items-start mb-6">
          <h3 className="font-semibold text-white">
            Get Answers From Fertility Experts
          </h3>
          <Image src={Calendar} alt="Calendar icon" className="w-10 h-10 sm:w-12 sm:h-12" />
        </div>

        <AppointmentFormCore
          formType="branch"
          theme="dark"
          buttonText="Take your free step toward parenthood"
          showNote={false}
        />

        <p className="text-[10px] sm:text-[11px] text-white/70 text-end mt-2">
          We will reach you within 45 minutes{" "}
          <span className="text-red-500" aria-hidden="true">*</span>
        </p>
      </motion.div>
    </div>
  );
}

export default BranchForm;
