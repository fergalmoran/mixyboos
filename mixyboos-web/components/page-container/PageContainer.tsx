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
            <main>
                {session ? (
                    <section className="header relative pt-16 flex h-screen max-h-860-px">
                        <div className="container mx-auto flex flex-wrap mt-5">
                            {children}
                        </div>
                    </section>
                ) : (
                    <React.Fragment>{children}</React.Fragment>
                )}
            </main>
        </React.Fragment>
    );
};

export default PageContainer;
