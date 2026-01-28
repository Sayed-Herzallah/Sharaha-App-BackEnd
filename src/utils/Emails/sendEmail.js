// ================= import modules =================
import nodemailer from "nodemailer";
import dotenv from "dotenv"
dotenv.config()
// ================= account Subject ================
export const account={
  register:"active account",
  otp:"reset password"

}
// ================= send email =================
const sendEmails=async ({to,subject,html})=>{
  // sender account
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// receiver account

  const info = await transporter.sendMail({
    from: `"Saraha Application" <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
});
  (info.rejected.length==0)?console.log("success email"):console.log("failed email");
}

export default sendEmails