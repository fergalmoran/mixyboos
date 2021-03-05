import { gql, useQuery } from '@apollo/client';
import React from 'react';
import MixListItem from './MixListItem';
const MixList = () => {
  const LIST_MIXES = gql`
    query MixList {
      mixes(first: 0, last: 10) {
        id
        title
        description
        image
        playCount
        user {
          name
          image
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(LIST_MIXES);
  return (
    <React.Fragment>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {data.mixes.map((mix) => (
            <MixListItem key={mix.id} mix={mix} />
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default MixList;
