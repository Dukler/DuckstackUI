import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import { useStyles } from './styles'
import "react-datepicker/dist/react-datepicker.css";

function TestDatePicker() {
    const [selectedDate, handleDateChange] = useState(new Date());
    const classes = useStyles();
    return (
        <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
            calendarClassName={classes.calendar}

        // locale="en-US"
        // renderDayContents={renderDayContents}
        />
    );
}

export default TestDatePicker;