const serviceStyles = theme => ({
    layout: {
         backgroundColor: "rgba(235, 236, 239, 1)",
        //  backgroundColor: 'rgb(25,58,75)',
         paddingTop: '4em',
        //  paddingBottom: '5em'
    },
    // content: {
    //     margin: 'auto auto',
    //     marginTop: 30,
    //     width: '70%',
    //     // display: 'flex',
    //     // flexDirection: 'row',
    //     // justifyContent: 'space-between'
    // },
    headerContent: {
        '& h4': {
            // marginBottom: 40,
            // paddingLeft: 15,
            // borderLeft: '10px double rgb(210, 210, 212)',
        },
        '& p': {
            // maxWidth: 600,
            // marginBottom: '2.5em'
            // fontSize: '1.2em',
            // fontWeight: 300
        }
    },

    // headerImgBox: { 
    //     width: '100%', 
    //     height: '100%',
    //     display: 'flex',
    //     justifyContent: 'center'
    // },
    // headerImg: {
    //     width: '50%', 
    //     [theme.breakpoints.down('xl')]: {
    //         // width: '50%'
    //         minWidth: 200
    //     },
    //     [theme.breakpoints.down('lg')]: {
    //         // width: '50%'
    //         minWidth: 200
    //     },
    //     // [theme.breakpoints.down('md')]: {
    //     //     // width: '50%'
    //     //     minWidth: 200
    //     // },
    //     // [theme.breakpoints.down('sm')]: {
    //     //     width: '60%'
    //     //     // minWidth: 600
    //     // },
    //     // [theme.breakpoints.down('xs')]: {
    //     //     width: '80%'
    //     // },
    //     // height: '100%',
    //     opacity: 0.8,
    //     // outline: '1px solid white'
    //     // filter: 'drop-shadow(0 0 0.2rem #fff)'
    // },
    mainParagraph: {
        marginTop: '1.5em',
        // [theme.breakpoints.down('lg')]: {
        //     marginTop: '1.5em'
        // },
        [theme.breakpoints.down('md')]: {
            marginTop: 0
        },
        // borderLeft: '5px solid rgb(25,58,75)',
        // borderLeft: '5px solid rgb(165, 165, 167)',
        // borderRight: '5px solid rgb(165, 165, 167)',
        // padding: '1em', 
        // paddingLeft: '3em',
        borderRadius: 10,
        // boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        // backgroundImage: 'linear-gradient(to right, rgba(165, 165, 167, 0.1), rgba(25,58,75, 0))'
        // backgroundColor: 'rgba(25,58,75, 0.1)'
    },
    underline: {
        width: 50,
        height: 5,
        backgroundColor: 'rgb(252,132,28)',
        marginTop: 15,
        marginBottom: '3em'
    }, 
    gridItem: {
        // height: '100%'
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    cardRoot: {
        maxWidth: 400,
        minWidth: 250,
        border: '1px solid rgba(255, 255, 255, 0.5)',
        borderRadius: 25,
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        height: '100%',
        backgroundColor: 'rgba(25,58,75, 1)',
    },
    cardRootEducation: {
        maxWidth: 600,
        minWidth: 250,
        border: '1px solid rgba(255, 255, 255, 0.5)',
        borderRadius: 25,
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        height: '100%',
        backgroundColor: 'rgba(25,58,75, 1)',
    },
    iconContainer: {
        // border: '1px solid red',
        minWidth: 70,
        minHeight: 70,
        display: 'flex',
        flexDirection: 'rowReverse',
        justifyContent: 'center',
        alignContent: 'center'
    },
    cardContent: {
        color: 'white',
        paddingLeft: 0,
        '& hr': {
            backgroundColor: 'white',
            height: 1,
            marginTop: 5
        },
        '& p': {
            color: 'rgb(173, 172, 173)',
            marginTop: 10
        }
    },
    iconBox: {
        // border: '1px solid gray',
        // borderRadius: '50%',
        // marginTop: 35,
        marginTop: 45,
        // minWidth: 20,
        // maxWidth: 30,
        width: '4vw',
        height: '4vw',
        display: 'flex',
        flexDirection: 'rowReverse',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        fontSize: 30,
        color: 'blue'
    },
    avatar: {
        // backgroundColor: 'white',
        backgroundColor: 'rgba(255, 255, 255,0.9)',
        // color: 'rgb(252,132,28)'
        // color: 'rgb(16, 21, 235)',
        color: 'rgb(252,132,28)',
        fontSize: '1em',
        width: 50,
        height: 50,
        // width: theme.spacing(7),
        // height: theme.spacing(7),
        // border: '3px solid lightseagreen',
        marginRight: 5
    },
    educationBox: {
        display: 'flex',
        justifyContent: 'center'
    },
    hexIconBox: {
        fontSize: 30
    },
    stepCardRoot: {
        maxWidth: 500
    },
    stepCardHeader: {
        // border: '1px solid red',
        paddingBottom: 0
    },
    stepCardContent: {
        border: '1px solid red',
        paddingTop: 2
    },
    stepAllCardsBox: {
        marginTop: 30,
        // marginLeft: 100,
        display: 'flex',
        justifyContent: 'center'
    },
    cardContainer: {
        marginTop: '5em',
        padding: 15,
        paddingTop: '4em',
        paddingBottom: '4em',
        backgroundColor: 'rgba(25,58,75,0.1)',
        background: `linear-gradient(
            135deg,
            rgba(25,58,75, 0.9),
            rgba(25,58,75, 1)
          ),url(/Meeting04.jpg)`,
        // background: `linear-gradient(
        //     135deg,
        //     rgba(10,83,108, 0.9),
        //     rgba(10,83,108, 1)
        //   ),url(/Meeting04.jpg)`,
        // background: `linear-gradient(
        //     135deg,
        //     rgba(110, 197, 117, 0.9),
        //     rgba(59, 134, 134, 0.8)
        //   ),url(/Meeting04.jpg)`,

        backgroundPosition: 'center', 
        backgroundSize: 'cover',

        // --- try other options
        // backgroundColor: '#fff',
        // borderTop: '1px solid rgb(25,58,75)',
        // borderBottom: '1px solid rgb(25,58,75)'
        
    },

    cardGridContainer: {
        margin: 'auto auto',
        width: '80%',
        [theme.breakpoints.down('sm')]: {
            width: '92%'
        },
    },
    divider: {
        color: 'white',
        backgroundColor: 'white',
        marginBottom: '2em'
    }
})

export default serviceStyles