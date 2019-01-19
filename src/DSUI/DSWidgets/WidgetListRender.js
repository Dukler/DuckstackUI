import React from "react";
import Widget from "./Widget";

export const WidgetListRender = ({ list, opts }) => (
        <div className="Wigets">
            {list.filter(wdg => wdg.attributes.contentFilter === opts.filter).map((wdg, index) =>
                <Widget
                    key = {index}
                    attributes = {wdg.attributes}
                    onValueChange = {opts.refreshList}
                    handleSubmit = {opts.handleSubmit}
                />)
            }
        </div>
);
