import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Card, CardContent, CardHeader, List, Typography, Paper, Grid } from '@mui/material';
import Stack from '@mui/material/Stack';

import stepStyles from '../../assets/jss/stepStyles';
import baseStyles from '../../assets/jss/baseStyles';
import theme from '../../theme';
import { makeStyles } from '@mui/styles';
import { Box, ThemeProvider } from '@mui/system';
import EachStep from './EachStep';

const useStylesBase = makeStyles(baseStyles(theme))
const useStyles = makeStyles(stepStyles)

const ourSteps = [
  {
    // title: 'We want to understand and empathise with your requirements',
    id: 1,
    title: 'Listen & Understand',
    more: `We treat each client with respect and we strive to deliver a satisfying 
    product. We make sure that we correctly understand our client's goals and 
    the objectives of the project - ensuring that the delivered product is feature complete.  `
  },
  {
    id: 2,
    title: 'Research & Design',
    more: `Our team of experienced researchers and developers work hand-in-hand 
    to ensure that the best and state-of-the-art techniques are used to build 
    your application to ensure longevity, robustness and security.`
  },
  {
    id: 3,
    title: 'Implement, Test, & Deploy',
    more: `Our team of developers are capable of building applications across all 
    platforms. State your application type, and we will build it. Existing products 
    can also be improved and redesigned depending on the requirements of the product. `
  }
]

const Steps = props => {
  const classes = useStyles()
  const baseClasses = useStylesBase()

  const stepCards = ourSteps.map(s => <EachStep title={s.title} more={s.more} key={s.id} id={s.id} />)
  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.layout}>
        <Box className={[baseClasses.mainContainer, classes.header].join(' ')}>
          <Typography variant='h4' component='h4'>We are client focused</Typography>
          <Box className={classes.underline}></Box>
          <Grid container
            alignItems="center"
            justifyContent='center'
            spacing={5}>
            <Grid item xs={12} sm={4} md={4} className={classes.gridItem}>
              <Box className={baseClasses.headerImgBox}>
                <img style={{ opacity: 0.5 }} className={baseClasses.headerImg} src='/group.png' />
              </Box>
            </Grid>
            <Grid item xs={12} sm={8} md={8} className={classes.gridItem}>
              <Typography variant='body1' component='p' align='left' className='headerParagraph'>
                Our design principle is to collaboratively work with our clients to design the perfect user-friendly solution.
                <br/><br/>
                We refine and improve our designs based on client feedback by putting the focus of the design on our clients and their users. We also ensure that solutions are tested extensively and that the submitted deliverable is feature complete. 
                <br/><br/>
                We follow three important steps iteratively to understand and develop applications that meet our client's expectations and standards.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.itemsBoxContainer}>
          <Grid container
            alignItems="stretch"
            justifyContent='left'
            spacing={0}>
            <Grid item xs={12} sm={12} md={1} className={classes.gridItem}></Grid>
            <Grid item xs={12} sm={7} md={6} className={classes.gridItem} >
              <Paper className={classes.cardsContainerBox} elevation={0}>
                <List>
                  {stepCards}
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={5} md={5} className={classes.gridItem} >
              <Box className={classes.boxItem}>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

Steps.propTypes = {

};

export default Steps;