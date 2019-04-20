import React, { useState } from "react";
import { Paper } from "@material-ui/core/";

import DateFnsUtils from "@date-io/date-fns";
import { BasePicker, MuiPickersUtilsProvider, Calendar } from "material-ui-pickers";

function CustomCalendar() {
    const [selectedDate, handleDateChange] = useState(new Date());

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <BasePicker value={selectedDate} onChange={handleDateChange}>
                {({
                      date,
                      handleAccept,
                      handleChange,
                  }) => (
                    <div>
                        <div className="picker">
                            <Paper style={{ overflow: "hidden" }}>
                                <Calendar date={date} onChange={handleChange} />
                            </Paper>
                        </div>
                    </div>
                )}
            </BasePicker>
        </MuiPickersUtilsProvider>
    );
}

export default CustomCalendar;
