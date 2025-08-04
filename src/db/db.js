import mongoose from "mongoose";

let isConnected = false;

export async function connect() {
  if (isConnected) {
    console.log("MongoDB already connected.");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "hr_management",
    });

    isConnected = true;
    console.log(" MongoDB Connected Successfully!");
  } catch (error) {
    console.error(" Error connecting to MongoDB:", error);
    throw error;
  }
}
