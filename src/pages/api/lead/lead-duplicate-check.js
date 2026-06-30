// Use the same global mock leads store
global.mockLeads = global.mockLeads || new Set();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  try {
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({
        success: false,
        message: "Phone number is required for duplicate check",
      });
    }

    // Normalize phone number to match the stored structure
    const cleanPhone = phone.replace(/\D/g, "");

    // Test numbers that always trigger a duplicate error
    const alwaysDuplicateList = [
      "9999999999",
      "919999999999",
      "8888888888",
      "918888888888"
    ];

    const isDuplicate = alwaysDuplicateList.includes(cleanPhone) || global.mockLeads.has(cleanPhone);

    if (process.env.NODE_ENV !== "production") {
      console.log(`[Mock CRM] Duplicate check for phone ${phone}: ${isDuplicate ? 'DUPLICATE' : 'UNIQUE'}`);
    }

    if (isDuplicate) {
      return res.status(200).json({
        duplicate: true,
        message: `Lead already exists for phone number ${phone}. Please verify your details or use a different number.`,
      });
    }

    return res.status(200).json({
      duplicate: false,
      message: "Lead is unique",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal server error in mock CRM duplicate check",
    });
  }
}
