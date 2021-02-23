import { idArg, makeSchema, mutationType, objectType, queryType } from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';
import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema';
import * as types from './types';
import path from 'path';

const Mix = objectType({
    name: 'Mix',
    definition(t) {
        t.model.id();
        t.model.title();
        t.model.description();
    },
});

const Query = queryType({
    definition(t) {
        t.crud.mix({
            resolve: (_root, args, ctx) => {
                console.log('schema', 'mix', ctx);
                return ctx.prisma.mix.findMany()({
                    where: { id: args.where.id },
                });
            },
        });

        t.crud.mixes({ pagination: true, filtering: true });
    },
});

const Mutation = mutationType({
    definition(t) {
        t.crud.createOneMix();
    },
});

export const schema = makeSchema({
    types: { Query, Mix, Mutation },
    plugins: [
        nexusSchemaPrisma({
            experimentalCRUD: true,
        }),
    ], // Specify where Nexus should put the generated files
    outputs: {
        schema: path.join(process.cwd(), 'schema.gen.graphql'),
        typegen: path.join(process.cwd(), 'nexus.gen.ts'),
    },
});
