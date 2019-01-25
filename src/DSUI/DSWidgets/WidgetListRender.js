import React from "react";
import Widget from "./Widget";

export const WidgetListRender = ({ list, props }) => (
        <div className="Wigets">
            {list.filter(wdg => wdg.attributes.contentFilter === props.filter).map((wdg, index) =>
                <Widget
                    key = {index}
                    attributes = {wdg.attributes}
                    onValueChange = {props.replace}
                    getSerializedList = {props.getSerializedList}
                    handleSubmit = {props.handleSubmit}
                />)
            }
        </div>
);
