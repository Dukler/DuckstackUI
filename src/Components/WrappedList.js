import React from 'react';
import useComponentWrapper from '../Hooks/useComponentWrapper';
import DynamicList from './../App/DynamicList';


const WrappedList = React.memo(function WrappedList(props) {
    const [Wrapper, wrapperProps] = useComponentWrapper(props);

    return <Wrapper {...wrapperProps}>
                <DynamicList 
                    className = "Components"
                    filter = {props.contentFilter}
                    data = {{Components:props.components}}
                    container = {props.container}/>
            </Wrapper>
});

export default WrappedList;