import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function POST(req) {
    try {
        const body = await req.json();
        const { projectName, startDate, endDate } = body;

        const newProject = await prisma.project.create({
            data: {
                projectName,
                startDate: new Date(startDate),
                endDate: new Date(endDate),

            },
        });

        return NextResponse.json(newProject, { status: 201 });
    } catch (error) {
        console.error('Create Project Error:', error);
        return NextResponse.json({ message: 'Failed to create project' }, { status: 500 });
    }
}
