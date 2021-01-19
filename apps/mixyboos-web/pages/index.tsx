import React from 'react';
import Router from 'next/router';

import { Button, Grid, Link, Typography } from '@material-ui/core';

import { useAuth } from '../services/auth/auth';

export function Index({ props }) {
    const { user } = useAuth();

    return (
        <>
            <Typography variant="h5" component="h3" gutterBottom>
                {`User ID: ${user ? user.uid : 'Please login'}`}
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth={true}
                        disabled={!user}
                    >
                        <Link href="/authenticated" color="inherit">
                            Auth
                        </Link>
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth={true}
                        disabled={user}
                    >
                        <Link href="/login" color="inherit">
                            Login
                        </Link>
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}
export default Index;
