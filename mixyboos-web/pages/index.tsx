import React from 'react';
import Landing from '../components/landing/Landing';
import UserHome from '../components/user-home/UserHome';

import { useSession } from 'next-auth/client';

export function Index({ props }) {
    const [session, loading] = useSession();

    const loadingPage = () => {
        return (
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
        );
    };
    return loading ? loadingPage() : session ? <UserHome /> : <Landing />;
}
export default Index;
