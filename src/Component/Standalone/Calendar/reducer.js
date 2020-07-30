import update from "immutability-helper";

import {
    startOfMonth,
    startOfWeek,
    subMonths,
    differenceInWeeks,
} from "date-fns";
import {
    addMonths,
    endOfMonth,
    endOfWeek,
    addWeeks,
    subWeeks,
} from "date-fns/esm";

const updateAction = (payload, state) => {
    console.log();
    return update(state, {$merge: payload});
};

export function reducer(state, action) {
    const {payload} = action;
    console.log();
    switch (action.type) {
        case "ADD_MONTH":
            return updateAction(
                {currentMonth: addMonths(state.currentMonth, 1)},
                state
            );
        case "SUB_MONTH":
            return updateAction(
                {currentMonth: subMonths(state.currentMonth, 1)},
                state
            );
        case "ADD_WEEK":
            return updateAction(
                {
                    startDate: addWeeks(state.startDate, 1),
                    endDate: addWeeks(state.endDate, 1),
                },
                state
            );
        case "SUB_WEEK":
            return updateAction(
                {
                    startDate: subWeeks(state.startDate, 1),
                    endDate: subWeeks(state.endDate, 1),
                },
                state
            );
        case "COUNT_WEEKS":
            return updateAction(
                {
                    weekCount:
                        differenceInWeeks(state.endDate, state.startDate) + 1,
                },
                state
            );
        case "INIT_CALENDAR":
            const montStart = startOfMonth(state.currentMonth);
            const monthEnd = endOfMonth(montStart);
            const startDate = startOfWeek(montStart);
            const endDate = endOfWeek(monthEnd);
            return updateAction({startDate, endDate}, state);
        case "UPDATE_CALENDAR":
            return updateAction(payload, state);
        default:
            return state;
    }
}
