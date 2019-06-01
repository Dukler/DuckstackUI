import LazyComponent from './../../../BeLazy/LazyComponent';
import LinkItem from '../../../Components/ListItems/LinkItem';

const initialState = [];

export default function reducer(state = initialState, action){
    switch (action.type) {
        case "INIT_DATA_SUCCEEDED":
            const linkList = {...action.payload.linkList};
            linkList.ids.forEach((cmp) => {
                linkList.byIds[cmp].AsyncImport = LinkItem;
                linkList.byIds[cmp].Icon = LazyComponent({
                    className: linkList.byIds[cmp].icon,
                    type:"mIcon"
                });;
            });
            return linkList;
        default:
            return state;
    }
}