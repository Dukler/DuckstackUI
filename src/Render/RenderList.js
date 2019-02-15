import React from "react";
import Link from "../Components/Link";
import Widget from "../Components/Widget";
import Content from "../Components/Content";

export const RenderList = ({ list, opts }) => {
    let render;
    switch (opts.className){
        case "Widgets":
            render =
                <div className="Wigets">
                    {list.filter(wdg => wdg.attributes.contentFilter === opts.filter).map((wdg, index) =>
                        <Widget
                            key = {index}
                            attributes = {wdg.attributes}
                            onValueChange = {opts.refreshList}
                            handleSubmit = {opts.handleSubmit}
                        />)
                    }
                </div>;
            break;
        case "NavMenu":
            render =
                <ul className="header">
                    {list.map((menu, index) =>
                        <Link
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