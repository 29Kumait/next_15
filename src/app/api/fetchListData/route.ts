import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import { join } from 'path';

export async function GET(request: NextRequest) {
    try {
        const filePath = join(process.cwd(), 'src', 'data.json');
        const fileContents = await fs.readFile(filePath, 'utf-8');
        const data = JSON.parse(fileContents);
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error('Failed to fetch list data:', error);
        return NextResponse.json({ message: 'Failed to fetch list data' }, { status: 500 });
    }
}
