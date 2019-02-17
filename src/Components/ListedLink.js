import React from 'react';
// import {Link} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
// import EventIcon from '@material-ui/icons/EventAvailable';
// import ContactsIcon from '@material-ui/icons/Contacts';
// import CalendarIcon from '@material-ui/icons/DateRange';
// import NotesIcon from '@material-ui/icons/Notes';
// import { EventAvailable, Contacts, DateRange, Notes } from '@material-ui/icons';
import { asyncComponent } from 'react-async-component'

const MaterialIcon = ({ icon }) => {
    let iconName = icon.replace(/Icon$/, '')
    return React.createElement(asyncComponent({
        resolve: () => import(
            /* webpackMode: "eager" */
            `@material-ui/icons/${iconName}`)
    }))
};

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
        //const CustomIcon =`${attributes.icon}`;
        // return (
        //     <NavLink id = {attributes.id} exact to={attributes.path}>
        //         {attributes.caption}
        //     </NavLink>
        // );
        // component={Link} to={attributes.path}
        return(
            <ListItem key={attributes.id}  button>
                <ListItemIcon> {<MaterialIcon icon={attributes.icon}/>} </ListItemIcon>
                <ListItemText primary={attributes.id}/>
            </ListItem>
        );
    }
}