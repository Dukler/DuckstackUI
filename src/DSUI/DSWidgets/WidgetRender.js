import React from 'react';


export default class WidgetRender extends React.Component {
    constructor(props) {
        super(props);
        this.wdgRender = this.wdgRender.bind(this);
    }

    wdgRender () {
        let render = null;
        const attributes = this.props.widget.props.attributes;
        const wdg = this.props.widget;
        switch (attributes.dstype) {
            case "options":
                render =
                <select
                    id={attributes.id}
                    name={attributes.name}
                    value={attributes.value}
                    onChange={wdg.onValueChange}>
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
                            value={attributes.value}
                            onChange={wdg.handleInputChange}/>
                    </div>;
                break;
            case "button":
                render =
                    <button onClick={wdg.handleClick}>{attributes.caption}</button>;
                break;
            default:
                break;
        }
        return render;
    }
    
    render() {
        return (
            <div>{this.wdgRender()}</div>
        );
    }
}