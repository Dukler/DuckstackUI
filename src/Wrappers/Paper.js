import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MPaper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        //alignItems: 'center',
        padding: theme.spacing(1, 2, 2),
        width: "100%",
    },
}));

function Paper(props) {
    const { children } = props;
    const classes = useStyles();

    return (
        <main className={classes.main}>
            <CssBaseline />
            <MPaper className={classes.paper}>
                {children}
            </MPaper>
        </main>
    )
};


export default Paper;