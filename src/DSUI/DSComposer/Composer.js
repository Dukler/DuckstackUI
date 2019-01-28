import React from "react";

export const hasProps = injectedProps =>
    WrappedComponent => props => <WrappedComponent {...injectedProps} {...props} />;

export const isList = ({ type, tag }) =>  WrappedComponent => {
    const CustomTag =`${tag}`;
    const IsList = props => {
        if (typeof props.actions === 'undefined'){
            return null;
        }
        return(
            <CustomTag className={type}>
                {props.actions.getData(props.className).map((item,index) => (
                    <WrappedComponent {...item.props}
                                      key={item.props.id}
                                      actions={props.actions}
                    />
                ))}
            </CustomTag>
        );
    };
    return IsList
};