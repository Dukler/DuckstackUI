import { combineReducers } from "redux";
import components from './components/reducer'
import root from './root/reducer'
import theme from './theme/reducer'
import contentRoutes from './contentRoutes/reducer'
import linkList from './linkList/reducer'
import wrappers from './wrappers/reducer'

export default combineReducers({
    components,
    root,
    theme,
    contentRoutes,
    linkList,
    wrappers
});