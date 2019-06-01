import DynamicComponents from "../BeLazy/DynamicComponents";
import React from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import SimpleList from './../Wrappers/SimpleList';

function useRouter() {

	const LinkList = (
		<SimpleList>
			<DynamicComponents element="linkList" wrapper={{ id: "root" }} />
		</SimpleList>
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
