import React from 'react';
import { useSession } from 'next-auth/client';
import TopNavbar from '../top-navbar/TopNavbar';
import Footer from '../footer/Footer';
import { Head } from '../head';
import useAudioStore from '../../services/audio/audioStore';
import { PlayState } from '../../services/audio/audioStore';

const PageContainer = ({ children }) => {
  const playState = useAudioStore((state) => state.playState);
  return (
    <React.Fragment>
      <Head title="Mixy::Boos">
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <body className="flex flex-col min-h-screen" />
      </Head>
      <div className="flex flex-col h-screen">
        <header className="py-5 bg-gray-700 text-white text-center">
          <TopNavbar />
        </header>
        <main className="flex-1 overflow-y-auto p-5 mt-6">
          <React.Fragment>{children}</React.Fragment>
        </main>
        {playState !== PlayState.stopped ?? (
          <footer className="py-5 bg-podnoms text-center text-white">
            <Footer />
          </footer>
        )}
      </div>
    </React.Fragment>
  );
};

export default PageContainer;
