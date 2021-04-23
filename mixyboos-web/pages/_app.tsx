import React from 'react';
import { AppProps } from 'next/app';

import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../src/apollo';
import { RecoilRoot } from 'recoil';
import { UserProvider } from '@auth0/nextjs-auth0';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/globals.css';

import PageContainer from '../components/page-container/PageContainer';
import AudioProvider from '../services/audio/AudioProvider';

function CustomApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <RecoilRoot>
      <UserProvider>
        <ApolloProvider client={client}>
          <AudioProvider>
            <PageContainer>
              <Component {...pageProps} />
            </PageContainer>
          </AudioProvider>
        </ApolloProvider>
      </UserProvider>
    </RecoilRoot>
  );
}

export default CustomApp;
