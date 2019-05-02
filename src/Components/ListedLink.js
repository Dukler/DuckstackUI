import React from 'react';
import {Link} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import useClassState from '../Hooks/useClassState';



function ListedLink (props) {
    const state = useClassState({ id: props.id, element: "linkList" })
    const { Icon } = state;
    return(
        <ListItem key={state.id} component={Link} to={state.path} button>
            <ListItemIcon>
                <Icon/>
            </ListItemIcon>
            <ListItemText primary={state.id}/>
        </ListItem>
    );
}

export default ListedLink;