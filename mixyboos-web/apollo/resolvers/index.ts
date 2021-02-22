import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({ log: ['query'] });
export const resolvers = {
    Query: {
        getMixes: async () => {
            try {
                const mixes = await prisma.mix.findMany();
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
