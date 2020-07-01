import React from "react";
import StandaloneSuper from "./StandaloneSuper";
import ContainerSuper from "./ContainerSuper";

export default function RenderComponent(props) {
    switch (props.type) {
        case "standalone":
            return <StandaloneSuper key={props.id} {...props} />;
        case "container":
            return <ContainerSuper key={props.id} {...props} />;
        default:
            const {AsyncImport, ...cleanComp} = props;
            return <AsyncImport key={props.id} {...cleanComp} />;
    }
}
