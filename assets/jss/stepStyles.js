import { borderRadius } from "@mui/system"
import { BsFileX } from "react-icons/bs"

const stepStyles = theme => ({
    layout: {
        // backgroundColor: "rgba(235, 236, 239, 1)",
        //  backgroundColor: 'rgb(25,58,75)',
        // backgroundColor: 'rgb(244,252,244)',
        // backgroundColor: '#000',
        // backgroundColor: 'rgb(10,104,136)',
        // backgroundColor: 'rgb(241, 253, 247)',
        backgroundColor: "rgba(235, 236, 239, 1)",
        paddingTop: '4em',
        // paddingBottom: '5em'
    },
    underline: {
        width: 50,
        height: 5,
        backgroundColor: 'rgb(252,132,28)',
        marginTop: 15,
        marginBottom: '5em'
    },
    // headerImgBox: { width: '100%', height: '100%'},
    // headerImg: {
    //     width: '100%', 
    //     height: '100%',
    //     opacity: 0.9,
    // },
    itemsBoxContainer: {
        // backgroundColor: "#dce3dc",
        backgroundColor: "#000",
        backgroundImage: `rgb(10,83,108)`,
        backgroundImage: `linear-gradient(0deg, rgba(10,83,108,0.8), rgba(10,83,108,0.8)), url(cyber-3400789_1920.jpg)`,
        
        // borderTop: '3px solid red',
        marginTop: '4em'
    },
    gridItem: {padding: 0},
    cardsContainerBox: {
        margin: 'auto auto',
        // marginTop: 30,
        padding: '1em',
        paddingTop: '2em',
        // width: '70%',
        // marginLeft: 100,
        display: 'flex',
        justifyContent: 'center',
        // border: '1px solid blue',
        // backgroundColor: "#dce3dc"
        // backgroundColor: "#000"
        backgroundColor: "transparent"
        // backgroundColor: "rgba(83,109,123,255)"
        // backgroundColor: "rgba(33,31,34,255)"
    },
    sideBox: {
        width: '100%',
        height: '100%',
        '& img': {
            width: '100%',
            margin: 'auto auto',
        }
    },
    boxItem: {
        width: '100%',
        height: '100%',
        paddingTop: 0,
        // borderRadius: 5,
        // backgroundImage: "url('/hands.jpg')",
        // backgroundImage: "url('/work.jpg')",
        backgroundImage: "url('/work2Annie.jpg')",
        // backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', 
        // backgroundImage: "url('/collabs.png')",
        backgroundSize: 'cover',
    },
    stepCardRoot: {
        maxWidth: 500
    },
    listItem: {
        display: 'flex',
        alignItems: 'stretch',
        marginBottom: '1em'
    },
    avatarArea: {
        // backgroundColor: 'rgba(25,58,75,0.9)',
        // backgroundColor: 'rgba(5, 94, 2,1)',
        backgroundColor: '#aaaaaa',
        // backgroundColor: 'rgb(25,58,75)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
        // height: 
    },
    avatar: {
        // backgroundColor: 'white',
        backgroundColor: "rgba(235, 236, 239, 0.5)",
        color: '#000'
        // color: 'blue'
    },
    listItemText: {
        margin: 0,
        padding: 5,
        paddingLeft: 10,
        borderRadius: 5,
        '& h6': {color: 'white'},
        '& p': {color: '#aaaaaa'}
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
})

export default stepStyles