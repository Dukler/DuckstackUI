import React, { useCallback } from "react";
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import {withStyles} from "@material-ui/core";
//import PropTypes from "prop-types";
import useComponent from "../Hooks/useComponent";

const styles = theme => ({

});

function FormInput ( props ) {

    const [state, dispatch] = useComponent(props.id)

    const handleChange = useCallback( 
        (action) => 
            (event)=>{
                event.persist()
                dispatch({ type: action.type, payload: { ...action.payload, event, id:state.id } })
            },[dispatch,state.id]
    )
    const {caption, ...extras} = state.extProperties;

    return (
        <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor={state.id}>{caption}</InputLabel>
            <Input  id={state.id}
                    value={state.value}
                    onChange={handleChange({ type: "INPUT_VALUE" })}
                    {...extras}
            />
        </FormControl>
    )
}

// FormInput.propTypes = {
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     autoComplete: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     value: PropTypes.string.isRequired,
//     caption: PropTypes.string,
// };

export default  withStyles(styles, { withTheme: true })(FormInput);