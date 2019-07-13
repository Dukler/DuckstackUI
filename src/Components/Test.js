import React from "react";
import ResponsiveLayout from "./ResponsiveLayout";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    red: {
        height: "100%",
        backgroundColor: "red"
    },
    green: {
        height: "100%",
        backgroundColor: "green"
    },
    blue: {
        height: "100%",
        backgroundColor: "blue"
    },
    pink: {
        height: "100%",
        backgroundColor: "pink"
    },
    white: {
        height: "100%",
        backgroundColor: "white"
    },
    header: {
        height: "80px"
    },
}))



function Test(props) {
    const classes = useStyles();

    return (
        <ResponsiveLayout container>
            <ResponsiveLayout static >
                <div className={classes.header}>PORONGA</div>
            </ResponsiveLayout>
            <ResponsiveLayout  >
                <div className={classes.red}></div>
            </ResponsiveLayout>
            <ResponsiveLayout  >
                <div className={classes.green}></div>
            </ResponsiveLayout>
            <ResponsiveLayout  >
                <div className={classes.blue}></div>
            </ResponsiveLayout>
            <ResponsiveLayout  >
                <div className={classes.white}></div>
            </ResponsiveLayout>
            <ResponsiveLayout  >
                <div className={classes.pink}></div>
            </ResponsiveLayout>
        </ResponsiveLayout >
    );
}

export default Test;
