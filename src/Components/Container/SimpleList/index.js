import React, { useRef, useState, useEffect, useCallback } from 'react';
import memoize from 'memoize-one';
import { useStyles } from './styles'
import ResponsiveLayout from '../../Standalone/ResponsiveLayout/index';
import { renderList } from './renderList';

const createItemData = memoize((list, classes, itemProps, showCheck) => ({
    list, classes, itemProps, showCheck
}));

const createComp = ({ AsyncImport, ...cleanComp }) => (
    <AsyncImport key={cleanComp.id} {...cleanComp} />
);

function SimpleList({ standalonesState, containerState, children, ...rest }) {
    const classes = useStyles();
    const [showCheck, setShowCheck] = React.useState(false);
    const [components, setComponents] = useState([]);
    const extProps = containerState.extProperties;
    const source = require('../../../MockData/turnosR.json');
    const list = extProps.isDivided ? source["15"] : source;
    const Item = standalonesState[extProps.item];
    const itemData = createItemData(list, classes, Item, showCheck);
    const mouseDownTimer = useRef();
    const itemHeight = 48;
    const minHeight = itemHeight * 3;


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
                    renderList(itemData, Item, listHandlers, classes, minHeight) :
                    createComp(standalonesState[key])
            })
        );
    }, [Item, classes, standalonesState, extProps.order, handleShowCheck, itemData, minHeight])

    return (
        <ResponsiveLayout container>
            <ResponsiveLayout static>
                <div className={classes.header}>PORONGA</div>
            </ResponsiveLayout>
            <ResponsiveLayout>
                {components}
            </ResponsiveLayout>
        </ResponsiveLayout>
    );

}



export default SimpleList;