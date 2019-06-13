import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    root: {
        height: "100%"
    },
    header: {
        height: "80px"
    },
    list: {
        padding: "10px",
        // height: "calc(100% - 90px)"
        height: "100%"
    },
    row: {
        borderBottom: "1px solid #ebeced",
        textAlign: "left",
        margin: "5px 0",
        display: "flex",
        alignItems: "center",
    },
    image: {
        marginRight: "10px",
    },
    content: {
        padding: "10px"
    },
    leftSide: {
        overflow: "hidden!important",
        //scrollBehavior: "smooth",
    },
    leftContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    rightContainer: {
        position: 'absolute',
        top: 0,
        left: 50,
    },
    subHeader: {
        position: "sticky",
        background: theme.palette.background.paper,
        textAlign: "center",
        padding: 0,
        overflow: "hidden",
        justifyContent: "top",
        height: props => props.itemSize,
        zIndex: 2,
    },
}))