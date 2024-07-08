import { NextResponse } from 'next/server';
import connectDB from '@/db/connectDB';
import Content from '@/models/Content';

export async function POST(req: Request) {
    await connectDB();

    try {
        const { description } = await req.json();

        if (!description) {
            return NextResponse.json({ error: 'Description is required' }, { status: 400 });
        }

        const newContent = new Content({ description });
        await newContent.save();

        return NextResponse.json(newContent, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}