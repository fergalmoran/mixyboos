import {
    ApolloClient,
    InMemoryCache,
    NormalizedCacheObject,
} from '@apollo/client';
import { useMemo } from 'react';

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

const createIsomorphicLink = () => {
    if (typeof window === 'undefined') {
        const { SchemaLink } = require('@apollo/client/link/schema');
        const { schema } = require('./schema');
        return new SchemaLink({ schema });
    } else {
        const { HttpLink } = require('@apollo/client/link/http');
        return new HttpLink({
            uri: '/api/graphql',
            credentials: 'same-origin',
        });
    }
};
const createApolloClient = () => {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: createIsomorphicLink(),
        cache: new InMemoryCache(),
    });
};

const initialiseApollo = (initialState: any = null) => {
    const c = apolloClient ?? createApolloClient();
    if (initialState) {
        c.cache.restore(initialState);
    }
    if (typeof window === 'undefined') {
        //don't ever re-use the apollo client if we're on the server
        return c;
    }
    apolloClient = apolloClient ?? c;
    return c;
};

const useApollo = (initialState: any) => {
    const store = useMemo(() => initialiseApollo(initialState), [initialState]);
    return store;
};

export { useApollo, initialiseApollo };
