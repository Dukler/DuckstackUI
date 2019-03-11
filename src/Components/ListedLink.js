import React from 'react';
import {Link} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import MaterialIcon from "../BeLazy/MaterialIcon";



export default class ListedLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        //this.attributes = this.props.attributes;
    }
    render(){
        const attributes = this.props.attributes;
        return(
            <ListItem key={attributes.id} component={Link} to={attributes.path} button>
                <ListItemIcon><MaterialIcon icon={attributes.icon}/></ListItemIcon>
                <ListItemText primary={attributes.id}/>
            </ListItem>
        );
    }
}