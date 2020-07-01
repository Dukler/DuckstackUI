import {useContext, useState, useEffect} from "react";
import {StoreContext} from "redux-react-hook";
import {orderList} from "../../Utils";

function useDynamicList(props) {
    const [dynamicList, setDynamicList] = useState([]);
    const store = useContext(StoreContext);
    const state = store.getState();
    const container = props.container
        ? state["containers"]["byIds"][props.container.id]
        : null;

    useEffect(() => {
        const [list, order, filter] = (function (element) {
            switch (element) {
                case "linkList":
                    return [
                        state.linkList.byIds,
                        state.linkList.ids,
                        container.extProperties.linkList,
                    ];
                case "contentRoutes":
                    return [
                        state.contentRoutes.byIds,
                        state.contentRoutes.ids,
                        props.components,
                    ];

                default:
                    return [
                        {...state.standalones.byIds, ...state.containers.byIds},
                        [...state.standalones.ids, ...state.containers.ids],
                        props.container
                            ? container.components
                            : props.components,
                    ];
            }
        })(props.element);

        const aux = filter
            ? filter
                  .map((item) => list[item])
                  .filter((item) => item !== undefined)
            : Object.values(list);

        setDynamicList(orderList(aux, order ? order : filter));
    }, [
        container,
        props.components,
        props.container,
        props.element,
        state.containers.byIds,
        state.containers.ids,
        state.contentRoutes.byIds,
        state.contentRoutes.ids,
        state.linkList.byIds,
        state.linkList.ids,
        state.standalones.byIds,
        state.standalones.ids,
    ]);

    return [dynamicList];
}

export default useDynamicList;
