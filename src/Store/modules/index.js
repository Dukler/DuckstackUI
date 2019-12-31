import { combineReducers } from "redux";
import standalones from './standalones/reducer'
import root from './root/reducer'
import theme from './theme/reducer'
import contentRoutes from './contentRoutes/reducer'
import linkList from './linkList/reducer'
import containers from './containers/reducer'

export default combineReducers({
    standalones,
    root,
    theme,
    contentRoutes,
    linkList,
    containers
});