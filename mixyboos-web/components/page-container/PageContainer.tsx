import React from 'react';
import Head from 'next/head';
import TopNavbar from '../top-navbar/TopNavbar';
import Landing from '../landing/Landing';
import UserHome from '../user-home/UserHome';
import { useSession } from 'next-auth/client';

const PageContainer = ({ children }) => {
    const [session] = useSession();
    return (
        <React.Fragment>
            <Head>
                <title>Mixy::Boos</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <TopNavbar />
            <main className="mt-20  overflow-hidden block p-4">
                {session ? (
                    <React.Fragment>{children}</React.Fragment>
                ) : (
                    <React.Fragment>{children}</React.Fragment>
                )}
            </main>
        </React.Fragment>
    );
};

export default PageContainer;
