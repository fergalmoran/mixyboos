import React from 'react';
import Head from 'next/head';
import { useSession } from 'next-auth/client';
import TopNavbar from '../top-navbar/TopNavbar';
import Footer from '../footer/Footer';
import { audioStore } from '../../store';
import { useRecoilValue } from 'recoil';
import { PlayState } from '../../store/audioStore';

const PageContainer = ({ children }) => {
  const [session] = useSession();
  const playState = useRecoilValue(audioStore);
  return (
    <React.Fragment>
      <Head>
        <title>Mixy::Boos</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        {/* <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" /> */}
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
        {playState.playState !== PlayState.stopped && <Footer />}
        {/* <Footer /> */}
      </div>
      <audio id="audio-container" className="invisible" />
    </React.Fragment>
  );
};

export default PageContainer;
