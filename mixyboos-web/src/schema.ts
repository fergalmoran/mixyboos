import { makeSchema } from 'nexus';
import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema';
import * as types from './types';
import path from 'path';

export const schema = makeSchema({
    types: types,
    plugins: [
        nexusSchemaPrisma({
            experimentalCRUD: true,
        }),
    ],
    outputs: {
        schema: path.join(process.cwd(), 'schema.gen.graphql'),
        typegen: path.join(process.cwd(), 'nexus.gen.ts'),
    },
});
