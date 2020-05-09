import React, {useContext} from "react";
import RefMapContext from "./context";

function Item({children}) {
    const refsMap = useContext(RefMapContext);
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
