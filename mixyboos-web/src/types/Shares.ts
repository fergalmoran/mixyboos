import { objectType } from 'nexus';

export const Shares = objectType({
    name: 'Shares',
    definition(t) {
        t.model.id();
        t.model.user();
        t.model.createdAt();
    },
});
