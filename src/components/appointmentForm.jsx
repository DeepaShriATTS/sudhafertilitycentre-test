import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import SuccessMessage from './SuccessMessage';
import { IoMdArrowForward } from "react-icons/io";
import { websiteleadCreateListEndpoint, branchtableListEndpoint } from '@/pages/api/shipapi';
import SearchableSelect from './searchAndSelect/SearchableSelect';
import { appointmentSchema } from "@/schemas/appointmentSchema";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


function AppointmentForm({ onSubmit }) {
  const [submissionError, setSubmissionError] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [branchList, setBranchList] = useState([]);

  // Initialize react-hook-form with Zod validation resolver
  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      branch: "",
      mobile: "",
      formType: "Branch Appointment",
    },
  });

  // Fetch branch list on mount
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(branchtableListEndpoint);
        if (res.ok) {
          const data = await res.json();
          setBranchList(data?.data?.list || []);
        } else {
          console.error('API responded with an error');
        }
      } catch (err) {
        console.error('Fetch Error!', err);
      }
    }
    fetchData();
  }, []);

  // Form submit handler
  const handleFormSubmit = async (data) => {
    setSubmissionError("");

    try {
      // 1. Submit to local server API for storage and Sheets forwarding
      const saveResponse = await fetch("/api/saveData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          mobile: data.mobile,
          branch: data.branch,
          formType: "Branch Appointment",
        }),
      });

      const saveResult = await saveResponse.json();

      if (!saveResponse.ok) {
        // If server returns validation errors, map them using setError
        if (saveResult.errors) {
          Object.entries(saveResult.errors).forEach(([field, msg]) => {
            setError(field, { type: "server", message: msg });
          });
        } else {
          setSubmissionError(saveResult.message || "Validation failed");
        }
        return;
      }

      // 2. Submit to CRM
      const body = {
        name: data.name,
        branch: data.branch,
        mobile: data.mobile,
        source_type: "21",
        lead_type: "4",
      };

      const crmResponse = await fetch(websiteleadCreateListEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!crmResponse.ok) {
        console.error("CRM submission failed");
        setSubmissionError("Failed to submit to CRM. Please try again.");
        return;
      }

      // Show success popup and reset form
      setSuccessMessage(true);
      reset({
        name: "",
        branch: "",
        mobile: "",
        formType: "Branch Appointment",
      });

      if (onSubmit) {
        onSubmit();
      }
    } catch (error) {
      console.error(error);
      setSubmissionError("Network error. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-7 bg-white rounded-3xl">
      <h3 className="font-semibold text-left mb-4">
        The first step is always the hardest, but we promise to make the rest easy.
      </h3>
      <form className="space-y-4" onSubmit={handleSubmit(handleFormSubmit)}>
        <input type="hidden" {...register("formType")} />

        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name <span className="text-red-700">*</span>
          </label>
          <input
            {...register("name", {
              onChange: (e) => {
                e.target.value = e.target.value.replace(/[^a-zA-Z\s.]/g, "");
              }
            })}
            type="text"
            maxLength={50}
            placeholder="Enter your full name"
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
                !/^[a-zA-Z\s.]$/.test(e.key)
              ) {
                e.preventDefault();
              }
            }}
            onPaste={(e) => {
              const pastedText = e.clipboardData.getData("text");
              if (!/^[a-zA-Z\s.]+$/.test(pastedText)) {
                e.preventDefault();
              }
            }}
            className={`mt-1 block w-full px-3 h-10 rounded-lg border text-sm transition-all focus:outline-none ${errors.name
              ? "border-[#EB3C3C] bg-[#FFF9F9] focus:border-[#EB3C3C]"
              : "border-[#B1B2B3] hover:border-neutral-400 focus:border-[#1C315E] focus:ring-1 focus:ring-[#1C315E] bg-white text-neutral-800"
              }`}
          />
          {errors.name && (
            <p className="text-[#EB3C3C] text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Mobile Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
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
                const phoneWithoutCountryCode =
                  clean.startsWith("91") && clean.length === 12
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
            <p className="text-[#EB3C3C] text-xs mt-1">{errors.mobile.message}</p>
          )}
        </div>

        {/* Branch Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Location <span className="text-red-700">*</span>
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
                theme="light"
                error={errors.branch?.message}
              />
            )}
          />
          {errors.branch && (
            <p className="text-[#EB3C3C] text-xs mt-1">{errors.branch.message}</p>
          )}
        </div>

        {submissionError && (
          <p className="text-red-500 text-sm text-center">{submissionError}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full text-white h-10 rounded-lg transition-all flex justify-center items-center font-medium ${isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#173366] hover:bg-[#1f4285]"
            }`}
        >
          {isSubmitting ? (
            "Submitting..."
          ) : (
            <>
              Take your free step toward parenthood
              <span className="ml-2">
                <IoMdArrowForward />
              </span>
            </>
          )}
        </button>
      </form>
      <p className="text-[10px] sm:text-[11px] text-[#173366]/85 text-end">
        We will reach you within 45 minutes <span className="text-red-500">*</span>
      </p>

      <SuccessMessage show={successMessage} onClose={() => setSuccessMessage(false)} />
    </div>
  );
}

export default AppointmentForm;