import { connect } from "../../../../db/db";
import User from "../../../../models/User";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    //validation krni hai abhi
    console.log(reqBody);

    const user = await User.findOne({ email });

    if (!user) {
      return new Response(JSON.stringify({ error: "User doesnot exists" }));
    }
    console.log("User Exists!");

    const validPassword = await bcryptjs.compare(password, user.password);

    if (!validPassword) {
      return new Response(JSON.stringify({ error: "Incorrect Password" }));
    }

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    const response = NextResponse.json(
      { message: "Logged in successfully." },
      { status: 200 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }));
  }
}
