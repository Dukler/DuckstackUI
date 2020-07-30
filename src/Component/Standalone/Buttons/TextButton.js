import React from "react";
import MButton from "@material-ui/core/Button";
import {objectRequired} from "../../../Utils/customProptypes";
import {makeStyles} from "@material-ui/core/styles";
import useEventActions from "./../../../Hooks/Actions/useEventActions";
// import useComponentState from "./../../../Hooks/State/useComponentState";

const useStyles = makeStyles((theme) => ({
    button: (props) => ({
        ...props,
    }),
}));

function TextButton(props) {
    const classes = useStyles(props.styles);
    const componentRef = useEventActions(props);
    // const [comp] = useComponentState({id: "abmNombre"});
    // const {label, ...extras} = props.extProperties;
    const {ref, ...params} = props.params;
    const onClickHandler = () => {
        // comp.dispatch({type: "TEST"});
    };

    return (
        <MButton
            ref={componentRef}
            className={classes.button}
            onClick={onClickHandler}
            {...params}
        >
            {props.extProperties.label}
        </MButton>
    );
}

TextButton.propTypes = {
    styles: objectRequired,
};

export default TextButton;
