import React from "react";
import StandaloneSuper from "./StandaloneSuper";
import ContainerSuper from "./Standalone/ContainerSuper";

export default function RenderComponent(props) {
    console.log();
    switch (props.type) {
        case "standalone":
            return <StandaloneSuper key={props.id} {...props} />;
        case "container":
            // const {LazyContainer, ...rest} = props;
            // return <LazyContainer {...rest} />;
            return <ContainerSuper key={props.id} {...props} />;
        default:
            const {AsyncImport, ...cleanComp} = props;
            return <AsyncImport key={props.id} {...cleanComp} />;
    }
}
