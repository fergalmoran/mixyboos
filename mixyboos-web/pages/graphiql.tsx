import GraphiQL from 'graphiql';
import React from 'react';
import 'graphiql/graphiql.min.css';

const GraphiQl = () => {
  return (
    <div className="h-full">
      <GraphiQL
        fetcher={async (graphQLParams) => {
          const data = await fetch(
            'https://swapi-graphql.netlify.app/.netlify/functions/index',
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(graphQLParams),
              credentials: 'same-origin',
            }
          );
          return data.json().catch(() => data.text());
        }}
      />
    </div>
  );
};

export default GraphiQl;
