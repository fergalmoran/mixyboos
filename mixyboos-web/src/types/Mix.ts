import { objectType, queryType } from 'nexus';

const Mix = objectType({
    name: 'Mix',
    definition(t) {
        t.model.title();
        t.model.description();
    },
});

const Query = queryType({
    definition(t) {
        t.crud.user();
    },
});
