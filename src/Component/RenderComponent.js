import React from "react";
import StandaloneSuper from "./StandaloneSuper";
import ContainerSuper from "./ContainerSuper";

export default function RenderComponent(props) {
    const state = props;
    // const [state, dispatch] = useReducer(props.reducer, initialState, init)
    // const {reducer, ...initialState} = props;
    // const importStatement = () => import(`../Component/${root}/${className}`);
    switch (props.type) {
        case "standalone":
            return <StandaloneSuper key={state.id} {...state} />;
        case "container":
            return <ContainerSuper key={state.id} {...state} />;
        default:
            const {AsyncImport, ...cleanComp} = props;
            return <AsyncImport key={props.id} {...cleanComp} />;
    }
}
