import React, { useState, useRef, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdArrowOutward } from "react-icons/md";
import { Toaster } from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";
import Insta from "@/assets/Home/insta.svg";
import youtube from "@/assets/Home/instagram.svg";
import fb from "@/assets/Home/fb.svg";
import { IoCallOutline } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import SuccessMessage from "../SuccessMessage";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { branches } from "../footer/footer";
import DatePicker from "../DatePicker/datePicker";
import SearchableSelect from "../searchAndSelect/SearchableSelect";
import { appointmentSchema } from "@/schemas/appointmentSchema";
import { fetchBranchList } from "@/lib/api/branches";


const enquery = [
  { id: 1, enquery: "treatment" },
  { id: 2, enquery: "others" },
];

const typeofenquirys = [
  { id: 1, typeofenquirys: "Marketing" },
  { id: 2, typeofenquirys: "Business" },
  { id: 3, typeofenquirys: "Jobs" },
];

/**
 * ContactAppointmentForm refactored to use react-hook-form with Zod validation.
 * Supports conditional routing, robust field validation styling, and duplicate submit prevention.
 */
function ContactAppointmentForm() {
  const [successMessage, setSuccessMessage] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
    const [branchList, setBranchList] = useState([]);
  const nameInputRef = useRef(null);

  // Initialize react-hook-form with Zod validation resolver
  const {
    register,
    handleSubmit,
    control,
    watch,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      mobile: "",
      enquiry: "treatment",
      branch: "",
      appointmentDate: null,
      typeofenquiry: "",
      remarks: "",
      consent: false,
      formType: "Appointment",
    },
  });

  // Watch the enquiry field to handle conditional rendering reactively
  const enquiryValue = watch("enquiry");

  // Autofocus the name field on mount
  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

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

  const handleFormSubmit = async (formData) => {
    setSubmissionError("");

    try {
      const response = await fetch("/api/saveData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          formType: "Appointment",
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage(true);
        reset({
          name: "",
          mobile: "",
          enquiry: "treatment",
          branch: "",
          appointmentDate: null,
          typeofenquiry: "",
          remarks: "",
          consent: false,
          formType: "Appointment",
        });
      } else {
        if (result.errors) {
          // Map backend validation errors back to react-hook-form fields
          Object.entries(result.errors).forEach(([field, msg]) => {
            setError(field, { type: "server", message: msg });
          });
        } else {
          setSubmissionError(result.message || "Failed to submit the form. Please try again.");
        }
      }
    } catch (error) {
      console.error(error);
      setSubmissionError("Network error. Please check your connection.");
    }
  };

  // Date limits
  const today = new Date();
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 10);

  // Merge hook form's ref with our local focus ref
  const { ref: nameRef, ...nameRegisterProps } = register("name", {
    onChange: (e) => {
      e.target.value = e.target.value.replace(/[^a-zA-Z\s.]/g, "");
    }
  });

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
            {/* Left Column - Contact Info */}
            <div>
              <h2 className="font-semibold">Book your Free Appointment</h2>
              <p className="text-gray-600 mt-2">
                Take the first step towards your parenthood journey.
              </p>

              <div className="space-y-6 mt-5">
                <div className="flex items-start lg:space-x-4 space-x-2">
                  <div className="bg-white p-2 rounded-full">
                    <IoCallOutline className="text-xl text-black" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500">CALL</p>
                    <p className="font-semibold">+91 76-7007-6006</p>
                  </div>
                </div>

                <div className="flex items-start lg:space-x-4 space-x-2">
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
            <div className="rounded-2xl shadow-lg p-7 bg-white">
              <h3 className="font-semibold text-[#061C3D] mb-8">
                The first step is always the hardest, but we promise to make the rest easy.
              </h3>

              <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
                <input type="hidden" {...register("formType")} />

                {/* Name Input */}
                <div>
                  <label className="block text-sm text-black mb-1">
                    Name <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    ref={(e) => {
                      nameRef(e);
                      nameInputRef.current = e;
                    }}
                    {...nameRegisterProps}
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

                {/* Whatsapp / Mobile Input */}
                <div>
                  <label className="block text-sm text-black mb-1">
                    Whatsapp Number <span className="text-red-700">*</span>
                  </label>
                  <Controller
                    name="mobile"
                    control={control}
                    render={({ field }) => (
                      <PhoneInput
                        {...field}
                        country="in"
                        placeholder="Enter your whatsapp number"
                        disableCountryCode={false}
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

                {/* Enquiry Selector */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Select Your Enquiry <span className="text-red-700">*</span>
                  </label>
                  <select
                    {...register("enquiry")}
                    className={`mt-1 block w-full px-3 h-10 rounded-lg border text-sm transition-all focus:outline-none ${errors.enquiry
                      ? "border-[#EB3C3C] bg-[#FFF9F9] focus:border-[#EB3C3C]"
                      : "border-[#B1B2B3] hover:border-neutral-400 focus:border-[#1C315E] focus:ring-1 focus:ring-[#1C315E] bg-white text-neutral-800"
                      }`}
                  >
                    <option value="">Select Enquiry</option>
                    {enquery.map((opt, index) => (
                      <option key={index} value={opt.enquery}>
                        {opt.enquery}
                      </option>
                    ))}
                  </select>
                  {errors.enquiry && (
                    <p className="text-[#EB3C3C] text-xs mt-1">
                      {errors.enquiry.message}
                    </p>
                  )}
                </div>

                {/* Conditional fields: Treatment */}
                {enquiryValue === "treatment" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Select Branch <span className="text-red-700">*</span>
                      </label>
                      <Controller
                        name="branch"
                        control={control}
                        render={({ field }) => (
                          <SearchableSelect
                            options={branchList}
                            value={field.value}
                            onChange={field.onChange}
                            labelKey="branch_name"
                            valueKey="id"
                            placeholder="Search & select branch location"
                            error={errors.branch?.message}
                          />
                        )}
                      />
                      {errors.branch && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.branch.message}
                        </p>
                      )}
                    </div>

                    <div style={{ width: "100%" }}>
                      <label className="block text-sm text-black mb-1">
                        Appointment Date <span className="text-red-700">*</span>
                      </label>
                      <Controller
                        name="appointmentDate"
                        control={control}
                        render={({ field }) => (
                          <DatePicker
                            value={field.value}
                            onChange={(date) => {
                              // Normalize to local time
                              const localDate = date
                                ? new Date(
                                  date.getTime() -
                                  date.getTimezoneOffset() * 60000
                                )
                                : null;
                              field.onChange(localDate);
                            }}
                            placeholder=""
                            error={errors.appointmentDate?.message}
                          />
                        )}
                      />
                    </div>
                  </>
                )}

                {/* Conditional fields: Others */}
                {enquiryValue === "others" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Type of Enquiry <span className="text-red-700">*</span>
                      </label>
                      <select
                        {...register("typeofenquiry")}
                        className={`mt-1 block w-full px-3 h-10 rounded-lg border text-sm transition-all focus:outline-none ${errors.typeofenquiry
                          ? "border-[#EB3C3C] bg-[#FFF9F9] focus:border-[#EB3C3C]"
                          : "border-[#B1B2B3] hover:border-neutral-400 focus:border-[#1C315E] focus:ring-1 focus:ring-[#1C315E] bg-white text-neutral-800"
                          }`}
                      >
                        <option value="">Select Enquiry</option>
                        {typeofenquirys.map((opt, index) => (
                          <option key={index} value={opt.typeofenquirys}>
                            {opt.typeofenquirys}
                          </option>
                        ))}
                      </select>
                      {errors.typeofenquiry && (
                        <p className="text-[#EB3C3C] text-xs mt-1">
                          {errors.typeofenquiry.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm text-black mb-1">
                        Remarks <span className="text-red-700">*</span>
                      </label>
                      <input
                        type="text"
                        {...register("remarks")}
                        placeholder="Enter your full remarks"
                        className={`w-full px-3 h-10 rounded-lg border text-sm transition-all focus:outline-none ${errors.remarks
                          ? "border-[#EB3C3C] bg-[#FFF9F9] focus:border-[#EB3C3C]"
                          : "border-[#B1B2B3] hover:border-neutral-400 focus:border-[#1C315E] focus:ring-1 focus:ring-[#1C315E] bg-white text-neutral-800"
                          }`}
                      />
                      {errors.remarks && (
                        <p className="text-[#EB3C3C] text-xs mt-1">
                          {errors.remarks.message}
                        </p>
                      )}
                    </div>
                  </>
                )}

                {/* Consent checkbox */}
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="consent"
                    {...register("consent")}
                    className="mt-1"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-700">
                    By clicking submit, I agree to the{" "}
                    <a href="/terms" className="text-blue-600 underline">
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a href="/privacy-policy" className="text-blue-600 underline">
                      Privacy Policy
                    </a>{" "}
                    and consent to receive appointment-related updates via SMS/Email.
                  </label>
                </div>
                {errors.consent && (
                  <p className="text-red-500 text-xs">
                    {errors.consent.message}
                  </p>
                )}

                {/* Submit button with loading feedback */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`button-all w-full flex justify-center items-center ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                  {isSubmitting ? "Submitting..." : "Take your free step toward parenthood"}
                  <MdArrowOutward className="rotate-45 ml-2" />
                </button>

              </form>
              <p className="text-[10px] sm:text-[11px] text-[#173366]/85 text-end">
                We will reach you within 45 minutes <span className="text-red-500">*</span>
              </p>

              <SuccessMessage
                show={successMessage}
                title="Your appointment has been booked successfully"
                onClose={() => setSuccessMessage(false)}
              />

              {submissionError && (
                <p className="text-red-500 text-xs mt-3 text-center">
                  {submissionError}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactAppointmentForm;
