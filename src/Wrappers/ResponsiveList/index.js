import React from 'react'
import { VariableSizeList } from 'react-window'
import { makeStyles } from "@material-ui/core/styles";
import { List } from '@material-ui/core';
import memoize from 'memoize-one';
import Section from './Section';
import AutoSizer from 'react-virtualized-auto-sizer';


const useStyles = makeStyles(theme => ({
    root: props => ({
        //maxHeight: props.rHeight
        //maxWidth: props.rWidth,
        maxHeight: "100%",
        maxWidth: "100%",
        backgroundColor: theme.palette.background.paper,
        position: "relative",
        overflow: "auto",
        width: "100%",
        height: "100%"
    }),
    listSection: {
        backgroundColor: "inherit",
        width: "100%",
        height: "100%"
    },
    ul: {
        backgroundColor: "inherit",
        padding: 0,
        width: "100%",
        height: "100%"
    },
    // filler: {
    //     height: props => props.filler
    // },
    subHeader: {
        background: theme.palette.background.paper,
        textAlign: "center",
        padding: 0,
        overflow: "hidden",
        justifyContent: "top",
        height: props => props.itemSize,
        zIndex: 2,
    },
    list: {
        //top: 20,
    },
    listItem: {
        flexDirection: "column",
        alignItems: "left",
        //justifyContent: "center"
    }
}));


const createSectionData = memoize((source, Item, classes, itemSize, width) => ({
    source, Item, classes, itemSize, width
}));

const createItemSizes = memoize((sectionCount, data, itemSize) => (
    new Array(sectionCount)
        .fill(true)
        .map((value, index) => {
            const offset = (index === sectionCount - 1) ? 0 : 1;
            return (
                (itemSize * (data[index].length + offset))
            )
        })
));


const createList = memoize((sectionCount, itemSizes, source, componentsState, extProps, classes, itemSize) => (
    <AutoSizer key="list">
        {({ height, width }) => (
            <VariableSizeList
                height={height}
                width={width}
                itemCount={sectionCount}
                itemSize={index => itemSizes[index]}
                itemData={createSectionData(source, componentsState[extProps.item], classes, itemSize, width)}
            >
                {Section}
            </VariableSizeList>
        )}
    </AutoSizer>
));

const createComp = ({ AsyncImport, ...cleanComp }) => (
    //const { AsyncImport, ...cleanComp } = comp;
    <AsyncImport key={cleanComp.id} {...cleanComp} />
);


function ResponsiveList({ componentsState, wrapperState, children, ...rest }) {
    const itemSize = 58;
    const source = require('../../MockData/turnos.json');
    const data = source.list;
    const sectionCount = data.length;
    const classes = useStyles({ itemSize });
    const extProps = wrapperState.extProperties;
    const itemSizes = createItemSizes(sectionCount, source.list, itemSize);//move this to server side



    return (
        <List className={classes.root} subheader={<li />} >
            {extProps.order.map(key => {
                return (key === "list") ?
                    createList(sectionCount, itemSizes, source, componentsState, extProps, classes, itemSize) :
                    createComp(componentsState[key])
            })}
        </List>
    )
}

export default ResponsiveList;