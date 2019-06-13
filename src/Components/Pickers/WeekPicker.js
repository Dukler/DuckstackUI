import React, { useState } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
//import { DateFnsUtils } from '@date-io/date-fns';

function WeekPicker() {
    const [selectedDate, handleDateChange] = useState(new Date());

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
                views={["year"]}
                label="Year only"
                value={selectedDate}
                onChange={handleDateChange}
            />

            <DatePicker
                views={["year", "month"]}
                label="Year and Month"
                helperText="With min and max"
                minDate={new Date("2018-03-01")}
                maxDate={new Date("2018-06-01")}
                value={selectedDate}
                onChange={handleDateChange}
            />

            <DatePicker
                variant="inline"
                openTo="year"
                views={["days"]}
                label="Year and Month"
                helperText="Start from year selection"
                value={selectedDate}
                onChange={handleDateChange}
            />
        </MuiPickersUtilsProvider>
    );
}

export default WeekPicker;