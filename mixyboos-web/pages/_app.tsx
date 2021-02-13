import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { Provider as AuthProvider } from 'next-auth/client';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/globals.css';
import PageContainer from '../components/page-container/PageContainer';

function CustomApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles);
        }
    }, []);

    return (
        <AuthProvider session={pageProps.session}>
            <PageContainer>
                <Component {...pageProps} />
            </PageContainer>
        </AuthProvider>
    );
}

export default CustomApp;
