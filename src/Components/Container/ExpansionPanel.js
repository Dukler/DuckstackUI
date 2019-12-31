import {
	Divider,
	ExpansionPanelActions,
	ExpansionPanelDetails,
	ExpansionPanelSummary
} from "@material-ui/core";
import MExpansionPanel from "@material-ui/core/ExpansionPanel";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import classNames from "classnames";
import React from "react";
import useContainer from "../../Hooks/useContainer";

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%"
	},
	heading: {
		fontSize: theme.typography.pxToRem(15)
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary
	},
	icon: {
		verticalAlign: "bottom",
		height: 20,
		width: 20
	},
	details: {
		alignItems: "center"
	},
	column: {
		flexBasis: "33.33%"
	},
	helper: {
		borderLeft: `2px solid ${theme.palette.divider}`,
		padding: theme.spacing(1, 2)
	},
	link: {
		color: theme.palette.primary.main,
		textDecoration: "none",
		"&:hover": {
			textDecoration: "underline"
		}
	}
}));

function Column(props) {
	const classes = useStyles(props.styles);
	return <div className={classes.column}>{props.children}</div>;
}
function Helper(props) {
	const classes = useStyles(props.styles);
	return (
		<div className={classNames(classes.column, classes.helper)}>
			{props.children}
		</div>
	);
}

function ExpansionPanel(props) {
	const classes = useStyles();
	const { containerState, standalonesState } = props;

	const { Summary, Details, Actions } = useContainer({
		standalonesState,
		containerState,
		parents: ["Summary", "Details", "Actions"],
		styleContainers: {
			Default: React.Fragment,
			Helper,
			Column,
			Empty: Column
		}
	});

	return (
		<div className={classes.root}>
			<MExpansionPanel {...containerState.extProperties}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					{Summary}
				</ExpansionPanelSummary>
				<ExpansionPanelDetails className={classes.details}>
					{Details}
				</ExpansionPanelDetails>
				<Divider />
				<ExpansionPanelActions>{Actions}</ExpansionPanelActions>
			</MExpansionPanel>
		</div>
	);
}

export default ExpansionPanel;
