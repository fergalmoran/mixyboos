import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/client';

const GetMixes = async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient({ log: ['query'] });
    const session = await getSession({ req });

    try {
        const mixes = await prisma.mix.findMany();
        res.json(mixes);
    } catch (e) {
        console.log('index', 'Error listing mixes', e);
        res.status(500);
        res.json({ error: 'Unable to get mixes' });
    } finally {
        await prisma.$disconnect();
    }
};
export default GetMixes;
