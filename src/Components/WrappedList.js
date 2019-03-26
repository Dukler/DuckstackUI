import React from 'react';
import DynamicList from "../App/DynamicList";
import {getWrapper} from "../Wrappers";

const WrappedList = props =>  {
    //let iconName = icon.replace(/Icon$/, '');
    const attributes = props.attributes;
    const Wrapper = getWrapper(attributes.wrapper);
    return  <Wrapper>
                <DynamicList className = "Components"
                             filter = {attributes.contentFilter}
                             data = {{Components:attributes.components}}
                             container = {attributes.container}/>
            </Wrapper>
};

export default WrappedList;