import React from 'react';
import PropTypes from 'prop-types';


import { Avatar, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { Box, ThemeProvider } from '@mui/system';
import { makeStyles } from '@mui/styles';

// import { DiAndroid } from 'react-icons/di'
import { AiFillWindows } from 'react-icons/ai'
import { AiFillApple } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
import { VscGraphLine } from 'react-icons/vsc'
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';

import serviceStyles from '../../assets/jss/serviceStyles';
import theme from '../../theme';

const useStyles = makeStyles(serviceStyles(theme))

const icons = {
    1: <CgWebsite />,
    2: <VscGraphLine />,
    3: <NaturePeopleIcon />
}

const EachService = props => {
    const classes = useStyles()
    const { type, description, id } = props
    return (
        <ThemeProvider theme={theme}>
            <Grid item xs={12} sm={12} md={6} lg={4} className={classes.gridItem} >
                <Card className={classes.cardRoot} raised>
                    <Box className={classes.iconContainer}>
                        <Box className={classes.iconBox}>
                            <Avatar className={classes.avatar}>
                                {icons[id]}
                            </Avatar>
                        </Box>
                    </Box>
                    <CardContent className={classes.cardContent}>
                        <Typography variant='h6' component='h6'>{type}</Typography>
                        <Divider />
                        <Typography variant='body2' component='p'>
                            {description}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </ThemeProvider>
    );
};

EachService.propTypes = {

};



{/* <Grid item component={Card} xs={12} sm={6} md={4} className={classes.cardRoot}>
    <Grid item component={Card}  className={classes.cardRoot}> 
    <Card className={classes.cardRoot} elevation={0}>  
    <Box className={classes.iconContainer}>
        <Box className={classes.iconBox}>
            {icons[id]}
        </Box>
    </Box>
    <CardContent>

        <Typography variant='h6' component='h6'>{type}</Typography>
        <Typography variant='body2' component='p'>
            {description}
        </Typography>
    </CardContent>
    // </Card> 
</Grid> */}
export default EachService;
