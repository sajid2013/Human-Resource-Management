import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
    try {
        const body = await req.json();
        const { title, date, employeeId } = body;

        const announcement = await prisma.announcement.create({
            data: {
                title,
                date: new Date(date),
                employeeId,
            },
        });

        return new Response(JSON.stringify(announcement), { status: 201 });
    } catch (err) {
        console.error('❌ Error:', err);
        return new Response(JSON.stringify({ error: 'Failed to create announcement' }), {
            status: 500,
        });
    }
}

export async function PUT(req) {
    const body = await req.json();
    const { id, title, description, date } = body;

    const updated = await prisma.announcement.update({
        where: { id },
        data: {
            title,
            description,
            date: new Date(date),
        },
    });

    return Response.json(updated);
}

export async function DELETE(req) {
    const body = await req.json();
    const { id } = body;

    await prisma.announcement.delete({ where: { id } });
    return new Response("Deleted", { status: 200 });
}