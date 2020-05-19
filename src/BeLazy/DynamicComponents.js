import React from "react";
import PropTypes from "prop-types";
import useDynamicList from "../Hooks/Helper/useDynamicList";
import RenderComponent from "./../Component/RenderComponent";

function DynamicComponents(props) {
    const [list] = useDynamicList(props);

    return (
        <>
            {list.map((comp) => {
                return <RenderComponent key={comp.id} {...comp} />;
            })}
        </>
    );
}

DynamicComponents.propTypes = {
    element: PropTypes.string.isRequired,
};

export default DynamicComponents;
