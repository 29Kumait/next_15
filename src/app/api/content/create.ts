import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../db/connectDB';
import Content from '../../../models/Content';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectDB();

    if (req.method === 'POST') {
        try {
            const { description } = req.body;

            if (!description) {
                return res.status(400).json({ error: 'Description is required' });
            }

            const newContent = new Content({ description });
            await newContent.save();

            res.status(201).json(newContent);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
