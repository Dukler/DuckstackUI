import React, { useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Divider from "@material-ui/core/Divider";
import {Switch} from "react-router-dom";
import { useMappedState, useDispatch } from 'redux-react-hook';
import { BrowserRouter } from "react-router-dom";
import DynamicList from '../BeLazy/DynamicList';


const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
});

const ResponsiveDrawer = React.memo(function ResponsiveDrawer (props) {
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch({
            type: 'UPDATE',
            payload: { id: props.id, mobileOpen: false, open: false }
        });
    }, [dispatch, props.id])
    
    const mapState = useCallback(
        state => ({
            state: state["components"]["byIds"][props.id],
            theme: state["theme"]
        }),[props.id]
    );
    const {state,theme} = useMappedState(mapState);
    
    const { classes } = props;
    
    const handleDrawerToggle = (event) => {
        event.persist();
        dispatch({ type:'TOGGLE_MOBILE_OPEN', payload:{ id:props.id } })
    };

    const handleThemeToggle = (event) => {
        event.persist();
        dispatch({ type:'HANDLE_THEME_TOGGLE' })
    };



    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <DynamicList element="linkList" wrapper="root"/>
            <Divider />
        </div>
    );

    return (
        <BrowserRouter>
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" noWrap>
                        Responsive drawer
                    </Typography>

                    {/* <IconButton color="inherit" onClick={handleThemeToggle}>
                        <AsyncComponent className="EventAvailable" type="mIcon" create/>
                    </IconButton> */}

                </Toolbar>
            </AppBar>
            <nav className={classes.drawer}>
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Switch>
                    <DynamicList element="contentRoutes"/>
                </Switch>
            </main>
        </div>
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