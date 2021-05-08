import { mutationType, objectType, queryType } from 'nexus';
import { getSession } from '@auth0/nextjs-auth0';

export const Mix = objectType({
    name: 'Mix',
    definition(t) {
        t.model.id();
        t.model.title();
        t.model.description();
        t.model.audioUrl();
        t.model.image();
        t.model.user();
        t.model.favourites();
        t.model.shares();
        t.int('playCount', {
            description: 'Number of times this mix has been played',
            resolve: async (parent: any, args: any, ctx: any) => {
                try {
                    return (
                        await ctx.prisma.plays.findMany({
                            where: { mixId: parent.id },
                        })
                    ).length;
                } catch (err) {
                    console.log('Mix', 'Error finding play count', err);
                    return 0;
                }
            },
        });
        t.int('favouriteCount', {
            description: 'Number of times this mix has been favourited',
            resolve: async (parent: any, args: any, ctx: any) => {
                try {
                    return (
                        await ctx.prisma.favourites.findMany({
                            where: { mixId: parent.id },
                        })
                    ).length;
                } catch (err) {
                    console.log('Mix', 'Error finding favourite count', err);
                    return 0;
                }
            },
        });
        t.int('shareCount', {
            description: 'Number of times this mix has been shared',
            resolve: async (parent: any, args: any, ctx: any) => {
                try {
                    return (
                        await ctx.prisma.shares.findMany({
                            where: { mixId: parent.id },
                        })
                    ).length;
                } catch (err) {
                    console.log('Mix', 'Error finding share count', err);
                    return 0;
                }
            },
        });
    },
});

export const MixQuery = queryType({
    definition(t) {
        t.crud.mix({
            resolve: (_root, args, ctx) => {
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
        const session = getSession();
        // t.field("userId", {
        //
        // })
        t.crud.createOneMix();
    },
});
