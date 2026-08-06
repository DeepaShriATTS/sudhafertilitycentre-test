'use client';
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import toast, { Toaster } from 'react-hot-toast';
import { useForm, Controller } from "react-hook-form";
import { branchtableListEndpoint, websiteleadCreateListEndpoint } from "../../pages/api/shipapi";
import SuccessMessage from "../SuccessMessage";
import SearchableSelect from "../searchAndSelect/SearchableSelect";
import { zodResolver } from "@hookform/resolvers/zod";
import { appointmentSchema } from "@/schemas/appointmentSchema";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const RequestCallModal = ({ isOpen, onClose }) => {
  
  // const [formData, setFormData] = useState({
  //   name: "",
  //   mobile: "",
  //   branch: "",
  // });
  // const [errors, setErrors] = useState({});
  //  const [branchList, setBranchList] = useState([]);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   // Allow only numbers in the mobile field
  //   if (name === "mobile" && !/^\d*$/.test(value)) return;

  //   setFormData({ ...formData, [name]: value });
  // };

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await fetch(branchtableListEndpoint);
  //       if (res.ok) {
  //         const data = await res.json();
  //         setBranchList(data?.data?.list);
  //       } else {
  //         console.error('API responded with an error');
  //       }
  //     } catch (err) {
  //       console.error('Fetch Error!', err);
  //     }
  //   }
  //   fetchData();
  // }, []);


 

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   const body = {
  //     name: formData.name,
  //     branch: formData.branch,
  //     mobile: formData.mobile,
  //     source_type: "21",
  //     lead_type: "4",
  //   };
  
  //   try {
  //     const response = await fetch(websiteleadCreateListEndpoint, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(body),
  //     });
  
  //     if (response.status === 200 || response.status === 201) {
  //    toast.success(
  //     'Hello, thank you for reaching out. Our Team will contact you shortly',
  //     {
  //       duration: 7000,
  //       position: 'top-right',
  //       style: {
  //         background: '#173366',
  //         color: '#fff',
  //         padding: '16px',
  //       },
  //       icon: '👋',
  //     }
  //   );

  //   setFormData({ name: "", mobile: "", branch: "" }); // Reset form
  //   setErrors({}); // Clear errors
  //   onClose(); // Close modal
  //     } else {
  //       console.error("Submission failed.");
  //     }
  //   } catch (error) {
  //     console.error("Server Error.", error);
  //   }
  // };

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

 
    if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <Toaster />
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-black text-center">
            Request a Call
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-red-500"
          >
            <X size={22} />
          </button>
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
            {isSubmitting ? "Submitting..." : "Book a Free Appointment"}
            &nbsp;&nbsp; <IoMdArrowForward />
          </button>
        </form>
      </div>
       <SuccessMessage show={successMessage} onClose={() => setSuccessMessage(false)} />
    </div>
    
  );
};

export default RequestCallModal;