import { idArg, makeSchema, mutationType, objectType, queryType } from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';
import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema';

export const Mix = objectType({
    name: 'Mix',
    definition(t) {
        t.model.id();
        t.model.title();
        t.model.description();
    },
});

export const Query = queryType({
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

export const Mutation = mutationType({
    definition(t) {
        t.crud.createOneMix();
    },
});

