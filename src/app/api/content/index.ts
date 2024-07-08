import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../db/connectDB';
import Content from '../../../models/Content';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectDB();

    if (req.method === 'GET') {
        try {
            const content = await Content.find();
            res.status(200).json(content);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}

