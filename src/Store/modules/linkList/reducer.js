import LinkItem from '../../../Components/Items/LinkItem';

const initialState = [];

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "INIT_DATA_SUCCEEDED":
            const linkList = { ...action.payload.linkList };
            linkList.ids.forEach((cmp) => {
                linkList.byIds[cmp].AsyncImport = LinkItem;
            });
            return linkList;
        default:
            return state;
    }
}