import React from 'react';
import List from "../Containers/List";
import AsyncContainer from "../BeLazy/AsyncContainer";

const ContainedList = props =>  {
    //let iconName = icon.replace(/Icon$/, '');
    const attributes = props.attributes;
    const Container = AsyncContainer({
        componentName:attributes.container
    });
    return  <Container components = {
                <List  className = "Components"
                       filter = {attributes.contentFilter}
                       data = {{Components:attributes.components}}
                       container = {attributes.container}/>
            }>
            </Container>
};

export default ContainedList;