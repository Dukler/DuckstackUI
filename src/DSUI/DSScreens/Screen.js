
import React from "react";
import {NavMenu} from "../DSNavMenu/NavMenu";
import {ContentList} from "../DSContent/ContentList";

export const Screen = props => {
    return <div>
        <NavMenu url={props.url} />
        <ContentList url={props.url} handleSubmit={props.handleSubmit}/>
    </div>
};