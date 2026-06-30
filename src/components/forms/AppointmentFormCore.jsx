/**
 * AppointmentFormCore — The single reusable appointment form component.
 *
 * This component renders the complete form UI and is fully parameterised
 * via props so it can be dropped into any context: light-theme modal,
 * dark-theme branch page, hero section, etc.
 *
 * Props
 * ─────
 * @prop {string}   formType      Sent to the API to identify form origin
 *                                Default: "Branch Appointment"
 * @prop {"light"|"dark"} theme   Controls colour palette of all form elements
 *                                Default: "light"
 * @prop {string}   [heading]     Optional heading shown above the form
 * @prop {string}   [buttonText]  Submit button label
 *                                Default: "Take your free step toward parenthood"
 * @prop {string}   [className]   Extra class string on the root <div>
 * @prop {Function} [onSuccess]   Callback invoked after a successful submission
 * @prop {boolean}  [showNote]    Show the "We will reach you within 45 minutes" note
 *                                Default: true
 *
 * Usage examples
 * ──────────────
 * Light theme (modal / card):
 *   <AppointmentFormCore theme="light" formType="Branch Appointment" />
 *
 * Dark theme (branch hero):
 *   <AppointmentFormCore theme="dark" formType="branch" heading="Get Answers From Fertility Experts" />
 */

"use client";

import React from "react";
import { Controller } from "react-hook-form";
import { IoMdArrowForward } from "react-icons/io";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import SearchableSelect from "@/components/searchAndSelect/SearchableSelect";
import SuccessMessage from "@/components/SuccessMessage";
import { useAppointmentForm } from "@/hooks/useAppointmentForm";

// ---------------------------------------------------------------------------
// Theme token maps
// Keeping all theme-specific classes here makes it trivial to add a third
// theme in future without touching form logic.
// ---------------------------------------------------------------------------
const THEMES = {
  light: {
    input:
      "mt-1 block w-full px-3 h-10 rounded-lg border text-sm transition-all focus:outline-none border-[#B1B2B3] hover:border-neutral-400 focus:border-[#1C315E] focus:ring-1 focus:ring-[#1C315E] bg-white text-neutral-800",
    inputError:
      "mt-1 block w-full px-3 h-10 rounded-lg border text-sm transition-all focus:outline-none border-[#EB3C3C] bg-[#FFF9F9] focus:border-[#EB3C3C]",
    label: "block text-sm font-medium text-gray-700",
    errorText: "text-[#EB3C3C] text-xs mt-1",
    globalError: "text-red-500 text-sm text-center",
    note: "text-[10px] sm:text-[11px] text-[#173366]/85 text-end",
    heading: "font-semibold text-left mb-4",
    phoneInputStyle: {
      width: "100%",
      height: "40px",
      borderRadius: "8px",
      fontSize: "14px",
      color: "#262626",
    },
    phoneInputErrorStyle: { borderColor: "#EB3C3C", backgroundColor: "#FFF9F9" },
    phoneInputOkStyle: { borderColor: "#B1B2B3", backgroundColor: "#ffffff" },
  },
  dark: {
    input:
      "w-full p-3 bg-[#8894af]/80 rounded-xl outline-none placeholder-white text-white border border-transparent focus:border-white",
    inputError:
      "w-full p-3 bg-[#8894af]/80 rounded-xl outline-none placeholder-white text-white border border-red-500 focus:border-red-500",
    label: "block text-sm font-medium text-white",
    errorText: "text-red-300 text-sm mt-1",
    globalError: "text-red-300 text-sm text-center",
    note: "text-[10px] sm:text-[11px] text-white/70 text-end",
    heading: "font-semibold text-white mb-4",
    phoneInputStyle: {
      width: "100%",
      height: "48px",
      borderRadius: "12px",
      backgroundColor: "rgba(136,148,175,0.8)",
      fontSize: "14px",
      color: "#ffffff",
    },
    phoneInputErrorStyle: { border: "1px solid #ef4444" },
    phoneInputOkStyle: { border: "1px solid transparent" },
    phoneButtonStyle: {
      borderRadius: "12px 0 0 12px",
      border: "none",
      backgroundColor: "rgba(136,148,175,0.8)",
    },
    phoneDropdownStyle: {
      backgroundColor: "#1C315E",
      color: "#ffffff",
    },
  },
};

// ---------------------------------------------------------------------------
// Key handler — allows only valid name characters on key press
// ---------------------------------------------------------------------------
const handleNameKeyDown = (e) => {
  const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Home", "End"];
  if (!allowedKeys.includes(e.key) && !/^[a-zA-Z\s.]$/.test(e.key)) {
    e.preventDefault();
  }
};

