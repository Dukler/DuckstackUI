import React, { useContext } from "react";
import { RefMapContext } from "./Container";


function Item({ children, refName }) {
    const refsMap = useContext(RefMapContext);

    return (
        <div ref={refsMap[refName]}>{children}</div>
    );
}


export default Item;
