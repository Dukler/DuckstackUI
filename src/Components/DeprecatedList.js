import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import { objectRequired } from "../Utils/customProptypes";
import useList from "../Hooks/useList";
import useComponent from '../Hooks/useComponent';

const useStyles = makeStyles(theme => ({
	root: props => ({
		width: "100%",
		//maxWidth: props.rWidth,
		maxWidth: "100%",
		backgroundColor: theme.palette.background.paper,
		position: "relative",
		overflow: "auto",
		//maxHeight: props.rHeight
		maxHeight: "100%"
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

function DeprecatedList(props) {
	const { source, extProperties } = props;
	const { items, hasFiller, secondaryText, isDense, offset, ...listProps } = extProperties;
	const [Items] = useComponent(extProperties.items);
	const listRef = useRef(null);

	const [showSecondary, setShowSecondary] = useState(secondaryText);
	const [dense, setDense] = useState(isDense);
	const [filler, setFiller] = useState();
	const [refreshFiller, setRefreshFiller] = useState();


	const classes = useStyles({ filler });
	const testSource = require('../MockData/turnosR.json');
	const actualSource = source ? source : testSource;
	const [list, lastSection] = useList({ source: actualSource, Sections, Items, classes, showSecondary });

	const handleFillerUpdate = (event) => {
		setRefreshFiller(Math.random(100));
	}

	useEffect(() => {
		//Filler so last section stays on top
		if (lastSection.current && listRef.current !== null) {
			setFiller(hasFiller ? listRef.current.clientHeight - lastSection.current.clientHeight : 0);
		}
	}, [hasFiller, lastSection, listRef, refreshFiller, dense, showSecondary]);

	return (
		<List className={classes.root} subheader={<li />} dense={dense}
			onScroll={handleFillerUpdate}
			onMouseOver={handleFillerUpdate}
			{...listProps}
			ref={listRef}
		>
			<button onClick={() => { setShowSecondary(!showSecondary) }}></button>
			<button onClick={() => { setDense(!dense) }}></button>
			{list}
			<div className={classes.filler} />
		</List>
	);
}

DeprecatedList.propTypes = {
	styles: objectRequired
};

export default DeprecatedList;
