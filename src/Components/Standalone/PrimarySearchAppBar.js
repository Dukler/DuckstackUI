import { AppBar, Badge, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { useDispatch } from 'redux-react-hook';
import { objectRequired } from "../../Utils/customProptypes";
import useActions from '../../Actions/useActions';


const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
        //width: '100%',
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    title: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(3),
            width: "auto"
        }
    },
    searchIcon: {
        width: theme.spacing(9),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    inputRoot: {
        color: "inherit",
        width: "100%"
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: 200
        }
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex"
        }
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        // [theme.breakpoints.up("sm")]: {
        //   height:"10px"
        // }
        // transition: theme.transitions.create(['width', 'margin'], {
        //     easing: theme.transitions.easing.sharp,
        //     duration: theme.transitions.duration.leavingScreen,
        // }),
    }
    // appBarShift: {
    //     marginLeft: drawerWidth,
    //     width: `calc(100% - ${drawerWidth}px)`,
    //     transition: theme.transitions.create(['width', 'margin'], {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.enteringScreen,
    //     }),
    // },
}));


function PrimarySearchAppBar(props) {
    const dispatch = useDispatch()
    const [anchorEl, setAnchor] = useState(null);
    const [mobileMoreAnchorEl, setMobileAnchor] = useState(null);
    const [isMenuOpen, setMenu] = useState(false);
    const [isMobileMenuOpen, setMobileMenu] = useState(false);
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const [actionDispatch] = useActions();


    const handleProfileMenuOpen = event => {
        setAnchor(event.currentTarget);
        setMenu(true);
    };

    const handleMenuClose = () => {
        setAnchor(null);
        setMenu(false);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = event => {
        setMobileAnchor(event.currentTarget);
        setMobileMenu(true);
    };

    const handleMobileMenuClose = () => {
        setMobileAnchor(null)
        setMobileMenu(false);
    };

    const handleDrawerToggle = (event) => {
        event.persist();
        if (matches) {
            dispatch({ type: 'TOGGLE_OPEN', payload: { id: "responsiveDrawer" } });
        } else {
            dispatch({ type: 'TOGGLE_MOBILE_OPEN', payload: { id: "responsiveDrawer" } });
        }
    };
    const logout = () => {
        actionDispatch({
            type: "DELETE_LOGIN_TOKEN",
        })
        actionDispatch({
            type: "REFRESH",
        })
        window.location.replace("localhost:3000");
    }

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
    );


    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMobileMenuClose}>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem onClick={handleMobileMenuClose}>
                <IconButton color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton color="inherit">
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.root}>
            <AppBar position="fixed"
                // className={classNames(classes.appBar, {
                //     [classes.appBarShift]: props.open,
                // })}
                className={classes.appBar}
            >
                <Toolbar>
                    <IconButton className={classes.menuButton}
                        color="inherit"
                        onClick={handleDrawerToggle}
                        aria-label="Open drawer">
                        <MenuIcon />
                    </IconButton>

                    <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                        nada
                    </Typography>

                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMenu}
            {renderMobileMenu}
        </div>
    );
};

PrimarySearchAppBar.propTypes = {
    styles: objectRequired
};


export default PrimarySearchAppBar;