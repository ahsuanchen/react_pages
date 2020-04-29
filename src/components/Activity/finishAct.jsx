import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Header from '../Header/PF_header.jsx';
import { Link } from 'react-router-dom';
import Stepper from 'react-stepper-horizontal'
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
    div: {
        boxSizing: "border-box"
    },
    
    space: {
        marginTop: theme.spacing(15),
    },
    paper: {
        marginTop: theme.spacing(10),
        flexDirection: 'column',
        alignItems: 'center',
        background: '#f4f4f4',
        display: 'flex',
        '& > *': {
            marginTop: theme.spacing(15),
            width: theme.spacing(40),
            height: theme.spacing(30),
        },
    },
    
    submit: {
        //margin: theme.spacing(3, 0, 2),
        margin: theme.spacing(13, 15),
        marginTop : "10%" ,
    },
    
}));




export default function BulidActivity_step2() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Header/>
                <Grid className={classes.space}>
                    <Container component="main" maxWidth="md">
                        <CssBaseline />
                        <div className={classes.paper}>
                        <paper>
                            <Grid align-items-xs-flex-end>
                                <Typography variant="h5" gutterBottom align="center">
                                    已發佈！
                                </Typography>


                            <Typography className={classes.font} variant="h8" variant="overline" display="block" align="center">
                                現在可以到管理活動頁查看您的新活動囉！
                            </Typography>

                            <Button 
                                //type="submit"
                                width="50"
                                className={classes.submit}
                                variant="outlined"
                                align="center"
                                href="./manageActivity"
                                >
                                    查看
                            </Button>
                            </Grid>
                            </paper>
                        </div>

                    </Container>
                </Grid>
        </div>



    );
}
