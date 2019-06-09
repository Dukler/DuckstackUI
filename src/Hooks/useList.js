import React, { useState, useEffect, useCallback, useRef } from "react";

function useList(props) {

    const { source, Sections, Items, classes, showSecondary } = props;
    const [list, setList] = useState();
    const { AsyncImport } = Items;
    const lastSection = useRef();
    //const actualSource = require('../MockData/turnos.json');

    const mapItems = useCallback((data, sec) => {
        if (!Array.isArray(data)) {
            return Object.keys(data).map((section, i, arr) => {
                const items = mapItems(data[section], section)
                if (arr.length - 1 === i) {
                    return <Sections lastSection={lastSection} key={`section-${section}`} classes={classes} section={section} items={items} />
                } else {
                    return <Sections key={`section-${section}`} classes={classes} section={section} items={items} />
                }
            })
        } else {
            return data.map((item, index) => {
                return <AsyncImport key={`item-${item.id}`} index={index} data={{ itemProps: Items, showCheck: true, list: source[sec], hasCheck: true }}
                    classes={classes} item={item}
                    showSecondary={showSecondary}
                />
            })
        }
        //index, style, data
    }, [Items, classes, showSecondary, source])

    useEffect(() => {
        setList(mapItems(source))
    }, [mapItems, source])


    return [list, lastSection]
}

export default useList