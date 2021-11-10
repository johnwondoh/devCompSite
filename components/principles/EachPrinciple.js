import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Grid, Typography } from '@mui/material';

import principlesStyles from '../../assets/jss/principlesStyles';
import theme from '../../theme';
import { makeStyles } from '@mui/styles';
import { ThemeProvider } from '@mui/system';

const useStyles = makeStyles(principlesStyles)

const EachPrinciple = props => {
    const classes = useStyles()
    const { id, title, description } = props
    return (
        <ThemeProvider theme={theme}>
            <Grid item xs={12} sm={6} md={6} className={classes.gridItemElement} >
                <Card className={classes.cardRoot} raised>
                    <CardContent className={classes.cardContent}>
                        <Typography variant='h6' component='h6'> {title}</Typography>
                        <Typography variant='body2' component='p'>
                            {description}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </ThemeProvider>
    );
};

EachPrinciple.propTypes = {

};

export default EachPrinciple;