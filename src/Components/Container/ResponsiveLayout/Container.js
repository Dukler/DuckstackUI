import React, {useState, useEffect} from "react";
import useResponsiveOffset from "../../../Hooks/Layout/useResponsiveOffset/index";
import {isNotUndefined} from "../../../Utils";
import RefMapContext from "./context";

const createChildren = (children) => {
    let offset = [];
    let responsive = [];
    let multipliers = {};
    children.forEach((child, index) => {
        const refName = child.props.children.props.id;
        if (child.props.static) {
            offset.push(refName);
        } else {
            responsive.push(refName);
            multipliers[refName] = isNotUndefined(
                child.props.multiplier,
                false
            );
        }
    });
    return {offset, responsive, multipliers};
};

function Container({children, ...rest}) {
    const [state, setState] = useState(createChildren(children));

    const refsMap = useResponsiveOffset({
        staticArr: state.offset,
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
