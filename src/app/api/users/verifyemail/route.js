import { connect } from "../../../../db/db";
import User from "../../../../models/User";


connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { token } = reqBody;
    console.log(token);

    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: "INVALID TOKEN" }));
    }

    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;
    
    await user.save();

    return new Response(
      JSON.stringify({ message: "Email verified successfully", success: true })
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }));
  }
}
