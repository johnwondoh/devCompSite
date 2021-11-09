// search muitheme in material UI
import { createTheme } from '@mui/material/styles';
// import purple from '@material-ui/core/colors/purple';
// import green from '@material-ui/core/colors/green';
import { purple, green } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      // main: purple[500],
      // main: 'rgb(256,152,48)'
      // main: 'rgb(252,129,27)'
      // main: '#cc562d'
      // main: '#039628'
      main: '#f4b41a',
      main: '#f49f1c'
    },
    secondary: {
      main: green[500],
    },
    success: {
        main:purple[100]
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      // '-apple-system',
      // 'BlinkMacSystemFont',
      // '"Segoe UI"',
      // 'Roboto',
      // '"Helvetica Neue"',
      // 'Arial',
      // 'sans-serif',
      // '"Apple Color Emoji"',
      // '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
//   overrides:{
//     MuiCardHeader: {
//       title: {
//         fontSize: '1.5em',
//         fontFamily: 'Bai Jamjuree',
//       },
//       subheader: {
//         fontSize: '1em',
//         fontFamily: 'Bai Jamjuree',
//         color: 'black',
//         // fontStyle: 'italic',
//         // backgroundColor: 'green'
//       }
//     }
//   }
//   overrides: {
//     // Style sheet name
//     MuiFilledInput: {
//       // Name of the rule
//       root: {
//         // backgroundColor: "rgb(254, 252, 255)",
//         borderRadius: "50px 50px 50px 50px"
//       },
//       "&:hover": {
//         backgroundColor: "#fff"
//       },
//       "&$focused": {
//         backgroundColor: "#fff",
//         // boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
//         borderColor: 'green'
//       }
//     }
//   }
});


// theme.typography.h4 = {
//     fontSize : '2rem',
//     fontStyle: 'normal'
//   }
// theme.typography.h2 = {
//     fontFamily: 'Bai Jamjuree',
//     fontSize : '2em',
//     fontWeight: '600'
// }
// theme.typography.h1 = {
//     fontFamily: 'jura',
//     fontSize : '5em',
//     fontStyle: 'normal',
//     fontWeight: '600'
// }
// theme.typography.subtitle1 = {
//     fontFamily: 'Bai Jamjuree'
// }
// theme.typography.body1 = {
//     fontFamily: ['Source Sans Pro', 'sans-serif'].join(', '),
//     fontWeight: 300,
//     fontSize: '1.1em',
//     lineHeight: 1.4
// }
theme.typography.h1 = {
    fontFamily: ['Lato', 'sans-serif'].join(', '),
    // fontFamily: ['Yantramanav', 'sans-serif'].join(', '),
    
    fontWeight: 700,
    fontSize: '40px',
    // lineHeight: 1.4,
    lineHeight: '48px',
    // color: 'rgb(115, 115, 115)'
}
theme.typography.h2 = {
    fontFamily: ['Lato', 'sans-serif'].join(', '),
    // fontFamily: ['Yantramanav', 'sans-serif'].join(', '),
    
    fontWeight: 700,
    fontSize: '30px',
    // lineHeight: 1.4,
    lineHeight: '30px',
    // color: 'rgb(115, 115, 115)'
    color: '#fff'
}

theme.typography.body1 = {
    // fontFamily: ['Roboto', 'sans-serif'].join(' '),
    // fontFamily: ['Lato', 'sans-serif'].join(', '),
    fontFamily: ['Noto Sans', 'sans-serif'],
    // fontFamily: ['Source Sans Pro', 'sans-serif'].join(', '),
    // fontFamily: ['Arimo', 'sans-serif'].join(', '),
    // fontFamily: ['Yantramanav', 'sans-serif'].join(', '),
    // fontFamily: ['Playfair Display', 'serif'].join(', '),
    fontWeight: 300,
    fontSize: '1.2em',
    // fontSize: '22px',
    // lineHeight: '140%',
    // lineHeight: '26px',
    lineHeight: '1.8rem',
    // color: '#404145'
    color: '#000'
    // color: 'rgb(115, 115, 115)'
}

theme.typography.body2 = {
  // fontFamily: ['Lato', 'sans-serif'].join(', '),
  fontFamily: ['Yantramanav', 'sans-serif'].join(', '),
  // fontFamily: 'Roboto',
  fontWeight: 300,
  fontSize: '1.1em',
  lineHeight: 1.3,
  color: '#535458'
}
theme.typography.h4 = {
  fontFamily: ['Inter', 'sans-serif'].join(', '),
  fontSize: '2.2em',
  fontWeight: 400,
  lineHeight: 1.2,

  // ---
  // marginBottom: '1em',
  // paddingLeft: 15,
  // borderLeft: '10px double rgb(210, 210, 212)',
}
theme.typography.h6 = {
  fontFamily: ['Inter', 'sans-serif'].join(', '),
  fontSize: '1.2em',
  fontWeight: 400,
  lineHeight: 1.2
}
// theme.typography.subtitle2 = {
//     fontFamily: 'Bai Jamjuree'
// }
// theme.typography.h3 = {
//   fontSize : '3rem',
//   fontFamily: 'Ubuntu',
//   fontStyle: 'normal'
// }
// theme.typography.h6 = {
//     fontSize : '1.5em',
//     fontFamily: 'Bai Jamjuree',
//     fontStyle: 'normal',
//     fontWeight: 'normal'
// }


export default theme;
