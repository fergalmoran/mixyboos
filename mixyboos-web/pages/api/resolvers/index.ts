import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/client';
import { createContext } from '../../../src/context';

const context = createContext();
export const resolvers = {
    Query: {
        getMixes: async () => {
            try {
                const mixes = await context.prisma.mix.findMany();
                return mixes;
            } catch (error) {
                throw error;
            }
        },
        // addMix: async (_, args) => {
        //     const mix = await prisma.mix.create({
        //         data: {
        //             title: 'Fart',
        //             description: 'Farty McFartFace',
        //             userId: '123456',
        //         },
        //     });
        // },
    },
};
