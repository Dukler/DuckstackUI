import React from "react";
import MTypography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import useHtmlReact from "../../Hooks/Component/useHtmlReact";
import {objectRequired} from "../../Utils/customProptypes";

const useStyles = makeStyles((theme) => ({
    component: ({fontSize, color, ...styles}) => ({
        fontSize: theme.typography.pxToRem(fontSize),
        color: theme.palette.text[color],
        ...styles,
    }),
}));

function Typography(props) {
    const classes = useStyles(props.styles.component);
    let value = props.value;
    const {isHtml} = props.extProperties;
    [value] = useHtmlReact({
        value,
        shouldParse: isHtml,
    });
    return (
        <MTypography
            className={classes.component}
            style={{height: "250px"}}
            {...props.params}
            // name="fname"
        >
            {value}
        </MTypography>
    );
}

Typography.propTypes = {
    styles: objectRequired,
};

export default Typography;
