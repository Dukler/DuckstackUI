import React from "react";
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import {withStyles} from "@material-ui/core";
import PropTypes from "prop-types";

const styles = theme => ({

});

function FormInput ( props ) {
    return (
        <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor={props.id}>{props.caption}</InputLabel>
            <Input id={props.id}
                   name={props.name}
                   autoComplete={props.autoComplete}
                   type={props.type}
                   value={props.value}
                   onChange={props.handleChange}
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
    handleChange: PropTypes.func.isRequired,
    caption: PropTypes.string,
};


export default  withStyles(styles, { withTheme: true })(FormInput);