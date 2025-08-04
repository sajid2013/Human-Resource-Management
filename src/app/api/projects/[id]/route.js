import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function PUT(req, { params }) {
    try {
        const { id } = params;
        const body = await req.json();
        const { projectName, startDate, endDate } = body;

        const updatedProject = await prisma.project.update({
            where: { id },
            data: {
                projectName,
                startDate: new Date(startDate),
                endDate: new Date(endDate),

            },
        });

        return NextResponse.json(updatedProject);
    } catch (error) {
        console.error('Update Project Error:', error);
        return NextResponse.json({ message: 'Failed to update project' }, { status: 500 });
    }
}

export async function DELETE(req, { params }) {
    try {
        const { id } = params;

        await prisma.project.delete({
            where: { id },
        });

        return NextResponse.json({ message: 'Project deleted successfully' });
    } catch (error) {
        console.error('Delete Project Error:', error);
        return NextResponse.json({ message: 'Failed to delete project' }, { status: 500 });
    }
}

export async function GET(req, { params }) {
    try {
        const { id } = params;

        const project = await prisma.project.findUnique({
            where: { id },
        });

        if (!project) {
            return NextResponse.json({ message: 'Project not found' }, { status: 404 });
        }

        return NextResponse.json(project);
    } catch (error) {
        console.error('Get Project Error:', error);
        return NextResponse.json({ message: 'Failed to get project' }, { status: 500 });
    }
}
