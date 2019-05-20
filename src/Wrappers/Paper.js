import React from 'react';
//import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import MPaper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        height: 'auto',
        // marginLeft: theme.spacing.unit * 1,
        // [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        //     width: 400,
        //     marginLeft: 'auto',
        //     marginRight: 'auto',
        // },
        // [theme.breakpoints.down('sm')]: {
        //     height:300,
        // },
        // [theme.breakpoints.up('md')]: {
        //     height: 400,
        // },
        // [theme.breakpoints.up('lg')]: {
        //     height: 500,
        // },
        // [theme.breakpoints.up('xl')]: {
        //     height: 900,
        // },
    },
    paper: {
        marginTop: theme.spacing.unit * 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        //padding: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 1}px`,
        position: "absolute",
        width: "65%",
        height: "60%",
        //height:600
    },
});

const Paper = React.memo(function Paper(props) {
    const { classes, children } = props;

    // children.map(child => {
    //     console.log(child);
    // });
    
    return (
        <main className={classes.main}>
            <CssBaseline />
            <MPaper className={classes.paper}>
                {children}
            </MPaper>
        </main>
    )
});

// Paper.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Paper);
//export default Paper;