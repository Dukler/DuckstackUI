import React from "react";
// import Modal from "./../../Container/Modal";
// import {ReactDOM} from "react-dom";
import Portal from "@material-ui/core/Portal";

export default function dialReducer({action, portal}) {
    switch (action.type) {
        case "NEW_ITEM":
            // const mainPortal = ReactDOM.findDOMNode("mainPortal");

            console.log("pelotudo");

            // return <Modal />;
            return (
                <Portal container={portal.current}>
                    <div style={{position: "relative", zIndex: "10000"}}>
                        Pija
                    </div>
                </Portal>
            );

        default:
            break;
    }
}
