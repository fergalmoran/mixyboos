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

    mutation AddMix($type: String!) {
        addMix(type: $type) {
            title
            description
        }
    }
`;
