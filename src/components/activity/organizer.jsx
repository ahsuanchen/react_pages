import React from './node_modules/react';
import { makeStyles } from './node_modules/@material-ui/core/styles';
import AppBar from './node_modules/@material-ui/core/AppBar';
import Toolbar from './node_modules/@material-ui/core/Toolbar';
import Typography from './node_modules/@material-ui/core/Typography';
import IconButton from './node_modules/@material-ui/core/IconButton';
import TextField from './node_modules/@material-ui/core/TextField';
//import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ChevronLeftIcon from './node_modules/@material-ui/icons/ChevronLeft';
import ArrowForwardIcon from './node_modules/@material-ui/icons/ArrowForward';
import CssBaseline from './node_modules/@material-ui/core/CssBaseline';
import Grid from './node_modules/@material-ui/core/Grid';

import Container from './node_modules/@material-ui/core/Container';



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
        background: 'lightgrey',
        display: 'flex',
        '& > *': {
            marginTop: theme.spacing(5),
            //margin: theme.spacing(1),
            width: theme.spacing(40),
            height: theme.spacing(30),
        },
    },


    form: {
        width: '100%',
        height: theme.spacing(1),


    },
    submit: {
        margin: theme.spacing(3, 0, 2),
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
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Typography component="h1" variant="h5" align="center">
                    新增主辦單位
                    </Typography>
                <div className={classes.paper}>
                    <paper>
                        <form className={classes.form} noValidate>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="主辦單位名稱"
                                name="name"
                                autoFocus
                                variant="outlined"
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="主辦單位信箱"
                                name="email"
                                autoFocus
                                variant="outlined"
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="phone"
                                label="主辦單位電話號碼"
                                name="phone"
                                autoFocus
                                variant="outlined"
                            />

                            <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="intro"
                                    label="主辦單位簡介"
                                    multiline
                                    rows="4"
                                    placeholder="上限一百字"
                                    variant="outlined"
                            />


                                <IconButton color="primary" aria-label="next step" href="./new1-button">
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
