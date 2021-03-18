import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/client';
import { createContext } from '../../../src/context';

const GetMixes = async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });
    const context = createContext();

    try {
        const mixes = await context.prisma.mix.findMany();
        res.json(mixes);
    } catch (e) {
        console.log('index', 'Error listing mixes', e);
        res.status(500);
        res.json({ error: 'Unable to get mixes' });
    }
};
export default GetMixes;
