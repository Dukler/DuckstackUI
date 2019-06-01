import React from "react";
import MGrid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import useWrapper from "../Hooks/useWrapper";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	Grid: {}
}));

const Grid = React.memo(function Grid(props) {
	const { componentsState, wrapperState } = props;
	const classes = useStyles();

	const { All } = useWrapper({
		componentsState,
		wrapperState,
		parents: ["All"],
		styleContainers: {
			Default: MGrid
		}
	});

	return (
		<div className={classes.root}>
			<MGrid {...wrapperState.extProperties}>{All}</MGrid>
		</div>
	);
});

export default Grid;
