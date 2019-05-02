import { createMuiTheme } from '@material-ui/core/styles';


export function dsTheme (props) {
    const darkOrLight = (dark, light) => {
        return props.paletteType === 'dark' ? dark : light;
    }
    return createMuiTheme({
        typography:{
            useNextVariants:true,
        },
        palette: {
            type: props.paletteType,
            text:{
                disabled: darkOrLight('#676767', '#D3D3D3'),
            },
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
                contrastText: '#ffcc00',
                // dark: will be calculated from palette.secondary.main,
                // contrastText: will be calculated to contrast with palette.primary.main
            },
        },
    })
};