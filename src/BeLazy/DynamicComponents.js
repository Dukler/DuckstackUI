import React from "react";
import PropTypes from "prop-types";
import useDynamicList from "../Hooks/Helper/useDynamicList";
import StandaloneSuper from "./../Component/StandaloneSuper";

function DynamicComponents(props) {
    const [list] = useDynamicList(props);

    return (
        <>
            {list.map((comp) => {
                const {AsyncImport, ...cleanComp} = comp;
                console.log();
                if (props.element === "standalones") {
                    return <StandaloneSuper key={comp.id} {...comp} />;
                } else {
                    return <AsyncImport key={comp.id} {...cleanComp} />;
                }
            })}
        </>
    );
}

DynamicComponents.propTypes = {
    element: PropTypes.string.isRequired,
};

export default DynamicComponents;
