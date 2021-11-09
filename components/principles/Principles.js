import React from 'react';
import PropTypes from 'prop-types';
import { Box, ThemeProvider } from '@mui/system';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import Image from 'next/image'

import principlesStyles from '../../assets/jss/principlesStyles';
import baseStyles from '../../assets/jss/baseStyles';
import theme from '../../theme';
import { makeStyles } from '@mui/styles';
import EachPrinciple from './EachPrinciple';
import { AiTwotoneProject } from 'react-icons/ai';
import useWindowDimension from '../../assets/Hooks/useWindowDimension';

const useStyles = makeStyles(principlesStyles(theme))
const useStylesBase = makeStyles(baseStyles(theme))

const principles = [
    {
        id: 1,
        title: 'Collaboration',
        description: <span>We collaborate with our clients through every step of the way -
            from <strong>designing</strong> solutions,
            to low and high fidelity <strong>prototypes</strong>,
            and even after <strong>deploying</strong> solutions.</span>
    },
    {
        id: 2,
        title: 'On-Time Deliverables',
        description: <span>
            {/* Each project is divided into deliverables with specified deadlines and time intervals.  */}
            We are committed to
            delivering <strong>on time</strong> and <strong>communicating efficiently</strong>
            clearly with our clients during this process.</span>
    },
    {
        id: 3,
        title: 'Partnership',
        description: <span>
            Our partnership with our clients <strong>does not end</strong> after the requirements are satisfied,
            we will <strong>continuously support</strong> them and their businesse if need be </span>
    }
]

const Principles = props => {
    const classes = useStyles()
    const baseClasses = useStylesBase()
    const { width, height } = useWindowDimension()
    const smallScreen = width < 600;

    const ourPrinciples = principles.map(p => <EachPrinciple id={p.id} title={p.title} description={p.description} key={p.id} />)
    return (
        <ThemeProvider theme={theme}>
            <Box className={classes.layout}>
                <Box className={baseClasses.mainContainer}>
                    <Box className={classes.introContent}>
                        <Typography variant='h4' component='h4'>Our Principles</Typography>
                        <Box className={classes.underline}></Box>
                        <Typography variant='body1' component='p' className='headerParagraph'>
                            {/* Get in touch with us by ...Leave your contact details and a short message and we'll get in touch */}
                        </Typography>
                    </Box>
                    <Grid container
                        alignItems="stretch"
                        justifyContent='left'
                        // alignItems="flex-start" 
                        spacing={3}>
                        {/* <Box className={classes.cardContainerBox}> */}
                        <Grid item xs={12} sm={8} md={8} className={classes.gridItem} >
                            <Grid container
                                alignItems="stretch"
                                justifyContent='left'
                                // alignItems="flex-start" 
                                spacing={1}>

                                {ourPrinciples}
                            </Grid>
                            {/* </Box> */}
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} className={classes.gridItem} >
                            { !smallScreen && <Box className={classes.sideBox}>
                                <img alt='collaboration image' src='/people.png'
                                    className={classes.collabImage} />
                            </Box>}
                        </Grid>
                    </Grid>


                    {/* <Box className={classes.collabImageBox}>
                    <img alt='collaboration image' src='/collabs.png'
                        className={classes.collabImage} />
                </Box> */}
                    {/* {ourPrinciples} */}
                </Box>
            </Box>
        </ThemeProvider>
    );
};

Principles.propTypes = {

};

export default Principles;