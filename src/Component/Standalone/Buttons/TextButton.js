import React from "react";
import MButton from "@material-ui/core/Button";
import {objectRequired} from "../../../Utils/customProptypes";
import {makeStyles} from "@material-ui/core/styles";
import useExtendedActions from "./../../../Hooks/Actions/useExtendedActions";

const useStyles = makeStyles((theme) => ({
    button: (props) => ({
        ...props,
    }),
}));

function TextButton(props) {
    const classes = useStyles(props.styles);
    const componentRef = useExtendedActions(props);
    // const {label, ...extras} = props.extProperties;

    return (
        <MButton
            ref={componentRef}
            className={classes.button}
            {...props.params}
        >
            {props.extProperties.label}
        </MButton>
    );
}

TextButton.propTypes = {
    styles: objectRequired,
};

export default TextButton;
