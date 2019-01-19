import React from 'react';

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
                <button onClick={opts.handleSubmit}>{attributes.caption}</button>;
            break;
        default:
            break;
    }
    return render;
};