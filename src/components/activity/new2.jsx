import React from './node_modules/react';
import { makeStyles } from './node_modules/@material-ui/core/styles';
import AppBar from './node_modules/@material-ui/core/AppBar';
import Toolbar from './node_modules/@material-ui/core/Toolbar';
import Typography from './node_modules/@material-ui/core/Typography';
import IconButton from './node_modules/@material-ui/core/IconButton';
import Button from './node_modules/@material-ui/core/Button';
//import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ChevronLeftIcon from './node_modules/@material-ui/icons/ChevronLeft';
import ArrowBackIcon from './node_modules/@material-ui/icons/ArrowBack';
import ArrowForwardIcon from './node_modules/@material-ui/icons/ArrowForward';
import CssBaseline from './node_modules/@material-ui/core/CssBaseline';
import Grid from './node_modules/@material-ui/core/Grid';
import Container from './node_modules/@material-ui/core/Container';
import grey from './node_modules/@material-ui/core/colors/grey';



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },

    paper: {
        marginTop: theme.spacing(8),

        flexDirection: 'column',
        alignItems: 'center',
        background: grey['300'],
        display: 'flex',
        '& > *': {
            marginTop: theme.spacing(5),
            //margin: theme.spacing(1),
            width: theme.spacing(30),
            height: theme.spacing(20),
        },
    },


    form: {
        width: '100%',
        height: theme.spacing(1),


    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

    margin: {
        margin: theme.spacing(2),
    },


}));

export default function DenseAppBar() {
    const classes = useStyles();



    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <ChevronLeftIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        返回首頁
          </Typography>
                </Toolbar>
            </AppBar>
            <Grid >
                <Container component="main" maxWidth="md">
                    <CssBaseline />
                    <Typography component="h1" variant="h5" align="center">
                        封面照
                    </Typography>
                    <div className={classes.paper}>
                        <paper>
                            <form className={classes.form} noValidate>
                            <Button 
                                //type="submit"
                                width="50"
                                className={classes.submit}
                                variant="outlined"
                                align="center"
                                >
                                    上傳檔案
                            </Button>


                                <IconButton color="primary" aria-label="next step" href="./new1">
                                    <ArrowBackIcon />
                                </IconButton>
                                <IconButton color="primary" aria-label="next step" href="./new3">
                                    <ArrowForwardIcon />
                                </IconButton>

                            </form>
                        </paper>
                        <Grid align-items-xs-flex-end>
                        </Grid>

                    </div>

                </Container>
            </Grid>
        </div>



    );
}
