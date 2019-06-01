import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MChip from "@material-ui/core/Chip";
import { objectRequired } from "../Utils/customProptypes";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		justifyContent: "center",
		flexWrap: "wrap"
	},
	chip: {
		margin: theme.spacing(1)
	}
}));

function Chip(props) {
	const classes = useStyles();

	function handleDelete() {
		console.log("You clicked the delete icon.");
	}

	function handleClick() {
		console.log("You clicked the Chip.");
	}

	return (
		<MChip
			{...props.extProperties}
			className={classes.chip}
			onDelete={handleDelete}
			onClick={handleClick}
		/>
	);
}

Chip.propTypes = {
	styles: objectRequired
};

export default Chip;
