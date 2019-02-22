import React from "react";
import ListedLink from "../Components/ListedLink";
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
        case "LinkList":
            render =
                <>
                    {list.map((link, index) =>
                        <ListedLink
                            key = {index}
                            attributes = {link.attributes}
                        />)}
                </>;
            break;
        case "Content":
            render =
                <>
                    {list.map((content, index) =>
                        <Content
                            key = {index}
                            attributes = {content.attributes}
                            url = {opts.url}
                        />)}
                </>;
            break;
        default:
            break;
    }
    return(render)
};