import React from "react";
import { useStyles } from './styles'
import Calendar from '../../Calendar/index'
import { objectRequired } from "../../../Utils/customProptypes";



function CalendarPicker(props) {
    const classes = useStyles();



    return (
        <Calendar
            renderDay={({ date, selectedDate, isInCurrentMonth, dayComponent }) => {
                // return <div>dick</div>
            }}
            calendarClass={classes.calendar}
        />
    );
}

CalendarPicker.propTypes = {
    styles: objectRequired
};

export default CalendarPicker;
