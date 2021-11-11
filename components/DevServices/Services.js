import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import EachService from './EachService';
import ProcessService from './ProcessService';
import EducationService from './EducationService';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { BsHexagon, BsHexagonFill } from 'react-icons/bs'
import EngineeringIcon from '@mui/icons-material/Engineering';

import serviceStyles from '../../assets/jss/serviceStyles';
import baseStyles from '../../assets/jss/baseStyles';
import { Avatar, Grid, Stack, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from '../../theme';
import useWindowDimension from '../../assets/Hooks/useWindowDimension';

const useStyles = makeStyles(serviceStyles(theme))
const useStylesBase = makeStyles(baseStyles(theme))

const services = [
    {
        type: 'Websites & Apps',
        description: `websites, webapp, mobile apps for all mobile platforms, 
        desktop applications, a lot of information here - no really - its a lot, lol, not really`,
        id: 1
    },
    {
        type: 'Data analytics and AI',
        description: `a lot of information here - no really - its a lot, lol, not really`,
        id: 2
    },
    {
        type: 'Education',
        description: `a lot of information here - no really - its a lot, lol, not really`,
        id: 3
    }
]
const dsProcess = [
    {
        title: 'Websites & Applications',
        subTitle: 'Data cleaning & preparation',
        content: 'We will process your raw data so that preliminary and advance analysis can be done on it.',
        src: 1,
        imgSrc: 'dev4.png'
    },
    // { 
    //   title: 'Data pre-processing',
    //   content: 'We will process your raw data so that preliminary and advance analysis can be done on it.',
    //   src: 1,
    //   imgSrc: 'preprocessing.jpeg'
    // },
    // {
    //   title: 'Visualisation & data exploration', 
    //   content: 'We will use your data to better inform you by presenting it to you and your users in a meaningful way. We will uncover previously unknown truths about your data by exploring and using advanced visualisation techniques.', 
    //   src: 2,
    //   imgSrc: 'preprocessing.jpeg'
    // },
    {
        title: 'Data exploration & Visualisation',
        subTitle: 'Data cleaning & preparation',
        content: 'We will use your data to better inform you by presenting it to you and your users in a meaningful way. We will uncover previously unknown truths about your data by exploring and using advanced visualisation techniques.',
        src: 2,
        imgSrc: 'data_science.png'
    },
    {
        title: 'Machine learning & Decision support',
        subTitle: 'Artificial intelligence, Expert systems',
        content: 'We will use machine learning models to discover previously unknown patterns in your data, predict future behaviours of your users and systems, understand causality and the impact of change in your system, among others.',
        src: 3,
        imgSrc: 'preprocessing.jpeg'
    }
    // {
    //   title: 'Decision support',
    //   content: 'We will build models that can be used to either automatically make important decision within your system or application or inform important stakeholders during their decision-making process.',
    //   src: 4,
    //   imgSrc: 'preprocessing.jpeg'
    // },
]
const Services = props => {
    // const [smallScreen, setSmallScreen] = useState(true)
    const { width, height } = useWindowDimension()
    const smallScreen = width < 720;
    // useEffect(() => {
    //     window.addEventListener('resize', handleResize)
    // }, [])

    const classes = useStyles()
    const baseClasses = useStylesBase()
    const allServices = services.map(s => <EachService type={s.type}
        description={s.description} id={s.id} key={s.id} />)
    const process = dsProcess.map(p => <ProcessService title={p.title}
        subTitle={p.subTitle} content={p.content} src={p.imgSrc} key={p.src} />)


    return (
        <ThemeProvider theme={theme}>
            <Box className={classes.layout}>
                <Box className={baseClasses.mainContainer}>
                    <Box className={classes.headerContent}>
                        {/* <Stack direction='row' alignContent='center' 
                        alignItems='baseline' justifyContent='Left' spacing={3}> */}

                        <Typography variant='h4' component='h4'>
                            We engineer digital solutions with passion
                        </Typography>
                        <Box className={classes.underline}></Box>
                        {/* <Avatar>
                                <EngineeringIcon />
                            </Avatar>
                        </Stack> */}
                        <Grid container
                            alignItems="flex-start"
                            justifyContent='center'
                            direction={smallScreen ? 'column-reverse' : 'row'}
                            // alignItems="flex-start" 
                            spacing={5}>
                            <Grid item xs={12} sm={8} md={8} className={classes.gridItem}>
                                <Typography variant='body1' component='p' className={['headerParagraph', classes.mainParagraph].join(' ')}>
                                    We are a team of Full-Stack Engineers and Data Scientist that are passionate about building
                                    digital solutions for our clients. Our design principle is to collaborate effectively
                                    with our clients to design the perfect solution that is user-friendly and perfectly
                                    satisfies their requirements. Our three main areas of expectise are as follows:

                                    {/* We build and design solutions that are suitable for your specific situation. */}
                                    {/* Our focus is ... three main domains */}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4} className={classes.gridItem}>
                                <Box className={baseClasses.headerImgBox}>
                                    <img className={baseClasses.headerImg} src='/development.png' />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

                {/* some stack [interesting stuff] */}
                {/* <EachService /> */}

                <Box className={classes.cardContainer}>
                    {/* <Stack direction="row" justifyContent="space-between" > */}
                    <Grid container className={classes.cardGridContainer}
                        alignItems="stretch"
                        // justifyContent='center'
                        // alignItems="flex-start" 
                        // spacing={5}
                        columnSpacing={smallScreen ? 0 : 2}
                        rowSpacing={2}
                    >
                        {/* {allServices} */}
                        {process}

                    </Grid>
                    {/* </Stack> */}
                    <Box className={classes.educationBox}>
                        <EducationService />
                    </Box>
                </Box>

                {/* Our promise to you is simple, we are passionate about help you in the digital world, and
                    our promise to you ...... dream

                    We are committed to delivering the best ....[use this one?]

                    problem solving, value driven, ..., communication */}

                {/* </Box> */}
            </Box>
        </ThemeProvider>
    );
};

Services.propTypes = {

};

export default Services;