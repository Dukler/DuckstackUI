import React from 'react';
import useComponentWrapper from '../Hooks/useComponentWrapper';
import AsyncComponents from '../BeLazy/AsyncComponents';


const WrappedComponents = React.memo(function WrappedComponents(props) {
    const [Wrapper, wrapperProps] = useComponentWrapper(props);

    return  <Wrapper {...wrapperProps}>
                <AsyncComponents {...props}/>
            </Wrapper>
});

export default WrappedComponents;