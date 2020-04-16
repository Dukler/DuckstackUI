import React from "react";
import {List} from "@material-ui/core";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import {Virtuoso} from "react-virtuoso";

export const renderList = (
    itemData,
    Item,
    listHandlers,
    classes,
    minHeight
) => (
    <ClickAwayListener onClickAway={listHandlers.handleClickAway} key="list">
        <List
            className={classes.list}
            onMouseDown={listHandlers.handleShowCheck}
            onMouseUp={listHandlers.handleShowCheck}
            onTouchStart={listHandlers.handleShowCheck}
            onTouchEnd={listHandlers.handleShowCheck}
            onTouchMove={listHandlers.handleShowCheck}
        >
            <Virtuoso
                totalCount={itemData.list.length}
                style={{
                    width: "100%",
                    height: "100%",
                    minHeight,
                }}
                item={(index) => (
                    <Item.AsyncImport index={index} data={{...itemData}} />
                )}
            />
        </List>
    </ClickAwayListener>
);
// export const renderList = (
//     itemData,
//     Item,
//     listHandlers,
//     classes,
//     minHeight
// ) => (<List
//             className={classes.list}
//             onMouseDown={listHandlers.handleShowCheck}
//             onMouseUp={listHandlers.handleShowCheck}
//             onTouchStart={listHandlers.handleShowCheck}
//             onTouchEnd={listHandlers.handleShowCheck}
//             onTouchMove={listHandlers.handleShowCheck}
//         >
//             <Virtuoso
//                 totalCount={itemData.list.length}
//                 style={{width: "100%", height: "100%", minHeight}}
//                 item={(index) => (
//                     <Item.AsyncImport index={index} data={{...itemData}} />
//                 )}
//             />
//         </List>
// );
