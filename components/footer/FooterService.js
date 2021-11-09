import React from 'react';
import PropTypes from 'prop-types';

import footerStyles from '../../assets/jss/footerStyles';
import theme from '../../theme';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { ThemeProvider } from '@mui/system';
import { Typography } from '@mui/material';

const useStyles = makeStyles(footerStyles(theme))

const services = ['Programming basics',
    'Data science',
    'Application development']


const FooterService = props => {
    const classes = useStyles()

    const ourServices = props.provisions.map(s => <Typography
        variant='body1'
        align='left'
        className={classes.serviceList}>{s}</Typography>)

    return (
        <ThemeProvider theme={theme}>
        <Box className={classes.service}>
            <Typography variant='h4' className={classes.serviceName}>{props.type}</Typography>
            {ourServices}
        </Box>
      
    </ThemeProvider>
    );
};

FooterService.propTypes = {

};

export default FooterService;