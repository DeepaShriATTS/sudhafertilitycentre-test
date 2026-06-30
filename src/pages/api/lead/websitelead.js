/**
 * Mock endpoint for CRM lead creation: /lead/websitelead/
 *
 * In local development, if the external CRM backend is not created,
 * this endpoint mocks the CRM creation process.
 */

// Initialize global mock leads store if not already present
global.mockLeads = global.mockLeads || new Set();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  try {
    const { name, branch, mobile, source_type, lead_type } = req.body;

    // Simulate database write / CRM creation
    if (mobile) {
      // Normalize mobile number (remove non-digits and leading +91 or 91 if matching the structure)
      const cleanMobile = mobile.replace(/\D/g, "");
      global.mockLeads.add(cleanMobile);
    }

    if (process.env.NODE_ENV !== "production") {
      console.log("[Mock CRM] Lead Created:", { name, branch, mobile, source_type, lead_type });
    }

    return res.status(201).json({
      success: true,
      message: "Lead created successfully (Mock)",
      data: {
        id: Math.floor(Math.random() * 100000),
        name,
        branch,
        mobile,
        source_type: source_type || "21",
        lead_type: lead_type || "4",
        created_at: new Date().toISOString(),
      },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal server error in mock CRM websitelead",
    });
  }
}
