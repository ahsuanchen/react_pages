import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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
        height: '90vh',
        width:'100%',
        marginTop: theme.spacing(10),
        color: 'white',
        //borderRadius: 10,
        //borderColor: ,
        //background: 'linear-gradient(45deg, #00796b 30%, #00acc1 90%)',

    },


    paper: {
        marginTop: theme.spacing(5),
        flexDirection: 'column',
        alignItems: 'center',
        color:'white',
        background: 'linear-gradient(45deg, #81c784 30%, #9ad29c 90%)',
        display: 'flex',
        '& > *': {
            marginTop: theme.spacing(5),
            width: theme.spacing(40),
            height: theme.spacing(20),
        },
    },

    // paper: {
    //     marginTop: theme.spacing(4),
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     color:'white',
    //     background: 'linear-gradient(45deg, #81c784 30%, #9ad29c 90%)',
    //     display: 'flex',
    //     '& > *': {
    //         marginTop: theme.spacing(5),
    //         width: theme.spacing(70),
    //         height: theme.spacing(20),
    //     },
    // },


    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        height: theme.spacing(1),


    },
    submit: {
        margin: theme.spacing(10, 12),
        color: 'white',
        borderColor:'white' ,
        fontFamily : "微軟正黑體"
    },

    icon: {
        //size: '20',
        margin: theme.spacing(5, 15),
    },
    font: {
        color: theme.palette.grey ,
        fontFamily : "微軟正黑體"
    },

    button: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
    word : {
        fontFamily : "微軟正黑體"
    } ,
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
                <Paper className={classes.paper}>
                <Grid container justify="center">
                        <Container className={classes.container}>
                        <CheckCircleOutlineIcon className={classes.icon}></CheckCircleOutlineIcon>

                        <Typography className={classes.word} variant="h5" gutterBottom align="center">
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
                                href="./signin"
                                >
                                    登入
                            </Button>
</Container>
</Grid>
                    <Grid align-items-xs-flex-end>
                    </Grid>

                </Paper>

            </Container>
        </Grid>
    );
}