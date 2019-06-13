import DynamicComponents from "../BeLazy/DynamicComponents";
import React from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

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

	return [Router, LinkList, ContentRoutes];
}

export default useRouter;
