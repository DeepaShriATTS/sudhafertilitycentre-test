import { z } from "zod";

/**
 * Reusable Zod schema for appointment validations on both frontend and backend.
 */
export const appointmentSchema = z.object({
  name: z.preprocess(
    (val) => (typeof val === "string" ? val.trim().replace(/\s+/g, " ") : val),
    z.string()
      .min(1, "Name is required")
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name cannot exceed 50 characters")
      .regex(/^[a-zA-Z\s.]+$/, "Name can only contain letters, spaces and dots")
  ),

  mobile: z.preprocess(
    (val) => {
      if (val === undefined || val === null) return "";
      const strVal = String(val).trim();
      const clean = strVal.replace(/\D/g, "");
      // Remove India country code (91) if it starts with it and is 12 digits
      return clean.startsWith("91") && clean.length === 12
        ? clean.substring(2)
        : clean;
    },
    z.string()
      .min(1, "Mobile number is required")
      .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number")
  ),

  branch: z.preprocess(
    (val) => {
      if (val === undefined || val === null || val === "") return undefined;
      // Accept integers (pk) or non-empty strings
      if (typeof val === "number") return val;
      return typeof val === "string" ? val.trim() : val;
    },
    z.union([z.string().min(1), z.number().int().positive()]).optional()
  ),

  location: z.preprocess(
    (val) => (typeof val === "string" ? val.trim() : val),
    z.string().optional()
  ).refine((val) => !val || val.length >= 2, {
    message: "Location must be at least 2 characters long",
  }),

  consent: z.preprocess(
    (val) => {
      if (val === true || val === "true" || val === "on") return true;
      if (val === false || val === "false" || val === "") return false;
      return undefined;
    },
    z.boolean().optional()
  ).refine((val) => {
    if (val === undefined) return true; // Optional/not applicable
    return val === true;
  }, {
    message: "Please accept Terms & Conditions to continue",
  }),

  appointmentDate: z.preprocess(
    (val) => {
      if (!val) return undefined;
      const date = new Date(val);
      if (isNaN(date.getTime())) return "INVALID";
      return date;
    },
    z.union([z.date(), z.literal("INVALID")]).optional()
  )
  .refine((val) => val !== "INVALID", {
    message: "Invalid appointment date",
  })
  .refine((val) => {
    if (!val) return true;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const checkDate = new Date(val);
    checkDate.setHours(0, 0, 0, 0);
    return checkDate >= today;
  }, {
    message: "Appointment date cannot be in the past",
  }),

  enquiry: z.enum(["treatment", "others"]).optional(),
  typeofenquiry: z.preprocess(
    (val) => (typeof val === "string" ? val.trim() : val),
    z.string().optional()
  ),
  remarks: z.preprocess(
    (val) => (typeof val === "string" ? val.trim() : val),
    z.string().optional()
  ),
  formType: z.string().optional(),
}).superRefine((data, ctx) => {
  // Helper: check if branch has a meaningful value (string or number pk)
  const branchEmpty = (val) =>
    val === undefined || val === null || String(val).trim() === "";

  // If enquiry is "treatment", branch is required
  if (data.enquiry === "treatment") {
    if (branchEmpty(data.branch)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["branch"],
        message: "Branch selection is required",
      });
    }
  }

  // If enquiry is "others", typeofenquiry is required and remarks is minimum 3 characters
  if (data.enquiry === "others") {
    if (!data.typeofenquiry || data.typeofenquiry.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["typeofenquiry"],
        message: "Type of enquiry is required",
      });
    }
    if (!data.remarks || data.remarks.trim().length < 3) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["remarks"],
        message: "Remarks must be at least 3 characters",
      });
    }
  }

  // If there is no enquiry, branch is required by default
  if (!data.enquiry) {
    if (branchEmpty(data.branch)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["branch"],
        message: "Branch selection is required",
      });
    }
  }
});
