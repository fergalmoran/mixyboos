import React from 'react';
import { Typography, makeStyles, Button } from '@material-ui/core';
import firebase from 'firebase/app';

import firebaseClient from '../../services/auth/firebaseClient';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));
const AuthPage = ({ session }) => {
    firebaseClient();
    const classes = useStyles();
    return (
        <Typography className={classes.root}>
            <Button
                variant="contained"
                color="secondary"
                onClick={async () => {
                    await firebase.auth().signOut();
                    window.location.href = '/';
                }}
            >
                Logout
            </Button>
        </Typography>
    );
};

export default AuthPage;
