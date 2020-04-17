import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Header from '../Header/PF_header.jsx';
import { Link } from 'react-router-dom';
import Stepper from 'react-stepper-horizontal'
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
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
    div: {
        boxSizing: "border-box"
    },
    topic_part : {
        textAlign : "center" , 
        margin : "2% auto"
    } ,
    button_part : {
        display: "flex" ,
        justifyContent : "space-between"
    } ,
    button_part1 : {
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)',
        color : "#fff" ,
        minWidth : "100px" ,
        '&:hover' : {
            background : "none" ,
            color : "#000"
        } , 
    } ,
    button_part2 : {
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)',
        color : "#fff" ,
        minWidth : "100px" ,
        marginLeft : "80%" ,
        '&:hover' : {
            background : "none" ,
            color : "#000"
        } , 
    } ,
    space: {
        marginTop: theme.spacing(5),
    },

    paper: {
        marginTop: theme.spacing(5),
        flexDirection: 'column',
        alignItems: 'center',
        background: '#f4f4f4',
        display: 'flex',
        '& > *': {
            marginTop: theme.spacing(3),
            width: theme.spacing(40),
            height: theme.spacing(32),
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

export default function BulidActivity_step4() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header/>
            <div>
            <Stepper steps={[{title: '活動類別'},{title: '基本資訊'},{title: '活動內容'},{title: '上傳活動封面照片'}]} activeStep={2} />
            </div>
            <div className={classes.topic_part}>
                <Typography variant="h5">
                    請填寫活動詳細內容
                </Typography>
            </div>
            <Grid className={classes.space}>
                <Container component="main" maxWidth="md">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <paper>
                            <form className={classes.form} noValidate>

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    autoFocus
                                    id="activityMoreContent"
                                    label="更多內容"
                                    variant="outlined"
                                    multiline
                                    rows="8"
                                    placeholder="請填寫更多內容"
                                />

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="activityPrecautions"
                                    label="注意事項"
                                    variant="outlined"
                                    multiline
                                    rows="5"
                                    placeholder="請填寫注意事項（限五十字）"
                                />

                                <TextField
                                        margin="normal"
                                        fullWidth
                                        label="參考網站名稱（例：Facebook）"
                                        id="activityLinkName"
                                        name="activityLinkName"
                                        variant="outlined"
                                        //onChange={e=>setactivityLinkName(e.target.value)}
                                />

                                <TextField
                                        margin="normal"
                                        fullWidth
                                        type="url"
                                        label="參考網站連結"
                                        id="activityLink"
                                        name="activityLink"
                                        variant="outlined"
                                        //onChange={e=>setactivityLink(e.target.value)}
                                />


                                <Grid item xs={12} sm={6} className={classes.button_part}>
                                    <Box lineHeight="normal" m={1}>
                                        <Button 
                                            className={classes.button_part1}
                                            component={Link}
                                            to="/newInfo"
                                        >
                                            上一步
                                        </Button>
                                    </Box>
                                    <Box lineHeight="normal" m={1}>
                                        <Button
                                            type="submit"
                                            className={classes.button_part2}
                                            component={Link}
                                            to="/newPic"
                                        >
                                            下一步
                                        </Button>
                                    </Box>
                                </Grid>
                                {/* <IconButton color="primary" aria-label="next step" href="./new3">
                                    <ArrowBackIcon />
                                </IconButton>
                                <IconButton color="primary" aria-label="next step" href="./">
                                    <ArrowForwardIcon />
                                </IconButton> */}

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
