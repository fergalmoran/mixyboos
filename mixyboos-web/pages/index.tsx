import React from 'react';
import Landing from '../components/landing/Landing';
import UserHome from '../components/user-home/UserHome';

import { useAuth } from '../services/auth/auth';

export function Index({ props }) {
    const { user } = useAuth();

    return user ? <UserHome /> : <Landing />;
}
export default Index;
