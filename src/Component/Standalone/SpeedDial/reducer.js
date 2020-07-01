import React from "react";
// import Modal from "./../../Container/Modal";
// import {ReactDOM} from "react-dom";

export default function dialReducer({action}) {
    switch (action.type) {
        case "NEW_ITEM":
            // const mainPortal = ReactDOM.findDOMNode("mainPortal");

            console.log("pelotudo");

            // return <Modal />;
            return (
                <div style={{position: "relative", zIndex: "10000"}}>Pija</div>
            );

        default:
            break;
    }
}
