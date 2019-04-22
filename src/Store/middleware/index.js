import {createLogger} from 'redux-logger'

export const logger = createLogger({
    predicate: (getState, action) => action.type !== "INIT_DATA_SUCCEEDED"
})

/**
 * Sends crash reports as state is updated and listeners are notified.
 */
// const crashReporter = store => next => action => {
//     try {
//         return next(action)
//     } catch (err) {
//         console.error('Caught an exception!', err)
//         Raven.captureException(err, {
//             extra: {
//                 action,
//                 state: store.getState()
//             }
//         })
//         throw err
//     }
// }
/**
 * Lets you dispatch a function instead of an action.
 * This function will receive `dispatch` and `getState` as arguments.
 *
 * Useful for early exits (conditions over `getState()`), as well
 * as for async control flow (it can `dispatch()` something else).
 *
 * `dispatch` will return the return value of the dispatched function.
 */
export const thunk = store => next => action =>
    typeof action === 'function'
        ? action(store.getState())
        : next(action)