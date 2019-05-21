import React, { useEffect} from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import {withStyles} from '@material-ui/core/styles';
import Divider from "@material-ui/core/Divider";
import {Switch} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import DynamicList from '../BeLazy/DynamicList';
import { MuiThemeProvider } from "@material-ui/core";
import { dsTheme } from '../Theme/dsTheme';
import SimpleList from '../Wrappers/SimpleList';
import PrimarySearchAppBar from './PrimarySearchAppBar'
import useComponent from './../Hooks/useComponent';
import classNames from 'classnames';


const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        // width: drawerWidth,
        // flexShrink: 0,
        // whiteSpace: 'nowrap',
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9 + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
});

const ResponsiveDrawer = React.memo(function ResponsiveDrawer (props) {

    const [state, dispatch] = useComponent(props.id)

    useEffect(() => {
        dispatch({
            type: 'UPDATE',
            payload: { id: props.id, mobileOpen: false, open: true }
        });
    }, [dispatch, props.id])
    
    //const theme = {};
    const { classes, theme } = props;
    
    const handleDrawerToggle = (event) => {
        event.persist();
        dispatch({ type:'TOGGLE_MOBILE_OPEN', payload:{ id:props.id } })
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <SimpleList>
                <DynamicList element="linkList" wrapper={{ id: "root" }} />
            </SimpleList>
            <Divider />
        </div>
    );

    return (
        <BrowserRouter>
        <MuiThemeProvider theme={dsTheme}>
        <div className={classes.root}>
            <CssBaseline />
            <PrimarySearchAppBar open={state.open}/>
            <Hidden smUp implementation="css">
                <Drawer
                    container={props.container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={state.mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={handleDrawerToggle}
                        onKeyDown={handleDrawerToggle}
                    >
                    {drawer}
                    </div>
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
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Switch>
                    <DynamicList element="contentRoutes"/>
                </Switch>
            </main>
        </div>
            </MuiThemeProvider>
        </BrowserRouter>                    
    );
    
});

ResponsiveDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
};

export default  withStyles(styles, { withTheme: true })(ResponsiveDrawer);