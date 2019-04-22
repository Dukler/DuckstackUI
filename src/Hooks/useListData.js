import {useEffect, useState} from "react";
import {headerUIApi, requestJson} from "../Actions/network";
import {constants} from "../Constants";
import { useDispatch } from 'redux-react-hook';

function useListData (url){
    const [loading,setLoading] = useState(true);
    const dispatch = useDispatch();
    let config = null;
    if(url === constants.ui.login){
        config = {
            method: "GET",
        };
    }else{
        config = {
            method: "GET",
            headers: headerUIApi({url}),
        };
    }
    useEffect(()=>{
        init(url);
    },[url]);

    const init = (url) =>{
        requestJson({
            config,
            url:url,
            callback:setJson
        });
    };
    const setJson = (json) => {
        //initstore
        const { components, wrappers, contentRoutes, linkList } = json;
        dispatch({ type: "INIT_COMPONENTS", payload: components });
        dispatch({ type: "INIT_CONTENT", payload: contentRoutes });
        dispatch({ type: "INIT_LINK_LIST", payload: linkList });
        dispatch({ type: "INIT_WRAPPERS", payload: wrappers });
        setLoading(false);
    };

    return [loading];
}

export default useListData