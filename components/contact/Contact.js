import React from 'react';
import PropTypes from 'prop-types';

import ContactForm from './ContactForm';
import { Box, ThemeProvider } from '@mui/system';
import { Typography, Card } from '@mui/material';

import contactStyles from '../../assets/jss/contactStyles';
import baseStyles from '../../assets/jss/baseStyles';
import theme from '../../theme';
import { makeStyles } from '@mui/styles';

const useStylesBase = makeStyles(baseStyles(theme))
const useStyles = makeStyles(contactStyles(theme))

const Contact = props => {
    const classes = useStyles()
    const baseClasses = useStylesBase()
    return (
        <ThemeProvider theme={theme}>
        <Box id='contactSection' className={classes.layout}>
            {/* <Box className='mainContainer'> */}
            <Box className={baseClasses.mainContainer}>
                <Box className={classes.introContent}>
                    <Typography variant='h4' component='h4'>Let's talk</Typography>
                    <Box className={classes.underline}></Box>
                    <Typography variant='body1'>
                        Get in touch with us by ...Leave your contact details and a short message and we'll get in touch
                    </Typography>
                </Box>
                {/* Dream your product, we'll help you to build it

            Do you want to better product, we'll help evolve and improve your product

            Do you want learn how to build and improve your product yourself, we'll teach you how to, regardless of your skill level

            form here */}
                <Card elevation={0}
                className={classes.formBox}>
                    <ContactForm />
                </Card>
            </Box>
        </Box>
        </ThemeProvider>
    );
};

Contact.propTypes = {

};

export default Contact;