import React, { useState, useEffect, useCallback, useRef } from "react";

function useList(props) {

    const { source, Sections, Items, classes, showSecondary } = props;
    const [list, setList] = useState();
    const { AsyncImport } = Items;
    const lastSection = useRef();

    const mapItems = useCallback((data) => {
        if (!Array.isArray(data)) {
            return Object.keys(data).map((section, i, arr) => {
                const items = mapItems(data[section])
                if (arr.length - 1 === i) {
                    return <Sections lastSection={lastSection} key={`section-${section}`} classes={classes} section={section} items={items} />
                } else {
                    return <Sections key={`section-${section}`} classes={classes} section={section} items={items} />
                }
            })
        } else {
            return data.map(item => {
                return <AsyncImport key={`item-${item.id}`} classes={classes} item={item} showSecondary={showSecondary} />
            })
        }
    }, [classes, showSecondary])

    useEffect(() => {
        setList(mapItems(source))
    }, [mapItems, source])


    return [list, lastSection]
}

export default useList