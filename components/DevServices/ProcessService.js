import React from 'react';
import PropTypes from 'prop-types';

import { Box, ThemeProvider } from '@mui/system';
import { Avatar, Card, CardMedia, CardContent, Divider, Grid, Typography } from '@mui/material';

import serviceProcStyles from '../../assets/jss/serviceProcStyles';
import theme from '../../theme';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(serviceProcStyles(theme))


const ProcessService = props => {
    const classes = useStyles()
    const images = {
        1: require('../../public/preprocessing.jpeg'),
        2: require('../../public/visualisation.jpg'),
        3: require('../../public/learning3.jpg'),
        4: require('../../public/decision2.jpg')
    }
    return (
        <ThemeProvider theme={theme}>
            
         
        <Grid item item xs={12} md={6} lg={4}
            // lg={3} 
            className={classes.gridItems}>
            <Card className={classes.root2} elevation={5}>
                <div className={classes.cardHeader}>
                    <Typography gutterBottom variant="h6" align='center'>
                        {props.title}
                    </Typography>
                    <Typography align='center'
                        gutterBottom 
                        variant="body2" 
                        // color="textSecondary"
                        className={classes.mutedColor}
                    >
                        {props.subTitle}
                    </Typography>
                </div>
                <CardMedia
                    className={classes.media2}
                    // image={images[props.src]}
                    image={props.src}
                    title={props.title}
                />
                <CardContent>
                    <Typography variant="body2" 
                        align="left" 
                        component="p" 
                        // color='textSecondary'
                        className={classes.mutedColor}
                    >
                        {props.content}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    </ThemeProvider>
    );
};

ProcessService.propTypes = {
    
};

export default ProcessService;