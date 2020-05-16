import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import MSpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import {objectRequired} from "../../../Utils/customProptypes";
import DialIcons from "./DialIcons";

const useStyles = makeStyles((theme) => ({
    root: {
        height: 380,
    },
    speedDial: {
        height: 380,
        position: "absolute",
        bottom: theme.spacing(2),
        right: theme.spacing(10),
        //top: theme.spacing(1),
        //left: theme.spacing(2)
    },
    action: {
        backgroundColor: "black",
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

function SpeedDial(props) {
    const classes = useStyles();
    const [state, setState] = useState({
        open: false,
        hidden: false,
        direction: "up",
    });

    // const iconComponents = [
    //     {icon: <FileCopyIcon />, name: "Copy"},
    //     {icon: <SaveIcon />, name: "Save"},
    //     {icon: <PrintIcon />, name: "Print"},
    //     {icon: <ShareIcon />, name: "Share"},
    //     {icon: <DeleteIcon />, name: "Delete"},
    // ];
    const iconComponents = DialIcons(props.extProperties.iconComponents);

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

    const {hidden, open, direction} = state;

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
            {iconComponents.map((action) => (
                <SpeedDialAction
                    className={classes.action}
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    tooltipOpen
                    onClick={handleClick}
                    open={false}
                />
            ))}
        </MSpeedDial>
    );
}

SpeedDial.propTypes = {
    styles: objectRequired,
};

export default SpeedDial;
