"use client";

/**
 * AppointmentForm — Light-theme wrapper around AppointmentFormCore.
 *
 * This component is the entry point used across modals, popups, and
 * general-purpose appointment CTAs. All form logic lives in:
 *   - useAppointmentForm (hook)     → state, fetch, submission
 *   - AppointmentFormCore (component) → shared UI + validation
 *
 * @prop {Function} [onSubmit] Optional callback after successful submission
 */

import React from "react";
import AppointmentFormCore from "@/components/forms/AppointmentFormCore";

function AppointmentForm({ onSubmit }) {
  return (
    <div className="max-w-md mx-auto p-7 bg-white rounded-3xl">
      <AppointmentFormCore
        formType="Branch Appointment"
        theme="light"
        heading="The first step is always the hardest, but we promise to make the rest easy."
        onSuccess={onSubmit}
        showNote={true}
      />
    </div>
  );
}

export default AppointmentForm;