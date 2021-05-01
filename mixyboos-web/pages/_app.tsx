import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../src/apollo';
import { UserProvider } from '@auth0/nextjs-auth0';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/globals.css';

import PageContainer from '../components/page-container/PageContainer';
import AudioProvider from '../services/audio/AudioProvider';
import { AppProps } from 'next/dist/next-server/lib/router/router';

function CustomApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <UserProvider>
      <ApolloProvider client={client}>
        <AudioProvider>
          <PageContainer>
            <Component {...pageProps} />
          </PageContainer>
        </AudioProvider>
      </ApolloProvider>
    </UserProvider>
  );
}

export default CustomApp;
