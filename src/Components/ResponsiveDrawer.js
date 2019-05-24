import React, { useEffect, useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
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
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
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
        width: theme.spacing(7) ,
        // [theme.breakpoints.up('sm')]: {
        //     width: theme.spacing(9 + 1,
        // },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
}));

const ResponsiveDrawer = React.memo(function ResponsiveDrawer (props) {
    //const { theme } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [state, dispatch] = useComponent(props.id);
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const [peek, setPeek] = useState(false);
    
    
    let peekTime;

    useEffect(() => {
        dispatch({
            type: 'UPDATE',
            payload: { id: props.id, mobileOpen: false, open: true }
        });
    }, [dispatch, props.id]);

    const closeMobileDrawer = (event) => {
        if (!matches) {
            event.persist();
            dispatch({ type: 'CLOSE_MOBILE', payload: { id: props.id } })
        }
    };

    const openDrawer = () => {
        dispatch({ type: 'OPEN', payload: { id: props.id } })
    };

    const closeDrawer = () => {
        dispatch({ type: 'CLOSE', payload: { id: props.id } })
    };

    const clearPeek = () =>{
        if(matches){
            clearTimeout(peekTime);
        }
    };

    const peekEnter = (event) => {
        if (matches && !state.open) {
            peekTime = setTimeout(()=>{
                event.persist();
                setPeek(true);
                openDrawer();
            }, 350);
        }
    };

    const peekLeave = (event) => {
        if (matches) {
            clearPeek();
            if(peek){
                event.persist();
                setPeek(false);
                closeDrawer();
            };
        };
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
                <SimpleList>
                    <DynamicList element="linkList" wrapper={{ id: "root" }} />
                </SimpleList>
            </div>
            <Divider />
        </div>
    );

    return (
        <BrowserRouter>
            
        <MuiThemeProvider theme={dsTheme}>
        <div className={classes.root}>
            <CssBaseline />
            <PrimarySearchAppBar open={state.open}/>
            <div onMouseEnter={peekEnter} onMouseLeave={peekLeave} >
            <Hidden smUp implementation="css">
                <Drawer
                    container={props.container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
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


export default  ResponsiveDrawer;