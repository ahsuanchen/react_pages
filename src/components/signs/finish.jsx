import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            background: 'linear-gradient(45deg, #009688 30%, #b2ff59 90%)',
            //backgroundColor: theme.palette.common.white,
        },
    },

    root: {
        height: '100vh',
        margin: theme.spacing(10, 15),
        //borderRadius: 10,
        //borderColor: ,
        //background: 'linear-gradient(45deg, #00796b 30%, #00acc1 90%)',

    },


    paper: {
        marginTop: theme.spacing(8),
        flexDirection: 'column',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #81c784 30%, #9ad29c 90%)',
        display: 'flex',
        '& > *': {
            marginTop: theme.spacing(5),
            //margin: theme.spacing(1),
            width: theme.spacing(40),
            height: theme.spacing(20),
        },
    },


    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        height: theme.spacing(1),


    },
    submit: {
        margin: theme.spacing(13, 15),
    },

    icon: {
        //size: '20',
        margin: theme.spacing(5, 18),
    },
    font: {
        color: theme.palette.grey,
    },

    button: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
}));

export default function Finish() {
    const classes = useStyles();

    return (
        <Grid className={classes.root}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Typography className={classes.font} component="h1" variant="h5" align="center">
                    註 冊
                    </Typography>
                <div className={classes.paper}>
                    <paper>
                        <CheckCircleOutlineIcon className={classes.icon}></CheckCircleOutlineIcon>

                        <Typography variant="h5" gutterBottom align="center">
                            完成註冊
                        </Typography>


                            <Typography className={classes.font} variant="overline" display="block" align="center">
                                現在可以登入並使用囉！
                            </Typography>

                            <Button 
                                //type="submit"
                                width="50"
                                className={classes.submit}
                                variant="outlined"
                                align="center"
                                href="./signinside"
                                >
                                    登入
                            </Button>

                    </paper>
                    <Grid align-items-xs-flex-end>
                    </Grid>

                </div>

            </Container>
        </Grid>
    );
}