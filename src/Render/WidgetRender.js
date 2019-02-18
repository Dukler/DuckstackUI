import React from 'react';
import Button from '@material-ui/core/Button';

export const WidgetRender = ({attributes, actions, value }) => {
    let render = null;
    switch (attributes.dstype) {
        case "options":
            render =
                <select
                    id={attributes.id}
                    name={attributes.name}
                    value={attributes.value}
                    onChange={attributes.onValueChange}>
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
                        value={value}
                        onChange={actions.replace}/>
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