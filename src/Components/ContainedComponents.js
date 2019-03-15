import React from 'react';
import AsyncContainer from "../BeLazy/AsyncContainer";
import AsyncComponent from "../BeLazy/AsyncComponent";

const ContainedComponents = props =>  {
    //let iconName = icon.replace(/Icon$/, '');
    const attributes = props.attributes;
    let Container = null;
    if (isLowerCase(attributes.container.charAt(0))){
        Container = `${attributes.container}`;
    } else{
        Container = AsyncContainer({
            componentName:attributes.container
        });
    }

    return  <Container>
            <>
                {props.attributes.components.map((comp, index) =>
                    React.createElement(
                        AsyncComponent({
                            componentName:comp.componentName
                        }),
                        {key:comp.id,attributes:comp}
                    )
                )}
            </>
            </Container>
};

function isLowerCase(str)
{
    return str == str.toLowerCase() && str != str.toUpperCase();
}
export default ContainedComponents;