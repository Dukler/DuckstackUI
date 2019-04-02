import React, {useReducer} from "react";
import {BrowserRouter } from "react-router-dom";
import {constants} from '../Constants';
import ResponsiveDrawer from "../Components/ResponsiveDrawer";
import useListData from "../Hooks/useListData";
import themeReducer from "../Reducers/themeReducer"
import {dsTheme} from "../Utils/dsTheme";
import {MuiThemeProvider} from "@material-ui/core";

export const DataContext = React.createContext(null);


export default function UI (){
    const [data, loading] = useListData(constants.ui.home);
    const [theme, themeDispatch] = useReducer(themeReducer,{darkTheme:true});

    return(
        <div className='UI'>
            {(loading) ? null :
                <DataContext.Provider value = {data}>
                    <BrowserRouter>
                        <MuiThemeProvider theme={dsTheme(theme)}>
                        <ResponsiveDrawer
                            themeDispatch={themeDispatch}
                            data={data}
                        />
                        </MuiThemeProvider>
                    </BrowserRouter>
                </DataContext.Provider>
            }
        </div>
    )
}