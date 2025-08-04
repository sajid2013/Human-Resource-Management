import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connect } from "../../../../db/db";
import User from "../../../../models/User";

export async function GET(req) {
  try {
    await connect();
    const token = req.cookies.get("token")?.value;
    if (!token) return NextResponse.json({ loggedIn: false });

    const payload = jwt.verify(token, process.env.TOKEN_SECRET);
    // payload k pass  { id, username, email, access }
    const user = await User.findById(payload.id).select("-password");
    return NextResponse.json({ loggedIn: true, user });
  } catch (err) {
    return NextResponse.json({ loggedIn: false });
  }
}
