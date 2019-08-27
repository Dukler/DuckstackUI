import React from 'react';
import { compose } from 'redux';
import { useContext } from 'react';
import { StoreContext } from 'redux-react-hook';
import { getWrapper, getComponentsValues } from '../Store/selectors';
import { constants } from './../Utils/Constants';
import { submitJson } from '../Utils/api';
import { setLoginToken, getLoginToken } from '../Utils/auth';



function defaultDispatch({ dispatch, state, type, payload }) {
    switch (type) {
        case "SAVE_LOGIN_TOKEN":
            setLoginToken(payload.response);
            console.log(getLoginToken());
            break;
        case "SUBMIT_COMPONENTS_VALUES":
            const scvData = getComponentsValues({ state, ids: payload.ids });
            submitJson({ url: constants.login, body: scvData })
                .then(response => {
                    if (payload.callback) {
                        const cb = payload.callback;
                        const pl = cb.payload ? cb.payload : null;
                        dispatch({ type: cb.type, payload: { ...pl, response } })
                    }
                });
            console.log();
            break;
        case "SUBMIT_WRAPPER_VALUES":
            const swvWrapper = getWrapper({ state, id: payload.id });
            const swvData = getComponentsValues({ state, ids: swvWrapper.components });
            submitJson({ url: constants.login, body: swvData })
                .then(response => {
                    if (payload.callback) {
                        const cb = payload.callback;
                        const pl = cb.payload ? cb.payload : null;
                        dispatch({ type: cb.type, payload: { ...pl, response } })
                    }
                });
            console.log();
            break;
        case "test":
            console.log("test");
            break;
        default:
            break;
    }
}

function useActions() {
    const store = useContext(StoreContext);
    const actionDispatch = ({ dispatch = actionDispatch, state = store.getState(), type, payload }) => compose(
        defaultDispatch({ dispatch, state, type, payload })
    )

    const actionsContext = React.createContext(actionDispatch)

    return [actionDispatch, actionsContext]
}

export default useActions