import React, { useContext, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import { Paper, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Button, Alert } from '@mui/material';
import { makeStyles } from '@mui/styles';
// import { ThemeProvider } from '@mui/private-theming';
// import { createTheme } from '@mui/system';
import { ThemeProvider } from '@mui/system';
// import MuiTh
// import Grid from '@mui/material/Grid';

import ChatContext from '../../Data/ChatContext';
import { reducer, ACTIONS } from '../../Data/store';
// import contact from '../../pages/api/contact';

import contactStyles from '../../assets/jss/contactStyles';
import theme from '../../theme';
import { Box } from '@mui/system';

const useStyles = makeStyles(contactStyles(theme))

const ContactForm = props => {
    const classes = useStyles()

    const [state, dispatch] = useContext(ChatContext)
    // console.log('printing the global state')
    // console.log(state)

    const [sent, setSent] = useState(null)
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        // company: '',
        enquiryType: '',
        enquiry: ''
    })

    const handleChange = (e, topicSelect = null) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
        if (topicSelect === 'chatTopic') {
            const chatValue = e.target.value;
            dispatch({ type: ACTIONS.UPDATE_SELECTED, payload: chatValue })
            setData({ ...data, enquiryType: chatValue })
        }
        // console.log('printing data from form')
        // console.log(data)
    }

    const sendEmail = (e) => {
        e.preventDefault();

        const enquirySelected = state.chatPoints.filter(eq => eq.value == [data.enquiryType])
        const sendData = {
            name: `${data.firstName} ${data.lastName}`,
            email: data.email,
            phone: data.phone,
            topic: enquirySelected.length > 0 ? enquirySelected[0].label : 'No topic',
            enquiry: data.enquiry
        }

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendData)
        }).then(response => {
            console.log(response)
            console.log('okay')
            if (response.status === 200) {
                console.log(sent)
                console.log('sent')
                setSent(true)
                console.log(sent)
                resetForm()
            }
        }).catch((error) => {
            console.error('Error:', error);
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

    const showAlert = (sentRes) => {
        if (sentRes === true) {}
        setTimeout(setSent(null), 3000)
    }

    return (
        <ThemeProvider theme={theme}>
             { sent === true && <Alert severity='success' variant='standard' color='secondary'>Your message was sent successfully</Alert> }
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
                                    name="firstName"
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
                            <Grid item xs={12}>
                                {/* <FormControl
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
                                        // value={state.selectedValue}
                                        value={state.selectedValue}
                                        onChange={handleChange}
                                    >
                                        {state.chatPoints.map(c => 
                                        <MenuItem value={c.value} key={c.value}>{c.label}</MenuItem>)}
                                    </Select>
                                </FormControl> */}
                                <TextField
                                    fullWidth
                                    size='small'
                                    className={classes.fieldStyle}
                                    id="select_topic"
                                    select
                                    // label="Select"
                                    value={state.selectedValue}
                                    onChange={(e) => handleChange(e, 'chatTopic')}
                                // helperText="Please select your currency"
                                >
                                    {state.chatPoints.map(c => (
                                        <MenuItem key={c.value} value={c.value}>
                                            {c.label}
                                        </MenuItem>
                                    ))}
                                    {/* {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))} */}
                                </TextField>
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
                                    <Button // alignItems='left'
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