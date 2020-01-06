import React from 'react';
import { compose } from 'redux';
import { useContext } from 'react';
import { StoreContext } from 'redux-react-hook';
import { getContainer, getStandalonesValues } from '../Store/selectors';
import { constants } from './../Utils/Constants';
import { submitJson } from '../Utils/api';
import { setLoginToken, getLoginToken, removeLoginToken } from '../Utils/auth';



function defaultDispatch({ dispatch, state, type, payload }) {
    switch (type) {
        case "REFRESH":
            window.location.reload(false);
            break;
        case "DELETE_LOGIN_TOKEN":
            removeLoginToken();
            break;
        case "SAVE_LOGIN_TOKEN":
            setLoginToken(payload.response);
            console.log(getLoginToken());
            break;
        case "SUBMIT_COMPONENTS_VALUES":
            const scvData = getStandalonesValues({ state, ids: payload.ids });
            submitJson({ url: constants.login, body: scvData })
                .then(response => {
                    if (payload.callback) {
                        const cb = payload.callback;
                        const pl = cb.payload ? cb.payload : null;
                        dispatch({ type: cb.type, payload: { ...pl, response } })
                    }
                });
            break;
        case "SUBMIT_WRAPPER_VALUES":
            const swvContainer = getContainer({ state, id: payload.id });
            const swvData = getStandalonesValues({ state, ids: swvContainer.standalones });
            submitJson({ url: constants.login, body: swvData })
                .then(response => {
                    if (payload.callback) {
                        const cb = payload.callback;
                        const pl = cb.payload ? cb.payload : null;
                        dispatch({ type: cb.type, payload: { ...pl, response } })
                    }
                });
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