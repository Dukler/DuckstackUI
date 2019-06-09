import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import MSpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';
import { objectRequired } from './../Utils/customProptypes';

const useStyles = makeStyles(theme => ({
    root: {
        height: 380,
    },
    speedDial: {
        height: 380,
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(10),
        //top: theme.spacing(1),
        //left: theme.spacing(2)
    },
    // '&$directionUp, &$directionLeft': {
    //     bottom: theme.spacing(2),
    //     right: theme.spacing(3),
    // },
    // '&$directionDown, &$directionRight': {
    //     top: theme.spacing(2),
    //     left: theme.spacing(3),
    // },
}));

const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
    { icon: <DeleteIcon />, name: 'Delete' },
];

function SpeedDial(props) {
    const classes = useStyles();
    const [state, setState] = useState({ open: false, hidden: false, direction: 'up' })


    // const handleVisibility = () => {
    //     setState(state => ({
    //         open: false,
    //         hidden: !state.hidden,
    //     }));
    // };

    const handleClick = () => {
        setState({
            ...state,
            open: !state.open,
        });
    };

    const handleOpen = () => {
        if (!state.hidden) {
            setState({
                ...state,
                open: true,
            });
        }
    };

    const handleClose = () => {
        setState({
            ...state,
            open: false,
        });
    };

    // const handleDirectionChange = (event, value) => {
    //     setState({
    //         ...state,
    //         direction: value,
    //     });
    // };

    const { hidden, open, direction } = state;

    return (
        <MSpeedDial
            ariaLabel="SpeedDial tooltip example"
            className={classes.speedDial}
            hidden={hidden}
            icon={<SpeedDialIcon openIcon={null} />}
            onBlur={handleClose}
            onClick={handleClick}
            onClose={handleClose}
            onFocus={handleOpen}
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
            open={open}
            direction={direction}
        >
            {actions.map(action => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    tooltipOpen
                    onClick={handleClick}
                />
            ))}
        </MSpeedDial>
    );

}

SpeedDial.propTypes = {
    styles: objectRequired
};

export default SpeedDial;