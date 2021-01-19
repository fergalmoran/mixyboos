import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { SnackbarProvider } from 'notistack';
import createCache from '@emotion/cache';

import PageContainer from '../components/page-container/page-container';
import theme from '../theme';

export const cache = createCache({ key: 'css', prepend: true });

function CustomApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <PageContainer>
            <CssBaseline />
            <Component {...pageProps} />
          </PageContainer>
        </SnackbarProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default CustomApp;
