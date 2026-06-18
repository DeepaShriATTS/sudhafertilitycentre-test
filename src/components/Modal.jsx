"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion & AnimatePresence
import ContactForm from "./contact/contactForm";
import { Controller, useForm } from "react-hook-form";
import { branches } from "./footer/footer";
import { MdArrowOutward } from "react-icons/md";
import SuccessMessage from "./SuccessMessage";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import DatePicker from "./DatePicker/datePicker";
import { SlClose } from "react-icons/sl";
import {
  websiteleadCreateListEndpoint,
  branchtableListEndpoint,
} from "@/pages/api/shipapi";
import SearchableSelect from "./searchAndSelect/SearchableSelect";
const Modals = ({ isOpen, onClose }) => {
  const [successMessage, setSuccessMessage] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [branchList, setBranchList] = useState([]);
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const inputRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(null);

  // const onSubmit = async (formData) => {
  //   setSubmissionError("");
  //   try {
  //     const response = await fetch("/api/saveData", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       onClose();
  //       // setSuccessMessage(true);
  //       reset();
  //     } else {
  //       setSubmissionError("Failed to submit the form. Please try again.");
  //     }
  //   } catch (error) {
  //     setSubmissionError("Network error. Please check your connection.");
  //   }
  // };

  const onSubmit = async (formData) => {
    setSubmissionError("");
    try {
      // 1️⃣ Normalize date
      const d = formData.appointmentDate;
      const appointmentDate = d
        ? `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
          2,
          "0"
        )}-${String(d.getDate()).padStart(2, "0")}`
        : "";

      // 2️⃣ First submit to local api/saveData for server-side validation check
      const saveResponse = await fetch("/api/saveData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          formType: "Appointment",
        }),
      });

      if (!saveResponse.ok) {
        const errorData = await saveResponse.json().catch(() => ({}));
        console.log("Server Error.",errorData);
        setSubmissionError(errorData.error || "Failed to validate form on server.");
        return;
      }

      // 3️⃣ Submit to CRM
      const cleanMobile = formData.mobile ? formData.mobile.replace(/\D/g, "") : "";
      const phoneWithoutCountryCode = cleanMobile.startsWith("91") && cleanMobile.length === 12
        ? cleanMobile.substring(2)
        : cleanMobile;

      const body = {
        name: formData.name,
        branch: formData.branch,
        mobile: phoneWithoutCountryCode,
        appointment_date: appointmentDate,
        source_type: "21",
        lead_type: "4",
      };

      const response = await fetch(websiteleadCreateListEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        console.error("CRM submission failed");
        setSubmissionError("Failed to submit to CRM. Please try again.");
        return;
      }

      setSuccessMessage(true);
      reset();
      setSelectedDate(null);
    } catch (error) {
      console.error("Server Error.", error);
      setSubmissionError("Network error. Please try again later.");
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(branchtableListEndpoint);
        if (res.ok) {
          const data = await res.json();
          setBranchList(data?.data?.list);
        } else {
          console.error("API responded with an error");
        }
      } catch (err) {
        console.error("Fetch Error!", err);
      }
    }
    fetchData();
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          initial={{ opacity: 0 }} // Fade-in animation for modal background
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-6 rounded-3xl shadow-lg w-[100%] md:w-[34%]"
            initial={{ scale: 0.8, opacity: 0 }} // Start small & invisible
            animate={{ scale: 1, opacity: 1 }} // Scale up & fade in
            exit={{ scale: 0.8, opacity: 0 }} // Scale down on close
            transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
          >
            {/* Header Animation */}
            <div className="flex justify-between">
              <motion.h3
                className="font-semibold  mb-4"
                initial={{ opacity: 0, y: -20 }} // Start off-screen
                animate={{ opacity: 1, y: 0 }} // Fade and slide into place
                transition={{ duration: 0.5 }}
              >
                Ready to Start Your Journey to <br /> Meet Your Little One?
              </motion.h3>
              <SlClose onClick={onClose} size={30} className="text-[#061C3D]" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input type="hidden" name="formType" value="Appointment" />

              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <label className="block text-sm text-black mb-1">
                  Name <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  maxLength={50}
                  placeholder="Enter your full name"
                  ref={inputRef}
                  onKeyDown={(e) => {
                    const allowedKeys = [
                      "Backspace",
                      "Delete",
                      "ArrowLeft",
                      "ArrowRight",
                      "Tab",
                      "Home",
                      "End",
                    ];

                    if (
                      !allowedKeys.includes(e.key) &&
                      !/^[a-zA-Z\s]$/.test(e.key)
                    ) {
                      e.preventDefault();
                    }
                  }}
                  onPaste={(e) => {
                    const pastedText = e.clipboardData.getData("text");

                    if (!/^[a-zA-Z\s]+$/.test(pastedText)) {
                      e.preventDefault();
                    }
                  }}
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                    maxLength: {
                      value: 50,
                      message: "Name cannot exceed 50 characters",
                    },
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message: "Only letters and spaces are allowed",
                    },
                    setValueAs: (value) =>
                      value?.trim().replace(/\s+/g, " "),
                  })}
                  className={`w-full px-3 h-10 rounded-lg border text-sm transition-all focus:outline-none ${errors.name
                      ? "border-[#EB3C3C] bg-[#FFF9F9] focus:border-[#EB3C3C]"
                      : "border-[#B1B2B3] hover:border-neutral-400 focus:border-[#1C315E] focus:ring-1 focus:ring-[#1C315E] bg-white text-neutral-800"
                    }`}
                />
                {errors.name && (
                  <p className="text-[#EB3C3C] text-xs mt-1">{errors.name.message}</p>
                )}
              </motion.div>

              {/* WhatsApp Number */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <label className="block text-sm text-black mb-1">
                  WhatsApp Number <span className="text-red-700">*</span>
                </label>
                <Controller
                  name="mobile"
                  control={control}
                  rules={{
                    required: "Mobile number is required",
                    validate: (value) => {
                      if (!value) return "Mobile number is required";
                      const clean = value.toString().replace(/\D/g, "");
                      const phoneWithoutCountryCode = clean.startsWith("91") && clean.length === 12
                        ? clean.substring(2)
                        : clean;
                      return /^[6-9]\d{9}$/.test(phoneWithoutCountryCode)
                        ? true
                        : "Please enter a valid 10-digit phone number.";
                    },
                  }}
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      country="in"
                      placeholder="Enter your WhatsApp number"
                      inputStyle={{
                        width: "100%",
                        height: "40px",
                        borderRadius: "8px",
                        borderColor: errors.mobile ? "#EB3C3C" : "#B1B2B3",
                        backgroundColor: errors.mobile ? "#FFF9F9" : "#ffffff",
                        fontSize: "14px",
                        color: "#262626",
                      }}
                    />
                  )}
                />
                {errors.mobile && (
                  <p className="text-[#EB3C3C] text-xs mt-1">
                    {errors.mobile.message}
                  </p>
                )}
              </motion.div>

              {/* Select Branch */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Branch <span className="text-red-700">*</span>
                </label>
                <Controller
                  name="branch"
                  control={control}
                  rules={{ required: "Location is required" }}
                  render={({ field }) => (
                    <SearchableSelect
                      {...field}
                      options={branchList}
                      labelKey="branch_name"
                      valueKey="id"
                      placeholder="Select Location"
                      error={errors.branch?.message}
                    />
                  )}
                />
                {errors.branch && (
                  <p className="text-[#EB3C3C] text-xs mt-1">
                    {errors.branch.message}
                  </p>
                )}
              </motion.div>

              {/* Appointment Date */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <label className="block text-sm text-black mb-1">
                  Appointment Date <span className="text-red-700">*</span>
                </label>
                <Controller
                  name="appointmentDate"
                  control={control}
                  rules={{ required: "Appointment date is required" }}
                  render={({ field }) => (
                    <DatePicker
                      value={field.value}
                      onChange={(date) => {
                        setSelectedDate(date);
                        field.onChange(date);
                      }}
                      placeholder=""
                      error={errors.appointmentDate?.message}
                    />
                  )}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="button-all w-full flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                Take your free step toward parenthood
                <MdArrowOutward className="rotate-45" />
              </motion.button>
            </form>
            <p className="text-[10px] sm:text-[11px] text-[#173366]/85 text-end">
                    We will reach you within 45 minutes <span className="text-red-500">*</span>
                </p>

            {/* Success Message */}
            <SuccessMessage
              show={successMessage}
              title="Your appointment has been booked successfully"
              onClose={() => setSuccessMessage(false)}
            />

            {/* Submission Error */}
            {submissionError && (
              <p className="text-red-500 text-xs">{submissionError}</p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modals;
