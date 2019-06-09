import React from "react";
import MTypography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import useHtmlReact from "../Hooks/useHtmlReact";
import { objectRequired } from "../Utils/customProptypes";

const useStyles = makeStyles(theme => ({
	component: props => ({
		fontSize: theme.typography.pxToRem(props.component.fontSize),
		color: theme.palette.text[props.component.color]
	})
}));

function Typography(props) {
	const classes = useStyles(props.styles);
	let value = props.value;
	const { isHtml, ...typoProps } = props.extProperties;
	[value] = useHtmlReact({
		value,
		shouldParse: isHtml
	});


	return (
		<MTypography className={classes.component} {...typoProps}>
			{value}
		</MTypography>
	);
}


Typography.propTypes = {
	styles: objectRequired
};

export default Typography;
