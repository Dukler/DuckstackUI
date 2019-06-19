import React, { useState, useEffect } from "react";
import useResponsiveOffset from "../../Hooks/useResponsiveOffset";
import memoizeOne from 'memoize-one';

export const RefMapContext = React.createContext();

const createChildren = (children) => {
    let offset = [];
    let responsive;
    let childrenWithProps = [];
    children.forEach((child, index) => {
        const refName = `child-${index}`;
        if (child.props.setOffset) {
            childrenWithProps.push(React.cloneElement(child, { refName, key: index }))
            responsive = refName;
        } else {
            childrenWithProps.push(React.cloneElement(child, { refName, key: index }))
            offset.push(refName);
        }
    });
    return { offset, responsive, childrenWithProps }
};
const memoChildren = memoizeOne(createChildren);

function Container({ children, isResponsive = false }) {
    const [state, setState] = useState(memoChildren(children));
    // const [offset, responsive, childrenWithProps] = memoChildren(children);
    // const state = memoChildren(children);
    const refsMap = useResponsiveOffset({
        offsetArray: state.offset,
        responsive: state.responsive,
        container: 'containerRef'
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
