import { NextResponse } from 'next/server';
import connectDB from '@/db/connectDB';
import Content from '@/models/Content';

export async function GET() {
    await connectDB();

    try {
        const content = await Content.find();
        return NextResponse.json(content, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}