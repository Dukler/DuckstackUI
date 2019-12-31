import React from 'react'
import { FixedSizeList } from 'react-window'
import ListSubheader from "@material-ui/core/ListSubheader";
import memoize from 'memoize-one';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const createItemData = memoize((list, classes, itemProps, showCheck) => ({
    list, classes, itemProps, showCheck
}));

const Section = React.memo(function Section({ index, style, data }) {
    const { source, Item, classes, itemSize, width } = data;
    const { subHeaders, list } = source;
    const itemCount = list[index].length;
    //const { height } = style;
    const [showCheck, setShowCheck] = React.useState(false);
    const itemData = createItemData(list[index], classes, Item, showCheck);
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
    // const handleTest = (e) => {
    //     console.log("asd")
    // }

    return (
        <div style={style} key={`section-${index}`}>
            <li className={classes.listSection}>
                <ul style={{ height: style.height }} className={classes.ul} >
                    <ListSubheader className={classes.subHeader} >{subHeaders[index]}</ListSubheader>
                    <ClickAwayListener onClickAway={handleClickAway} >
                        <div style={{ height: "100%", width: "100%" }}
                            onMouseDown={handleShowCheck}
                            onMouseUp={handleShowCheck}
                            onTouchStart={handleShowCheck}
                            onTouchEnd={handleShowCheck}
                            onTouchMove={handleShowCheck}
                        >
                            <FixedSizeList
                                className={classes.list}
                                height={itemSize * itemCount}
                                width={width - 20}
                                itemCount={itemCount}
                                itemSize={itemSize}
                                itemData={itemData}
                            >
                                {Item.AsyncImport}
                            </FixedSizeList>
                        </div>
                    </ClickAwayListener>
                </ul>
            </li>
        </div>
    )
})

export default Section;