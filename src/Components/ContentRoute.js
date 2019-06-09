import React from "react";
import { Route } from "react-router-dom";
import DynamicComponents from "./../BeLazy/DynamicComponents";
import { withRouter } from "react-router-dom";

const ContentRoute = React.memo(function ContentRoute(props) {

	return (
		<Route
			id={props.id}
			exact
			path={props.path}
			render={() => (
				<DynamicComponents
					element="components"
					components={props.components}
				/>
			)}
		/>
	);
});

export default withRouter(ContentRoute);
