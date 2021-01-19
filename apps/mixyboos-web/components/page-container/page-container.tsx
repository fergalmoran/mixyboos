import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NavBar from '../../../../.krud/mixyboos-web/components/NavBar';
import Footer from '../footer/footer';

/* eslint-disable-next-line */
export interface PageContainerProps {}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
}));
const PageContainer = ({ children }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavBar />
            <Container component="main" className={classes.main} maxWidth="sm">
                {children}
            </Container>
            <Footer />
        </div>
    );
};

export default PageContainer;
