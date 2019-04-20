import React, { useCallback } from "react";
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import {withStyles} from "@material-ui/core";
import PropTypes from "prop-types";
import useComponent from "../Hooks/useComponent";

const styles = theme => ({

});

function FormInput ( props ) {

    const [state, dispatch] = useComponent(props.id)

    const handleChange = (action) => useCallback(
        (event) => {
            event.persist();
            dispatch({ ...action, event });
        },
        [action],
    );

    return (
        <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor={state.id}>{state.caption}</InputLabel>
            <Input  id={state.id}
                    name={state.name}
                    autoComplete={state.autoComplete}
                    type={state.type}
                    value={state.value}
                    onChange={handleChange({ type: "inputValue", id: state.id })}
                    autoFocus={false}
            />
        </FormControl>
    )
}

FormInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    autoComplete: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    caption: PropTypes.string,
};


export default  withStyles(styles, { withTheme: true })(FormInput);