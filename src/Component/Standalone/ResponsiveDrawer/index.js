import {Divider, Drawer, Hidden} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import classNames from "classnames";
import React, {useState, useReducer} from "react";
import useRouter from "../../../Hooks/Component/useRouter";
import PrimarySearchAppBar from "../PrimarySearchAppBar";
import {objectRequired} from "../../../Utils/customProptypes";
import reducer from "./reducer";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        height: "100%",
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: "nowrap",
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(1),
        marginTop: "54px",
        [theme.breakpoints.up("sm")]: {
            marginTop: "64px",
        },
        maxHeight: "100%",
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: "hidden",
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7),
        // [theme.breakpoints.up('sm')]: {
        //     width: theme.spacing(9 + 1,
        // },
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar,
    },
}));

function ResponsiveDrawer(props) {
    //const { theme } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [state, dispatch] = useReducer(reducer, {
        mobileOpen: false,
        open: true,
    });
    const matches = useMediaQuery(theme.breakpoints.up("sm"));
    const [peek, setPeek] = useState(false);
    const [Router, ContentRoutes, LinkList] = useRouter();

    let peekTime;

    // useEffect(() => {
    //     console.log(props);
    //     // dispatch({
    //     //     type: "UPDATE_COMPONENT",
    //     //     payload: {id: props.id, mobileOpen: false, open: true},
    //     // });
    // }, []);

    const closeMobileDrawer = (event) => {
        if (!matches) {
            event.persist();
            dispatch({type: "CLOSE_MOBILE"});
        }
    };

    const openDrawer = () => {
        dispatch({type: "OPEN"});
    };

    const closeDrawer = () => {
        dispatch({type: "CLOSE"});
    };

    const peekEnter = (event) => {
        if (matches && !state.open) {
            peekTime = setTimeout(() => {
                event.persist();
                setPeek(true);
                openDrawer();
            }, 350);
        }
    };

    const peekLeave = (event) => {
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
                className={classes.drawer}
                // style={{ overflow: "hidden"}}
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
                <PrimarySearchAppBar
                    styles={{}}
                    open={state.open}
                    dispatch={dispatch}
                />
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
                                paper: classes.drawerPaper,
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
                                [classes.drawerClose]: !state.open,
                            })}
                            classes={{
                                paper: classNames({
                                    [classes.drawerOpen]: state.open,
                                    [classes.drawerClose]: !state.open,
                                }),
                            }}
                            open={state.open}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </div>
                <div className={classes.content}>
                    {/* <div className={classes.toolbar} /> */}
                    {ContentRoutes}
                </div>
            </div>
        </Router>
    );
}

ResponsiveDrawer.propTypes = {
    styles: objectRequired,
};

export default ResponsiveDrawer;
