import { appointmentSchema } from "@/schemas/appointmentSchema";

export default async function handler(req, res) {
  // 1. Validate request method
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed",
    });
  }

  try {
    // 2. Validate request body using the unified Zod schema
    const result = appointmentSchema.safeParse(req.body);

    if (!result.success) {
      // Map Zod validation errors to a structured field-to-message object
      const validationErrors = {};
      result.error.issues.forEach((issue) => {
        validationErrors[issue.path[0]] = issue.message;
      });

      return res.status(400).json({
        success: false,
        errors: validationErrors,
      });
    }

    // 3. Update req.body with validated and sanitized data
    req.body.name = result.data.name;
    req.body.mobile = result.data.mobile;
    if (result.data.branch) req.body.branch = result.data.branch;
    if (result.data.location) req.body.location = result.data.location;
    if (result.data.enquiry) req.body.enquiry = result.data.enquiry;
    if (result.data.typeofenquiry) req.body.typeofenquiry = result.data.typeofenquiry;
    if (result.data.remarks) req.body.remarks = result.data.remarks;
    if (result.data.consent !== undefined) req.body.consent = result.data.consent;
    if (result.data.formType) req.body.formType = result.data.formType;

    // Handle appointment date normalization for CRM/Sheets
    if (result.data.appointmentDate) {
      const formattedDate = result.data.appointmentDate.toISOString().split("T")[0];
      req.body.appointmentDate = formattedDate;
      req.body.appointment_date = formattedDate;
    }

    // Google Script URLs to forward booking lead details
    const scriptURLs = [
      "https://script.google.com/macros/s/AKfycbxjoUPAX-viRscYjFztOabjHvRHdA35XQnbMO_hELpX833mqWKWvGQegfuhrb-gtdQrWA/exec",
      "https://script.google.com/macros/s/AKfycbzJmRYUQ2Y_z3HNj9sJ9iIedYZg7JlOGzHIsFOcequ4uFBzpHj8YEii6nEi3axjW_A/exec",
    ];

    const controller = new AbortController();
    const timeout = setTimeout(() => {
      controller.abort();
    }, 10000);

    const responses = await Promise.all(
      scriptURLs.map((url) =>
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(req.body).toString(),
          signal: controller.signal,
        })
      )
    );

    clearTimeout(timeout);

    const texts = await Promise.all(
      responses.map((r) => r.text())
    );

    const parsedResponses = texts.map((text) => {
      try {
        return JSON.parse(text);
      } catch {
        return {
          success: false,
          error: "Invalid JSON response",
        };
      }
    });

    return res.status(200).json({
      success: true,
      data: parsedResponses,
    });
  } catch (error) {
    console.error("Error processing request:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}
