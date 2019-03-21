import { createMuiTheme } from '@material-ui/core/styles';

export const dsTheme = props => createMuiTheme({
    typography:{
      useNextVariants:true,
    },
    palette: {
        type: (props.darkTheme)?'dark':'light',
        primary: {
            // light: will be calculated from palette.primary.main, ff4400
            light: '#0066ff',
            main: '#0044ff',
            dark: '#303030',
            // dark: will be calculated from palette.primary.main,
            //contrastText: '#ffcc00',

        },
        secondary: {
            main: '#ff4400',
            // dark: will be calculated from palette.secondary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
    },
});