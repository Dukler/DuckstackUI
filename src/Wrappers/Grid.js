import React from 'react';
import MGrid from '@material-ui/core/Grid';
import { orderList } from '../Utils';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    Grid: {
    },
}));

const Grid = React.memo(function Grid(props) {
    const { componentsState, wrapperState } = props;
    const classes = useStyles();
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

export default Grid;
