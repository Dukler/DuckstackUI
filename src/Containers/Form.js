import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
});

function Form(props) {
    const { classes } = props;

    return (
        <form className={classes.form}>
        </form>
    );
}


export default withStyles(styles)(Form);