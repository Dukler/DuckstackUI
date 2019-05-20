import { createMuiTheme } from '@material-ui/core/styles';
//import { colors } from '@material-ui/core';
// const darkOrLight = (dark, light) => {
//     return props.paletteType === 'dark' ? dark : light;
// }

export const dsTheme = createMuiTheme({
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
            type: 'dark',
            text:{
                disabled: '#676767',//darkOrLight('#676767', '#D3D3D3'),
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
    });