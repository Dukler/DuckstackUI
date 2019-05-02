import React from 'react';
import useClassState from '../Hooks/useClassState';
import DynamicList from '../BeLazy/DynamicList';



const WrappedComponents = React.memo(function WrappedComponents(props) {
    const wrapperState = useClassState({ id: props.wrapper, element: "wrappers" });
    const isList = wrapperState.components.length > 1 ? true : false;
    //fix useClassState to conditianlly call this shit
    const componentState = useClassState({ id: wrapperState.components, element:"components"});
    ///this shit
    const { Wrapper, attributes, isHtml } = wrapperState;
    const { AsyncImport, actions, ...cleanComp } = !isList ? componentState:{...null};
    const wrapperProps = isHtml?{...attributes}:null;
    return ( 
        <Wrapper {...wrapperProps}>
            {isList ?
                <DynamicList
                    element="components"
                    wrapper={props.wrapper} /> :
                <AsyncImport 
                    key={cleanComp.id}
                    {...cleanComp}
                    actions={actions}
                />
            }
        </Wrapper>
    )
});

export default WrappedComponents;