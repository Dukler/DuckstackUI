import React from "react";
import {widgetListRender} from "../DSWidgets/widgetListRender";
import Menu from "../DSNavMenu/Menu";
import Content from "../DSContent/Content";

export const RenderList = ({ list, opts }) => {
    let render;
    switch (opts.className){
        case "Widgets":
            render = widgetListRender({list, opts});
            break;
        case "NavMenu":
            render =
                <ul className="header">
                    {list.map((menu, index) =>
                        <Menu
                            key = {index}
                            attributes = {menu.props.attributes}
                        />)}
                </ul>;
            break;
        case "Content":
            render =
                <div className="content">
                    {list.map((content, index) =>
                        <Content
                            key = {index}
                            attributes = {content.props.attributes}
                            url = {opts.url}
                        />)}
                </div>;
            break;
        default:
            break;
    }
    return(
        render
    )
};