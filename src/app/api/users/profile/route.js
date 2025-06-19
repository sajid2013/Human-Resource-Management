import { connect } from "../../../../db/db";
import User from "../../../../models/User";
import { dataFromToken } from "../../../../../utils/dataFromToken";
import { NextResponse } from "next/server";

connect();

export async function POST(request) {
  try {
    const userId = await dataFromToken(request);
    const user = await User.findOne({ _id: userId }).select("-password");
    if (!user) {
      return NextResponse.json({ error: "Invalid Token!" }, { status: 401 });
    }
    return NextResponse.json(
      { message: "User found", data: user },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
