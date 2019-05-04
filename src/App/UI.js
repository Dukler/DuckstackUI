import { MuiThemeProvider } from "@material-ui/core";
import React, { useCallback, useEffect } from "react";
import { useMappedState, useDispatch } from "redux-react-hook";
import { constants } from '../Constants';
import { dsTheme } from "../Theme/dsTheme";
import DynamicList from './../BeLazy/DynamicList';

const UI = React.memo(function UI() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: "INIT_DATA_REQUESTED", payload: { url: constants.api + constants.ui.home } });
    }, [dispatch])

    const mapState = useCallback(
        state => ({
            theme: state["theme"],
            isLoading: state["root"]["isLoading"]
        }),[]
    );
    const { theme, isLoading } = useMappedState(mapState);

    return (
        <div className='UI'>
            {(isLoading) ? <div>"My render"</div> :
                <MuiThemeProvider theme={dsTheme(theme)}>
                    <DynamicList
                        element="components"
                        wrapper="root"/>
                </MuiThemeProvider>
            }
        </div>
    )
    
})

export default UI