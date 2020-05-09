import useSideEffect from "../Hooks/LazyHook/useSideEffect";
import React from "react";

//this function wraps each standalone component
export default function StandaloneSuper(comp) {
    const {AsyncImport, ...cleanComp} = comp;
    useSideEffect(cleanComp);
    return <AsyncImport {...cleanComp} />;
}
