import nodemailer from "nodemailer";
import { WELCOME_EMAIL_TEMPLATE } from "./template";

export const transporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });
};

export const sendWelcomeEmail = async ({
  email,
  name,
  intro,
}: WelcomeEmailData) => {
  const htmlTemplate = WELCOME_EMAIL_TEMPLATE.replace(
    "{{intro}}",
    intro
  ).replace("{{name}}", name);

  const mailOptions = {
    from: `"Signalist" <${process.env.NODEMAILER_EMAIL}>`,
    to: email,
    subject: "Welcome to Signalist - Your Stock Market Dashboard is Ready!",
    html: htmlTemplate,
  };

  try {
    await transporter().sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending welcome email:", error);
    throw error;
  }
};
