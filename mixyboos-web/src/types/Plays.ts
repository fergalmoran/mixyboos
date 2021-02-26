 import { mutationType, objectType, queryType } from 'nexus';

export const Plays = objectType({
    name: 'Plays',
    definition(t) {
        t.model.id();
        t.model.createdAt();
    },
});
