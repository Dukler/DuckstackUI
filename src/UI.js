import React, {
    useCallback,
    useEffect,
    useRef,
    useContext,
    useState,
} from "react";
import {useDispatch, useMappedState, StoreContext} from "redux-react-hook";
import DynamicComponents from "./BeLazy/DynamicComponents";
import {constants} from "./Utils/Constants";
import {ThemeProvider} from "@material-ui/styles";
import {dsTheme} from "./Theme/dsTheme";

export const Portal = React.createContext();

function UI() {
    const dispatch = useDispatch();
    const init = useRef(false);
    const portal = useRef();
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
                // componentsPool[key].preload();
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
            // dispatch({
            //     type: "NEW_STANDALONE",
            //     payload: {
            //         id: "testDialog",
            //         lazyID: "Typography",
            //         treePosition: {type: "container", id: "root"},
            //         value: "Location",
            //         styles: {
            //             name: "Text",
            //             component: {
            //                 fontSize: 15,
            //                 color: "primary",
            //                 zIndex: 100000,
            //             },
            //         },
            //     },
            // });
            console.log(store.getState());
        }
        //[componentsPool, dispatch, isLoading, containers, store]
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, isLoading, store, componentsPool]);

    return (
        <Portal.Provider value={portal}>
            <div className="UI" style={{height: "100vh"}}>
                {isLoading ? null : (
                    <ThemeProvider theme={dsTheme(theme)}>
                        {
                            <DynamicComponents
                                element="standalones"
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
        </Portal.Provider>
    );
}

export default UI;
