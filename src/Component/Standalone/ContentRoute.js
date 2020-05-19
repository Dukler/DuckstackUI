import React from "react";
import {Route} from "react-router-dom";
import DynamicComponents from "../../BeLazy/DynamicComponents";
import {withRouter} from "react-router-dom";

function ContentRoute(props) {
    console.log();
    return (
        <Route
            id={props.id}
            exact
            path={props.path}
            render={() => (
                <DynamicComponents
                    element="standalones"
                    components={props.standalones}
                />
            )}
        />
    );
}

export default withRouter(ContentRoute);
