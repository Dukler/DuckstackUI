import { Divider, Drawer, Hidden } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import useRouter from "../Hooks/useRouter";
import useComponent from "./../Hooks/useComponent";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import { objectRequired } from "../Utils/customProptypes";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex"
	},
	drawer: {
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 0,
			whiteSpace: "nowrap"
		}
	},
	drawerPaper: {
		width: drawerWidth
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(1),
		//width: "90%",
		//maxWidth: "100vw",
		height: "92vh"
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	drawerClose: {
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		overflowX: "hidden",
		width: theme.spacing(7)
		// [theme.breakpoints.up('sm')]: {
		//     width: theme.spacing(9 + 1,
		// },
	},
	toolbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: "0 8px",
		...theme.mixins.toolbar
	},
}));

function ResponsiveDrawer(props) {
	//const { theme } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [state, dispatch] = useComponent(props.id);
	const matches = useMediaQuery(theme.breakpoints.up("sm"));
	const [peek, setPeek] = useState(false);
	const [Router, LinkList, ContentRoutes] = useRouter();

	const handleChange = event => {
		console.log("asd");
	};

	let peekTime;

	useEffect(() => {
		dispatch({
			type: "UPDATE",
			payload: { id: props.id, mobileOpen: false, open: true }
		});
	}, [dispatch, props.id]);

	const closeMobileDrawer = event => {
		if (!matches) {
			event.persist();
			dispatch({ type: "CLOSE_MOBILE", payload: { id: props.id } });
		}
	};

	const openDrawer = () => {
		dispatch({ type: "OPEN", payload: { id: props.id } });
	};

	const closeDrawer = () => {
		dispatch({ type: "CLOSE", payload: { id: props.id } });
	};

	const peekEnter = event => {
		if (matches && !state.open) {
			peekTime = setTimeout(() => {
				event.persist();
				setPeek(true);
				openDrawer();
			}, 350);
		}
	};

	const peekLeave = event => {
		if (matches) {
			clearTimeout(peekTime);
			if (peek) {
				event.persist();
				setPeek(false);
				closeDrawer();
			}
		}
	};

	const drawer = (
		<div>
			<div className={classes.toolbar} />
			<Divider />
			<div
				role="button"
				onClick={closeMobileDrawer}
				onKeyDown={closeMobileDrawer}
			>
				{LinkList}
			</div>
			<Divider />
		</div>
	);

	return (
		<Router>
			<div className={classes.root}>
				<CssBaseline />
				<PrimarySearchAppBar styles={{}} open={state.open} />
				<div onPointerEnter={peekEnter} onPointerLeave={peekLeave}>
					<Hidden smUp implementation="css">
						<Drawer
							container={props.container}
							variant="temporary"
							anchor={
								theme.direction === "rtl" ? "right" : "left"
							}
							open={state.mobileOpen}
							onClose={closeMobileDrawer}
							classes={{
								paper: classes.drawerPaper
							}}
						>
							{drawer}
						</Drawer>
					</Hidden>
					<Hidden xsDown implementation="css">
						<Drawer
							variant="permanent"
							className={classNames(classes.drawer, {
								[classes.drawerOpen]: state.open,
								[classes.drawerClose]: !state.open
							})}
							classes={{
								paper: classNames({
									[classes.drawerOpen]: state.open,
									[classes.drawerClose]: !state.open
								})
							}}
							open={state.open}
						>
							{drawer}
						</Drawer>
					</Hidden>
				</div>
				<div className={classes.content} onChange={handleChange} >
					<div className={classes.toolbar} />
					{ContentRoutes}
				</div>
			</div>
		</Router>
	);
};

ResponsiveDrawer.propTypes = {
	styles: objectRequired
};


export default ResponsiveDrawer;
