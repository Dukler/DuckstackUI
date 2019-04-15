import React from 'react';
import useComponentWrapper from '../Hooks/useComponentWrapper';
import AsyncComponent from '../BeLazy/AsyncComponent';


const WrappedComponent = React.memo(function WrappedComponent(props) {
    const [Wrapper, wrapperProps] = useComponentWrapper(props);

    return  <Wrapper {...wrapperProps}>
                <AsyncComponent {...props} />
            </Wrapper>
});

export default WrappedComponent;