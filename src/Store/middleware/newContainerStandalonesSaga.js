import {select, put, call} from "redux-saga/effects";
import {getContainer, getComponentsPool} from "./../selectors/index";
import {isUndefined} from "./../../Utils/index";

export function* newContainerStandalones(action) {
    try {
        const container = yield select((state) =>
            getContainer({state, id: action.payload.id})
        );
        yield call(checkContainer, container);
        const pool = yield select(getComponentsPool);
        yield console.log("fuckpussy");
        yield put({
            type: "NEW_CONTAINER_SUCCEEDED",
            payload: {...action.payload, pool},
        });
        yield put({
            type: "ADD_COMPONENT",
            payload: action.payload,
        });
    } catch (error) {
        // console.log(error);
        yield put({
            type: "NEW_STANDALONE",
            payload: {
                id: "testSnackbar",
                lazyID: "Snackbar",
                systemInfo: {
                    treePosition: {
                        storeReducer: "containers",
                        id: "root",
                    },
                    selfDestruct: "true",
                },
                // value: "
                styles: {
                    name: "Text",
                    component: {},
                },
            },
        });
    }
}

function checkContainer(container) {
    if (isUndefined(container, false)) {
        throw new UserException("component already exist.");
    }
}
function UserException(message) {
    this.message = message;
    this.name = "UserException";
}
