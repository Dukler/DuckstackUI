import React from "react";
import { useStyles } from './styles'
import Calendar from '../../Calendar/index'
import { objectRequired } from "../../../Utils/customProptypes";

function WeekPicker() {
    const classes = useStyles();

    return (
        <Calendar
            renderDay={({ date, selectedDate, isInCurrentMonth, dayComponent }) => {
                // return <div>dick</div>
            }}
            showHeader={false}
            picker="week"
            calendarClass={classes.calendar}
        />
    );
}

WeekPicker.propTypes = {
    styles: objectRequired
};


export default WeekPicker;