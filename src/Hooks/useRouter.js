import DynamicComponents from "../BeLazy/DynamicComponents";
import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";

function useRouter() {

	const LinkList = (
		<DynamicComponents element="linkList" wrapper={{ id: "root" }} />
	);

	const ContentRoutes = (
		<Switch>
			<DynamicComponents element="contentRoutes" />
		</Switch>
	);
	const Router = BrowserRouter;

	return [Router, ContentRoutes, LinkList];
}

export default useRouter;
