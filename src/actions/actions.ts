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

// import { promises as fs } from 'fs';
// import { fileURLToPath } from 'url';
// import { dirname, join } from 'path';
// import { Data } from '@/types/types';

// // Convert the current module URL to a file path and get the directory name
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// export const fetchListData = async (): Promise<Data> => {
//     try {
//         const filePath = join(__dirname, '..', 'data.json');
//         // Read the file contents
//         const fileContents = await fs.readFile(filePath, 'utf-8');
//         return JSON.parse(fileContents);
//     } catch (error) {
//         throw new Error('Failed to fetch list data');
//     }
// };
