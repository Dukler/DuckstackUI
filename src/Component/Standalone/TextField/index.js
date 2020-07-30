import React from "react";
import MTextField from "@material-ui/core/TextField";

import {makeStyles} from "@material-ui/core/styles";

import {objectRequired} from "./../../../Utils/customProptypes";
import useComponent from "./../../../Hooks/Component/useComponent/index";
import reducer from "./reducer";

const useStyles = makeStyles((theme) => ({
    textField: (props) => ({
        ...props,
    }),
}));

function TextField(props) {
    const classes = useStyles(props.styles);

    const [state, dispatch] = useComponent({...props, reducer});
    const {ref, ...params} = props.params;
    const actualProps = {...params, inputProps: ref};

    const handleChange = (event) => {
        event.persist();
        dispatch({type: "UPDATE_VALUE", payload: {event}});
    };

    return (
        <MTextField
            id={props.id}
            className={classes.textField}
            value={state.value}
            onChange={handleChange}
            {...actualProps}
        />
    );
}

TextField.propTypes = {
    styles: objectRequired,
};

export default TextField;
