import React, {useState, useEffect} from "react";
import useResponsiveOffset from "../../../Hooks/Layout/useResponsiveOffset/index";
import {isUndefined} from "../../../Utils";
import RefMapContext from "./context";

const createChildren = (children) => {
    let staticArray = [];
    let responsive = [];
    let multipliers = {};
    children.forEach((child, index) => {
        const refName = child.props.children.props.id;
        if (child.props.static) {
            staticArray.push(refName);
        } else {
            responsive.push(refName);
            multipliers[refName] = isUndefined(child.props.multiplier, false);
        }
    });
    return {staticArray, responsive, multipliers};
};

function Container({children, ...rest}) {
    const [state, setState] = useState(createChildren(children));

    const refsMap = useResponsiveOffset({
        staticArr: state.staticArray,
        responsiveArr: state.responsive,
        container: "containerRef",
        multipliers: state.multipliers,
    });

    useEffect(() => {
        setState(createChildren(children));
    }, [children]);

    return (
        <RefMapContext.Provider value={refsMap}>
            <div ref={refsMap["containerRef"]} style={{height: "100%"}}>
                {children}
            </div>
        </RefMapContext.Provider>
    );
}

export default Container;
