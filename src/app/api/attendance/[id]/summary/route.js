import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma"; 

export async function GET(req, { params }) {
  const { id } = params;

  try {
    const attendance = await prisma.attendance.findMany({
      where: {
        employeeId: id,
      },
    });

    // Count kar rahe hain
    const summary = {
      Present: 0,
      Absent: 0,
      "Sick Leave": 0,
      "Casual Leave": 0,
    };

    attendance.forEach((entry) => {
      if (summary[entry.status] !== undefined) {
        summary[entry.status]++;
      }
    });

    return NextResponse.json({ success: true, summary });
  } catch (error) {
    console.error("Error fetching summary:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch summary" },
      { status: 500 }
    );
  }
}
