import { useState, useEffect } from "react";
import AsyncComponent from "../BeLazy/AsyncComponent";
import {requestJson} from "../Actions/network";

function useComponentList(props){
    const [components, setComponents] = useState([]);

    useEffect(()=>{
        const config = {
            method: "GET"
        };
        if (props.json){
            setList(null);
        }else{
            requestJson({
                config,
                url:props.url,
                callback:setList
            });
        }
    },[]);

    const setList = (json) => {
        let data= null;
        if (json){
            data = json;
        }else{
            data = props.json;
        }
        if(data[this.props.className]){
            for (let index = 0; index < data[this.props.className].length; index++) {
                addItem(data[this.props.className][index])
            }
        }
    };

    const addItem = (props) => {
        const exists = components.findIndex(cmp => cmp.attributes.id === props.id);
        if (exists === -1){
            let item = {attributes:{}};
            item.attributes = props;
            item.import = AsyncComponent({
                componentName:props.componentName
            });
            setComponents(prevState => ({
                list: [...prevState.list, item]
            }));
        }

    };


    return components;
}

export default useComponentList;