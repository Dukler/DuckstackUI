import useSideEffect from "../Hooks/LazyHook/useSideEffect";
import React from "react";
import {isNotUndefined} from "./../Utils/index";

//this function wraps each standalone component
export default function StandaloneSuper(comp) {
    const {AsyncImport, ...cleanComp} = comp;
    useSideEffect(cleanComp);
    const disabled = isNotUndefined(cleanComp.disabled, false);
    return !disabled ? <AsyncImport {...cleanComp} /> : null;
}
