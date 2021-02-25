import { mutationType, objectType, queryType } from 'nexus';
// import { User } from './User';

export const Mix = objectType({
    name: 'Mix',
    definition(t) {
        t.model.id();
        t.model.title();
        t.model.description();
        t.model.image();
        t.model.user();
    },
});

export const MixQuery = queryType({
    definition(t) {
        t.crud.mix({
            resolve: (_root, args, ctx) => {
                console.log('schema', 'mix', ctx);
                return ctx.prisma.mix.findMany({
                    skip: 0,
                    take: 1,
                })({
                    where: { id: args.where.id },
                });
            },
        });

        t.crud.mixes({ pagination: true, filtering: true });
    },
});

export const MixMutation = mutationType({
    definition(t) {
        t.crud.createOneMix();
    },
});
