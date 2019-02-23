import React from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

export const WidgetRender = ({attributes, opts }) => {
    let render = null;

    switch (attributes.dstype) {
        case "options":
            render =
                <select
                    id={attributes.id}
                    name={attributes.name}
                    value={opts.value}
                    onChange={opts.onValueChange}>
                    {attributes.options.map(option =>
                        <option id={option.id} value={option.value}>{option.value}</option>)}
                </select>;
            break;
        case "input":
            render =
                <>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor={attributes.id}>{attributes.caption}</InputLabel>
                        <Input id={attributes.id}
                               name={attributes.name}
                               autoComplete={attributes.suggested}
                               type={attributes.type}
                               value={attributes.value}
                               onChange={opts.handleInputChange}
                               autoFocus
                        />
                    </FormControl>
                </>;
            break;
        case "button":
            render =
                <Button onClick={opts.handleSubmit}
                        variant="contained"
                        color="primary">
                    {attributes.caption}
                </Button>;
            break;
        default:
            break;
    }
    return render;
};