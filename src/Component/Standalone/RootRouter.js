import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import { objectRequired } from "../../Utils/customProptypes";
import useRouter from '../../Hooks/Component/useRouter';

// const useStyles = makeStyles(theme => ({
//     root: {
//         height: "100%"
//     },
// }));

function RootRouter(props) {
    // const classes = useStyles();
    const [Router, ContentRoutes] = useRouter();

    return (
        <Router>
            {ContentRoutes}
        </Router>
    );
}

RootRouter.propTypes = {
    styles: objectRequired
};

export default RootRouter;
