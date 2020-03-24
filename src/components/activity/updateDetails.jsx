import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Header from './header3.jsx';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
//import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import Container from '@material-ui/core/Container';



const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,

    },
    space: {
        marginTop: theme.spacing(5),
    },

    paper: {
        marginTop: theme.spacing(5),
        flexDirection: 'column',
        alignItems: 'center',
        background: '#dcedc8',
        display: 'flex',
        '& > *': {
            marginTop: theme.spacing(3),
            width: theme.spacing(40),
            height: theme.spacing(43),
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
            <Header/>
            <Grid className={classes.space}>
                <Container component="main" maxWidth="md">
                    <CssBaseline />
                    <Typography component="h1" variant="h5" align="center">
                        修改活動內容
                    </Typography>
                    <div className={classes.paper}>
                        <paper>
                            <form className={classes.form} noValidate>
                            <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="活動摘要"
                                    name="name"
                                    variant="outlined"
                                    multiline
                                    rows="4"
                                    placeholder="請填寫活動摘要（限三十字）"
                                />

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="活動簡介"
                                    name="name"
                                    variant="outlined"
                                    multiline
                                    rows="4"
                                    placeholder="請填寫活動簡介（限一千字）"
                                />

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="更多內容"
                                    name="name"
                                    variant="outlined"
                                    multiline
                                    rows="8"
                                    placeholder="請填寫更多內容"
                                />


                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="notice"
                                    label="注意事項"
                                    name="noticed"
                                    variant="outlined"
                                    multiline
                                    rows="5"
                                    placeholder="請填寫注意事項（限五十字）"
                                />

                                
                                <IconButton color="primary" aria-label="next step" href="./updateInfo">
                                    <ArrowBackIcon />
                                </IconButton>
                                <IconButton color="primary" aria-label="next step" href="./">
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
