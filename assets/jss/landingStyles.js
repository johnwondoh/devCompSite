
const landingStyles = theme => ({
    layout: {
        height: '80vh',
        [theme.breakpoints.down('sm')]: {
            height: '100vh',
        },
        width: '100vw',
        backgroundColor: 'rgb(18,60,64)',

        backgroundImage: `rgb(10,83,108)`,
        // backgroundImage: `linear-gradient(0deg, rgba(10,83,108,0.8), rgba(10,83,108,0.8)), url(cyber-3400789_1920.jpg)`,
        // backgroundImage: `linear-gradient(0deg, rgba(18,60,64,0.6), rgba(18,60,64,0.8)), url(maximalfocus.jpg)`,
        backgroundImage: `linear-gradient(0deg, rgba(11,11,11,0.8), rgba(11,11,11,0.8)), url(maximalfocus.jpg)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        // backgroundSize: 'contain',
        // backgroundSize: '50% 120%',
        // backgroundPosition: 'right bottom',
        backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        // position: 'relative',
    },
    gridItem: {
        padding: 0, width: '100%',
        height: '100%',
    },
    imageBox: {
        // width: '100%',
        // height: '100%',
        // border: '2px solid red',
        // backgroundImage: "url(maximalfocus.jpg)"
        // width: 300,
        // height: 400,
        // height: '100%',
        // width: '100%',
        // height: '100%',
        paddingTop: 0,
        // borderRadius: 5,
        // backgroundImage: "url('/hands.jpg')",
        // backgroundImage: "url('/work.jpg')",
        backgroundImage: "url('maximalfocus.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // backgroundImage: "url('/collabs.png')",
        backgroundSize: 'cover',
    },
    logo: {
        margin: 30,
        padding: 10,
        [theme.breakpoints.down('sm')]: {
            padding: 2,
        },
        display: 'inline-block',
        borderRadius: 0,
        backgroundColor: 'transparent',
        borderTop: '3px solid #f49f1c',
        borderBottom: '3px solid #f49f1c',
        fontStyle: 'italic',
        '& span': { display: 'block', fontStyle: 'normal' },
        '& h2': {}
    },
    mainContainer: {
        // height: '100%',
        // height: '100vh',
        // verticalAlign: 'middle',
        // top: '0%',
        // transform: 'translateY(25%)',
        marginTop: '3em',
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'stretch'
    },
    mainContent: {
        // margin: 'auto auto',
        // width: '100%',
        // height: '100%',
        // display: 'flex',
        // flexDirection: 'column',
        // flexWrap: 'nowrap',
        // alignContent: 'center', 
        // justifyContent: 'center'
        display: 'inline-block',
        margin: 'auto auto'
    },
    mainText: {
        margin: 'auto auto',
        marginBottom: '4em',
        '& h1': {
            color: '#fff',
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.8em'
            },
            // fontSize: '1.1em'
            // fontStyle: 'italic'
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: '2em',
            marginLeft: 5,
            // width: '90%',
            // margin: 'auto auto' 
            // minWidth: 600
        },
        '& strong': {
            // color: ' #f49f1c',
            // color: 'red',
            // fontStyle: 'normal',
            // fontSize: '1.3em',
            // paddingBottom: '0.1em',
            padding: '0.1em',
            // border: '2px solid #f49f1c'
            border: '2px solid #937047'
            // border: '1px solid #e7dac7'
        },
        '& span': { display: 'block', marginTop: '0.5em'}
    },
    optionsLayout: {
        '& p': {
            color: '#fff',
            marginBottom: '0.5em'
        },
        width: 600,
        [theme.breakpoints.down('xl')]: {
            // width: '50%'
            width: 800
            // minWidth: 200
        },
        [theme.breakpoints.down('lg')]: {
            // width: '50%'
            // minWidth: 600
            width: 700
        },
        [theme.breakpoints.down('md')]: {
            // width: '50%'
            width: 600
        },
        [theme.breakpoints.down('sm')]: {
            width: '90%',
            margin: 'auto auto',
            marginTop: '2em'
            // minWidth: 600
        },
        // backgroundColor: ''
    },
    optionField: {
        backgroundColor: 'white',
        borderRadius: 5,
        border: 'none'
    },
    buttonBox: {
        width: '100%',
        height: '44px',
        marginTop: '0.8em',
        display: 'flex',
        justifyContent: 'right',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            // minWidth: 600
        },
    },
    button: {
        width: '40%',
        [theme.breakpoints.down('sm')]: {
            width: '90%'
            // minWidth: 600
        },
        borderRadius: 0,
        textTransform: "none",
        fontFamily: ['Noto Sans', 'sans-serif'],
        // fontFamily: ['Lato', 'sans-serif'].join(', '),
        fontWeight: 300,
        fontSize: '1.2em',
        lineHeight: '1.8rem',
        color: '#404145'
    }


})

export default landingStyles