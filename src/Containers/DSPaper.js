import React from 'react';
//import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
});

const DSPaper = props => {
    const { classes, children } = props;
    return (
        <main className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
                {children}
            </Paper>
        </main>
    );
};

// Paper.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(DSPaper);

// const DSPaper = props => {
//
//     console.log("paper");
//     return (
//         <>
//             <CssBaseline />
//             <Paper>
//
//             </Paper>
//         </>
//     );
// };
//
// export default DSPaper;