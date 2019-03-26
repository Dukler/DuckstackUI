import React from "react";
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import {withStyles} from "@material-ui/core";

const styles = theme => ({

});

function FormInputTest ( props ) {
    return (
        <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor={props.attributes.id}>{props.attributes.caption}</InputLabel>
            <Input id={props.attributes.id}
                   key={props.attributes.id}
                   name={props.attributes.name}
                   autoComplete={props.attributes.autoComplete}
                   type={props.attributes.type}
                   value={props.attributes.value}
                   onChange={props.handleChange}
                   autoFocus={false}
            />
        </FormControl>
    )
}

export default  withStyles(styles, { withTheme: true })(FormInputTest);