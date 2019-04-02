import { useEffect, useReducer } from "react";
import AsyncComponent from "../BeLazy/AsyncComponent";
import listReducer from "../Reducers/listReducer";


function useDynamicList(props){
    const [list, dispatch] = useReducer(listReducer,[]);

    useEffect(()=>{
        init(props);
    },[]);
    const init = (props) =>{
        dispatch({type:'setList',payload:jsonToList(props.data)})
    };

    const jsonToList = (data) =>{
        let arr = [];
        if(data[props.className]){
            for (let index = 0; index < data[props.className].length; index++) {
                arr = [...arr, parseItem(data[props.className][index])]
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
        }
    };

    return [list, dispatch]
}

export default useDynamicList