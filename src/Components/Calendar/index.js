import { isSameDay, startOfMonth, startOfWeek, subMonths } from 'date-fns';
import { addDays, addMonths, endOfMonth, endOfWeek, isSameMonth } from 'date-fns/esm';
import format from "date-fns/format";
import React, { useState } from 'react';
import './Calendar.css';
import RightIcon from '@material-ui/icons/ChevronRightRounded';
import LeftIcon from '@material-ui/icons/ChevronLeftRounded';
import classNames from 'classnames';

const check = (object) => {
    return object ? object : null;
}

function Calendar(props) {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const { calendarClass, dayClass, renderDay } = props;



    const dayRender = ({ date, monthStart, dateFormat }) => {
        const formattedDate = format(date, dateFormat);
        const isInCurrentMonth = isSameMonth(date, monthStart);
        const dayComponent = (
            <>
                <span className="number">{formattedDate}</span>
                <span className="bg">{formattedDate}</span>
            </>
        )
        const customDay = renderDay({ date, selectedDate, isInCurrentMonth, dayComponent });
        return (
            <div
                className={classNames(`col cell ${!isInCurrentMonth
                    ? "disabled"
                    : isSameDay(date, selectedDate) ? "selected" : ""}`, check(dayClass))}
                key={date}
                onClick={() => onDateClick(new Date(date))}
            >
                {customDay ? customDay : dayComponent}
            </div>
        )
    };



    const renderHeader = () => {
        const dateFormat = "MMMM-yyyy";

        return (
            <div className="header row flex-middle">
                <div className="col col-start">
                    <LeftIcon className="icon"
                        aria-label="Previous month"
                        onClick={prevMonth} />
                </div>
                <div className="col col-center">
                    <span>
                        {format(currentMonth, dateFormat)}
                    </span>
                </div>
                <div className="col col-end">
                    <RightIcon className="icon"
                        aria-label="Next month"
                        onClick={nextMonth} />
                </div>
            </div>
        );
    };

    const renderDays = () => {
        const dateFormat = 'E';
        const days = [];

        let startDate = startOfWeek(currentMonth);

        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col col-center" key={i}>
                    {format(addDays(startDate, i), dateFormat)}
                </div>
            );
        }



        return <div className="days row">{days}</div>;
    };

    const renderCells = () => {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const dateFormat = "d";
        const rows = [];

        let days = [];
        let date = startDate;
        // let formattedDate = "";

        while (date <= endDate) {
            for (let i = 0; i < 7; i++) {
                days.push(
                    dayRender({ date, monthStart, dateFormat })
                );
                date = addDays(date, 1);
            }
            rows.push(
                <div className="row" key={date}>
                    {days}
                </div>
            );
            days = [];
        }
        return <div className="body">{rows}</div>;
    };

    const onDateClick = (day) => {
        setSelectedDate(day);
    };

    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1))
    };

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1))
    };


    return (
        <div className={classNames("calendar", check(calendarClass))}>
            {renderHeader()}
            {renderDays()}
            {renderCells()}
        </div>
    );

};

export default Calendar