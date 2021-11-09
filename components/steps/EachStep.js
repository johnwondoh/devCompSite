import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Card, CardHeader, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { GrWorkshop } from 'react-icons/gr';
import { IoCodeWorkingSharp } from 'react-icons/io5'
import { FaNetworkWired } from 'react-icons/fa'
import AccountTreeIcon from '@mui/icons-material/AccountTree';
// import {GiComputing} from 'react-icons/gi'

import stepStyles from '../../assets/jss/stepStyles';
import theme from '../../theme';
import { makeStyles } from '@mui/styles';
import { ThemeProvider } from '@mui/system';

const useStyles = makeStyles(stepStyles)

const EachStep = props => {
    const classes = useStyles()
    const { title, more, id } = props
    const iconList = [<QuestionAnswerIcon />, <AccountTreeIcon />, <IoCodeWorkingSharp />]
    // console.log(id)
    const getIconAreaColor = (index) => {
        if (index === 1) {
            // console.log('true')
            return classes.avatarAreaColor1
        } else { console.log('false - not equal') }
        if (index === 2) return classes.avatarAreaColor2
        if (index === 3) return classes.avatarAreaColor3
    }
    console.log(getIconAreaColor[id])
    return (
        <ThemeProvider theme={theme}>
            <ListItem className={classes.listItem}>
                {/* <ListItemAvatar className={[classes.avatarArea, getIconAreaColor(id)].join(' ')}> */}
                <ListItemAvatar className={classes.avatarArea}>
                    <Avatar className={classes.avatar}>
                        {/* <QuestionAnswerIcon /> */}
                        {/* <IoCodeWorkingSharp /> */}
                        {iconList[id - 1]}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText className={classes.listItemText}
                    disableTypography
                    primary={ <Typography variant='h6' component='h6'> {title} </Typography>}
                    secondary= {<Typography variant='body2' component='p'> {more} </Typography> } />
                {/* <ListItemText className={classes.listItemText}
                    primary={title}
                    secondary={more} /> */}

                {/* </ListItemText> */}
            </ListItem>
        </ThemeProvider>
    );
};

EachStep.propTypes = {

};

{/* <Card elevation={0} className={classes.stepCardRoot}>
                <CardHeader
                    className={classes.stepCardHeader}
                    avatar={
                        <Avatar>
                            <QuestionAnswerIcon />
                        </Avatar>
                    }
                    title={title}
                    subheader={more}
                />
            </Card> */}

export default EachStep;