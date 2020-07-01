import {select, put, call} from "redux-saga/effects";
import {isUndefined} from "./../../Utils/index";
import {getStandalone} from "./../selectors/index";

export function* deleteStandalone(action) {
    try {
        const standalone = yield select((state) =>
            getStandalone({state, id: action.payload.id})
        );
        yield call(checkComponent, standalone);
        yield put({
            type: "DELETE_STANDALONE_SUCCEEDED",
            payload: action.payload,
        });
        yield put({type: "SUBTRACT_COMPONENT", payload: action.payload});
    } catch (error) {
        console.log(error.message);
    }
}

function checkComponent(standalone) {
    if (isUndefined(standalone, true)) {
        throw new UserException("component already exists.");
    }
}

function UserException(message) {
    this.message = message;
    this.name = "UserException";
}
