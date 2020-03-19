import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './header3.jsx';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import grey from '@material-ui/core/colors/grey';
//import tileData from './tileData';
import image from './logo1.png';



const useStyles = makeStyles(theme => ({
    root: {

        flexGrow: 1,
    },

    gridList: {
        width: 500,
        height: 450,
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },


    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 200,
        background: grey['300'],
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },

    control: {
        padding: theme.spacing(2),
    },

    menuButton: {
        marginRight: theme.spacing(2),
    },

    submit: {
        margin: theme.spacing(3, 0, 2),
    },


}));

export default function SpacingGrid() {

    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Header/>
            <CssBaseline />
            <Typography component="h1" variant="h5" align="center">
                基本資訊
            </Typography>

            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <ArrowBackIcon />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item >
                                
                                <Typography className={classes.img} variant="body2" style={{ cursor: 'pointer' }}>
                                    娛樂
                                </Typography>

                                
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                
                
            </Paper>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <ArrowBackIcon />
                            <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item>
                                
                                <Typography className={classes.img} variant="body2" style={{ cursor: 'pointer' }}>
                                    娛樂
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            <Container maxWidth="sm">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '20vh', width: '20vh' }} />
            </Container>

            

            <IconButton color="primary" aria-label="next step" href="./signup.js">
                <ArrowBackIcon />
            </IconButton>
            <IconButton color="primary" aria-label="next step" href="./signup.js">
                <ArrowForwardIcon />
            </IconButton>
        </div>
    );
}