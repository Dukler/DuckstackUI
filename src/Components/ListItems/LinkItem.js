import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import { withRouter } from "react-router-dom"


function LinkItem(props) {
    const { Icon, id, path, extProperties } = props;
    const [selected, setSelected] = useState(false)
    const pathname = props.location.pathname;
    const { isMain } = extProperties;

    useEffect(() => {
        setSelected(pathname === path)
    }, [pathname, path])


    return (
        <ListItem
            key={id}
            component={Link}
            to={path}
            selected={isMain ? selected : null}
            //className={classes.listItem}
            button>
            <ListItemIcon >
                <Icon />
            </ListItemIcon>
            <ListItemText primary={id} />
        </ListItem>
    );
};

export default withRouter(LinkItem);