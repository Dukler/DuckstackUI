import React from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        //maxWidth: 360,
        //backgroundColor: theme.palette.background.paper,
    },
}));


function SimpleList(props) {
    const { children } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List component="nav">
                {children}
            </List>
        </div>
    );
}

export default SimpleList;

