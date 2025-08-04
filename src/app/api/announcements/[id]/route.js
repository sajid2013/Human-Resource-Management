// src/app/api/announcements/[id]/route.js

import prisma from "../../../../lib/prisma";
import { NextResponse } from "next/server";

//  UPDATE ANNOUNCEMENT
export async function PUT(req, { params }) {
    const id = params.id;
    const data = await req.json();

    try {
        const updated = await prisma.announcement.update({
            where: { id },
            data,
        });

        return NextResponse.json(updated);
    } catch (error) {
        console.error("PUT error:", error);
        return new NextResponse("Failed to update announcement", { status: 500 });
    }
}

//  DELETE ANNOUNCEMENT
export async function DELETE(req, { params }) {
    const id = params.id;

    try {
        await prisma.announcement.delete({ where: { id } });
        return new NextResponse("Deleted successfully", { status: 200 });
    } catch (error) {
        console.error("DELETE error:", error);
        return new NextResponse("Failed to delete announcement", { status: 500 });
    }
}
