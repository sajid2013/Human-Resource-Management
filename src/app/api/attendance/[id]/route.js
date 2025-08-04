import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(req, { params }) {
  const { id } = params;

  try {
    const attendance = await prisma.attendance.findMany({
      where: {
        employeeId: id,
      },
    });

    return NextResponse.json({ success: true, attendance });
  } catch (error) {
    console.error("Error fetching attendance:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch attendance" }, { status: 500 });
  }
}
