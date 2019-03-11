import React, {PureComponent} from "react";
import clsx from "clsx";
import format from "date-fns/format";
import isSameDay from "date-fns/isSameDay";
import startOfWeek from "date-fns/startOfWeek";
import endOfWeek from "date-fns/endOfWeek";
import isWithinInterval from "date-fns/isWithinInterval";
import parse from "date-fns/parse"
import {BasePicker, Calendar, MuiPickersUtilsProvider} from "material-ui-pickers";
import { IconButton, withStyles } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import Badge from '@material-ui/core/Badge';

class CalendarAgenda extends PureComponent {
    state = {
        selectedDate: new Date(),
    };

    parseDate = date => {
        return parse(date,'yyyy/MM/dd', new Date());
    };


    renderBadge = (date, selectedDate, dayInCurrentMonth) => {
        const { classes } = this.props;
        let dateClone = new Date(date);
        let selectedDateClone = new Date(selectedDate);
        //const fecha = parse('2019/03/30','yyyy/MM/dd', new Date());
        dateClone.setHours(0,0,0,0);
        let datesMap = new Map();
        datesMap.set(this.parseDate('2019/03/30').getTime(),2);
        datesMap.set(this.parseDate('2019/03/05').getTime(),5);
        const badgeValue = datesMap.get(dateClone.getTime());

        const badge = (badgeValue) ? badgeValue:0;

        const start = startOfWeek(selectedDateClone);
        const end = endOfWeek(selectedDateClone);

        const dayIsBetween = isWithinInterval(dateClone, { start, end });

        const wrapperClassName = clsx({
            [classes.highlightSelected]: isSameDay(dateClone, selectedDateClone),
        });

        const dayClassName = clsx(classes.day, {
            [classes.nonCurrentMonthDay]: !dayInCurrentMonth,
            [classes.highlightNonCurrentMonthDay]: !dayInCurrentMonth && dayIsBetween,
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
    handleDateChange = date => {
        this.setState({selectedDate:date},
            ()=>{
                this.afterDateChange();
            }
        );
    };
    afterDateChange(){
        console.log(this.state.selectedDate);
    }
    render() {
        //const { selectedDate } = this.state;
        //const [selectedDate, handleDateChange] = useState(new Date());
        return (
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <BasePicker value={this.state.selectedDate} onChange={this.handleDateChange}>
                        {({
                              date,
                              handleAccept,
                              handleDateChange,
                          }) => (
                            <div>
                                <div className="picker">
                                    <Calendar date={date}
                                              onChange={this.handleDateChange}
                                              renderDay={this.renderBadge}
                                    />
                                </div>
                            </div>
                        )}
                    </BasePicker>
                </MuiPickersUtilsProvider>
        );
    }
}

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
    },
    highlightNonCurrentMonthDay: {
        color: "#676767",
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
