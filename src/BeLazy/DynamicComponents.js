import React from "react";
import PropTypes from "prop-types";
import useDynamicList from "../Hooks/Helper/useDynamicList";

function DynamicComponents(props) {
    const [list] = useDynamicList(props);

    return (
        <>
            {list.map(comp => {
                const {AsyncImport, ...cleanComp} = comp;
                return <AsyncImport key={comp.id} {...cleanComp} />;
            })}
        </>
    );
}

DynamicComponents.propTypes = {
    element: PropTypes.string.isRequired
};

export default DynamicComponents;
