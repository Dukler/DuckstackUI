import React, { useContext } from "react";
import { RefMapContext } from "./Container";


function Item({ children, refName }) {
    const refsMap = useContext(RefMapContext);
    console.log();
    return (
        <div ref={refsMap[refName]}>{children}</div>
    );
}


export default Item;
