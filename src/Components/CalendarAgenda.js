// import DateFnsUtils from "@date-io/date-fns";
// import { IconButton, MuiThemeProvider, withStyles} from "@material-ui/core";
// import Badge from '@material-ui/core/Badge';
// import clsx from "clsx";
// import format from "date-fns/format";
// import isSameDay from "date-fns/isSameDay";
// import parse from "date-fns/parse";
// import React, { useCallback, useEffect } from "react";
// import useComponent from "../Hooks/useComponent";
// import { calendarTheme } from './../Theme/calendarTheme';
// import {
//     BasePicker, 
//     Calendar, 
//     MuiPickersUtilsProvider
// } from '@material-ui/pickers';





// const CalendarAgenda = React.memo(function CalendarAgenda (props) {
//     const { classes } = props;
//     const [state, dispatch] = useComponent(props.id)

    
//     const handleDateChange = useCallback(
//         (date) => {
//             dispatch({
//                 type: 'UPDATE',
//                 property: 'selectedDate',
//                 payload: { id: props.id, selectedDate:date }
//             });
//         },[dispatch,props.id]
//     )
    
//     useEffect(() => {
//         handleDateChange(new Date());
//     }, [handleDateChange])

//     const {selectedDate} = state;
    

//     const parseDate = (date) => {
//         return parse(date,'yyyy/MM/dd', new Date());
//     };
//     const datesMap = new Map();
//     datesMap.set(parseDate('2019/05/30').getTime(), 2);
//     datesMap.set(parseDate('2019/05/05').getTime(), 5);

//     const renderDays = (date, selectedDate, dayInCurrentMonth) => {
        
//         let dateClone = new Date(date);
//         let selectedDateClone = new Date(selectedDate);
        
//         dateClone.setHours(0,0,0,0);
//         const badgeValue = datesMap.get(dateClone.getTime());

//         const badge = (badgeValue) ? badgeValue:0;

//         const wrapperClassName = clsx({
//             [classes.highlightSelected]: isSameDay(dateClone, selectedDateClone),
//         });

//         const dayClassName = clsx(classes.day, {
//             [classes.nonCurrentMonthDay]: !dayInCurrentMonth,
//         });

//         return (
//             <div className={wrapperClassName}>
//                 <IconButton className={dayClassName}>
//                     <Badge badgeContent={badge} color="secondary" classes={{ badge: classes.badge }}>
//                         <span> {format(dateClone, "d")} </span>
//                     </Badge>
//                 </IconButton>
//             </div>
//         );
//     };

//     return (
//         <MuiThemeProvider theme={(theme) => calendarTheme(theme) }>
//             <MuiPickersUtilsProvider utils={DateFnsUtils} >
//                 <BasePicker value={selectedDate} onChange={handleDateChange} >
//                     {({
//                         date,
//                     }) => (
//                         <div>
//                             <div className="picker" >
//                                 <Calendar date={date}
//                                     onChange={handleDateChange}
//                                     renderDay={renderDays}
//                                         classes={{ transitionContainer: classes.tc, week: classes.week }}
//                                 />
//                             </div>
//                         </div>
//                     )}
//                 </BasePicker>
//             </MuiPickersUtilsProvider>
//         </MuiThemeProvider>
//     );

// });

// const styles = theme => ({
//     tc:{
//         //fontSize:30
//     },
//     week:{
//         //marginLeft:"35px"
//     },
//     dayWrapper: {
//         position: "relative",
//     },
//     day: {
//         [theme.breakpoints.down('sm')]: {
//             width: 35,
//             height: 35,
//             margin: "8px 3.5px 8px",
//             fontSize: "25"
//         },
//         [theme.breakpoints.up('md')]: {
//             width: 76,
//             height: 76,
//             margin: "0 4px",
//             fontSize: "50"
//         },
//         [theme.breakpoints.up('lg')]: {
//             width: 96,
//             height: 96,
//             margin: "0 5px",
//             fontSize: "70"
//         },
//         [theme.breakpoints.up('xl')]: {
//             width: 116,
//             height: 116,
//             margin: "0 6px",
//             fontSize: "80"
//         },
//         color: "inherit",
//     },
//     nonCurrentMonthDay: {
//         color: theme.palette.text.disabled,
//     },
//     highlightSelected: {
//         background: theme.palette.primary.main,
//         color: theme.palette.common.white,

//         display: "table",
//         whiteSpace: "nowrap",
//         verticalAlign: "baseline",
//         borderRadius: "50%",
        
//         //zIndex:-1,
//         //margin: "-8px 0px -8px",
        
//     },
//     badge: {
//         bottom: '100%',
//         right: -9,
//     },
// });

// export default withStyles(styles)(CalendarAgenda);
