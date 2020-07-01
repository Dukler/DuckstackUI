import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";
import SaveIcon from "@material-ui/icons/Save";
import PrintIcon from "@material-ui/icons/Print";
import ShareIcon from "@material-ui/icons/Share";
import AddIcon from "@material-ui/icons/Add";
import CreateIcon from "@material-ui/icons/Create";
import useExtendedActions from "./../../../Hooks/Actions/useExtendedActions";
import dialReducer from "./reducer";

const iconSelector = (key) => {
    switch (key) {
        case "Delete":
            return DeleteIcon;
        case "FileCopy":
            return FileCopyIcon;
        case "Save":
            return SaveIcon;
        case "Print":
            return PrintIcon;
        case "Share":
            return ShareIcon;
        case "Add":
            return AddIcon;
        case "Create":
            return CreateIcon;
        default:
            break;
    }
};

export default function DialIcons(icons) {
    const iconComponents = icons.map((comp) => {
        return {
            icon: (
                <ExtendedIcon
                    Icon={iconSelector(comp.Icon)}
                    actions={comp.actions}
                />
            ),
            name: comp.name,
        };
    });

    return iconComponents;
}

function ExtendedIcon({Icon, actions}) {
    const iconRef = useExtendedActions({
        actions,
        reducer: (props) => dialReducer({action: {...props}}),
    });

    return <Icon ref={iconRef} />;
}
