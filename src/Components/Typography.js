import React from "react";
import MTypography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	component: props => ({
		fontSize: theme.typography.pxToRem(props.component.fontSize),
		color: theme.palette.text[props.component.color]
	})
}));

function Typography(props) {
	const state = props;
	const classes = useStyles(state.styles);
	let value = state.value;

	if (state.valueProps.isHtml) {
		//const ReactDOMServer = require("react-dom/server");
		const HtmlToReactParser = require("html-to-react").Parser;

		const htmlInput = state.value;
		const htmlToReactParser = new HtmlToReactParser();
		value = htmlToReactParser.parse(htmlInput);
		// const reactHtml = ReactDOMServer.renderToStaticMarkup(
		// 	reactElement
		// );
	}

	return (
		<MTypography className={classes.component} {...state.extProperties}>
			{value}
		</MTypography>
	);
}

export default Typography;
