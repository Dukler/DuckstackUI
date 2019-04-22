import { MuiThemeProvider } from "@material-ui/core";
import React, { useCallback, useEffect } from "react";
import { useMappedState, useDispatch } from "redux-react-hook";
import DynamicList from "../Components/DynamicList";
import { constants } from '../Constants';
import { dsTheme } from "../Utils/dsTheme";

const UI = React.memo(function UI() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "INIT_DATA_REQUESTED", payload: { url: constants.api + constants.ui.home } });
    }, [])

    const mapState = useCallback(
        state => ({
            theme: state["theme"],
            isLoading: state["root"]["isLoading"]
        })
    );
    const { theme, isLoading } = useMappedState(mapState);

    return (
        <div className='UI'>
            {(isLoading) ? null :
                <MuiThemeProvider theme={dsTheme(theme)}>
                    <DynamicList
                        className="components"
                        wrapper="root"/>
                </MuiThemeProvider>
            }
        </div>
    )
})

export default UI