import React from 'react';
import AsyncComponent from "../BeLazy/AsyncComponent";
import {getWrapper} from "../Wrappers";

const WrappedComponents = props =>  {
    //let iconName = icon.replace(/Icon$/, '');
    const Wrapper = getWrapper(props.wrapper);

    return  <Wrapper>
            <>
                {props.components.map((comp, index) =>
                    React.createElement(
                        AsyncComponent({
                            componentName:comp.componentName
                        }),
                        {key:comp.id, ...comp}
                    )
                )}
            </>
            </Wrapper>
};

export default WrappedComponents;