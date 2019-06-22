import React, { useState, useEffect } from "react";
import useResponsiveOffset from "../../Hooks/useResponsiveOffset";
import memoizeOne from 'memoize-one';
import { isNotUndefined } from "../../Utils";

export const RefMapContext = React.createContext();

const createChildren = (children) => {
    let offset = [];
    let responsive = [];
    let childrenWithProps = [];
    let multipliers = {};
    children.forEach((child, index) => {
        const refName = `child-${index}`;
        childrenWithProps.push(React.cloneElement(child, { refName, key: index }));
        if (child.props.setOffset) {
            responsive.push(refName);
            multipliers[refName] = isNotUndefined(child.props.multiplier, false);
        } else {
            offset.push(refName);

        }
    });
    return { offset, responsive, childrenWithProps, multipliers }
};
const memoChildren = memoizeOne(createChildren);

function Container({ children, ...rest }) {
    const [state, setState] = useState(memoChildren(children));
    // const [offset, responsive, childrenWithProps] = memoChildren(children);
    // const state = memoChildren(children);
    const refsMap = useResponsiveOffset({
        offsetArr: state.offset,
        responsiveArr: state.responsive,
        container: 'containerRef',
        multipliers: state.multipliers
    });

    useEffect(() => {
        setState(memoChildren(children));
    }, [children]);


    return (
        <RefMapContext.Provider value={refsMap}>
            <div ref={refsMap["containerRef"]} style={{ height: "100%" }}>
                {state.childrenWithProps}
            </div>
        </RefMapContext.Provider>
    );
}


export default Container;
