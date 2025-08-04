import bcryptjs from "bcryptjs";
import { Resend } from "resend";
import User from "../src/models/User";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({ email, emailType, userId }) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          verifyToken: hashedToken,
          verifyTokenExpiry: Date.now() + 3600000,
        },
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          forgotPasswordToken: hashedToken,
          forgotPasswordTokenExpiry: Date.now() + 3600000,
        }, //1hr
      });
    }

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
      or copy and paste the link below in your browser. 
      <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}</p>`,
    });
    return hashedToken;
  } catch (error) {
    console.log("Email sending error:", error);
    throw new Error(error);
  }
};
