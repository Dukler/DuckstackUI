import { MuiThemeProvider } from "@material-ui/core";
import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import DynamicList from './BeLazy/DynamicList';
import { constants } from './Utils/Constants';
import { dsTheme } from './Theme/dsTheme';



const UI = React.memo(function UI() {
    const dispatch = useDispatch();
    const init = useRef(false);
   
    const mapState = useCallback(
        state => ({
            theme: state["theme"],
            isLoading: state["root"]["isLoading"],
            componentsPool: state["root"]["componentsPool"]
        }),[]
    );
    const { theme, isLoading, componentsPool} = useMappedState(mapState);
    
    console.log();

    useEffect(() => {
        if(!init.current){
            dispatch({ type: "INIT_DATA_REQUESTED", payload: { url: constants.api + constants.ui.home } });
            init.current=true;
        }
        if(!isLoading){
            Object.keys(componentsPool).forEach(key => {
                componentsPool[key].preload();
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading])

    return (
        <div className='UI'>
            {isLoading ? null :
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