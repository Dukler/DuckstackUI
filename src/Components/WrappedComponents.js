import React from 'react';
import useComponentWrapper from '../Hooks/useComponentWrapper';
import AsyncComponents from '../BeLazy/AsyncComponents';


const WrappedComponents = React.memo(function WrappedComponents(props) {
    const [Wrapper, wrapperProps] = useComponentWrapper(props);
    const mustWrapp = (props.wrapper && props.wrapper !== "")?true:false;

    return  <Wrapper {...wrapperProps}>
                {(mustWrapp)?
                    <WrappedComponents {...props}/>:
                    <AsyncComponents {...props} />
                }
            </Wrapper>
});

export default WrappedComponents;