import React, { useRef, useState, useEffect, useCallback } from 'react';
//import logo from './logo.svg';
// import { loremIpsum } from "lorem-ipsum";
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window'
import memoize from 'memoize-one';
import { useStyles } from './styles'
import { List } from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import ResponsiveLayout from '../../Components/ResponsiveLayout/index';

const rowHeight = 48;

const createItemData = memoize((list, classes, itemProps, showCheck) => ({
    list, classes, itemProps, showCheck
}));

const createList = (itemData, listRefs, Item, listHandlers, classes) => (
    <ClickAwayListener onClickAway={listHandlers.handleClickAway} key="list">
        <List
            className={classes.list}
            onMouseDown={listHandlers.handleShowCheck}
            onMouseUp={listHandlers.handleShowCheck}
            onTouchStart={listHandlers.handleShowCheck}
            onTouchEnd={listHandlers.handleShowCheck}
            onTouchMove={listHandlers.handleShowCheck}

        >
            <AutoSizer >
                {({ height, width }) => (
                    <FixedSizeList
                        width={width}
                        height={height}
                        itemCount={itemData.list.length}
                        itemSize={rowHeight}
                        overscanCount={10}
                        itemData={itemData}
                    >
                        {Item.AsyncImport}
                    </FixedSizeList>
                )}
            </AutoSizer>
        </List>
    </ClickAwayListener>
);

const createComp = ({ AsyncImport, ...cleanComp }) => (
    <AsyncImport key={cleanComp.id} {...cleanComp} />
);

function SimpleList({ componentsState, wrapperState, children, ...rest }) {
    const classes = useStyles();
    const [showCheck, setShowCheck] = React.useState(false);
    const [components, setComponents] = useState([]);
    const extProps = wrapperState.extProperties;
    const source = require('../../MockData/turnosR.json');
    const list = extProps.isDivided ? source["15"] : source;
    const Item = componentsState[extProps.item];
    const itemData = createItemData(list, classes, Item, showCheck);
    const mouseDownTimer = useRef();

    const handleClickAway = () => {
        setShowCheck(false);
    };

    const handleShowCheck = useCallback((e) => {
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
    }, [Item.extProperties.hasCheck]);


    useEffect(() => {
        const listHandlers = { handleClickAway, handleShowCheck };
        setComponents(
            extProps.order.map(key => {
                return (key === "list") ?
                    createList(itemData, null, Item, listHandlers, classes) :
                    createComp(componentsState[key])
            })
        );
    }, [Item, classes, componentsState, extProps.order, handleShowCheck, itemData])

    return (
        <ResponsiveLayout container>
            <ResponsiveLayout>
                <div className={classes.header}>PORONGA</div>
            </ResponsiveLayout>
            <ResponsiveLayout>
                <div className={classes.header}>PORONGA</div>
            </ResponsiveLayout>
            <ResponsiveLayout setOffset>
                {components}
            </ResponsiveLayout>
            <ResponsiveLayout setOffset addHeight={50}>
                {components}
            </ResponsiveLayout>
        </ResponsiveLayout>
    );

}



export default SimpleList;