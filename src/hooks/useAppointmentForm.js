/**
 * useAppointmentForm — Centralised form logic hook.
 *
 * WHY a hook?
 *   Both AppointmentForm (light theme) and BranchForm (dark theme) are
 *   identical in behaviour but different in visual styling. Rather than
 *   duplicating fetch/submit/validation logic, this hook owns all of it.
 *   Each UI component just calls the hook and renders its own JSX.
 *
 * What this hook provides:
 *   - React Hook Form setup with Zod resolver
 *   - Honeypot registration (bot detection)
 *   - Branch list fetched on mount via apiClient
 *   - Standardised submission via /api/saveData (Axios)
 *   - Success / error state management
 */

"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { appointmentSchema } from "@/schemas/appointmentSchema";
import { apiClient } from "@/lib/axios/instance";
import { fetchBranchList } from "@/lib/api/branches";
import { cleanPhone } from "@/lib/utility";

/**
 * @param {Object}  options
 * @param {string}  options.formType  Identifier sent to the server (e.g. "Branch Appointment" | "branch")
 * @param {Function} [options.onSuccess] Optional callback after successful submission
 */
export function useAppointmentForm({ formType = "Branch Appointment", onSuccess } = {}) {
  const [branchList, setBranchList] = useState([]);
  const [successMessage, setSuccessMessage] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [branchLoadError, setBranchLoadError] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      branch: "",
      mobile: "",
      formType,
      // Honeypot — must stay empty; bots tend to fill every field
      // _honeypot: "",
    },
  });

  // ---------------------------------------------------------------------------
  // Fetch branches on mount
  // ---------------------------------------------------------------------------
  useEffect(() => {
    let isMounted = true;
    fetchBranchList()
      .then((list) => {
        if (isMounted) {
          setBranchList(list);
          if (list.length === 0) setBranchLoadError(true);
        }
      })
      .catch(() => {
        if (isMounted) setBranchLoadError(true);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  // ---------------------------------------------------------------------------
  // Form submission
  // ---------------------------------------------------------------------------
  const handleFormSubmit = async (data) => {
    setSubmissionError("");

    // Bot detection: if honeypot is filled, silently appear to succeed
    if (data._honeypot) {
      setSuccessMessage(true);
      return;
    }

    try {
      await apiClient.post("/lead/websitelead/", {
        name: data.name,
        branch: data.branch,
        mobile: cleanPhone(data.mobile),
        source_type: "21",
        lead_type: "4",
      });

      // Success
      setSuccessMessage(true);
      reset({ name: "", branch: "", mobile: "", formType });

      if (onSuccess) onSuccess();
    } catch (err) {
      const responseData = err.response?.data;
      const errorMessage = responseData?.message || responseData?.error || err.message || "Failed to submit lead to CRM.";
      if (responseData && responseData.errors) {
        // Map server-side field errors back to the form
        Object.entries(responseData.errors).forEach(([field, msg]) => {
          setError(field, { type: "server", message: String(msg) });
        });
        setSubmissionError(errorMessage || "Please correct the highlighted fields.");
      } else {
        setSubmissionError(errorMessage);
      }
    }
  };

  return {
    // React Hook Form
    register,
    handleSubmit,
    control,
    errors,
    isSubmitting,
    reset,
    // Derived state
    branchList,
    branchLoadError,
    successMessage,
    submissionError,
    setSuccessMessage,
    // Handler
    handleFormSubmit,
  };
}
