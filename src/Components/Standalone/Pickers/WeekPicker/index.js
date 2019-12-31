import React, { useEffect } from "react";
import { useStyles } from './styles'
import Calendar from '../../Calendar/index'
import { objectRequired } from "../../../../Utils/customProptypes";

function WeekPicker() {
    const classes = useStyles();
    let calendarDispatch;

    useEffect(() => {
        // calendarDispatch({ type: "ADD_WEEK" });
    }, [calendarDispatch])



    return (
        <Calendar
            renderDay={({ date, selectedDate, isInCurrentMonth, dayComponent }) => {
                // return <div>dick</div>
            }}
            calendarDispatch={({ dispatch }) => {
                calendarDispatch = dispatch
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