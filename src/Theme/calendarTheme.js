import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

export const calendarTheme = theme => createMuiTheme({
    ...theme,
    // props: {
    //     // Name of the component ⚛️
    //     MuiButtonBase: {
    //         // The properties to apply
    //         disableRipple: true, // No more ripple, on the whole application 💣!
    //     },
    // },
    overrides:{
        MuiIconButton:{
            root:{
                padding: "0",
                '&:hover':{
                    backgroundColor:colors.primary,
                    "@media (hover: none)": {
                        backgroundColor: colors.surface,
                        "&:active": {
                            backgroundColor: colors.primary
                        }
                    }
                },
                "&:active": {
                    backgroundColor: colors.primary
                },
            },
        },
        MuiTypography:{
            root:{
                //fontSize: 30,
            },
            body1:{
                fontSize: 30,
                marginTop: "-15px",
            }
        },
        MuiPickersCalendarHeader: {
            switchHeader: {
                marginTop:"-5px",
            },
            daysHeader: {
                [theme.breakpoints.down('sm')]: {
                    marginLeft: "-26px",
                    marginTop: "65px",
                },
                [theme.breakpoints.up('md')]: {
                    marginLeft: "-33px",
                },
                [theme.breakpoints.up('lg')]: {
                    marginLeft: "-33px",
                },
                [theme.breakpoints.up('xl')]: {
                    marginLeft: "-33px",
                },
                
            },
            
        },
        
    },
    typography: {
        ...theme.typography,
        caption: {
            ...theme.typography.caption,
            [theme.breakpoints.down('sm')]: {
                fontSize: 21,
                padding: "19px",
            },
            [theme.breakpoints.up('md')]: {
                fontSize: 35,
                padding:"50px",
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: 35,
                padding: "50px",
            },
            [theme.breakpoints.up('xl')]: {
                fontSize: 35,
                padding:"50px",
            },
            
        }
    },
});