import React from 'react';
import Router from 'next/router';

import { Link, Button } from '@material-ui/core';

import { useAuth } from '../services/auth/auth';

export function Index({ props }) {
    const { user } = useAuth();

    if (user) {
        return `User: ${user.uid}`;
    } else {
        return (
            <Button
                variant="contained"
                color="primary"
                onClick={() => Router.push('/login')}
            >
                Login
            </Button>
        );
    }
}
export default Index;
