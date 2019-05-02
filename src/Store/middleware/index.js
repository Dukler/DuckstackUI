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
