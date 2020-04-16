import React, {useContext, useEffect} from "react";
import RefMapContext from "./context";

function Item({children}) {
    const refsMap = useContext(RefMapContext);
    // const clone = React.cloneElement(children, {
    //     key: children.props.id,
    //     ref: refsMap[children.props.id],
    // });

    useEffect(() => {
        console.log();
    });

    // return clone;
    return (
        <div
            style={
                children.props.styles ? children.props.styles.component : null
            }
            ref={refsMap[children.props.id]}
        >
            {children}
        </div>
    );
}

export default Item;
