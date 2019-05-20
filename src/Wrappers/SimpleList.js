import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});


function SimpleList(props) {
    const { classes, children } = props;
    return (
        <div className={classes.root}>
            <List component="nav">
                {children}
            </List>
        </div>
    );
}
//<DynamicList element="linkList" wrapper={{ id: "root" }} />
SimpleList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);

