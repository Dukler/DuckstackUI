import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem"; 
import useClassState from '../Hooks/useClassState';
import { withRouter } from "react-router-dom"
// import { makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles(theme => ({

// }));

function ListedLink (props) {
    const state = useClassState({ id: props.id, element: "linkList" })
    const { Icon, id, path, extProperties } = state;
    const [selected, setSelected] = useState(false)
    const pathname = props.location.pathname;
    const {isMain} = extProperties;

    useEffect(() => {
      setSelected(pathname === state.path)
    }, [pathname, state.path])


    return(
        <ListItem 
            key={id} 
            component={Link} 
            to={path}
            selected={isMain?selected:null} 
            //className={classes.listItem}
            button>
            <ListItemIcon >
                <Icon/>
            </ListItemIcon>
            <ListItemText primary={id}/>
        </ListItem>
    );
};

export default withRouter(ListedLink);