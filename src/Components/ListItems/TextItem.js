import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";

function TextItem(props) {
    //const classes = useStyles();
    const { item } = props;
    const { primary, secondary, ...rest } = item;
    console.log();
    return (
        <ListItem id={rest.id}>
            <ListItemText primary={primary} secondary={props.showSecondary ? secondary : null} />
        </ListItem>
    );
}

export default TextItem;