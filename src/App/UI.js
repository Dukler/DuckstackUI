import React from "react";
import {BrowserRouter } from "react-router-dom";
import {constants} from '../Constants';
import ResponsiveDrawer from "../Components/ResponsiveDrawer";
import DynamicList from "./DynamicList";
import useListData from "../Hooks/useListData";

export const DataContext = React.createContext(null);


export default function UI (){
    const [data, loading, reset] = useListData(constants.ui.login);
    let contentList = <DynamicList data= {data} className= "Content"/>;
    let linkList = <DynamicList data= {data} className= "LinkList"/>;


    return(
        <div className='UI'>
            {(loading) ? null :
                <DataContext.Provider value = {data}>
                    <BrowserRouter>
                        <ResponsiveDrawer
                            contentList={contentList}
                            linkList={linkList}
                        />
                    </BrowserRouter>
                </DataContext.Provider>
            }
        </div>
    )
}