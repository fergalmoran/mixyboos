import React from 'react';
import Head from 'next/head';
import { useSession } from 'next-auth/client';
import { useRecoilState } from 'recoil';
import { siteConfigStore } from '../../store';
import TopNavbar from '../top-navbar/TopNavbar';
import Footer from '../footer/Footer';

const PageContainer = ({ children }) => {
  const [session] = useSession();
  const [siteConfig, setSiteConfig] = useRecoilState(siteConfigStore);
  return (
    <React.Fragment>
      <Head>
        <title>Mixy::Boos</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <div className="flex flex-col h-screen justify-between">
        <TopNavbar />
        <main className="mb-auto overflow-x-hidden h-full mt-2">
          {session ? (
            <React.Fragment>{children}</React.Fragment>
          ) : (
            <React.Fragment>{children}</React.Fragment>
          )}
        </main>
        {siteConfig.footerOpen && <Footer />}
      </div>
      <audio id="audio-container" className="invisible" />
    </React.Fragment>
  );
};

export default PageContainer;
