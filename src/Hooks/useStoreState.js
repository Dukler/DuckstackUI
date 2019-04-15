import { useContext } from "react";
import { StoreContext } from 'redux-react-hook';

export default function getState (){
    const store = useContext(StoreContext);
    const state = store.getState();

    return [state,store];
}