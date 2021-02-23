import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';

const CreateMix = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log('create', 'CreateMix', req.body);
    const prisma = new PrismaClient({ log: ['query'] });
    const session = await getSession({ req });

    try {
        const { title, description } = req.body;
        const mix = await prisma.mix.create({
            data: {
                title: title,
                description: description,
                userId: session.id,
            },
        });
        res.status(201);
        res.json(mix);
    } catch (e) {
        console.log('create', 'Error creating mix', e);
        res.status(500);
        res.json({ error: 'Unable to save mix' });
    } finally {
        await prisma.$disconnect();
    }
};

export default CreateMix;
