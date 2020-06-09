import React , {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/PF_header.jsx';
import LeftBar from 'components/Profile/leftbar.jsx';
import { Link , useHistory } from 'react-router-dom';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Draggable from 'react-draggable';
import ErrorIcon from '@material-ui/icons/Error';
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles(theme => ({
    div : {
        boxSizing : "border-box"
    } ,
    word : {
        fontFamily : "微軟正黑體"
    } ,
    content_part : {
        display : "flex" ,
        justifyContent: "center",
    } ,
    content : {
        margin : "2%" ,
    } ,
    activity_part : {
        margin : "5% auto" ,
    } ,
    topic_part : {
        margin : "2%" ,
        borderRight : "2px solid"
    } ,
    button_part : {
        margin : "auto 2%" ,
        display: "flex" ,
        justifyContent : "center"
    } ,
    button : {
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)' ,
        color : "#fff" ,
        fontFamily : "微軟正黑體"
    } ,
    Exclamation_Mark : {
        fontSize : "40px" ,
        color : "red" ,
    } ,
    dig_butoon : {
        color : "#000" ,
        fontFamily : "微軟正黑體" ,
        '&:hover' : {
          color : '#00AEAE'
        }
    } ,
    finish_part : {
        background : "#D0D0D0" ,
    } ,
    alert: {
        marginBottom : 100 , 
    }
  }));

  function PaperComponent(props) {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'} disabled>
        <Paper style={{minWidth : '600px' , minHeight : '200px' ,}} {...props} />
      </Draggable>
    );
  }

