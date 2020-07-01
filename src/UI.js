import React, {
    useCallback,
    useEffect,
    useRef,
    useContext,
    useState,
    Suspense,
} from "react";
import {useDispatch, useMappedState, StoreContext} from "redux-react-hook";
import DynamicComponents from "./BeLazy/DynamicComponents";
import {constants} from "./Utils/Constants";
import {ThemeProvider} from "@material-ui/styles";
import {dsTheme} from "./Theme/dsTheme";

function UI() {
    const dispatch = useDispatch();
    const init = useRef(false);
    const [shells, setShells] = useState([]);
    const [appPath, setAppPath] = useState("");

    const mapState = useCallback(
        (state) => ({
            isLoading: state["root"]["isLoading"],
            componentsPool: state["root"]["componentsPool"],
            theme: state["theme"],
            containers: state["containers"]["byIds"],
        }),
        []
    );
    const {isLoading, theme, componentsPool, containers} = useMappedState(
        mapState
    );
    const store = useContext(StoreContext);

    useEffect(() => {
        if (!init.current) {
            dispatch({
                type: "INIT_DATA_REQUESTED",
                payload: {
                    url: constants.api + constants.ui.home,
                },
            });
            init.current = true;
        }
        if (!isLoading) {
            let i = 0;
            let arr = [];
            let testList = [];
            Object.keys(componentsPool).forEach((key) => {
                i++;
                arr[i] = componentsPool[key];
                componentsPool[key].preload();
            });
            Object.keys(containers).forEach((key) => {
                if (
                    containers[key].extProperties &&
                    containers[key].extProperties.Shell
                ) {
                    testList.push(key);
                }
            });
            setShells(testList);
            setAppPath(
                window.location.pathname.substring(
                    window.location.pathname.lastIndexOf("/") + 1
                )
            );
            console.log(store.getState());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, isLoading, store, componentsPool]);

    return (
        <Suspense fallback={null}>
            <div className="UI" style={{height: "100vh"}}>
                {isLoading ? null : (
                    <ThemeProvider theme={dsTheme(theme)}>
                        {
                            <DynamicComponents
                                element="root"
                                container={{
                                    id: shells.includes(appPath)
                                        ? appPath
                                        : "root",
                                }}
                            />
                        }
                    </ThemeProvider>
                )}
            </div>
        </Suspense>
    );
}

export default UI;
