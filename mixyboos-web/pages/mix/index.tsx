import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { initialiseApollo } from '../../src/apollo';

const LIST_MIXES = gql`
    query MixList {
        mixes {
            title
            description
        }
    }
`;
const MixIndexPage = () => {
    const { data, loading, error } = useQuery(LIST_MIXES);
    const renderMix = (mix) => {
        return (
            <React.Fragment key={mix.title}>
                <h1>{mix.title}</h1>
                <div>{mix.description}</div>
            </React.Fragment>
        );
    };
    return (
        <React.Fragment>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <pre>{data.mixes.map((r) => renderMix(r))}</pre>
            )}
        </React.Fragment>
    );
};

// export async function getStaticProps() {
//     const client = initialiseApollo();

//     //warm the cache
//     await client.query({ query: MixListQuery });
//     return {
//         props: {
//             initialApolloState: client.cache.extract(),
//         },
//     };
// }
export default MixIndexPage;
