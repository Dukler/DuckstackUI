import React from 'react';
import Button from '@material-ui/core/Button';

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
                <div>
                    <label htmlFor={attributes.id}>{attributes.caption}</label>
                    <input
                        id = {attributes.id}
                        name={attributes.name}
                        type={attributes.type}
                        suggested ={attributes.suggested}
                        value={attributes.value}
                        onChange={opts.handleInputChange}/>
                </div>;
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