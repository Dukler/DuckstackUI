import update from "immutability-helper";
import AsyncComponent from "../BeLazy/AsyncComponent";

function listReducer (list, action){
    switch (action.type) {
        case 'eventItemValue':
            const event = action.event;
            event.preventDefault();
            const target = event.target;
            let index = list.findIndex(item => item.attributes.id === target.id);
            return update(list, {
                [index]: {attributes: {value: {$set: target.value}}}
            });
        case 'addItem':
            const attributes = action.payload;
            const exists = list.findIndex(cmp => cmp.attributes.id === attributes.id);
            if (exists === -1){
                let item = {attributes:{}};
                item.attributes = attributes;
                item.import = AsyncComponent({
                    componentName:attributes.componentName
                });
                return [...list,item];
            }
            break;
        case 'setList':
            return action.payload;
        case 'ye':
            break;
        default:
            throw new Error();
    }
}

export default listReducer
