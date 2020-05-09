import React from "react";
import Calendar from "../../Calendar/index";
import {objectRequired} from "../../../../Utils/customProptypes";
import {makeStyles} from "@material-ui/core/styles";
import useStandalone from "./../../../../Hooks/State/useStandalone";
import {isSameDay} from "date-fns";
import getDay from "date-fns/getDay";

const useStyles = makeStyles((theme) => ({
    component: ({fontSize, color, ...styles}) => ({
        ...styles,
    }),
}));

function WeekPicker(props) {
    const [state, dispatch] = useStandalone(props.id);
    const classes = useStyles(props.styles.component);

    const handleDateClick = (selected) => {
        if (!isSameDay(selected, state.value[0])) {
            dispatch({
                type: "SELECTED_PICKER",
                payload: {id: props.id, selected: [getDay(selected)]},
            });
        }
    };

    return (
        <Calendar
            renderDay={({
                date,
                selectedDate,
                isInCurrentMonth,
                dayComponent,
            }) => {
                // return <div>dick</div>
            }}
            calendarDispatch={({dispatch}) => {
                // calendarDispatch = dispatch;
            }}
            showHeader={false}
            picker="week"
            calendarClass={classes.calendar}
            // onSelectedChange={onSlectedChange}
            onDateClick={handleDateClick}
        />
    );
}

WeekPicker.propTypes = {
    styles: objectRequired,
};

export default WeekPicker;
