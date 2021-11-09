
const baseStyles = theme => ({
    mainContainer: {
        margin: 'auto auto',
        marginTop: 30,
        // backgroundColor: 'red',
        width: '70%',
        [theme.breakpoints.down('md')]: {
            width: '85%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '95%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
    },
    headerImgBox: { 
        width: '100%', 
        height: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    headerImg: {
        width: '50%', 
        [theme.breakpoints.down('xl')]: {
            minWidth: 200
        },
        [theme.breakpoints.down('lg')]: {
            minWidth: 200
        },
        opacity: 0.8,
    },
})

export default baseStyles