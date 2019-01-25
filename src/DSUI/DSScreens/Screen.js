import NavMenu from "../DSNavMenu/NavMenu";
import ContentList from "../DSContent/ContentList";
import React from "react";

export const Screen = props => {
    return <div>
        <NavMenu url={props.url} />
        <ContentList url={props.url} handleSubmit={props.handleSubmit}/>
    </div>
};