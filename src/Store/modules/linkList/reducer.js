import ListedLink from './../../../Components/ListedLink';
import LazyComponent from './../../../BeLazy/LazyComponent';

const initialState = [];

export default function reducer(state = initialState, action){
    switch (action.type) {
        case "INIT_DATA_SUCCEEDED":
            const linkList = {...action.payload.linkList};
            linkList.ids.forEach((cmp) => {
                linkList.byIds[cmp].AsyncImport = ListedLink;
                linkList.byIds[cmp].Icon = LazyComponent({
                    className: linkList.byIds[cmp].icon,
                    type:"mIcon"
                });;
                //linkList.byIds[cmp].Icon = getIcon({ name: linkList.byIds[cmp].icon})
            });
            return linkList;
        default:
            return state;
    }
}