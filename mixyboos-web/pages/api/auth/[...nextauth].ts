import { NextApiHandler } from 'next';
import { PrismaClient } from '@prisma/client';
import NextAuth from 'next-auth';
import Adapters from 'next-auth/adapters';
import Providers from 'next-auth/providers';

const prisma = new PrismaClient();

const options = {
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    adapter: Adapters.Prisma.Adapter({ prisma }),
    secret: process.env.AUTH_SECRET
};

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;
