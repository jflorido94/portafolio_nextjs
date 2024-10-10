const nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE, // upgrade later with STARTTLS
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
})

export const mailOptionsOut = {
  from: '"Jflorido94" <'+process.env.SMTP_USERNAME+'>'
}
export const mailOptionsIn = {
  from: '"Portfolio" <'+process.env.SMTP_USERNAME+'>'
}