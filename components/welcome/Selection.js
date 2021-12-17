import React, { useContext } from 'react';
import Link from 'next/link'

import PropTypes from 'prop-types';
import { Button, MenuItem, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';


import landingStyles from '../../assets/jss/landingStyles';
import theme from '../../theme';
import { ThemeProvider } from '@mui/private-theming';
import { Box } from '@mui/system';

import ChatContext from '../../Data/ChatContext';
import { ACTIONS } from '../../Data/store';

const useStyles = makeStyles(landingStyles)

// const currencies = [
//   { value: 10, label: 'General' },
//   { value: 20, label: "Let's discuss your idea" },
//   { value: 20, label: 'Improve your product' },
//   { value: 20, label: 'Data and business analysis' },
// ];

const Selection = props => {
  const classes = useStyles()
  // const value = useContext(ChatContext)
  const [state, dispatch] = useContext(ChatContext)
  
  // console.log('printing context value - dispatch')
  // console.log(state)
  // console.log('end of print')

  // const initialValue = state.selectedValue
  const options = state.chatPoints
  // console.log(options)

  // const globalStore = useContext(store)
  // console.log('printing the global store')
  // console.log(globalStore.state)

  // const [chat, setChat] = React.useState(state.selectedValue);

  const handleChange = (e) => {
    // console.log(event.target.value)
    // setChat(event.target.value);
    const chatValue = e.target.value; 
    dispatch({type: ACTIONS.UPDATE_SELECTED, payload: chatValue})
    // contactSection
  };

  return (
    <ThemeProvider theme={theme}>
      <TextField
        fullWidth
        size='small'
        className={classes.optionField}
        id="select_topic"
        select
        // label="Select"
        value={state.selectedValue}
        onChange={(e) => handleChange(e)}
      // helperText="Please select your currency"
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
        {/* {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))} */}
      </TextField>
      <Box className={classes.buttonBox}>
        {/* <Link href='#contactForm'> */}
        <Button href='#contactSection' variant='contained' size='large' className={classes.button} 
        // onClick={()=> dispatch({type: ACTIONS.UPDATE_SELECTED, payload: chat}) } 
        >
          Let's talk
        </Button>
        {/* </Link> */}
      </Box>

    </ThemeProvider>
  );
};

Selection.propTypes = {

};

export default Selection;