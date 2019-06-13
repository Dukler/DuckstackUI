import React, { useRef, useState, useEffect } from 'react';
//import logo from './logo.svg';
import { loremIpsum } from "lorem-ipsum";
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window'
import memoize from 'memoize-one';
import { useStyles } from './styles'
import { List } from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const rowCount = 40;
const rowHeight = 58;

const list = Array(rowCount).fill().map((val, idx) => {
    return {
        id: idx,
        name: 'John Doe',
        image: 'http://via.placeholder.com/40',
        primary: loremIpsum({
            count: 1,
            units: 'sentences',
            sentenceLowerBound: 4,
            sentenceUpperBound: 8
        }),
    }
});


// const createItemData = memoize((list, classes) => ({
//     list,
//     classes,
// }));

const createItemData = memoize((list, classes, itemProps, showCheck) => ({
    list, classes, itemProps, showCheck
}));

const createList = memoize((itemData, listRef, Item) => (
    <AutoSizer key="list">
        {({ height, width }) => (
            <FixedSizeList
                width={width}
                height={height}
                itemCount={list.length}
                itemSize={rowHeight}
                overscanCount={10}
                itemData={itemData}
                ref={listRef}
            >
                {Item.AsyncImport}
            </FixedSizeList>
        )}
    </AutoSizer>
));

const createComp = ({ AsyncImport, ...cleanComp }) => (
    //const { AsyncImport, ...cleanComp } = comp;
    <AsyncImport key={cleanComp.id} {...cleanComp} />
);

function SimpleList({ componentsState, wrapperState, children, ...rest }) {
    const classes = useStyles();
    const listRef = useRef();
    const listContainerRef = useRef();
    const [showCheck, setShowCheck] = React.useState(false);
    const [components, setComponents] = useState([]);
    const extProps = wrapperState.extProperties;
    const Item = componentsState[extProps.item];
    const itemData = createItemData(list, classes, Item, showCheck);

    let mouseDownTimer;

    const handleClickAway = () => {
        setShowCheck(false);
    }

    const handleShowCheck = (e) => {
        if (Item.extProperties.hasCheck) {
            if (e.type === "mousedown" || e.type === "touchstart") {
                mouseDownTimer = setTimeout(() => {
                    //e.persist();
                    setShowCheck(true);
                }, 1500);

            } else {
                clearTimeout(mouseDownTimer);
            }
        }
    }

    useEffect(() => {
        //console.log(clientHeight, clientWidth);
        setComponents(
            extProps.order.map(key => {
                return (key === "list") ?
                    createList(itemData, listRef, Item) :
                    createComp(componentsState[key])
            })
        )
    }, [Item, componentsState, extProps.order, itemData])

    return (
        <ClickAwayListener onClickAway={handleClickAway} >
            <List className={classes.root}
                onMouseDown={handleShowCheck}
                onMouseUp={handleShowCheck}
                onTouchStart={handleShowCheck}
                onTouchEnd={handleShowCheck}
                onTouchMove={handleShowCheck}
                ref={listContainerRef}
            >
                {components}
            </List>
        </ClickAwayListener>
    );

}



export default SimpleList;