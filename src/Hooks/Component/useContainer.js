import React from "react";
import {orderList} from "../../Utils";

const addEmptySpace = ({filter, list}) => {
    let emptyList = list;
    if (filter.includes("empty")) {
        let i = 0;
        filter.forEach((item) => {
            if (item === "empty") {
                list.push({id: "empty", key: "empty" + i});
                i++;
            }
        });
        emptyList = orderList(list, filter);
    }
    return emptyList;
};

const getParentProps = ({ParentComponent, comp}) => {
    return ParentComponent === React.Fragment
        ? null
        : {
              ...comp.container,
              styles: {...comp.styles},
          };
};

function getStyle(style) {
    return style === undefined ? React.Fragment : style;
}

function useContainer(props) {
    const order = props.containerState.standalones;
    const list = props.standalonesState;
    const styleContainers = props.styleContainers;
    const render = props.containerState.renderStandalones;
    const ordList = orderList(list, order);
    let renders = {};
    let parentProps = null;
    let ParentComponent = null;
    props.parents.forEach((parent) => {
        parentProps = null;
        ParentComponent = null;
        if (render[parent]) {
            const filter = render[parent].standalones;
            let list = [];
            list.push(...ordList.filter((item) => filter.includes(item.id)));
            list = addEmptySpace({filter, list});
            renders[parent] = list.map((comp) => {
                const {AsyncImport, ...cleanComp} = comp;
                if (comp.id === "empty") {
                    return <styleContainers.Empty key={comp.key} />;
                } else if (null !== getParentProps({ParentComponent, comp})) {
                    //if it has no parent props, then there is no parent
                    return <AsyncImport key={comp.id} {...cleanComp} />;
                } else {
                    ParentComponent = getStyle(styleContainers.Default);
                    parentProps = getParentProps({
                        ParentComponent,
                        comp,
                    });
                    return (
                        <ParentComponent key={comp.id} {...parentProps}>
                            <AsyncImport {...cleanComp} />
                        </ParentComponent>
                    );
                }
            });
        }
    });

    return renders;
}

export default useContainer;
