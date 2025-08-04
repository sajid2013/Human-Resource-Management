import { NextResponse } from 'next/server';
import prisma from "../../../lib/prisma";

export async function GET() {
    try {

        const employees = await prisma.employee.findMany();
        return NextResponse.json({ success: true, data: employees });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: 'Server Error' }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        const { username, email, firstName, lastName, phone, role, img, departmentId } = body;

        const newEmployee = await prisma.employee.create({
            data: {
                username,
                email,
                firstName,
                lastName,
                phone,
                role,
                img,
                department: { connect: { id: departmentId } },
            },
        });

        return NextResponse.json({ success: true, data: newEmployee });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: 'Server Error' }, { status: 500 });
    }
}
