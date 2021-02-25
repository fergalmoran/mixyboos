 import { mutationType, objectType, queryType } from 'nexus';

export const User = objectType({
    name: 'User',
    definition(t) {
        t.model.id();
        t.model.name();
        t.model.email();
    },
});

// export const UserQuery = queryType({
//     definition(t) {
//         t.crud.user({
//             resolve: (_root, args, ctx) => {
//                 console.log('schema', 'mix', ctx);
//                 return ctx.prisma.user.findMany({
//                     skip: 0,
//                     take: 1,
//                 })({
//                     where: { id: args.where.id },
//                 });
//             },
//         });

//         t.crud.users({ pagination: true, filtering: true });
//     },
// });

// export const Mutation = mutationType({
//     definition(t) {
//         t.crud.createOneUser();
//     },
// });
