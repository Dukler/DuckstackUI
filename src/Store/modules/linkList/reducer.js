import ListedLink from './../../../Components/ListedLink';
import AsyncComponent from './../../../BeLazy/AsyncComponent';

const initialState = [];

export default function reducer(state = initialState, action){
    switch (action.type) {
        case "INIT_DATA_SUCCEEDED":
            const linkList = {...action.payload.linkList};
            linkList.ids.forEach((cmp) => {
                linkList.byIds[cmp].AsyncImport = ListedLink;
                linkList.byIds[cmp].Icon = AsyncComponent({
                    className: linkList.byIds[cmp].icon,
                    type:"mIcon"
                });;
            });
            return linkList;
        default:
            return state;
    }
}