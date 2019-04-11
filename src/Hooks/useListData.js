import {useEffect, useState} from "react";
import {headerUIApi, requestJson} from "../Actions/network";
import {constants} from "../Constants";
import { useDispatch } from 'redux-react-hook';

function useListData (url){
    const [data,setState] = useState([]);
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
    },[]);

    const init = (url) =>{
        requestJson({
            config,
            url:url,
            callback:setJson
        });
    };
    const setJson = (json) =>{
        setState(json);
        //initstore
        const {components,wrappers,contentRoutes,linkList} = json;
        dispatch({ type: "setComponents", payload: components})
        dispatch({ type: "setContent", payload: contentRoutes })
        dispatch({ type: "setLinkList", payload: linkList })
        dispatch({ type: "setWrappers", payload: wrappers })
        setLoading(false);
    };

    const reset = (url) =>{
        setLoading(true);
        init(url);
        setLoading(false);
    };

    return [data,loading,reset];
}

export default useListData