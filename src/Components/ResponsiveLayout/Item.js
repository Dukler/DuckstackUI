import React, { useContext } from "react";
import RefMapContext from "./context";


function Item({ children, refName }) {

    const refsMap = useContext(RefMapContext);

    // console.log("rl");
    return (
        <div ref={refsMap[refName]}>{children}</div>
    );
}


export default Item;
