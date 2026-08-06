import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Calendar from "@/assets/branch/ambatur/callender.svg";
import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";
import SuccessMessage from "./SuccessMessage";
import { websiteleadCreateListEndpoint, branchtableListEndpoint } from "@/pages/api/shipapi";
import SearchableSelect from "./searchAndSelect/SearchableSelect";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { appointmentSchema } from "@/schemas/appointmentSchema";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


function BranchForm() {
  const [branchList, setBranchList] = useState([]);
  const [submissionError, setSubmissionError] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  // Initialize react-hook-form
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
      formType: "branch",
    },
  });

  // Fetch branch options on mount
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

  // Form submission handler
  const handleFormSubmit = async (data) => {
    setSubmissionError("");

    try {

      const saveResponse = await fetch("/api/saveData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          mobile: data.mobile,
          branch: data.branch,
          formType: "branch",
        }),
      });

      const saveResult = await saveResponse.json();

      if (!saveResponse.ok) {
        if (saveResult.errors) {
          Object.entries(saveResult.errors).forEach(([field, msg]) => {
            setError(field, { type: "server", message: msg });
          });
        } else {
          
          setSubmissionError(saveResult.message || "Failed to validate form on server.");
        }
        return;
      }

      // 2️⃣ Submit to CRM
      const body = {
        name: data.name,
        branch: data.branch,
        mobile: data.mobile, // Zod sanitized mobile
        source_type: "21",
        lead_type: "4",
      };

      const crmResponse = await fetch(websiteleadCreateListEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!crmResponse.ok) {
        console.error("CRM submission failed");
        setSubmissionError("Failed to submit to CRM. Please try again.");
        return;
      }

      // Show success modal and reset form values
      setSuccessMessage(true);
      reset({ name: "", branch: "", mobile: "", formType: "branch" });
    } catch (error) {
      console.error("Submission Error:", error);
      setSubmissionError("Network error. Please try again later.");
    }
  };

  return (
    <div>
      <motion.div
        className="w-full lg:w-[450px] bg-white/10 backdrop-blur-xl rounded-lg p-6 mt-8 lg:mt-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-start mb-6">
          <h3 className="font-semibold text-white">Get Answers From Fertility Experts</h3>
          <Image src={Calendar} alt="Calendar" className="w-10 h-10 sm:w-12 sm:h-12" />
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(handleFormSubmit)}>
          <input type="hidden" {...register("formType")} />

          {/* Name Field */}
          <div>
            <input
              type="text"
              placeholder="Name"
              maxLength={50}
              {...register("name", {
                onChange: (e) => {
                  e.target.value = e.target.value.replace(/[^a-zA-Z\s.]/g, "");
                }
              })}
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
              className={`w-full p-3 bg-[#8894af]/80 rounded-xl outline-none placeholder-white text-white border ${errors.name
                  ? "border-red-500 focus:border-red-500"
                  : "border-transparent focus:border-white"
                }`}
            />
            {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Mobile Field */}
          <div>
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
                  placeholder="Phone number"
                  inputStyle={{
                    width: "100%",
                    height: "48px",
                    borderRadius: "12px",
                    border: errors.mobile ? "1px solid #ef4444" : "1px solid transparent",
                    backgroundColor: "rgba(136,148,175,0.8)",
                    fontSize: "14px",
                    color: "#ffffff",
                  }}
                  buttonStyle={{
                    borderRadius: "12px 0 0 12px",
                    border: "none",
                    backgroundColor: "rgba(136,148,175,0.8)",
                  }}
                  dropdownStyle={{
                    backgroundColor: "#1C315E",
                    color: "#ffffff",
                  }}
                />
              )}
            />
            {errors.mobile && <p className="text-red-300 text-sm mt-1">{errors.mobile.message}</p>}
          </div>

          {/* Branch/Location SearchableSelect */}
          <div>
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
                  theme="dark"
                  error={errors.branch?.message}
                />
              )}
            />
            {errors.branch && <p className="text-red-300 text-sm mt-1">{errors.branch.message}</p>}
          </div>

          {submissionError && (
            <p className="text-red-300 text-sm text-center">{submissionError}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full text-white py-3 px-3 rounded-xl transition-all flex justify-center items-center ${isSubmitting
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-[#173366] hover:bg-[#1f4285]"
              }`}
          >
            {isSubmitting ? "Submitting..." : "Take your free step toward parenthood"}
            &nbsp;&nbsp; <IoMdArrowForward />
          </button>
        </form>
        <p className="text-[10px] sm:text-[11px] text-[#173366]/85 text-end">
          We will reach you within 45 minutes <span className="text-red-500">*</span>
        </p>
      </motion.div>
      <SuccessMessage show={successMessage} onClose={() => setSuccessMessage(false)} />
    </div>
  );
}

export default BranchForm;
