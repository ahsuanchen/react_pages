import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Header from '../Header/PF_header1.jsx';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    div: {
        boxSizing: "border-box"
    },
    topic_part : {
        textAlign : "center" , 
        margin : "2% auto"
    } , 
}));

export default function BulidActivity() {

    const classes = useStyles();

    return (
        <div className={classes.div}>
            <Header/>
            <div className={classes.topic_part}>
                <Typography variant="h4">
                    Step1 : 活動類別
                </Typography>
                <br/>
                <Typography variant="h5">
                    (選擇活動類別)
                </Typography>
            </div>
            <div>
                <Container>

                </Container>
            </div>
        </div>
    );
}