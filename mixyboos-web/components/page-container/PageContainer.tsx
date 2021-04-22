import React from 'react';
import { useSession } from 'next-auth/client';
import TopNavbar from '../top-navbar/TopNavbar';
import Footer from '../footer/Footer';
import { Head } from '../head';

const PageContainer = ({ children }) => {
  const [session] = useSession();
  return (
    <React.Fragment>
      <Head title="Mixy::Boos">
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
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default PageContainer;
