import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default function FloatingActionButton(props) {
    const classes = useStyles();
    const { extProperties } = props;
    const { extended, icon, label, ...btnProps } = extProperties;
    const iconClassName = btnProps.variant === "extended" ? classes.extended : null;

    return (
        <Fab {...btnProps} className={classes.fab}>
            <Icon className={iconClassName}>{`${icon}_icon`}</Icon>
            {label}
        </Fab>
    );
}