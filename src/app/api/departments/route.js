import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

// CREATE
export async function POST(req) {
    const body = await req.json();

    try {
        const newDepartment = await prisma.department.create({
            data: body,
        });

        return NextResponse.json({ success: true, data: newDepartment });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
