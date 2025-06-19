require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 5000;
const { unparse } = require("papaparse");

app.use(cors());
app.use(express.json());

// Helper function for company header
const companyHeader = `
<div style="font-family: Arial, sans-serif; font-size: 24px; font-weight: bold; margin-bottom: 20px;">
    <span style="color: #dc2626;">Lonesons</span><span style="color: #374151;">Xpress</span>
</div>
`;

app.post("/submit-user-comment", async (req, res) => {
  const { name, email, rating, comment } = req.body;

  const htmlMessage = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .feedback-box { background: #f3f4f6; padding: 15px; border-radius: 6px; margin-top: 10px; }
        .icon { margin-right: 8px; vertical-align: middle; }
    </style>
</head>
<body>
    <div class="container">
        ${companyHeader}
        <h1 style="color: #111827;">📝 New Customer Feedback</h1>
        
        <p><span class="icon">👤</span> <strong>Name:</strong> ${name}</p>
        <p><span class="icon">📧</span> <strong>Email:</strong> ${email}</p>
        <p><span class="icon">⭐</span> <strong>Rating:</strong> ${rating}/5</p>
        
        <h3 style="margin-bottom: 5px;"><span class="icon">💬</span> <strong>Comment:</strong></h3>
        <div class="feedback-box">${comment}</div>
    </div>
</body>
</html>
`;

  const textMessage = `
📝 New Customer Feedback - LonesonsXpress

👤 Name: ${name}
📧 Email: ${email}
⭐ Rating: ${rating}/5
💬 Comment: ${comment}
`;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"LonesonsXpress" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "📝 New User Experience Comment",
      html: htmlMessage,
      text: textMessage,
    });

    res.status(200).json({ success: true, message: "Comment email sent!" });
  } catch (error) {
    console.error("Failed to send comment:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

app.post("/send-contact-message", async (req, res) => {
  const { name, email, phone, company, subject, message } = req.body;

  const htmlMessage = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .message-box { background: #f3f4f6; padding: 15px; border-radius: 6px; margin-top: 10px; }
        .icon { margin-right: 8px; vertical-align: middle; }
    </style>
</head>
<body>
    <div class="container">
        ${companyHeader}
        <h1 style="color: #111827;">📨 New Contact Inquiry</h1>
        
        <p><span class="icon">👤</span> <strong>Name:</strong> ${name}</p>
        <p><span class="icon">📧</span> <strong>Email:</strong> ${email}</p>
        <p><span class="icon">📱</span> <strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><span class="icon">🏢</span> <strong>Company:</strong> ${company || "Not provided"}</p>
        <p><span class="icon">📌</span> <strong>Subject:</strong> ${subject}</p>
        
        <h3 style="margin-bottom: 5px;"><span class="icon">✉️</span> <strong>Message:</strong></h3>
        <div class="message-box">${message}</div>
    </div>
</body>
</html>
`;

  const textMessage = `
📨 New Contact Message - LonesonsXpress

👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone || "Not provided"}
🏢 Company: ${company || "Not provided"}
📌 Subject: ${subject}
✉️ Message:
${message}
`;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"LonesonsXpress Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📨 New Contact Inquiry - ${subject}`,
      html: htmlMessage,
      text: textMessage,
    });

    res.status(200).json({ success: true, message: "Contact message sent!" });
  } catch (err) {
    console.error("Error sending contact message:", err);
    res
      .status(500)
      .json({ success: false, message: "Failed to send message." });
  }
});

