import React from 'react';
import List from "../Containers/List";
import {getContainer} from "../Containers";

const ContainedList = props =>  {
    //let iconName = icon.replace(/Icon$/, '');
    const attributes = props.attributes;
    const Container = getContainer(attributes.container);
    return  <Container>
                <List  className = "Components"
                       filter = {attributes.contentFilter}
                       data = {{Components:attributes.components}}
                       container = {attributes.container}/>
            </Container>
};

export default ContainedList;