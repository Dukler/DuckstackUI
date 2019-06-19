import update from "immutability-helper";

import { startOfMonth, startOfWeek, subMonths, differenceInWeeks } from 'date-fns';
import { addMonths, endOfMonth, endOfWeek } from 'date-fns/esm';

const updateAction = (payload, state) => {
    return update(state, { $merge: payload });
}

export function reducer(state, action) {
    const { payload } = action;
    switch (action.type) {
        case "ADD_MONTH":
            return updateAction({ currentMonth: addMonths(state.currentMonth, 1) }, state);
        case "SUB_MONTH":
            return updateAction({ currentMonth: subMonths(state.currentMonth, 1) }, state);
        case "COUNT_WEEKS":
            return updateAction({ weekCount: differenceInWeeks(state.endDate, state.startDate) + 1 }, state);
        case "INIT_CALENDAR":
            const montStart = startOfMonth(state.currentMonth);
            const monthEnd = endOfMonth(montStart);
            const startDate = startOfWeek(montStart);
            const endDate = endOfWeek(monthEnd);
            return updateAction({ startDate, endDate }, state);
        default:
            return updateAction(payload, state);
    }
}