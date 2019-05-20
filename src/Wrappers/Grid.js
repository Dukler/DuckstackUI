import React from 'react';
//import PropTypes from 'prop-types';
import MGrid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import { orderList } from '../Utils';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    Grid: {
    },
});

const Grid = React.memo(function Grid(props) {
    const { classes, componentsState, wrapperState } = props;
    const list = orderList (componentsState,wrapperState.components)
    return (
        <div className={classes.root}>
            <MGrid {...wrapperState.extProperties}>
                {list.map(comp => {
                    const { AsyncImport, ...cleanComp } = comp;
                    return (
                        <MGrid {...cleanComp.wrapper.grid} key={comp.id}>
                            <AsyncImport
                                {...cleanComp}
                            />
                        </MGrid>
                    )
                })}
            </MGrid>
        </div>
    );
});

// Grid.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Grid);
