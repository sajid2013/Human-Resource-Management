import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

// GET by ID
export async function GET(req, { params }) {
    const { id } = params;

    try {
        const department = await prisma.department.findUnique({
            where: { id },
        });

        if (!department) {
            return NextResponse.json({ success: false, message: "Department not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: department });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}

// UPDATE
export async function PUT(req, { params }) {
    const { id } = params;
    const body = await req.json();

    try {
        const updated = await prisma.department.update({
            where: { id },
            data: body,
        });

        return NextResponse.json({ success: true, data: updated });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}

// DELETE
export async function DELETE(req, { params }) {
    const { id } = params;

    try {
        const deleted = await prisma.department.delete({
            where: { id },
        });

        return NextResponse.json({ success: true, data: deleted });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
