import React from "react";

export const hasProps = injectedProps =>
    WrappedComponent => props => <WrappedComponent {...injectedProps} {...props} />;

export const isList = type => WrappedComponent => {
    const IsList = props => (
        <div className={type}>
            {props.data.map((item,index) => (
                <WrappedComponent {...item} key={index} attributes={item.attributes}/>
            ))}
        </div>
    );
    return IsList
};

// const isContainer = ({data, Error, DefaultComponent}) => WrappedComponent => {
//     const IsContainer = props => <WrappedComponent {...props} />;
//
//     return compose(
//         hasData(data),
//         hasLoader,
//         hasError(Error),
//         hasDefault(DefaultComponent)
//     )(IsContainer)
// };