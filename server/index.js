// server/index.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Resend } = require("resend");
require("dotenv").config();

const app = express();
const port = 5000;
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(bodyParser.json());

app.post("/send-comment", async (req, res) => {
  const { name, email, rating, comment } = req.body;

  try {
    const data = await resend.emails.send({
      from: "Feedback Bot <onboarding@resend.dev>", // Use a verified sender
      to: "ahmedasifmughal2003@gmail.com",
      subject: "New User Experience Submission",
      html: `
              <div style="font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e1e1e1; border-radius: 8px; overflow: hidden;">  
              <div style="background-color: #1a1a2e; padding: 20px; text-align: center;">
                <h1 style="font-family: Arial, sans-serif; font-size: 24px; margin: 0;">
                  <span style="color: #dc2626;">Lonesons</span>
                  <span style="color:rgb(123, 124, 125);">Xpress</span>
                </h1>
              </div>
  
              <!-- Email Content -->
              <div style="padding: 20px;">
                <h2 style="color: #e94560; margin-top: 0; font-size: 22px;">📬 New User Feedback Received</h2>
                <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 15px;">
                  <tr>
                    <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee; width: 30%;">Name:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Email:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Rating:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eee;">
                      <span style="color: #ffc107; font-size: 16px;">
                        ${"⭐".repeat(rating)}${"☆".repeat(5 - rating)}
                      </span>
                        (${rating}/5)
                      </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; font-weight: bold; vertical-align: top;">Comment:</td>
                    <td style="padding: 10px;">${comment}</td>
                  </tr>
          </table>
          <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #eee; font-size: 14px; color: #666;">
            <p>Best regards,<br><strong>The Lonesons Xpress Team</strong></p>
            <p style="font-size: 12px; margin-top: 20px; color: #999;">
              This is an automated message. Please do not reply directly to this email. The above is a comment posted by ${email}
            </p>
          </div>
          </div>
          </div>
          `,
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Resend Email Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
