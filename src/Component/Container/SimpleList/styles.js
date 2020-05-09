import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    root: {
        maxHeight: "100%",
        height: "100%",
    },
    header: {
        height: "80px"
    },
    list: {
        height: "100%",
    },
    row: {
        borderBottom: "1px solid #ebeced",
        textAlign: "left",
        margin: "5px 0",
        display: "flex",
        alignItems: "center",
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

