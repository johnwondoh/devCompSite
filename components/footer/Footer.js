import React from 'react';
import PropTypes from 'prop-types';

import footerStyles from '../../assets/jss/footerStyles';
import theme from '../../theme';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import FooterService from './FooterService';
import { ThemeProvider } from '@mui/system';
import { Link, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const useStyles = makeStyles(footerStyles(theme))

const services = [
    {
        type: 'Software & Apps',
        provisions: [
            'Application development',
            'Application evolution',
            'Testing'],
        key: 1
    },
    {
        type: 'Data Science',
        provisions: ['Data analysis',
            'Data engineering',
            'Machine learning'],
        key: 2
    },
    {
        type: 'Education & Training',
        provisions: ['Programming basics',
            'Data science',
            'Application development'],
        key: 3
    }
]



const Footer = props => {
    const classes = useStyles()
    const ourProvisions = services.map(s => <FooterService type={s.type} provisions={s.provisions} />)
    return (
        // <Box className={classes.layout}>
        //     footer
        // </Box>

        <ThemeProvider theme={theme}>

            <Box className={classes.layout}>
                <Box className={classes.content}>
                    <Typography variant="body1" component='p' align="center" className={classes.about}>
                        We are a group of software engineers and data scientist working together to develop
                        the perfect cross-platform solutions for our clients.
                        Our services include:
                    </Typography>
                    <div className={classes.serviceContainer}>
                        {ourProvisions}
                    </div>
                    <div className={classes.contactHolder}>

                        <Box >
                            <Link component='button' href="tel:123-456-7890" className={classes.contact}>
                                <PhoneIcon />
                                <Box component='span' className={classes.contactdetail}>
                                    123-456-7890
                                </Box>
                            </Link>
                        </Box>
                        <Box >
                            <Link component='button' href="tel:123-456-7890" className={classes.contact}>
                                <EmailIcon />
                                <Box component='span' className={classes.contactdetail}>
                                    someemail@somedomain.com
                                </Box>
                            </Link>
                        </Box>
                    </div>
                    <div className={classes.socials}>
                        <LinkedInIcon className={classes.socialItem} />
                        <TwitterIcon className={classes.socialItem} />
                        <InstagramIcon className={classes.socialItem} />
                        <GitHubIcon className={classes.socialItem} />
                    </div>

                    <Box>
                        <Typography variant='body1' className={classes.abn}>
                            ABN: 123236789
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

Footer.propTypes = {

};

export default Footer;