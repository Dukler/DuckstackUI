import React from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window';
import { List } from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const rowHeight = 48;

export const renderList = (itemData, listRefs, Item, listHandlers, classes) => (
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