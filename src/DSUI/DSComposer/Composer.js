import React from "react";

export const hasProps = injectedProps =>
    WrappedComponent => props => <WrappedComponent {...injectedProps} {...props} />;

export const isList = ({ type, tag }) =>  WrappedComponent => {
    const CustomTag =`${tag}`;
    const IsList = props => (
        <CustomTag className={type}>
            {props.data.map((item,index) => (
                <WrappedComponent {...item} key={index}
                                  attributes={item.attributes}
                                  replace={props.replace}/>
            ))}
        </CustomTag>
    );
    return IsList
};