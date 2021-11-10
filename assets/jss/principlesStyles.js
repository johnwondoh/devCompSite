import { urlObjectKeys } from "next/dist/shared/lib/utils"

const principlesStyles = theme => ({
    layout: {
        // background: "linear-gradient(rgba(235, 236, 239, 1), rgba(235, 236, 239, 1) ), url('/collabs.png')",
        backgroundColor: "rgba(156,156,156,0.1)",
        // backgroundImage: `linear-gradient(0deg, rgba(156,156,156,0.1), rgba(156,156,156,0.1)), url(people.png)`,
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        // borderTop: '1px solid black',
        // backgroundColor: "rgba(235, 236, 239, 1)",
        // backgroundImage: "url('/collabs.png')",
        // backgroundSize: '60%',
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center bottom',
        //  backgroundColor: 'rgb(25,58,75)',
        paddingTop: '4em',
        paddingBottom: '3em',
    },

    underline: {
        width: 50,
        height: 5,
        backgroundColor: 'rgb(252,132,28)',
        marginTop: 15,
        marginBottom: '3em'
    },
    cardContainerBox: {
        width: '60%'
    },
    gridItem: {backgroundColor: 'transparent'},
    gridItemElement: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    cardRoot: {
        // padding: 0,
        maxWidth: 400,
        backgroundColor: 'transparent',
        height: '100%',
        '& h6': {
            backgroundColor: 'rgba(235,236,239,255)',
            backgroundColor: 'rgba(25,58,75, 1)',
            color: '#fff',
            marginBottom: 0,
            // color: 'rgb(252,132,28)',
            // color: 'rgb(256,108,56)',
            padding: 5,
            paddingLeft: 10,
            paddingTop:10,
            paddingBottom: 10
            // marginBottom: '0.5em'
        },
        '& strong': {
            // color: 'red'
            // color: 'rgb(5, 117, 20)'
        },
        '& p': {
            // fontSize: '1em',
            padding: 5,
            paddingLeft: 10,
            // backgroundColor: 'rgba(25,58,75, 0.1)',
            // border: '1px solid green',
            paddingTop:10,
            paddingBottom: 10,
            borderRadius: 5,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0
        },
    },
    cardContent: {
        padding: 0
    },
    collabImageBox: {
        margin: 'auto auto',
        width: '70%',
        [theme.breakpoints.down('lg')]: {
            // width: 0
            // visibility: 'visible'
            display: 'none'
        },
        // opacity: 0.6,
        // position: 'absolute',
        // left: 0,
        // top: 0,
        // width: '100%',
        // height: 'auto'
    },
    collabImage: {
        width: '100%',
        opacity: 0.6
    },
    sideBox: {
        height: '100%',
        // backgroundColor: 'blue'
    }
})

export default principlesStyles