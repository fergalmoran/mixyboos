import React, { useContext, useEffect } from 'react';
import { AppProps } from 'next/app';
import { Provider as AuthProvider } from 'next-auth/client';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../src/apollo';
import { RecoilRoot } from 'recoil';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/globals.css';

import PageContainer from '../components/page-container/PageContainer';
import { AudioPlayerProvider } from '../services/audio';

function CustomApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <RecoilRoot>
      <AuthProvider session={pageProps.session}>
        <ApolloProvider client={client}>
          <AudioPlayerProvider>
            <PageContainer>
              <Component {...pageProps} />
            </PageContainer>
          </AudioPlayerProvider>
        </ApolloProvider>
      </AuthProvider>
    </RecoilRoot>
  );
}

export default CustomApp;
