import React from "react";
import {WidgetListRender} from "../DSWidgets/WidgetListRender";
import Menu from "../DSNavMenu/Menu";
import Content from "../DSContent/Content";



export const RenderList = ({ list, opts }) => {
    let render;
    switch (opts.className){
        case "Widgets":
            render = WidgetListRender({list, opts});
            break;
        case "NavMenu":
            render =
                <ul className="header">
                    {list.map((menu, index) =>
                        <Menu
                            key = {index}
                            attributes = {menu.attributes}
                        />)}
                </ul>;
            break;
        case "Content":
            render =
                <div className="content">
                    {list.map((content, index) =>
                        <Content
                            key = {index}
                            attributes = {content.attributes}
                            url = {opts.url}
                        />)}
                </div>;
            break;
        default:
            break;
    }
    return(render)
};