export default function SignupSituation() {
    const classes = useStyles();

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    // 取消報名成功
    const [openInfo, setOpenInfo] = React.useState(false);
    const ErrClose = () => {
        setOpenInfo(false);
    };  

    const [registration, setRegistration] = useState([]);
    useEffect(() => {
        async function fetchDataReg() {
                let url = "/api/login/name"
                await axios.get(url)
                .then(result => {
                    axios.get("/api/registration/member/" + result.data.memberEmail)
                    .then(result => {
                        setRegistration(result.data);
                        // console.log(result);
                    })
                    .catch(err => {
                        console.log(err.response.status);
                    })
                })
                .catch(err => {
                    console.log(err.response.status);
                })
        }
        fetchDataReg();
    }, []);

    const[cancel , setCancel] = useState(0);

    const [open, setOpen] = React.useState(false);
    const handleOpen = (ainum,event) => {
        // console.log(ainum);
        setCancel(ainum);
        setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const handleSubmit = (AInum) => {
        console.log(AInum);
        let url = "/api/registration/cancel/";
        url = url + AInum;
        axios.patch(url)
        .then(res => {
            setOpenInfo(true);
            window.location.reload();
        })
        .catch(function(error){
            console.log(error.response.status);
        });
    }

    const activity_End_or_not = new Date().getTime();

    return (
        <div className={classes.div}>
            <Header />
            <div className={classes.content_part}>
                <LeftBar/>
                <Container className={classes.content}>
                    <div>
                        <Typography variant="h4" className={classes.word}>
                            報 名 狀 況
                        </Typography>
                        <hr />
                    </div>
                    <div className={classes.activity_part}>
                        <Box lineHeight="normal" m={1}>
                            <ExpansionPanel defaultExpanded>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1c-content"
                                    id="panel1c-header"
                                >
                                <div>
                                    <Typography variant="h6" className={classes.word}>
                                        已報名
                                    </Typography>
                                </div>
                                </ExpansionPanelSummary>
                                {registration.map(registration =>
                                    ((new Date(registration.activity.activityEndDate).getTime() >= activity_End_or_not) &&
                                    registration.cancelRegistration === null )
                                    ?
                                <ExpansionPanelDetails>
                                    <Grid container spacing={5}>
                                        <Grid item xs={12}>
                                            <Paper>
                                                <Grid container>
                                                    <Grid item xs={12} sm={8} className={classes.topic_part}>
                                                        <Typography variant="h5" className={classes.word}>
                                                            {registration.activity.activityName}
                                                        </Typography>
                                                        <br/>
                                                        <Typography variant="h6" className={classes.word}>
                                                            <FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;
                                                            {registration.activity.activitySpace}
                                                        </Typography>
                                                        <br/>
                                                        <Typography variant="h6" className={classes.word}>
                                                            <FontAwesomeIcon icon={faClock} />&nbsp;
                                                            {registration.activity.activityStartDateString} ~ {registration.activity.activityEndDateString}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} sm={3} className={classes.button_part}>
                                                        <Box lineHeight="normal" m={1}>
                                                            <Button
                                                                variant="contained"
                                                                className={classes.button}
                                                                component={Link}
                                                                to={"/ActivityInformation?" + registration.activity.activityId}
                                                            >
                                                                活動頁面
                                                            </Button>
                                                            <br /><br />
                                                            <Button
                                                                variant="contained"
                                                                className={classes.button}
                                                                component={Link}
                                                                to={"/editSignupInformation?" + registration.ainum}
                                                            >
                                                                更改報名
                                                            </Button>
                                                        </Box>
                                                        <Box lineHeight="normal" m={1}>
                                                            <Button
                                                                variant="contained"
                                                                className={classes.button}
                                                                component={Link}
                                                                to={"/myTicket?" + registration.activity.activityId + "&" + registration.ainum}
                                                            >
                                                                我的票券
                                                            </Button>
                                                            <br /><br />
                                                            <Button
                                                                variant="contained"
                                                                className={classes.button}
                                                                onClick={(event) => handleOpen(registration.ainum , event)}

                                                            >
                                                                取消報名
                                                            </Button>
                                                            <Dialog
                                                                open={open}
                                                                onClose={handleClose}
                                                                PaperComponent={PaperComponent}
                                                                aria-labelledby="draggable-dialog-title"
                                                            >
                                                                <DialogTitle id="draggable-dialog-title">
                                                                    <Typography variant="h5" className={classes.word}>
                                                                        <ErrorIcon className={classes.Exclamation_Mark} />
                                                                        取消報名
                                                                    </Typography>
                                                                </DialogTitle>
                                                                <DialogContent>
                                                                    <DialogContentText className={classes.word} style={{fontSize:"20px"}}>
                                                                        您確定要取消該活動報名嗎？
                                                                    </DialogContentText>
                                                                </DialogContent>
                                                                <DialogActions>
                                                                    <Button autoFocus onClick={handleClose} className={classes.dig_butoon}>
                                                                        取消
                                                                    </Button>
                                                                    <Button onClick={() => handleSubmit(cancel)} className={classes.dig_butoon}>
                                                                        確定
                                                                    </Button>
                                                                </DialogActions>
                                                            </Dialog>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </ExpansionPanelDetails>
                                : "")}
                            </ExpansionPanel>
                            <ExpansionPanel defaultExpanded className={classes.finish_part}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1c-content"
                                    id="panel1c-header"
                                >
                                <div>
                                    <Typography variant="h6" className={classes.word}>
                                        已結束
                                    </Typography>
                                </div>
                                </ExpansionPanelSummary>
                                {registration.map(registration =>
                                    (new Date(registration.activity.activityEndDate).getTime() < activity_End_or_not) ?
                                <ExpansionPanelDetails>
                                    <Grid container spacing={5}>
                                        <Grid item xs={12}>
                                            <Paper>
                                                <Grid container>
                                                    <Grid item xs={12} sm={8} className={classes.topic_part}>
                                                        <Typography variant="h5" className={classes.word}>
                                                            {registration.activity.activityName}
                                                        </Typography>
                                                        <br/>
                                                        <Typography variant="h6" className={classes.word}>
                                                            <FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;
                                                            {registration.activity.activitySpace}
                                                        </Typography>
                                                        <br/>
                                                        <Typography variant="h6" className={classes.word}>
                                                            <FontAwesomeIcon icon={faClock} />&nbsp;
                                                            {registration.activity.activityStartDateString} ~ {registration.activity.activityEndDateString}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} sm={3} className={classes.button_part}>
                                                        <Box lineHeight="normal" m={1}>
                                                            <Button
                                                                variant="contained"
                                                                className={classes.button}
                                                                component={Link}
                                                                to={"/ActivityInformation?" + registration.activity.activityId}
                                                            >
                                                                查看資訊
                                                            </Button>
                                                            <br /><br />
                                                            <Button
                                                                variant="contained"
                                                                className={classes.button}
                                                                component={Link}
                                                                to={"/ActivityPhoto?" + registration.activity.activityId}
                                                            >
                                                                活動照片/影片
                                                            </Button>
                                                        </Box>
                                                        <Box lineHeight="normal" m={1}>
                                                            <Button
                                                                variant="contained"
                                                                className={classes.button}
                                                                component={Link}
                                                                to={"/FeedBack?" + registration.activity.activityId}
                                                            >
                                                                給予回饋
                                                            </Button>
                                                            <br /><br />
                                                            <Button
                                                                variant="contained"
                                                                className={classes.button}
                                                                component={Link}
                                                                to={"/MyPhoto?" + registration.activity.activityId}
                                                            >
                                                                我的照片
                                                            </Button>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </ExpansionPanelDetails>
                                : "" )}
                            </ExpansionPanel>
                        </Box>
                    </div>
                </Container>
            </div>
            <Snackbar open={openInfo} autoHideDuration={2000} onClose={ErrClose} className={classes.alert}>
                <Alert severity="info" className={classes.word}>
                    您已取消報名該活動！
                </Alert>
            </Snackbar>
        </div>
    );
}
