import React from 'react';
import {Link} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import MaterialIcon from "../BeLazy/MaterialIcon";



function ListedLink (props) {
    return(
        <ListItem key={props.id} component={Link} to={props.path} button>
            <ListItemIcon><MaterialIcon icon={props.icon}/></ListItemIcon>
            <ListItemText primary={props.id}/>
        </ListItem>
    );
}

export default ListedLink;