app.post("/send-quote", async (req, res) => {
  const { userInfo, units, pickupLocation, deliveryLocation, customsData } =
    req.body;

  const htmlMessage = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .section { margin-bottom: 20px; }
        .section-title { font-size: 18px; color: #111827; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px; }
        .icon { margin-right: 8px; vertical-align: middle; }
        .unit-item { margin-bottom: 10px; padding-left: 15px; border-left: 3px solid #dc2626; }
    </style>
</head>
<body>
    <div class="container">
        ${companyHeader}
        <h1 style="color: #111827;">📦 New Shipping Quote Request</h1>
        
        <div class="section">
            <h2 class="section-title"><span class="icon">👤</span> Customer Information</h2>
            <p><strong>Name:</strong> ${userInfo.name}</p>
            <p><strong>Email:</strong> ${userInfo.email}</p>
            <p><strong>Phone:</strong> ${userInfo.phone}</p>
        </div>
        
        <div class="section">
            <h2 class="section-title"><span class="icon">🚚</span> Pickup Location</h2>
            <p><strong>Address:</strong> ${pickupLocation.address}</p>
            <p><strong>City:</strong> ${pickupLocation.city}</p>
            <p><strong>Country:</strong> ${pickupLocation.country}</p>
        </div>
        
        <div class="section">
            <h2 class="section-title"><span class="icon">🏁</span> Delivery Location</h2>
            <p><strong>Address:</strong> ${deliveryLocation.address}</p>
            <p><strong>City:</strong> ${deliveryLocation.city}</p>
            <p><strong>Country:</strong> ${deliveryLocation.country}</p>
        </div>
        
        <div class="section">
            <h2 class="section-title"><span class="icon">📋</span> Customs Information</h2>
            <p><strong>Export Clearance:</strong> ${customsData.exportClearance ? "✅ Yes" : "❌ No"}</p>
            <p><strong>Import Clearance:</strong> ${customsData.importClearance ? "✅ Yes" : "❌ No"}</p>
            <p><strong>Hazardous Materials:</strong> ${customsData.isHazardousConfirmed ? "⚠️ Yes" : "✅ No"}</p>
            <p><strong>Insurance:</strong> ${customsData.addInsurance ? `✅ Yes ($${customsData.insuranceValue})` : "❌ No"}</p>
        </div>
        
        <div class="section">
            <h2 class="section-title"><span class="icon">📦</span> Shipping Units (${units.length})</h2>
            ${units
              .map(
                (u, i) => `
                <div class="unit-item">
                    <p><strong>Unit #${i + 1}:</strong> ${u.type}</p>
                    <p>Quantity: ${u.quantity} pcs</p>
                    <p>Dimensions: ${u.dimensions}</p>
                    <p>Weight: ${u.weight}kg</p>
                </div>
            `
              )
              .join("")}
        </div>
    </div>
</body>
</html>
`;

  try {
    // Prepare CSV data
    const csvData = {
      Name: userInfo.name,
      Phone: userInfo.phone,
      Email: userInfo.email,
      "Pickup Address": pickupLocation.address,
      "Pickup City": pickupLocation.city,
      "Pickup Country": pickupLocation.country,
      "Delivery Address": deliveryLocation.address,
      "Delivery City": deliveryLocation.city,
      "Delivery Country": deliveryLocation.country,
      "Export Clearance": customsData.exportClearance ? "Yes" : "No",
      "Import Clearance": customsData.importClearance ? "Yes" : "No",
      "Import Commodities": customsData.importCommodities,
      "Hazardous Confirmed": customsData.isHazardousConfirmed ? "Yes" : "No",
      "Personal Shipment": customsData.isPersonal ? "Yes" : "No",
      "Known Shipper": customsData.isKnownShipper ? "Yes" : "No",
      "Add Insurance": customsData.addInsurance ? "Yes" : "No",
      "Insurance Value (USD)": customsData.insuranceValue,
      "Total Units": units.length,
      "Unit Types Summary": units
        .map(
          (u, i) =>
            `#${i + 1} ${u.type} - ${u.quantity} pcs - ${u.dimensions} - ${u.weight}kg`
        )
        .join(" | "),
    };

    const csvString = unparse([csvData]);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"LonesonsXpress Quote" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "📦 New Shipping Quote Request",
      html: htmlMessage,
      text: "A new quote has been submitted. Details are in HTML view and CSV attachment.",
      attachments: [
        {
          filename: "shipping-quote.csv",
          content: csvString,
        },
      ],
    });

    res
      .status(200)
      .json({ success: true, message: "Quote sent successfully!" });
  } catch (error) {
    console.error("Failed to send quote:", error);
    res.status(500).json({ success: false, message: "Failed to send quote." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
