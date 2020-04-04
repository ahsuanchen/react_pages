import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//import Webcam from "./react-webcam.tsx";





const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            background: 'linear-gradient(45deg, #009688 30%, #b2ff59 90%)',
            //backgroundColor: theme.palette.common.white,
        },
    },

    root: {
        height: '120vh',
        width:'100%',
        marginTop: theme.spacing(10),
        color: 'white',
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
        margin: theme.spacing(3, 0, 2),
    },
    font: {
        color: theme.palette.grey,
    },

    img: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 200,
    },

    button: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },

    location: {
        gridRowGap: '20px',
        
      },
}));

export default function SettingFace() {
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
                        <Typography variant="subtitle1" gutterBottom align="center">
                            設定使用者人臉
                        </Typography>
                        <form className={classes.form} noValidate>
                       
                        {/* <img className={classes.img} src="./img/1.jpg" alt="description of ./img/1.jpg"></img> */}
                        <Grid container justify="center">
                        <input type="file" />
                        </Grid>

                            {/* <Grid>
                            <Button className={classes.button} color="primary">開啟相機</Button>
                            <Button className={classes.button} color="primary">開啟相簿</Button>
                            </Grid> */}
                            <Grid container justify="center"  key={10}>
                            <Button
                                type="submit"
                                width="50"
                                variant="contained"
                                color="primary" 
                                className={classes.submit}
                                href="./signupinfo"
                            >
                                <ChevronLeftIcon />
                                上一步
                            </Button>

                            <Button
                                type="submit"
                                Width="50"
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                href="./finish"
                            >
                                <ChevronRightIcon />
                                下一步
                             </Button>
                             </Grid>

                        </form>
                    </paper>
                    <Grid align-items-xs-flex-end>
                    </Grid>

                </div>

            </Container>
        </Grid>
    );
}