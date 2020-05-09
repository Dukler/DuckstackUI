import React, {useRef, useState, useEffect, useCallback} from "react";
import memoize from "memoize-one";
import {useStyles} from "./styles";
import {renderList} from "./renderList";

const createItemData = memoize((list, classes, itemProps, showCheck) => ({
    list,
    classes,
    itemProps,
    showCheck,
}));

const createComp = ({AsyncImport, ...cleanComp}) => (
    <AsyncImport key={cleanComp.id} {...cleanComp} />
);

function SimpleList(props) {
    const classes = useStyles();
    const {standalonesState, containerState} = props;
    const [showCheck, setShowCheck] = useState(false);
    const [components, setComponents] = useState([]);
    const [list, setList] = useState([]);
    const extProps = containerState.extProperties;
    const Item = standalonesState[extProps.item];
    const mouseDownTimer = useRef();
    const itemHeight = 48;
    const minHeight = itemHeight * 3;

    const source = require("../../../MockData/turnosR.json");

    useEffect(() => {
        const day = containerState.sourceIndex
            ? containerState.sourceIndex[0]
            : null;
        const auxList = source[day];
        setList(auxList ? auxList : []);
    }, [source, containerState.sourceIndex]);

    const itemData = createItemData(list, classes, Item, showCheck);

    const handleClickAway = () => {
        setShowCheck(false);
    };

    const handleShowCheck = useCallback(
        (e) => {
            if (Item.extProperties.hasCheck) {
                if (e.type === "mousedown" || e.type === "touchstart") {
                    mouseDownTimer.current = setTimeout(() => {
                        //e.persist();
                        setShowCheck(true);
                    }, 1500);
                } else {
                    clearTimeout(mouseDownTimer.current);
                }
            }
        },
        [Item.extProperties.hasCheck]
    );

    useEffect(() => {
        const listHandlers = {handleClickAway, handleShowCheck};
        setComponents(
            extProps.order.map((key) => {
                return key === "list"
                    ? renderList(
                          itemData,
                          Item,
                          listHandlers,
                          classes,
                          minHeight
                      )
                    : createComp(standalonesState[key]);
            })
        );
    }, [
        Item,
        classes,
        standalonesState,
        extProps.order,
        handleShowCheck,
        itemData,
        minHeight,
    ]);

    // return (
    //     <ResponsiveLayout container>
    //         <ResponsiveLayout static>
    //             <div className={classes.header}>PORONGA</div>
    //         </ResponsiveLayout>
    //         <ResponsiveLayout>{components}</ResponsiveLayout>
    //     </ResponsiveLayout>
    // );
    return components;
}

export default SimpleList;
