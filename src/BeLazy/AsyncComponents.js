import AsyncComponent from "./AsyncComponent";
import React from 'react';

function AsyncComponents(props){
    const components = (props.components)?props.components:[props];
    console.log("asyncComponents");
    return <>
        {components.map(comp =>
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