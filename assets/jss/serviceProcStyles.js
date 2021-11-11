// const patternPath = process.env.PUBLIC_URL + '/public/intersection/intersection.png'
// const patternPath = require('../../../public/intersection/intersection.png')
// const patternPath = '../../public/intersection/intersection.png'
// console.log(patternPath)
const serviceProcStyles = theme => ({ 
    // content2: {
    //     width: '70%',
    //     margin: 'auto auto',
    //     paddingTop: '1rem',
    //     textAlign: 'left'
    // },
    // cover: {
    //     width: '30%',
    //     // height: 200
    // },
    // header: {
    //     textAlign: 'left'
    // },

    // avatar: {
    //     width: '5em',
    //     height: '5em'
    // },
    // twos
    root2: {
        // maxWidth: 345,
        maxWidth: 400,
        height: '100%',
        margin: 'auto auto',
        backgroundColor: 'rgba(10,83,108,1)',
        color: 'white',
        // border: '1px solid white'
    },
    media2: {
        height: 0,
        // paddingTop: '56.25%', // 16:9
        backgroundColor: 'rgb(245, 247, 252)',
        paddingTop: '40%', // 16:9
        opacity: 0.9
    },
    avatar2: {
        backgroundColor: 'red',
    },
    cardHeader: {
        padding: '1em',
        paddingTop: '1.5em'
    },
    gridItems: {
        // alignItems: 'stretch',
        // gridAutoRows: '1fr'
        marginBottom: '25px',
        padding: '2px',
        [theme.breakpoints.down('xs')]: {
            padding: '2px'
          },
    },
    mutedColor: {
        color: 'rgb(227, 228, 230)'
    }

})


export default serviceProcStyles
