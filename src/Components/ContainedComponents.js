import React from 'react';
import AsyncComponent from "../BeLazy/AsyncComponent";
import {getContainer} from "../Containers";

const ContainedComponents = props =>  {
    //let iconName = icon.replace(/Icon$/, '');
    const attributes = props.attributes;
    let Container = getContainer(attributes.container);

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

export default ContainedComponents;