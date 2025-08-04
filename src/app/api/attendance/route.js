// app/api/attendance/route.js

import { NextResponse } from 'next/server';
import prisma from "../../../lib/prisma"

export async function POST(req) {
  try {
    const body = await req.json();
    const { date, records } = body;

    const entries = Object.entries(records).map(([employeeId, status]) => ({
      employeeId,
      status,
      date: new Date(date),
    }));

    await prisma.attendance.createMany({
      data: entries,
    });

    return NextResponse.json({ message: 'Attendance saved successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to save attendance' }, { status: 500 });
  }
}
