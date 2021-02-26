import { objectType } from 'nexus';

export const Favourites = objectType({
    name: 'Favourites',
    definition(t) {
        t.model.id();
        t.model.user();
        t.model.createdAt();
    },
});
