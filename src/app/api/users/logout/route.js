import { connect } from "../../../../db/db";
import { NextResponse } from "next/server";

connect();

export async function POST(request) {
  try {
    const response = NextResponse.json(
      { message: "Logged out Successfully!" },
      { status: 200 }
    );
    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    return response;                                                                                                                                                                                                                                                                                                                                                                                     
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }));
  }
}