// ---------------------------------------------------------------------------
// Paste guard — blocks pasting invalid characters into name field
// ---------------------------------------------------------------------------
const handleNamePaste = (e) => {
  const pasted = e.clipboardData.getData("text");
  if (!/^[a-zA-Z\s.]+$/.test(pasted)) {
    e.preventDefault();
  }
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function AppointmentFormCore({
  formType = "Branch Appointment",
  theme = "light",
  heading,
  buttonText = "Take your free step toward parenthood",
  className = "",
  onSuccess,
  showNote = true,
}) {
  const t = THEMES[theme] || THEMES.light;

  const {
    register,
    handleSubmit,
    control,
    errors,
    isSubmitting,
    branchList,
    successMessage,
    submissionError,
    setSuccessMessage,
    handleFormSubmit,
  } = useAppointmentForm({ formType, onSuccess });

  return (
    <div className={className}>
      {heading && <h3 className={t.heading}>{heading}</h3>}

      <form
        className="space-y-4"
        onSubmit={handleSubmit(handleFormSubmit)}
        noValidate
      >
        {/* Hidden formType identifier */}
        <input type="hidden" {...register("formType")} />

        {/*
         * Honeypot field — invisible to real users (moved offscreen via CSS).
         * Bots that auto-fill all inputs will populate this, triggering
         * silent rejection on the server.
         */}
        <div
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", opacity: 0, tabIndex: -1 }}
        >
          <label htmlFor="hp_field">Leave this empty</label>
          <input
            id="hp_field"
            type="text"
            autoComplete="off"
            tabIndex={-1}
            {...register("_honeypot")}
          />
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Name Field                                                        */}
        {/* ---------------------------------------------------------------- */}
        <div>
          <label htmlFor="af_name" className={t.label}>
            Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="af_name"
            type="text"
            maxLength={50}
            placeholder="Enter your full name"
            autoComplete="name"
            aria-required="true"
            aria-describedby={errors.name ? "af_name_error" : undefined}
            aria-invalid={!!errors.name}
            {...register("name", {
              onChange: (e) => {
                // Real-time strip of disallowed characters
                e.target.value = e.target.value.replace(/[^a-zA-Z\s.]/g, "");
              },
            })}
            onKeyDown={handleNameKeyDown}
            onPaste={handleNamePaste}
            className={errors.name ? t.inputError : t.input}
          />
          {errors.name && (
            <p id="af_name_error" role="alert" className={t.errorText}>
              {errors.name.message}
            </p>
          )}
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Mobile / WhatsApp Field                                           */}
        {/* ---------------------------------------------------------------- */}
        <div>
          <label htmlFor="af_mobile" className={t.label}>
            WhatsApp Number <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <Controller
            name="mobile"
            control={control}
            render={({ field }) => (
              <PhoneInput
                {...field}
                inputProps={{
                  id: "af_mobile",
                  "aria-required": "true",
                  "aria-describedby": errors.mobile ? "af_mobile_error" : undefined,
                  "aria-invalid": !!errors.mobile,
                }}
                country="in"
                placeholder="Enter your WhatsApp number"
                inputStyle={{
                  ...t.phoneInputStyle,
                  ...(errors.mobile ? t.phoneInputErrorStyle : t.phoneInputOkStyle),
                }}
                buttonStyle={t.phoneButtonStyle || undefined}
                dropdownStyle={t.phoneDropdownStyle || undefined}
              />
            )}
          />
          {errors.mobile && (
            <p id="af_mobile_error" role="alert" className={t.errorText}>
              {errors.mobile.message}
            </p>
          )}
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Branch / Location Field                                           */}
        {/* ---------------------------------------------------------------- */}
        <div>
          <label className={`${t.label} mb-1`}>
            Select Location <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <Controller
            name="branch"
            control={control}
            render={({ field }) => (
              <SearchableSelect
                options={branchList}
                value={field.value}
                onChange={field.onChange}
                placeholder="Select Location"
                labelKey="branch_name"
                valueKey="id"
                theme={theme}
                error={errors.branch?.message}
              />
            )}
          />
          {errors.branch && (
            <p role="alert" className={t.errorText}>
              {errors.branch.message}
            </p>
          )}
        </div>

        {/* Global submission error banner */}
        {submissionError && (
          <p role="alert" className={t.globalError}>
            {submissionError}
          </p>
        )}

        {/* ---------------------------------------------------------------- */}
        {/* Submit Button                                                     */}
        {/* ---------------------------------------------------------------- */}
        <button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className={`w-full text-white h-10 rounded-lg transition-all flex justify-center items-center font-medium ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#173366] hover:bg-[#1f4285]"
          }`}
        >
          {isSubmitting ? (
            "Submitting..."
          ) : (
            <>
              {buttonText}
              <span className="ml-2" aria-hidden="true">
                <IoMdArrowForward />
              </span>
            </>
          )}
        </button>
      </form>

      {showNote && (
        <p className={t.note}>
          We will reach you within 45 minutes{" "}
          <span className="text-red-500" aria-hidden="true">*</span>
        </p>
      )}

      <SuccessMessage
        show={successMessage}
        onClose={() => setSuccessMessage(false)}
      />
    </div>
  );
}
