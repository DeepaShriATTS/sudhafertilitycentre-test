import React, { useState,useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { MdArrowOutward } from "react-icons/md";
import { Toaster } from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";
import Insta from "@/assets/Home/insta.svg";
import youtube from "@/assets/Home/youtube.svg";
import fb from "@/assets/Home/fb.svg";
import { IoCallOutline } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import SuccessMessage from "../SuccessMessage";
import { branches } from "../footer/footer";
import { useRouter } from "next/navigation";
import SearchableSelect from "../searchAndSelect/SearchableSelect";
import { websiteleadCreateListEndpoint, branchtableListEndpoint } from '@/pages/api/shipapi';


function BookAppointmentFormtelugu() {
  const [successMessage, setSuccessMessage] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [branchList, setBranchList] = useState([]);
  const router = useRouter();
  // Using useForm for validation
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    setSubmissionError("");
    try {
      const response = await fetch("/api/saveData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/thank-you");
        setSuccessMessage(true);
      } else {
        const errorData = await response.json().catch(() => ({}));
        setSubmissionError(errorData.error || "Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setSubmissionError("Network error. Please check your connection.");
    }
  };

    useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(branchtableListEndpoint);
        if (res.ok) {
          const data = await res.json();
          setBranchList(data?.data?.list || []);
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
            <div className="space-y-8">
              <h2 className="text-[32px] font-bold text-black mb-2">
                మీ అపాయింట్‌మెంట్‌ను ఉచితంగా బుక్ చేసుకోవడానికి మాకు కాల్ చేయండి
              </h2>

              <div className="space-y-6">
                <div className="flex items-start lg:space-x-4 space-x-2">
                  <div className="bg-white p-2 rounded-full">
                    <IoCallOutline className="text-xl text-black" />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-gray-500">
                      CALL
                    </p>
                    <p className="text-[14px] font-semibold">
                      +91 76-7007-6006
                    </p>
                  </div>
                </div>

                <div className="flex items-start lg:space-x-4 space-x-2">
                  <div className="bg-white p-2 rounded-full shadow-md">
                    <AiTwotoneMail className="text-xl text-black" />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-gray-500">
                      EMAIL US
                    </p>
                    <p className="text-[14px] font-semibold">
                      care@sudhahospitals.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <div className="flex items-center mb-2">
                  <div className="w-[20px] border-t border-2 border-black ml-2"></div>
                  <p className="p-1 text-sm">Connect with us:</p>
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
            <div className="rounded-3xl shadow-lg p-6 md:12 bg-white">
              <h4 className="text-lg font-semibold text-[#061C3D] mb-8 leading-[1.6]">
                సుధ వద్ద నమ్మకంగా తల్లిదండ్రుల వైపు మీ ప్రయాణాన్ని ప్రారంభించండి.
              </h4>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input type="hidden" name="formType" value="landing page" />
                <div>
                  <label className="block text-sm text-black mb-1">
                    మీ పేరు <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", {
                      required: "Name is required",
                      minLength: { value: 2, message: "Name must be at least 2 characters" },
                      pattern: {
                        value: /^[a-zA-Z\s.]+$/,
                        message: "Name can only contain letters, spaces, and dots"
                      }
                    })}
                    placeholder="మీ పేరు"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm text-black mb-1">
                    వాట్సాప్ నంబర్ <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="tel"
                    {...register("mobile", {
                      required: "Whatsapp number is required",
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: "Please enter a valid 10-digit mobile number."
                      }
                    })}
                    placeholder="వాట్సాప్ నంబర్"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none"
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-xs">
                      {errors.mobile.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm text-black mb-1">
                    మీ స్థానం <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("location", {
                      required: "Location is required",
                      minLength: { value: 2, message: "Location must be at least 2 characters" }
                    })}
                    placeholder="మీ స్థానం"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none"
                  />
                  {errors.location && (
                    <p className="text-red-500 text-xs">
                      {errors.location.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    సమీపంలోని బ్రాంచ్‌ను ఎంచుకోండి <span className="text-red-700">*</span>
                  </label>
                  <Controller
                    name="branch"
                    control={control}
                    rules={{ required: "Branch selection is required" }}
                    render={({ field }) => (
                      <SearchableSelect
                        {...field}
                        options={branchList}
                        labelKey="title"
                        valueKey="title"
                        placeholder="సమీపంలోని బ్రాంచ్‌ను ఎంచుకోండి"
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

                {submissionError && (
                  <p className="text-red-500 text-xs mt-2 text-center">
                    {submissionError}
                  </p>
                )}
                <div className="pt-5">
                  <button
                    type="submit"
                    className="button-all w-full justify-center mx-auto text-center"
                  >
                    ఈరోజే మీ అపాయింట్‌మెంట్ బుక్ చేసుకోండి
                    <MdArrowOutward className="rotate-45" />
                  </button>
                </div>
              </form>

              <SuccessMessage
                show={successMessage}
                onClose={() => setSuccessMessage(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookAppointmentFormtelugu;
