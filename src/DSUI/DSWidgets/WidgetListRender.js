import React from 'react';
import Widget from "./Widget";


export default class WidgetListRender extends React.Component {
    render() {
        const list= this.props.widgetList.getList();
        return (
            <div className='Widgets'>
                {list.map((wdg, index) =>
                    <Widget
                        key = {index}
                        attributes = {wdg.props.attributes}
                        onValueChange = {this.props.widgetList.refreshWidgets}
                        handleClick = {this.props.widgetList.handleSubmit}
                    />)}
            </div>
        );
    }
}