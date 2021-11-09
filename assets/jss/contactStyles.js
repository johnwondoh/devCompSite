const contactStyles = theme => ({

    layout: {
        // backgroundColor: "rgba(235, 236, 239, 1)",
        // backgroundColor: 'rgb(25,58,75)',
        // backgroundImage: `linear-gradient(0deg, rgba(10,83,108,0.8), rgba(10,83,108,0.8)), url(cyber-3400789_1920.jpg)`,
        // backgroundImage: `linear-gradient(0deg, rgba(156,156,156,0.8), rgba(156,156,156,0.8)), url(tech-rings.svg)`,
        // backgroundImage: `linear-gradient(0deg, rgba(237, 237, 237,0.8), rgba(237, 237, 237,0.8)), url(tech-rings.svg)`,
        // backgroundColor: '#3f5583',
        backgroundColor: 'rgba(156,156,156,0.3)',
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        // backgroundSize: 'contain',
        // backgroundSize: '50% 120%',
        // backgroundPosition: 'right bottom',
        backgroundRepeat: 'no-repeat',
        // padding: 0,
        paddingTop: '4em',
        paddingBottom: '5em'
    },
    formBox: {
        width: '90%',
        margin: 'auto auto',
        marginTop: '2em',
        borderRadius: 10,
        // backgroundColor: 'transparent'
        // backgroundColor: 'rgba(0, 0, 0, 0.6)'
        backgroundColor: 'rgba(25,58,75, 1)'
        // backgroundColor: 'rgba(156,156,156,0.9)'
    },
    container: {
        width: '95%',
        margin: 'auto auto',
        // background: 'transparent'
    },
    introContent: {
        // color: 'rgb(230, 232, 235)',
        '& h4': {
            // marginBottom: 40,
            // paddingLeft: 15,
            // borderLeft: '10px double rgb(210, 210, 212)',
        },
        '& p': {
            textAlign: 'center '
        }
    },
    underline: {
        width: 50,
        height: 5,
        backgroundColor: 'rgb(252,132,28)',
        marginTop: 15,
        marginBottom: '3em'
    },
    content: {
        width: '55%',
        margin: '0 auto',
        paddingTop: '3rem',
        textAlign: 'center',
        color: 'black',
        [theme.breakpoints.down('lg')]: {
            width: '60%'
        },
        [theme.breakpoints.down('md')]: {
            width: '75%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '80%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '95%'
        },
    },
    title: {
        // color: 'rgba(22,30,46,255)'
        color: 'rgba(17, 158, 214)',
        fontSize: '3em',
        paddingBottom: '0.4em'
    },
    form: {
        // marginTop: '1.5em',
        marginBottom: '1.5em',
        // backgroundColor: 'red'
    },
    paper: {
        padding: '16px',
        paddingTop: '50px',
        backgroundColor: 'transparent'
    },
    formControl: {
        // margin: theme.spacing(1),
        width: '100%',
        // backgroundColor: 'rgba(152, 229, 250,0.5)',
        // backgroundColor: 'rgb(237, 245, 252)',
        // backgroundColor: 'rgba(255, 255, 255,1)',
        backgroundColor: 'rgba(255, 255, 255,0.85)',
        border: 'none'
    },
    fieldStyle: {
        // height: '10px',
        fontSize: '1.1em',
        // backgroundColor: 'rgb(237, 245, 252, 0.5)',
        // backgroundColor: 'rgba(152, 229, 250,0.5)',
        backgroundColor: 'rgba(255, 255, 255,0.85)',
        // backgroundColor: 'rgba(0, 0, 0,0.1)',
        borderRadius: 5,
        // borderRadius: 0
        // border: '2px solid red',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1em',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.8em'
        },
    },
    labelStyle: {
        // color: 'rgb(184, 124, 4)'
        color: 'rgb(154, 155, 156)'
    },
    buttonBox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    button: {
        width: '30%',
        height: 50,
        maxWidth: 350,
        minWidth: 250,
        borderRadius: 0,
        textTransform: "none",
        fontFamily: ['Noto Sans', 'sans-serif'],
        // fontFamily: ['Lato', 'sans-serif'].join(', '),
        fontWeight: 300,
        fontSize: '1.2em',
        lineHeight: '1.8rem',
        color: '#404145'
        // color: '#000'
    }



})

export default contactStyles