import React, {useCallback} from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import memoize from "memoize-one";
import {areEqual} from "react-window";

const createCheck = memoize((hasCheck, showCheck, checked, id) =>
    hasCheck && showCheck ? (
        <ListItemIcon>
            <Checkbox
                edge="start"
                checked={checked.indexOf(id) !== -1}
                tabIndex={-1}
                disableRipple
            />
        </ListItemIcon>
    ) : null
);

const createSecondary = memoize((extProperties) =>
    extProperties.hasSecondary ? (
        <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="Comments">
                <Icon>{`${extProperties.secondaryIcon}_icon`}</Icon>
            </IconButton>
        </ListItemSecondaryAction>
    ) : null
);

const createSecondaryAndCheck = memoize((extProperties, hasCheck) =>
    extProperties.secondaryAndCheck && hasCheck
        ? createSecondary(extProperties)
        : !hasCheck
        ? createSecondary(extProperties)
        : null
);

const ActionItem = React.memo(({index, style, data}) => {
    const [checked, setChecked] = React.useState([0]);
    const {list, itemProps, showCheck} = data;
    const {extProperties} = itemProps;
    const item = list[index];

    const {primary} = item !== undefined ? item : "";

    const handleToggle = useCallback(
        (value, event) => {
            if (extProperties.hasCheck && showCheck) {
                const currentIndex = checked.indexOf(value);
                const newChecked = [...checked];
                if (currentIndex === -1) {
                    newChecked.push(value);
                } else {
                    newChecked.splice(currentIndex, 1);
                }
                setChecked(newChecked);
            }
        },
        [checked, extProperties.hasCheck, showCheck]
    );

    const handleClick = useCallback(
        (props) => (event) => {
            event.preventDefault();
            if (item !== undefined) {
                handleToggle(item.id, event);
            }
        },
        [handleToggle, item]
    );

    return (
        <div style={style}>
            {item === undefined ? null : (
                <ListItem button onClick={handleClick()} key={index}>
                    {createCheck(
                        extProperties.hasCheck,
                        showCheck,
                        checked,
                        item.id
                    )}
                    <ListItemText primary={primary} />
                    {createSecondaryAndCheck(extProperties, showCheck)}
                </ListItem>
            )}
        </div>
    );
}, areEqual);

export default ActionItem;
