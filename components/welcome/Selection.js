import React from 'react';
import PropTypes from 'prop-types';
import { Button, MenuItem, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';


import landingStyles from '../../assets/jss/landingStyles';
import theme from '../../theme';
import { ThemeProvider } from '@mui/private-theming';
import { Box } from '@mui/system';

const useStyles = makeStyles(landingStyles)

const currencies = [
  { value: 10, label: 'General' },
  { value: 20, label: "Let's discuss your idea" },
  { value: 20, label: 'Improve your product' },
  { value: 20, label: 'Data and business analysis' },
];

const Selection = props => {
  const classes = useStyles()

  const [currency, setCurrency] = React.useState(10);

  const handleChange = (event) => {
    setCurrency(event.target.value);
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
        value={currency}
        onChange={handleChange}
      // helperText="Please select your currency"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box className={classes.buttonBox}>
        <Button variant='contained' size='large' className={classes.button} >
          Let's talk
        </Button>
      </Box>

    </ThemeProvider>
  );
};

Selection.propTypes = {

};

export default Selection;