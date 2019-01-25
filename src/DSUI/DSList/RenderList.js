import React from "react";
import {WidgetListRender} from "../DSWidgets/WidgetListRender";
import Menu from "../DSNavMenu/Menu";
import Content from "../DSContent/Content";
import {hasProps, isList} from "../DSComposer/Composer";
import {compose} from "redux";



export const RenderList = ({ list, props }) => {
    let EnhancedRender;
    switch (props.className){
        case "Widgets":
            EnhancedRender = WidgetListRender({list, props});
            break;
        case "NavMenu":
            EnhancedRender =
                <ul className="header">
                    {list.map((menu, index) =>
                        <Menu
                            key = {index}
                            attributes = {menu.attributes}
                        />)}
                </ul>;
            break;
        case "Content":
            EnhancedRender = compose(
                isList("content"),
                hasProps({url:props.url,handleSubmit:props.handleSubmit},
                )
            )(Content)({data:list});
            break;
        default:
            break;
    }
    return(EnhancedRender)
};