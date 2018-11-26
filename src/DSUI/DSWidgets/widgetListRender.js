import React from "react";
import Widget from "./Widget";

const widgetListRender = ({ list, opts }) => (
    <div className={this.props.className}>
        {list.filter(wdg => wdg.contentFilter === opts.filter).map((wdg, index) =>
            <Widget
                key = {index}
                attributes = {wdg.props.attributes}
                onValueChange = {opts.refreshList}
                handleSubmit = {opts.handleSubmit}
            />)}
    </div>
);
