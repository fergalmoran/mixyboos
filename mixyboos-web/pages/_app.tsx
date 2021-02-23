import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { Provider as AuthProvider } from 'next-auth/client';
import {ApolloProvider} from '@apollo/client';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/globals.css';
import PageContainer from '../components/page-container/PageContainer';
import { useApollo } from '../src/apollo';

function CustomApp({ Component, pageProps }: AppProps) {
    const client = useApollo(pageProps.initialApolloState);

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles);
        }
    }, []);

    return (
        <AuthProvider session={pageProps.session}>
            <ApolloProvider client={client}>
                <PageContainer>
                    <Component {...pageProps} />
                </PageContainer>
            </ApolloProvider>
        </AuthProvider>
    );
}

export default CustomApp;
