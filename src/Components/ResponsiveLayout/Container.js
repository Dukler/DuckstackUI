import React, { useState, useEffect } from "react";
import useResponsiveOffset from "../../Hooks/useResponsiveOffset";
import { isNotUndefined } from "../../Utils";
import RefMapContext from './context';


const createChildren = (children) => {
    let offset = [];
    let responsive = [];
    let childrenWithProps = [];
    let multipliers = {};
    children.forEach((child, index) => {
        const refName = `child-${index}`;
        childrenWithProps.push(React.cloneElement(child, { refName, key: index }));
        if (child.props.static) {
            offset.push(refName);
        } else {
            responsive.push(refName);
            multipliers[refName] = isNotUndefined(child.props.multiplier, false);
        }
    });
    return { offset, responsive, childrenWithProps, multipliers }
};

function Container({ children, ...rest }) {
    const [state, setState] = useState(createChildren(children));

    const refsMap = useResponsiveOffset({
        offsetArr: state.offset,
        responsiveArr: state.responsive,
        container: 'containerRef',
        multipliers: state.multipliers
    });

    useEffect(() => {
        setState(createChildren(children));
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
