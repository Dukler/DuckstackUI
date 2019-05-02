import React, {useCallback, useEffect} from "react";
import clsx from "clsx";
import format from "date-fns/format";
import isSameDay from "date-fns/isSameDay";
import parse from "date-fns/parse"
import {BasePicker, Calendar, MuiPickersUtilsProvider} from "material-ui-pickers";
import { IconButton, withStyles } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import Badge from '@material-ui/core/Badge';
import useComponent from "../Hooks/useComponent";


const CalendarAgenda = React.memo(function CalendarAgenda (props) {

    const [state, dispatch] = useComponent(props.id)

    const handleDateChange = useCallback(
        (date) => {
            dispatch({
                type: 'UPDATE',
                property: 'selectedDate',
                payload: { id: props.id, selectedDate:date }
            });
        },[dispatch,props.id]
    )
    
    useEffect(() => {
        handleDateChange(new Date());
    }, [handleDateChange])

    const {selectedDate} = state;

    const parseDate = (date) => {
        return parse(date,'yyyy/MM/dd', new Date());
    };
    const datesMap = new Map();
    datesMap.set(parseDate('2019/03/30').getTime(), 2);
    datesMap.set(parseDate('2019/03/05').getTime(), 5);

    const renderDays = (date, selectedDate, dayInCurrentMonth) => {
        const { classes } = props;
        let dateClone = new Date(date);
        let selectedDateClone = new Date(selectedDate);
        
        dateClone.setHours(0,0,0,0);
        const badgeValue = datesMap.get(dateClone.getTime());

        const badge = (badgeValue) ? badgeValue:0;

        const wrapperClassName = clsx({
            [classes.highlightSelected]: isSameDay(dateClone, selectedDateClone),
        });

        const dayClassName = clsx(classes.day, {
            [classes.nonCurrentMonthDay]: !dayInCurrentMonth,
        });

        return (
            <div className={wrapperClassName}>
                <IconButton className={dayClassName}>
                    <Badge badgeContent={badge} color="secondary" classes={{ badge: classes.badge }}>
                        <span> {format(dateClone, "d")} </span>
                    </Badge>
                </IconButton>
            </div>
        );
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <BasePicker value={selectedDate} onChange={handleDateChange}>
                {({
                      date,
                  }) => (
                    <div>
                        <div className="picker">
                            <Calendar date={date}
                                      onChange={handleDateChange}
                                      renderDay={renderDays}
                            />
                        </div>
                    </div>
                )}
            </BasePicker>
        </MuiPickersUtilsProvider>
    );

});

const styles = theme => ({
    dayWrapper: {
        position: "relative",
    },
    day: {
        width: 36,
        height: 36,
        fontSize: theme.typography.caption.fontSize,
        margin: "0 2px",
        color: "inherit",
    },
    customDayHighlight: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: "2px",
        right: "2px",
        border: `1px solid ${theme.palette.secondary.main}`,
        borderRadius: "50%",
    },
    nonCurrentMonthDay: {
        color: theme.palette.text.disabled,
        //color:"#676767"
    },
    highlight: {
        background: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    highlightSelected: {
        background: theme.palette.primary.main,
        color: theme.palette.common.white,
        left: "2px",
        right: "2px",
        borderRadius:"50%",
    },
    badge: {
        bottom: '100%',
        right: -9,
        // The border color match the background color.
        // border: `2px solid ${
        //     theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
        //     }`,
    },
});

export default withStyles(styles)(CalendarAgenda);
