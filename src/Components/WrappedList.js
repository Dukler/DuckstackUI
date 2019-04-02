import React from 'react';
import DynamicList from "../App/DynamicList";
import {getWrapper} from "../Wrappers";

const WrappedList = props =>  {
    //let iconName = icon.replace(/Icon$/, '');
    const Wrapper = getWrapper(props.wrapper);
    return  <Wrapper>
                <DynamicList className = "Components"
                             filter = {props.contentFilter}
                             data = {{Components:props.components}}
                             container = {props.container}/>
            </Wrapper>
};

export default WrappedList;