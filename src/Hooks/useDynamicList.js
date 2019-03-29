import { useEffect, useReducer} from "react";
import {requestJson} from "../Actions/network";
import AsyncComponent from "../BeLazy/AsyncComponent";
import listReducer from "../Reducers/listReducer";


function useDynamicList(props){
    //const [list,setList] = useState([]);
    const [list, dispatch] = useReducer(listReducer,[]);

    useEffect(()=>{
        init(props);
    },[]);
    const init = (props) =>{
        const config = {
            method: "GET"
        };
        if (props.data){
            initList(null);
        }else{
            requestJson({
                config,
                url:props.url,
                callback:initList
            });
        }
    };
    const initList = (json) =>{
        let data= null;
        if (json){
            data = json;
        }else{
            data = props.data;
        }
        // setList(jsonToList(data));
        dispatch({type:'setList',payload:jsonToList(data)})
    };

    const jsonToList = (data) =>{
        let arr = [];
        if(data[props.className]){
            for (let index = 0; index < data[props.className].length; index++) {
                //arr.push(parseItem(data[props.className][index]))
                arr = [...arr, parseItem(data[props.className][index])]
                //parseItem(data[props.className][index])
            }
            return arr;
        }
    };
    const parseItem = (props) =>{
        const exists = list.findIndex(cmp => cmp.attributes.id === props.id);
        if (exists === -1){
            let item = {attributes:{}};
            item.attributes = props;
            item.import = AsyncComponent({
                componentName:props.componentName
            });
            return item;
            //setList(prevState=> ([...prevState, item]))
            //setList(update(list,{$push:[item]}));
        }
    };

    return [list, dispatch]
}

export default useDynamicList