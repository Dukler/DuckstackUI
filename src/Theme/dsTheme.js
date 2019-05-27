import { createMuiTheme } from '@material-ui/core/styles';


export function dsTheme (theme) {
    const darkOrLight = (dark, light) => {
        return theme.paletteType === 'dark' ? dark : light;
    }
    return createMuiTheme({
        overrides: {
            MuiButtonBase: {
                root: {
                    "@media(pointer: coarse)":{
                        "&& button: hover" :{
                            background: "none!important"
                            //textDecoration: "line-through"
                        }
                    }
                },
            },
        },
        typography:{
            useNextVariants:true,
            caption:{
                //fontSize:300,
            }
        },
        palette: {
            type: theme.paletteType,
            text:{
                //disabled: '#676767',
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
