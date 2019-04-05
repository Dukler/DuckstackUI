import AsyncComponent from "./AsyncComponent";
import React from 'react';

function AsyncComponents(props){
    return <>
        {props.components.map(comp =>
            React.createElement(
                AsyncComponent({
                    componentName: comp.componentName
                }),
                { key: comp.id, ...comp }
            )
        )}
    </>
}

export default AsyncComponents;