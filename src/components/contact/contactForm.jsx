"use client";
import React, { useState, useRef, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { MdArrowOutward } from "react-icons/md";
import { Toaster } from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";
import Insta from "@/assets/Home/instagram.svg";
import youtube from "@/assets/Home/youtube.svg";
import fb from "@/assets/Home/facebook.svg";
import { IoCallOutline } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import SuccessMessage from "../SuccessMessage";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import DatePicker from "../DatePicker/datePicker";
import SearchableSelect from "../searchAndSelect/SearchableSelect";
import { fetchBranchList } from "@/lib/api/branches";
import { apiClient } from "@/lib/axios/instance";

function ContactForm() {
  const [successMessage, setSuccessMessage] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [branchList, setBranchList] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const inputRef = useRef(null);

  // ✅ include reset() here
  const {
    control,
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  // ✅ onSubmit Function (Fully fixed)
  const onSubmit = async (formData) => {
    setSubmissionError("");

    try {
      // Format appointment date
      const d = formData.appointmentDate;
      const appointmentDate = d
        ? `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`
        : "";

      // Submit to /api/saveData — CRM is proxied server-side, no client exposure
      await apiClient.post("/api/saveData", {
        ...formData,
        appointmentDate,
        formType: "Contact Appointment",
      });

      setSuccessMessage(true);
      reset();
      setSelectedDate(null);
    } catch (err) {
      const responseData = err.response?.data;
      if (responseData && responseData.errors) {
        // Map server-side validation / duplicate errors to respective fields
        Object.entries(responseData.errors).forEach(([field, msg]) => {
          setError(field, { type: "server", message: String(msg) });
        });
        setSubmissionError(responseData.message || "Please correct the highlighted fields.");
      } else {
        setSubmissionError(
          err.message || "Network error. Please check your connection and try again."
        );
      }
    }
  };

  // Fetch branches via internal proxy — CRM base URL never exposed to client
  useEffect(() => {
    let isMounted = true;
    fetchBranchList().then((list) => {
      if (isMounted) {
        setBranchList(list);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // ✅ Auto-focus first input
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // ✅ Date limits
  const today = new Date();
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 10);

  return (
    <>
      <Toaster position="center" reverseOrder={false} />
      <div
        id="contact-now"
        className="py-16 bg-cover bg-center"
        style={{
          background:
            "linear-gradient(170deg, #F0F5FF, #F0F5FF 60%, white 60%, white)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <div>
              <h2 className="font-semibold mb-5">Book your Free Appointment</h2>
              <p className="text-[18px] mb-16">
                Take the first step towards your parenthood journey.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-2 lg:space-x-4">
                  <div className="bg-white p-2 rounded-full">
                    <IoCallOutline className="text-xl text-black" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500">CALL</p>
                    <p className="font-semibold">+91 76-7007-6006</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2 lg:space-x-4">
                  <div className="bg-white p-2 rounded-full shadow-md">
                    <AiTwotoneMail className="text-xl text-black" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500">EMAIL US</p>
                    <p className="font-semibold">care@sudhahospitals.com</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <div className="flex items-center mb-2 mt-6">
                  <div className="w-[20px] border-t border-2 border-black ml-2"></div>
                  <p className="p-1">Connect with us:</p>
                </div>
                <div className="flex gap-3">
                  <Link
                    href="https://www.facebook.com/sudhafertilitycentre"
                    target="_blank"
                  >
                    <Image src={fb} alt="Facebook" className="w-[40px]" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@sudhafertilitycentre"
                    target="_blank"
                  >
                    <Image src={youtube} alt="YouTube" className="w-[40px]" />
                  </Link>
                  <Link
                    href="https://instagram.com/sudhafertilitycentre/"
                    target="_blank"
                  >
                    <Image src={Insta} alt="Instagram" className="w-[40px]" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="rounded-5xl shadow-lg p-7 bg-white">
              <h3 className="font-semibold text-[#061C3D] mb-8 leading-[1.6]">
                The first step is always the hardest, but we promise to make the rest easy.
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm text-black mb-1">
                    Name <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    ref={inputRef}
                    {...register("name", {
                      required: "Name is required",
                      minLength: { value: 2, message: "Name must be at least 2 characters" },
                      pattern: {
                        value: /^[a-zA-Z\s.]+$/,
                        message: "Name can only contain letters, spaces, and dots"
                      },
                      onChange: (e) => {
                        e.target.value = e.target.value.replace(/[^a-zA-Z\s.]/g, "");
                      }
                    })}
                    placeholder="Enter your full name"
                    className={`w-full px-3 h-10 rounded-lg border text-sm transition-all focus:outline-none ${errors.name
                      ? "border-[#EB3C3C] bg-[#FFF9F9] focus:border-[#EB3C3C]"
                      : "border-[#B1B2B3] hover:border-neutral-400 focus:border-[#1C315E] focus:ring-1 focus:ring-[#1C315E] bg-white text-neutral-800"
                      }`}
                  />
                  {errors.name && (
                    <p className="text-[#EB3C3C] text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-sm text-black mb-1">
                    Whatsapp Number <span className="text-red-700">*</span>
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
                          : "Please enter a valid 10-digit mobile number.";
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
                </div>

                {/* Branch */}
                <div>
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
                        placeholder="Search & select branch location"
                        error={errors.branch?.message}
                      />
                    )}
                  />
                  {errors.branch && (
                    <p className="text-[#EB3C3C] text-xs mt-1">
                      {errors.branch.message}
                    </p>
                  )}
                </div>

                {/* Appointment Date */}
                <div>
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
                          const localDate = date
                            ? new Date(
                              date.getTime() -
                              date.getTimezoneOffset() * 60000
                            )
                            : null;
                          setSelectedDate(localDate);
                          field.onChange(localDate);
                        }}
                        placeholder=""
                        error={errors.appointmentDate?.message}
                      />
                    )}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`button-all w-full flex justify-center items-center ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {isSubmitting ? "Submitting..." : "Take your free step toward parenthood"}
                  {!isSubmitting && <MdArrowOutward className="rotate-45 ml-1" />}
                </button>

              </form>
              <p className="text-[10px] sm:text-[11px] text-[#173366]/85 text-end">
                We will reach you within 45 minutes <span className="text-red-500">*</span>
              </p>

              {/* Success & Error */}
              <SuccessMessage
                show={successMessage}
                title="Your appointment has been booked successfully"
                onClose={() => setSuccessMessage(false)}
              />
              {submissionError && (
                <p className="text-red-500 text-xs mt-2">{submissionError}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
