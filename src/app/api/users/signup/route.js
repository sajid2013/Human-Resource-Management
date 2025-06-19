import { sendEmail } from "../../../../../utils/mailer";
import User from "../../../../models/User";
import bcryptjs from "bcryptjs";
import { connect } from "../../../../db/db";

connect();

export async function POST(request) {
  console.log("✅ POST /api/users/signup called");
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    //validation krni hai abhi
    console.log(reqBody);
    // Check if email already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return new Response(JSON.stringify({ error: "Email already exists!" }), {
        status: 400,
      });
    }

    //Check if username already exists
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return new Response(
        JSON.stringify({ error: "Username already taken!" }),
        {
          status: 400,
        }
      );
    }

    // for hashed pass
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    //creating new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    // for verification email
    console.log("Sending verification email...");
    const token = await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });
    console.log("Email sent successfully");

    return new Response(
      JSON.stringify({
        message: "User registered successfully!",
        success: true,
        token,
        savedUser,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error); 
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
