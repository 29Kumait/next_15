import { promises as fs } from 'fs';
import path from 'path';
import { Data } from '../types/types';

export const fetchListData = async (): Promise<Data> => {
    try {
        const filePath = path.join(process.cwd(), 'src', 'data.json');
        const fileContents = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(fileContents);
    } catch (error) {
        throw new Error('Failed to fetch list data');
    }
};

