import React, { useState } from "react";
import { usePickerState } from "@material-ui/pickers";
import { Badge, Paper } from "@material-ui/core";
import { Calendar } from '@material-ui/pickers'



function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function MUICalendarPicker() {
    const [selectedDays, setSelectedDays] = useState([1, 2, 15]);
    const [value, handleDateChange] = useState(new Date());

    const handleMonthChange = async () => {
        return new Promise(resolve => {
            setTimeout(() => {
                setSelectedDays([1, 2, 3].map(() => getRandomNumber(1, 28)));
                resolve();
            }, 1000);
        });
    };
    // const { pickerProps, wrapperProps, inputProps } = usePickerState(
    const { pickerProps } = usePickerState(
        { value, onChange: handleDateChange, onMonthChange: handleMonthChange },
        {
            getDefaultFormat: () => "MM/dd/yyyy",
        }
    );

    return (
        <Paper>
            <Calendar
                label="With server data"
                {...pickerProps}
                renderDay={(day, selectedDate, isInCurrentMonth, dayComponent) => {
                    //const date = makeJSDateObject(day); // skip this step, it is required to support date libs
                    const isSelected = isInCurrentMonth && selectedDays.includes(day.getDate());
                    // You can also use our internal <Day /> component
                    return <Badge badgeContent={isSelected ? "🌚" : undefined}>{dayComponent}</Badge>;
                }}
            />
        </Paper>
    );
}

export default MUICalendarPicker;
