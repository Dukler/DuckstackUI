import React, { useRef, memo } from 'react';
//import logo from './logo.svg';
import { loremIpsum } from "lorem-ipsum";
import AutoSizer from 'react-virtualized-auto-sizer';
import { makeStyles } from "@material-ui/core/styles";
import { FixedSizeList, areEqual } from 'react-window'
import memoize from 'memoize-one';

const rowCount = 40;
const rowHeight = 50;

const list = Array(rowCount).fill().map((val, idx) => {
    return {
        id: idx,
        name: 'John Doe',
        image: 'http://via.placeholder.com/40',
        text: loremIpsum({
            count: 1,
            units: 'sentences',
            sentenceLowerBound: 4,
            sentenceUpperBound: 8
        }),
    }
});

const useStyles = makeStyles(theme => ({
    root: {
        height: "100%"
    },
    header: {
        height: "80px"
    },
    list: {
        padding: "10px",
        // height: "calc(100% - 90px)"
        height: "100%"
    },
    row: {
        borderBottom: "1px solid #ebeced",
        textAlign: "left",
        margin: "5px 0",
        display: "flex",
        alignItems: "center",
    },
    image: {
        marginRight: "10px",
    },
    content: {
        padding: "10px"
    },
    leftSide: {
        overflow: "hidden!important",
        //scrollBehavior: "smooth",
    },
    leftContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    rightContainer: {
        position: 'absolute',
        top: 0,
        left: 50,
    },
    subHeader: {
        position: "sticky",
        background: theme.palette.background.paper,
        textAlign: "center",
        padding: 0,
        overflow: "hidden",
        justifyContent: "top",
        height: props => props.itemSize,
        zIndex: 2,
    },
}))

const ItemRow = memo(({ index, style, data }) => {
    const { classes, list } = data;
    return (
        <div id={`item-${index}`} key={`row-${index}`} style={style} className={classes.row} >
            <div className={classes.image}>
                <img src={list[index].image} alt="" />
            </div>
            <div className={classes.content}>
                <div>{list[index].name}</div>
                <div>{list[index].text}</div>
            </div>
        </div>
    );
}, areEqual)
const ItemColumn = memo(({ index, style, data }) => {
    const { classes, list } = data;
    return (
        <div key={`column-${index}`} style={style} className={classes.row}>
            <div className={classes.content}>
                <div>{list[index].id}</div>
            </div>
        </div>
    )
}, areEqual)

const createItemData = memoize((list, classes) => ({
    list,
    classes,
}));


function SyncList(props) {
    const classes = useStyles();
    const leftRef = useRef();
    const listRef = useRef();
    const listContainerRef = useRef();
    const itemData = createItemData(list, classes);
    // const [title, setTitle] = useState("hoy");
    //const theOne = document.getElementById("item-10");
    //const { offsetTop, clientTop } = theOne;

    const handleScroll = (scrollOffset) => {
        if (leftRef.current) {
            leftRef.current.scrollTo(scrollOffset);
        }
    }



    return (
        <>
            {/* <header className={classes.header}>
                <h1 className={classes.tittle}>{title}</h1>
            </header> */}
            <div className={classes.list} ref={listContainerRef}>
                <AutoSizer>
                    {({ height, width }) => {
                        return (
                            <>
                                <div
                                    className={classes.leftContainer} >
                                    <FixedSizeList
                                        width={50}
                                        height={height}
                                        className={classes.leftSide}
                                        itemCount={list.length}
                                        itemSize={rowHeight}
                                        overscanCount={10}
                                        itemData={itemData}
                                        ref={leftRef}
                                    >
                                        {ItemColumn}
                                    </FixedSizeList>
                                </div>
                                <div
                                    className={classes.rightContainer}>
                                    <FixedSizeList
                                        width={width - 50}
                                        height={height}
                                        itemCount={list.length}
                                        itemSize={rowHeight}
                                        overscanCount={10}
                                        itemData={itemData}
                                        ref={listRef}
                                        onScroll={({ scrollDirection, scrollOffset, scrollUpdateWasRequested }) => {
                                            handleScroll(scrollOffset)
                                        }}
                                    >
                                        {ItemRow}
                                    </FixedSizeList>
                                </div>
                            </>
                        )
                    }}
                </AutoSizer>
            </div>
        </>
    );

}



export default SyncList;