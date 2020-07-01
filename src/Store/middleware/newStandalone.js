import {select, put, call} from "redux-saga/effects";
import {isUndefined} from "./../../Utils/index";
import {getStandalone, getComponentsPool} from "./../selectors/index";

export function* newStandalone(action) {
    try {
        const pool = yield select(getComponentsPool);
        const standalone = yield select((state) =>
            getStandalone({state, id: action.payload.id})
        );
        if (standalone && standalone.systemInfo.newComponent) {
            return;
        }
        yield call(checkComponent, standalone);
        yield put({
            type: "NEW_STANDALONE_SUCCEEDED",
            payload: {...action.payload, pool},
        });
        yield put({type: "ADD_COMPONENT", payload: action.payload});
    } catch (error) {
        console.log(error.message);
    }
}

function checkComponent(standalone) {
    if (isUndefined(standalone, false)) {
        throw new UserException("component already exists.");
    }
}

function UserException(message) {
    this.message = message;
    this.name = "UserException";
}
