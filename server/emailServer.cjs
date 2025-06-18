require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 5000;
const { unparse } = require("papaparse");

app.use(cors());
app.use(express.json());

app.post("/submit-user-comment", async (req, res) => {
  const { name, email, rating, comment } = req.body;

  const message = `
🗣️ New User Comment Submission

👤 Name: ${name}
📧 Email: ${email}
⭐ Rating: ${rating}
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
      to: process.env.EMAIL_USER, // Sends to yourself
      subject: "New User Experience Comment",
      text: message,
    });

    res.status(200).json({ success: true, message: "Comment email sent!" });
  } catch (error) {
    console.error("Failed to send comment:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

app.post("/send-contact-message", async (req, res) => {
  const { name, email, phone, company, subject, message } = req.body;

  const emailBody = `
📩 New Contact Message

👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone || "Not provided"}
🏢 Company: ${company || "Not provided"}
📌 Subject: ${subject}
💬 Message:
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
      text: emailBody,
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

  try {
    // Prepare CSV data (merge everything into a flat object)
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

    // Convert to CSV format
    const csvString = unparse([csvData]);

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"LonesonsXpress Quote" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "📦 New Shipping Quote Request",
      text: "A new quote has been submitted. CSV attached.",
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

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
