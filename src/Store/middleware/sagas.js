import { put, takeLatest, all, call } from 'redux-saga/effects'
import { requestUI } from '../../Utils/api';

export function* fetchData(action) {
    try {
        const data = yield call (requestUI,action.payload.url)
        yield put({ type: "INIT_DATA_SUCCEEDED", payload: {...data} })
        yield put({ type: "SHOW_LOADING_ACTION", payload: { isLoading: false } })
    } catch (error) {
        yield put({ type: "INIT_DATA_FAILED", error })
    }
}


export function* watchInitData(){
    yield takeLatest("INIT_DATA_REQUESTED", fetchData)
}

export default function* rootSaga() {
    yield all([
        watchInitData(),
    ])
}