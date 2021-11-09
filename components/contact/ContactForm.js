import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Paper, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
// import { ThemeProvider } from '@mui/private-theming';
// import { createTheme } from '@mui/system';
import { ThemeProvider } from '@mui/system';
// import MuiTh
// import Grid from '@mui/material/Grid';

import contactStyles from '../../assets/jss/contactStyles';
import theme from '../../theme';
import { Box } from '@mui/system';

const useStyles = makeStyles(contactStyles(theme))

const ContactForm = props => {
    const classes = useStyles()

    const [success, setSuccess] = useState(false)
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        enquiryType: '',
        enquiry: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    // const formSubmit = (e) => {
    //   e.preventDefault()
    //   console.log(data)
    // }
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(e.target)

        const templateParams = {
            from_name: data.name + " (" + data.email + ") and (" + data.phone + ")",
            to_name: 'johnwondoh@gmail.com',
            message_html: data.enquiry
        };

        emailjs.send('gmail', 'template_T2w1yx1v', templateParams, 'user_NGECXC5mrzzRi4tQAUhzw')
            .then((result) => {
                console.log(result.text);
                setSuccess(true)
                resetForm()
                setTimeout(() => {
                    setSuccess(false);
                }, 5000);
            }, (error) => {
                console.log(error.text);
                setSuccess(true)
                setTimeout(() => {
                    setSuccess(false);
                }, 5000);
            });
    }

    const resetForm = (e) => {
        setData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            // company: '',
            enquiryType: '',
            enquiry: ''
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <Box className={classes.container}>
                <form
                    // onSubmit={handleSubmit} 
                    noValidate className={classes.form}>
                    <Paper elevation={0} className={classes.paper}>
                        <Grid container alignItems="flex-start" spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className={classes.fieldStyle}
                                    // disableUnderline={true}
                                    required
                                    id="filled-required"
                                    // variant='standard'
                                    variant="filled"
                                    // variant='outlined'
                                    fullWidth
                                    label="first name"
                                    InputLabelProps={{
                                        className: classes.labelStyle,
                                    }}
                                    InputProps={{ disableUnderline: true }}
                                    size="small"
                                    type='text'
                                    // onChange={changeName}
                                    name="name"
                                    value={data.firstName}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className={classes.fieldStyle}
                                    required
                                    id="filled-required"
                                    //   variant="standard"
                                    variant="filled"
                                    // variant='outlined'
                                    fullWidth
                                    label="last name"
                                    InputLabelProps={{
                                        className: classes.labelStyle,
                                    }}
                                    InputProps={{ disableUnderline: true }}
                                    size="small"
                                    type='text'
                                    // onChange={changeName}
                                    name="lastName"
                                    value={data.lastName}
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className={classes.fieldStyle}
                                    required
                                    id="filled-required"
                                    //   variant="standard"
                                    variant="filled"
                                    // variant='outlined'
                                    fullWidth
                                    label="email address"
                                    InputLabelProps={{
                                        className: classes.labelStyle,
                                    }}
                                    InputProps={{ disableUnderline: true }}
                                    size="small"
                                    type='email'
                                    name="email"
                                    value={data.email}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    // required
                                    className={classes.fieldStyle}
                                    // id="filled-required"
                                    //   variant="standard"
                                    // variant='outlined'
                                    variant="filled"
                                    fullWidth
                                    label="phone number"
                                    InputLabelProps={{
                                        className: classes.labelStyle,
                                    }}
                                    InputProps={{ disableUnderline: true }}
                                    size="small"
                                    type='tel'
                                    name='phone'
                                    value={data.phone}
                                    onChange={handleChange}
                                />
                            </Grid>
                            {/* <Grid item xs={12} sm={6}>
                    <TextField
                      // required
                      className={classes.fieldStyle}
                      id="filled-required"
                    //   variant="standard"
                    variant="filled"
                      fullWidth
                      label="Company name"
                      InputLabelProps={{
                        className: classes.labelStyle,
                      }}
                      InputProps={{ disableUnderline: true }}
                      size="small"
                      type='text'
                      name='company'
                      value={data.company}
                      onChange={handleChange}
                    />
                  </Grid> */}
                            <Grid item xs={12}>
                                <FormControl
                                    className={classes.formControl}
                                    variant="filled"
                                // variant='outlined'
                                >
                                    <InputLabel id="demo-simple-select-label" className={classes.labelStyle}
                                    >enquiry type</InputLabel>
                                    <Select
                                        // className={classes.fieldStyle}
                                        // disableUnderline
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        name='enquiryType'
                                        value={data.enquiryType}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>General</MenuItem>
                                        <MenuItem value={20}>Let's discuss your idea</MenuItem>
                                        <MenuItem value={30}>Improve your product</MenuItem>
                                        <MenuItem value={40}>Data and business analysis</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    className={classes.fieldStyle}
                                    size="small"
                                    id="standard-multiline-static"
                                    label="Optional Enquiry"
                                    InputLabelProps={{
                                        className: classes.labelStyle,
                                    }}
                                    InputProps={{ disableUnderline: true }}
                                    variant="filled"
                                    // variant='outlined'
                                    multiline
                                    rows={5}
                                    name='enquiry'
                                    value={data.enquiry}
                                    onChange={handleChange}
                                // defaultValue="Default Value"
                                />
                            </Grid>
                            {/* <Grid item xs={6} style={{ marginTop: 16 }}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    type="button"
                                    size='large'
                                    onClick={resetForm}
                                    fullWidth
                                // disabled={submitting || pristine}
                                >
                                    Reset
                                </Button>
                            </Grid> */}
                            <Grid item xs={12} style={{ marginTop: 16 }} alignContent='flex-end'>
                                <Box className={classes.buttonBox}>
                                    <Button alignItems='left'
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        size='large'
                                        className={classes.button}
                                        onClick={sendEmail}
                                    // disabled={submitting}
                                    >
                                        Submit
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                    {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
                </form>

            </Box>
        </ThemeProvider>
    );
};

ContactForm.propTypes = {

};

export default ContactForm;