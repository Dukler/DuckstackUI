import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem"; 
import useClassState from '../Hooks/useClassState';
import { withRouter } from "react-router-dom"
import { withStyles } from '@material-ui/core';

const styles = theme =>({
    listItem:{
        // '&:hover': {
        //     backgroundColor: colors.primary,
        //     "@media (hover: none)": {
        //         backgroundColor: colors.surface,
        //         "&,&:focus": {
        //             backgroundColor: colors.primary
        //         }
        //     }
        // },
        // "&,&:focus": {
        //     backgroundColor: colors.primary,
        //     //textDecoration: "line-through"
        // },
        // '&$selected, &$selected:hover': {
        //     backgroundColor: theme.palette.action.selected,
        // },
    }
})

function ListedLink (props) {
    const state = useClassState({ id: props.id, element: "linkList" })
    const { Icon } = state;
    const [selected, setSelected] = useState(false)
    const pathname = props.location.pathname;

    useEffect(() => {
      setSelected(pathname === state.path)
    }, [pathname, state.path])


    return(
        <ListItem 
            key={state.id} 
            component={Link} 
            to={state.path}
            //selected={true} 
            //className={classes.listItem}
            button>
            <ListItemIcon >
                <Icon/>
            </ListItemIcon>
            <ListItemText primary={state.id}/>
        </ListItem>
    );
}

export default withRouter(withStyles(styles)(ListedLink));