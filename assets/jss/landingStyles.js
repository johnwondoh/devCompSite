
const landingStyles = theme => ({
    layout: {
        height: '80vh',
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
    gridItem: {padding: 0, width: '100%',
    height: '100%',},
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
    // image: {
    //     // width: '100%', 
    //     height: '100vh',
    //     padding: 0
    // },
    // layout: {
    //     height: '80vh',
    //     width: '100vw',
    //     backgroundColor: 'rgb(18,60,64)',

    //     backgroundImage: `rgb(10,83,108)`,
    //     backgroundImage: `linear-gradient(0deg, rgba(10,83,108,0.8), rgba(10,83,108,0.8)), url(cyber-3400789_1920.jpg)`,
    //     // backgroundImage: `linear-gradient(0deg, rgba(18,60,64,0.6), rgba(18,60,64,0.8)), url(tech-rings.svg)`,
    //     // backgroundPosition: 'center',
    //     backgroundSize: 'cover',
    //     // backgroundSize: '50% 120%',
    //     // backgroundPosition: '100% 100%',
    //     backgroundRepeat: 'no-repeat',
    //     // backgroundSize: 'cover',
    //     // position: 'relative',
    // },
    logo: {
        margin: 30,
        padding: 10,
        display: 'inline-block',
        borderRadius: 0,
        backgroundColor: 'transparent',
        borderTop: '3px solid #f49f1c',
        borderBottom: '3px solid #f49f1c',
        fontStyle: 'italic',
        '& span': {display: 'block', fontStyle: 'normal'},
        '& h2' : {}
    },
    mainText: {
        margin: 'auto auto',
        marginBottom: '4em',
        '& h1': {
            color: '#fff', 
            // fontSize: '1.1em'
            // fontStyle: 'italic'
        },
        // '& strong': {
        //     color: ' #f49f1c',
        //     fontStyle: 'normal',
        //     fontSize: '1.3em'
        // },
        '& span': {display: 'block'}
    },
    optionsLayout: {
        margin: 'auto auto',
        width: 600
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
        justifyContent: 'right'
    },
    button: {
        width: '40%',
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