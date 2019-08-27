import React, { useCallback, useEffect, useRef, useContext, Suspense } from "react";
import { useDispatch, useMappedState, StoreContext } from "redux-react-hook";
import DynamicComponents from "./BeLazy/DynamicComponents";
import { constants } from "./Utils/Constants";
import { ThemeProvider } from "@material-ui/styles";
import { dsTheme } from "./Theme/dsTheme";

function UI() {
	const dispatch = useDispatch();
	const init = useRef(false);

	const mapState = useCallback(
		state => ({
			isLoading: state["root"]["isLoading"],
			// componentsPool: state["root"]["componentsPool"],
			theme: state["theme"]
		}),
		[]
	);
	const { isLoading, theme } = useMappedState(mapState);
	const store = useContext(StoreContext);

	useEffect(() => {
		if (!init.current) {
			dispatch({
				type: "INIT_DATA_REQUESTED",
				payload: { url: constants.api + constants.ui.home }
			});
			init.current = true;
		}
		if (!isLoading) {
			// Object.keys(componentsPool).forEach(key => {
			// 	componentsPool[key].preload();
			// });
			console.log(store.getState())
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading]);

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div className="UI" style={{ height: "100vh" }}>
				{isLoading ? null : (
					<ThemeProvider theme={dsTheme(theme)}>
						<DynamicComponents
							element="components"
							wrapper={{ id: "root" }}
						/>
					</ThemeProvider>
				)}
			</div>
		</Suspense>
	);
};

export default UI;
