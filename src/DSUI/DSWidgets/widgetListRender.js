import React from "react";
import Widget from "./Widget";

export const widgetListRender = ({ list, opts }) => (
        <div className="Wigets">
            {list.filter(wdg => wdg.props.attributes.contentFilter === opts.filter).map((wdg, index) =>
                <Widget
                    key = {index}
                    attributes = {wdg.props.attributes}
                    onValueChange = {opts.refreshList}
                    handleSubmit = {opts.handleSubmit}
                />)
            }
        </div>
);
