import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Convert the current module URL to a file path and get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const fetchListData = async (): Promise<Array<{ id: string; name: string; url: string }>> => {
    try {
        const filePath = join(__dirname, '..', 'data.json');
        // Read the file contents
        const fileContents = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(fileContents);
    } catch (error) {
        console.error('Failed to fetch list data:', error);
        throw new Error('Failed to fetch list data');
    }
};

interface ListData {
    id: string;
    name: string;
    url: string;
}
export const fetchData = async (): Promise<ListData[]> => {
    const url = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/fetchListData';
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch list data');
    }
    return response.json();
};

