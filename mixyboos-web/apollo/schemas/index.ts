import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
    type Mix {
        id: ID
        title: String
        description: String
    }

    type Query {
        getMixes: [Mix]
        getMix(id: ID!): Mix!
    }

    type Mutation {
        addMix(title: String, description: String): Mix!
    }

`;
