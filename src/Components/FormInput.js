import React, { useCallback } from "react";
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import useComponent from "../Hooks/useComponent";
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => ({

// }));

function FormInput ( props ) {
    // const classes = useStyles();
    // const theme = useTheme();
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


export default  FormInput;