import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";

const TextItem = React.memo(function TextItem({ index, style, data }) {
    const { list } = data;
    const item = list[index];
    const { primary } = item;


    return (
        <ListItem button style={style} key={index} >
            <ListItemText primary={primary} />
        </ListItem>
    );
})

export default TextItem;