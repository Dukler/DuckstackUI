import LinkItem from '../../../Components/Standalone/Items/LinkItem';

const initialState = [];

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "INIT_DATA_SUCCEEDED":
            const linkList = { ...action.payload.linkList };
            try {
                if (linkList.ids) {
                    linkList.ids.forEach((cmp) => {
                        linkList.byIds[cmp].AsyncImport = LinkItem;
                    });
                }
                return linkList;
            } catch (error) {
                console.log("error linklistinit");
            }
            return linkList;
        default:
            return state;
    }
}