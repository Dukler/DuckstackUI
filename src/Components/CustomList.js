import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import { objectRequired } from "../Utils/customProptypes";
import useList from "../Hooks/useList";
import useComponent from './../Hooks/useComponent';
import useResponsiveSize from "../Hooks/useResponsiveSize";

const useStyles = makeStyles(theme => ({
	root: props => ({
		width: "100%",
		maxWidth: props.rWidth,
		backgroundColor: theme.palette.background.paper,
		position: "relative",
		overflow: "auto",
		maxHeight: props.rHeight
	}),
	listSection: {
		backgroundColor: "inherit"
	},
	ul: {
		backgroundColor: "inherit",
		padding: 0
	},
	filler: {
		height: props => props.filler
	},
	sticky: {
		textAlign: "center",
		overflow: "hidden"
	}
}));

//import '../MockData/turnos'



function Sections(props) {
	//const classes = useStyles();
	const { classes } = props;
	return (
		<li
			className={classes.listSection}
			id={props.section}
			ref={props.lastSection}
		>
			<ul className={classes.ul}>
				<ListSubheader className={classes.sticky}>
					{props.section}
				</ListSubheader>
				{props.items}
			</ul>
		</li>
	);
}

//lost 19
function CustomList(props) {
	const { source, extProperties } = props;
	const { items, hasFiller, secondaryText, isDense, offset, ...listProps } = extProperties;
	const [Items] = useComponent(extProperties.items);
	const [showSecondary, setShowSecondary] = useState(secondaryText);
	const [dense, setDense] = useState(isDense);

	const [rHeight, rWidth] = useResponsiveSize({ offset: { width: 270, height: offset }, sidebar: { breakpoint: "up" } });

	const [filler, setFiller] = useState();
	const classes = useStyles({ rHeight, filler, rWidth });
	const testSource = require('../MockData/turnosR.json');
	const actualSource = source ? source : testSource;
	const [list, lastSection] = useList({ source: actualSource, Sections, Items, classes, showSecondary });
	const [scroll, setScroll] = useState();

	useEffect(() => {
		//Filler with scrolling response
		if (lastSection.current) {
			setFiller(hasFiller ? rHeight - lastSection.current.clientHeight : 0);
		}
	}, [hasFiller, lastSection, rHeight, scroll, dense, showSecondary]);


	return (
		<List className={classes.root} subheader={<li />} dense={dense} {...listProps} onScroll={() => { setScroll(Math.random(100)) }}>
			<button onClick={() => { setShowSecondary(!showSecondary) }}></button>
			<button onClick={() => { setDense(!dense) }}></button>
			{list}
			<div className={classes.filler} />
		</List>
	);
}

CustomList.propTypes = {
	styles: objectRequired
};

export default CustomList;
