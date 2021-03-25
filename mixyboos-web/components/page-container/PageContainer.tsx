import React from 'react';
import Head from 'next/head';
import { useSession } from 'next-auth/client';
import TopNavbar from '../top-navbar/TopNavbar';
import Footer from '../footer/Footer';
import { useAudioPlayer } from '../../services/audio';
import { useContext } from 'react';
import { nowPlayingContext } from '../../services/audio/context';

const PageContainer = ({ children }) => {
  const [session] = useSession();
  const { playing } = useAudioPlayer();
  const { nowPlayingId } = useContext(nowPlayingContext);
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
        {(playing || nowPlayingId) && <Footer />}
      </div>
      <audio id="audio-container" className="invisible" />
    </React.Fragment>
  );
};

export default PageContainer;
