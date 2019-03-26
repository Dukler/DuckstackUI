import React from 'react';
import AsyncComponent from "../BeLazy/AsyncComponent";
import {getWrapper} from "../Wrappers";

const WrappedComponents = props =>  {
    //let iconName = icon.replace(/Icon$/, '');
    const attributes = props.attributes;
    const Wrapper = getWrapper(attributes.wrapper);

    return  <Wrapper>
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
            </Wrapper>
};

export default WrappedComponents;