import React , { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Header from '../Header/PF_header.jsx';
import LeftBar from 'components/Profile/leftbar.jsx';
import { Link , useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Draggable from 'react-draggable';
import ErrorIcon from '@material-ui/icons/Error';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import CropFreeIcon from '@material-ui/icons/CropFree';
import ComputerIcon from '@material-ui/icons/Computer';
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles(theme => ({
    div : {
        boxSizing : "border-box"
    } ,
    content_part : {
        display : "flex" ,
        justifyContent: "center",
    } ,
    word : {
        fontFamily : "微軟正黑體"
    } ,
    table : {
        margin : "auto" ,
    } ,
    content : {
        margin : "2%" ,
        overflow: "visible" ,
    } ,
    activity_part : {
        margin : "5% auto" ,
    } ,
    topic_part : {
        margin : "2%" ,
    } ,
    button_part : {
        margin : "auto 2%" ,
        display: "grid" ,
        justifyContent : "center" ,
    } ,
    button : {
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)' ,
        color : "#fff" ,
        minWidth : "125px" ,
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
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    choose_type : {
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)' ,
        width : "250px" ,
        height : "250px" ,
        color : "#E0E0E0" ,
        fontSize : "32px" ,
        textAlign : "center" ,
        display: 'flex',
        alignItems: 'center',
    } ,
    icon_part : {
        fontSize : "150px"
    } ,
    card_Title : {
        fontSize : "32px" ,
        fontFamily : "微軟正黑體"
    } ,
    open_paper : {
        maxWidth : '500px' ,
        maxHeight : '600px' ,
    } ,
    link : {
        textDecoration : "none" ,
        color : "#000" ,
        '&:hover' : {
            color : '#00AEAE'
        } ,
    } ,
    // finish_part : {
    //     background : "#D0D0D0" ,
    // } ,
    alert: {
        marginBottom : 100
    }
  }));

function PaperComponent(props) {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'} disabled>
        <Paper style={{minWidth : '600px' , minHeight : '200px' ,}} {...props} />
      </Draggable>
    );
}

function getUserMedia(constraints) {
    // if Promise-based API is available, use it
    if (navigator.mediaDevices) {
      return navigator.mediaDevices.getUserMedia(constraints);
    }

    // otherwise try falling back to old, possibly prefixed API...
    var legacyApi = navigator.getUserMedia || navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia || navigator.msGetUserMedia;

    if (legacyApi) {
      // ...and promisify it
      return new Promise(function (resolve, reject) {
        legacyApi.bind(navigator)(constraints, resolve, reject);
      });
    }
}

function getStream (type) {
    if (!navigator.mediaDevices && !navigator.getUserMedia && !navigator.webkitGetUserMedia &&
      !navigator.mozGetUserMedia && !navigator.msGetUserMedia) {
      alert('User Media API not supported.');
      return;
    }

    var constraints = {};
    constraints[type] = true;

    getUserMedia(constraints)
    .then(function (stream) {
        var mediaControl = document.querySelector(type);

        if ('srcObject' in mediaControl) {
          mediaControl.srcObject = stream;
        }
        else if (navigator.mozGetUserMedia) {
          mediaControl.mozSrcObject = stream;
        }
        else {
          mediaControl.src = (window.URL || window.webkitURL).createObjectURL(stream);
        }
        mediaControl.play();
    })
    .catch(function (err) {
        alert('Error: ' + err);
    });
}

export default function ManageActivity() {
    const classes = useStyles();

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    // 取消報名成功
    const [openInfo1 , setOpenInfo1] = React.useState(false);
    const [openInfo2 , setOpenInfo2] = React.useState(false);
    const ErrClose = () => {
        setOpenInfo1(false);
        setOpenInfo2(false);
    };  

    const [activity, setActivity] = useState([]);
    useEffect(() => {
        async function fetchDataAct() {
                let url = "/api/login/name"
                await axios.get(url)
                .then(res => {
                    axios.get("/api/activity/organizer/" + res.data.memberEmail)
                    .then(result => {
                        setActivity(result.data);
                        console.log(result);
                    })
                    .catch(err => {
                        console.log(err.response.status);
                    })
                })
                .catch(err => {
                    console.log(err.response.status);
                })
        }
        fetchDataAct();
    }, []);

    const [Cancel , setCancel] = useState(0);
    const [Cancelopen, setCancelOpen] = React.useState(false);
    const handleCancelOpen = (ActID , event) => {
        setCancel(ActID);
        setCancelOpen(true);
    };
    const handleCancelClose = () => {
      setCancelOpen(false);
    };
    const handleCancel = (ActID) => {
        let url = "/api/activity/cancel/";
        url = url + ActID;
        axios.patch(url)
        .then(res => {
            setOpenInfo1(true);
            window.location.reload();
        })
        .catch(function(error){
            console.log(error.response.status);
        });
    }

    const [Delete , setDelete] = useState(0);
    const [Deleteopen, setDeleteOpen] = React.useState(false);
    const handleDeleteOpen = (ActID , event) => {
        setDelete(ActID);
        setDeleteOpen(true);
    };
    const handleDeleteClose = () => {
      setDeleteOpen(false);
    };
    const handleDelete = (ActID) => {
        let url = "/api/activity/";
        url = url + ActID;
        axios.delete(url)
        .then(res => {
            setOpenInfo2(true);
            window.location.reload();
        })
        .catch(function(error){
            console.log(error.response.status);
        });
    }

    const [sendActID , setSendActID] = useState(0);
    const [checkInModelopen, setCheckInModelOpen] = React.useState(false);
    const handleCheckInModelOpen = (ActID , event) => {
        setSendActID(ActID) ;
        setCheckInModelOpen(true);
    };
    const handleCheckInModelClose = () => {
      setCheckInModelOpen(false);
    };

    const [manualCheckInModelopen, setManualCheckInModelOpen] = React.useState(false);
    const handleManualCheckInModelOpen = (ActID , event) => {
        setSendActID(ActID) ;
        setManualCheckInModelOpen(true);
    };
    const handleManualCheckInModelClose = () => {
      setManualCheckInModelOpen(false);
    };

    const [checkOutModelopen, setCheckOutModelOpen] = React.useState(false);
    const handleCheckOutModelOpen = (ActID , event) => {
        setSendActID(ActID) ;
        setCheckOutModelOpen(true);
    };
    const handleCheckOutModelClose = () => {
      setCheckOutModelOpen(false);
    };

    const [manualCheckOutModelopen, setManualCheckOutModelOpen] = React.useState(false);
    const handleManualCheckOutModelOpen = (ActID , event) => {
        setSendActID(ActID) ;
        setManualCheckOutModelOpen(true);
    };
    const handleManualCheckOutModelClose = () => {
      setManualCheckOutModelOpen(false);
    };

    const [CameraModelInopen, setCameraModelInopen] = React.useState(false);
    const CameraModelCheckInopen = (ActID , event) => {
        setSendActID(ActID) ;
        setCameraModelInopen(true);
        let openEngineUrl = "/api/engine" ;
        let url = "/api/signIn/" ;
        url = url + ActID ;
        getStream("video")
        axios.get(openEngineUrl)
        .then(res => {
            axios.post(url)
            .then(res => {
                alert("簽到成功");
                window.location.reload();
            })
            .catch(function(error){
                alert("簽到失敗或該使用者未參加此活動");
                console.log(error.response.status);
            });
        })
        .catch(function(error){
            console.log(error.response.status);
        });
    };
    const CameraModelCheckInClose = () => {
        setCameraModelInopen(false);
    };

    const [CameraModelOutopen, setCameraModelOutopen] = React.useState(false);
    const CameraModelCheckOutopen = (ActID , event) => {
        setSendActID(ActID) ;
        setCameraModelOutopen(true);
        let openEngineUrl = "/api/engine" ;
        let url = "/api/signOut/" ;
        url = url + ActID ;
        getStream("video")
        axios.get(openEngineUrl)
        .then(res => {
            axios.post(url)
            .then(res => {
                alert("簽退成功");
                window.location.reload();
            })
            .catch(function(error){
                alert("簽退失敗或該使用者未參加此活動");
                console.log(error.response.status);
            });
        })
        .catch(function(error){
            console.log(error.response.status);
        });
    };
    const CameraModelCheckOutClose = () => {
        setCameraModelOutopen(false);
    };

    const activity_End_or_not = new Date().getTime();

    return (
        <div className={classes.div}>
            <Header />
            <div className={classes.content_part}>
                <LeftBar/>
                <Container className={classes.content}>
                    <div>
                        <Typography variant="h4" className={classes.word}>
                            管 理 活 動
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
                                        我所主辦的活動
                                    </Typography>
                                </div>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Grid container spacing={5}>
                                        <Grid item xs={12}>
                                            <Paper>
                                                <Table className={classes.table}>
                                                    <TableHead stickyHeader>
                                                        <TableRow>
                                                            <TableCell className={classes.word} align="center">活動名稱</TableCell>
                                                            <TableCell className={classes.word} align="center">活動地點</TableCell>
                                                            <TableCell className={classes.word} align="center">活動時間</TableCell>
                                                            <TableCell className={classes.word} align="center">可報名總額 / 已報名人數</TableCell>
                                                            <TableCell className={classes.word} align="center">活動狀況</TableCell>
                                                            <TableCell className={classes.word} align="center">功能</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    {activity.map(activity =>
                                                    <TableBody className={
                                                        [(new Date(activity.activityEndDate).getTime() < activity_End_or_not)
                                                        ? classes.finish_part : ""]}>
                                                            {activity.activityCancelTime === null
                                                            ?
                                                        <TableRow hover>
                                                            <TableCell className={classes.word} align="center">
                                                                <Link className={classes.link} to={"/ActivityInformation?" + activity.activityId}>
                                                                    {activity.activityName}
                                                                </Link>
                                                            </TableCell>
                                                            <TableCell className={classes.word} align="center">
                                                                {activity.activitySpace}
                                                            </TableCell>
                                                            <TableCell className={classes.word} align="center">
                                                                {activity.activityStartDateString}
                                                                <br/>
                                                                <span>|</span>
                                                                <br/>
                                                                {activity.activityEndDateString}
                                                            </TableCell>
                                                            <TableCell className={classes.word} align="center">
                                                                {activity.attendPeople}&nbsp;/&nbsp;{activity.registeredPeople}
                                                            </TableCell>
                                                            <TableCell className={classes.word} align="center">
                                                            {   (new Date(activity.startSignUpDate).getTime() > activity_End_or_not)
                                                                    ? "尚未開始報名"
                                                                :   ((new Date(activity.endSignUpDate).getTime() > activity_End_or_not) &&
                                                                    (new Date(activity.startSignUpDate).getTime() < activity_End_or_not))
                                                                    ? "活動報名中"
                                                                :   ((new Date(activity.endSignUpDate).getTime() < activity_End_or_not) &&
                                                                    (new Date(activity.activityStartDate).getTime() > activity_End_or_not))
                                                                    ? "等待活動中"
                                                                :   (new Date(activity.activityEndDate).getTime() >= activity_End_or_not)
                                                                    ? "活動進行中" : "活動已結束"}
                                                            </TableCell>
                                                            {  ((new Date(activity.startSignUpDate).getTime() > activity_End_or_not)
                                                                    ?
                                                                <TableCell align="center">
                                                                    <Button
                                                                        variant="contained"
                                                                        className={classes.button}
                                                                        component={Link}
                                                                        to={"/updateInfo?" + activity.activityId}
                                                                    >
                                                                        修改活動
                                                                    </Button>
                                                                    <br /><br />
                                                                    <Button
                                                                        variant="contained"
                                                                        className={classes.button}
                                                                        onClick={(event) => handleDeleteOpen(activity.activityId , event)}
                                                                    >
                                                                        刪除活動
                                                                    </Button>
                                                                    <Dialog
                                                                        open={Deleteopen}
                                                                        onClose={handleDeleteClose}
                                                                        PaperComponent={PaperComponent}
                                                                        aria-labelledby="draggable-dialog-title"
                                                                    >
                                                                        <DialogTitle id="draggable-dialog-title">
                                                                            <Typography variant="h5" className={classes.word}>
                                                                                <ErrorIcon className={classes.Exclamation_Mark} />
                                                                                刪除活動
                                                                            </Typography>
                                                                        </DialogTitle>
                                                                        <DialogContent>
                                                                            <DialogContentText className={classes.word} style={{fontSize:"20px"}}>
                                                                                您確定要刪除該活動嗎？
                                                                            </DialogContentText>
                                                                        </DialogContent>
                                                                        <DialogActions>
                                                                            <Button autoFocus onClick={handleDeleteClose} className={classes.dig_butoon}>
                                                                                取消
                                                                            </Button>
                                                                            <Button onClick={() => handleDelete(Delete)} className={classes.dig_butoon}>
                                                                                確定
                                                                            </Button>
                                                                        </DialogActions>
                                                                    </Dialog>
                                                                </TableCell>
                                                                :   ((new Date(activity.endSignUpDate).getTime() > activity_End_or_not) ||
                                                                    (new Date(activity.StartSignUpDate).getTime() < activity_End_or_not))
                                                                    ?
                                                                <TableCell align="center">
                                                                    <Button
                                                                        variant="contained"
                                                                        className={classes.button}
                                                                        component={Link}
                                                                        to={"/participantList?" + activity.activityId}
                                                                    >
                                                                        參加者名單
                                                                    </Button>
                                                                    <br /><br />
                                                                    <Button
                                                                        variant="contained"
                                                                        className={classes.button}
                                                                        component={Link}
                                                                        to={"/updateInfo?" + activity.activityId}
                                                                    >
                                                                        修改活動
                                                                    </Button>
                                                                    <br /><br />
                                                                    <Button
                                                                        variant="contained"
                                                                        className={classes.button}
                                                                        onClick={(event) => handleCancelOpen(activity.activityId , event)}
                                                                    >
                                                                        停止舉辦
                                                                    </Button>
                                                                    <Dialog
                                                                        open={Cancelopen}
                                                                        onClose={handleCancelClose}
                                                                        PaperComponent={PaperComponent}
                                                                        aria-labelledby="draggable-dialog-title"
                                                                    >
                                                                        <DialogTitle id="draggable-dialog-title">
                                                                            <Typography variant="h5" className={classes.word}>
                                                                                <ErrorIcon className={classes.Exclamation_Mark} />
                                                                                停止舉辦
                                                                            </Typography>
                                                                        </DialogTitle>
                                                                        <DialogContent>
                                                                            <DialogContentText className={classes.word} style={{fontSize:"20px"}}>
                                                                                您確定要停止舉辦該活動嗎？
                                                                            </DialogContentText>
                                                                        </DialogContent>
                                                                        <DialogActions>
                                                                            <Button autoFocus onClick={handleCancelClose} className={classes.dig_butoon}>
                                                                                取消
                                                                            </Button>
                                                                            <Button onClick={() => handleCancel(Cancel)} className={classes.dig_butoon}>
                                                                                確定
                                                                            </Button>
                                                                        </DialogActions>
                                                                    </Dialog>
                                                                </TableCell>
                                                               : ((new Date(activity.endSignUpDate).getTime() < activity_End_or_not) &&
                                                                (new Date(activity.activityStartDate).getTime() > activity_End_or_not))
                                                                ?
                                                                <TableCell align="center">
                                                                    <Button
                                                                        variant="contained"
                                                                        className={classes.button}
                                                                        component={Link}
                                                                        to={"/participantList?" + activity.activityId}
                                                                    >
                                                                        參加者名單
                                                                    </Button>
                                                                    <br /><br />
                                                                    <Button
                                                                        variant="contained"
                                                                        className={classes.button}
                                                                        component={Link}
                                                                        to={"/updateInfo?" + activity.activityId}
                                                                    >
                                                                        修改活動
                                                                    </Button>
                                                                    <br /><br />
                                                                    <Button
                                                                        variant="contained"
                                                                        className={classes.button}
                                                                        onClick={(event) => handleCancelOpen(activity.activityId , event)}
                                                                    >
                                                                        停止舉辦
                                                                    </Button>
                                                                    <Dialog
                                                                        open={Cancelopen}
                                                                        onClose={handleCancelClose}
                                                                        PaperComponent={PaperComponent}
                                                                        aria-labelledby="draggable-dialog-title"
                                                                    >
                                                                        <DialogTitle id="draggable-dialog-title">
                                                                            <Typography variant="h5" className={classes.word}>
                                                                                <ErrorIcon className={classes.Exclamation_Mark} />
                                                                                停止舉辦
                                                                            </Typography>
                                                                        </DialogTitle>
                                                                        <DialogContent>
                                                                            <DialogContentText className={classes.word} style={{fontSize:"20px"}}>
                                                                                您確定要停止舉辦該活動嗎？
                                                                            </DialogContentText>
                                                                        </DialogContent>
                                                                        <DialogActions>
                                                                            <Button autoFocus onClick={handleCancelClose} className={classes.dig_butoon}>
                                                                                取消
                                                                            </Button>
                                                                            <Button onClick={() => handleCancel(Cancel)} className={classes.dig_butoon}>
                                                                                確定
                                                                            </Button>
                                                                        </DialogActions>
                                                                    </Dialog>
                                                                </TableCell>
                                                               : (new Date(activity.activityEndDate).getTime() >= activity_End_or_not)
                                                                    ?
                                                            <TableCell align="center">
                                                                <Button
                                                                    variant="contained"
                                                                    className={classes.button}
                                                                    component={Link}
                                                                    to={"/participantList?" + activity.activityId}
                                                                >
                                                                    參加者名單
                                                                </Button>
                                                                <br /><br />
                                                                <Button
                                                                    variant="contained"
                                                                    className={classes.button}
                                                                    onClick={(event) => handleManualCheckInModelOpen(activity.activityId , event)}
                                                                >
                                                                    活動簽到
                                                                </Button>
                                                                {/* <Modal
                                                                    className={classes.modal}
                                                                    open={checkInModelopen}
                                                                    onClose={handleCheckInModelClose}
                                                                    closeAfterTransition
                                                                    BackdropComponent={Backdrop}
                                                                    BackdropProps={{
                                                                    timeout: 1000,
                                                                    }}
                                                                >
                                                                    <Fade in={checkInModelopen}>
                                                                        <div>
                                                                            <Grid container spacing={10}>
                                                                                <Grid item xs={12} sm={6}>
                                                                                    <Card className={classes.choose_type} title="type_1" onClick={CameraModelCheckInopen}>
                                                                                        <CardActionArea>
                                                                                            <CardMedia>
                                                                                                <TagFacesIcon className={classes.icon_part} />
                                                                                            </CardMedia>
                                                                                            <CardContent className={classes.card_Title}>
                                                                                                人臉辨識簽到
                                                                                            </CardContent>
                                                                                        </CardActionArea>
                                                                                    </Card>
                                                                                </Grid>
                                                                                <Grid item xs={12} sm={6}>
                                                                                    <Card className={classes.choose_type} title="type_2" onClick={(event) => handleManualCheckInModelOpen(activity.activityId , event)}>
                                                                                        <CardActionArea>
                                                                                            <CardMedia>
                                                                                                <KeyboardIcon className={classes.icon_part} />
                                                                                            </CardMedia>
                                                                                            <CardContent className={classes.card_Title}>
                                                                                                手動簽到
                                                                                            </CardContent>
                                                                                        </CardActionArea>
                                                                                    </Card>
                                                                                </Grid>
                                                                            </Grid>
                                                                        </div>
                                                                    </Fade>
                                                                </Modal>
                                                                <Modal
                                                                    className={classes.modal}
                                                                    open={CameraModelInopen}
                                                                    onClose={CameraModelCheckInClose}
                                                                    closeAfterTransition
                                                                    BackdropComponent={Backdrop}
                                                                    BackdropProps={{
                                                                    timeout: 1000,
                                                                    }}
                                                                >
                                                                    <Fade in={CameraModelInopen}>
                                                                        <div>
                                                                            <video controls autoplay style={{height:"480px" , width: "640px"}}></video>
                                                                        </div>
                                                                    </Fade>
                                                                </Modal> */}
                                                                <Modal
                                                                    className={classes.modal}
                                                                    open={manualCheckInModelopen}
                                                                    onClose={handleManualCheckInModelClose}
                                                                    closeAfterTransition
                                                                    BackdropComponent={Backdrop}
                                                                    BackdropProps={{
                                                                    timeout: 1000,
                                                                    }}
                                                                >
                                                                    <Fade in={manualCheckInModelopen}>
                                                                        <div>
                                                                            <Grid container spacing={10}>
                                                                                <Grid item xs={12} sm={6}>
                                                                                    <Card className={classes.choose_type} title="type_1">
                                                                                        <CardActionArea component={Link} to={"/QRCodeCheckIn?" + activity.activityId}>
                                                                                            <CardMedia>
                                                                                                <CropFreeIcon className={classes.icon_part} />
                                                                                            </CardMedia>
                                                                                            <CardContent className={classes.card_Title}>
                                                                                                QRCode簽到
                                                                                            </CardContent>
                                                                                        </CardActionArea>
                                                                                    </Card>
                                                                                </Grid>
                                                                                <Grid item xs={12} sm={6}>
                                                                                    <Card className={classes.choose_type} title="type_2">
                                                                                        <CardActionArea component={Link} to={"/manualCheckIn?" + activity.activityId}>
                                                                                            <CardMedia>
                                                                                                <ComputerIcon className={classes.icon_part} />
                                                                                            </CardMedia>
                                                                                            <CardContent className={classes.word}>
                                                                                                帳號簽到
                                                                                            </CardContent>
                                                                                        </CardActionArea>
                                                                                    </Card>
                                                                                </Grid>
                                                                            </Grid>
                                                                        </div>
                                                                    </Fade>
                                                                </Modal>
                                                                <br /><br />
                                                                <Button
                                                                    variant="contained"
                                                                    className={classes.button}
                                                                    onClick={(event) => handleManualCheckOutModelOpen(activity.activityId , event)}
                                                                >
                                                                    活動簽退
                                                                </Button>
                                                                {/* <Modal
                                                                    className={classes.modal}
                                                                    open={checkOutModelopen}
                                                                    onClose={handleCheckOutModelClose}
                                                                    closeAfterTransition
                                                                    BackdropComponent={Backdrop}
                                                                    BackdropProps={{
                                                                    timeout: 1000,
                                                                    }}
                                                                >
                                                                    <Fade in={checkOutModelopen}>
                                                                        <div>
                                                                            <Grid container spacing={10}>
                                                                                <Grid item xs={12} sm={6}>
                                                                                    <Card className={classes.choose_type} title="type_1" onClick={() => CameraModelCheckOutopen(sendActID)}>
                                                                                        <CardActionArea>
                                                                                            <CardMedia>
                                                                                                <TagFacesIcon className={classes.icon_part} />
                                                                                            </CardMedia>
                                                                                            <CardContent className={classes.card_Title}>
                                                                                                人臉辨識簽退
                                                                                            </CardContent>
                                                                                        </CardActionArea>
                                                                                    </Card>
                                                                                </Grid>
                                                                                <Grid item xs={12} sm={6}>
                                                                                    <Card className={classes.choose_type} title="type_2" onClick={(event) => handleManualCheckOutModelOpen(activity.activityId , event)}>
                                                                                        <CardActionArea>
                                                                                            <CardMedia>
                                                                                                <KeyboardIcon className={classes.icon_part} />
                                                                                            </CardMedia>
                                                                                            <CardContent className={classes.card_Title}>
                                                                                                手動簽退
                                                                                            </CardContent>
                                                                                        </CardActionArea>
                                                                                    </Card>
                                                                                </Grid>
                                                                            </Grid>
                                                                        </div>
                                                                    </Fade>
                                                                </Modal> */}
                                                                {/* <Modal
                                                                    className={classes.modal}
                                                                    open={CameraModelOutopen}
                                                                    onClose={CameraModelCheckOutClose}
                                                                    closeAfterTransition
                                                                    BackdropComponent={Backdrop}
                                                                    BackdropProps={{
                                                                    timeout: 1000,
                                                                    }}
                                                                >
                                                                    <Fade in={CameraModelOutopen}>
                                                                        <div>
                                                                            <video controls autoplay style={{height:"480px" , width: "640px"}}></video>
                                                                        </div>
                                                                    </Fade>
                                                                </Modal> */}
                                                                <Modal
                                                                    className={classes.modal}
                                                                    open={manualCheckOutModelopen}
                                                                    onClose={handleManualCheckOutModelClose}
                                                                    closeAfterTransition
                                                                    BackdropComponent={Backdrop}
                                                                    BackdropProps={{
                                                                    timeout: 1000,
                                                                    }}
                                                                >
                                                                    <Fade in={manualCheckOutModelopen}>
                                                                        <div>
                                                                            <Grid container spacing={10}>
                                                                                <Grid item xs={12} sm={6}>
                                                                                    <Card className={classes.choose_type} title="type_1">
                                                                                        <CardActionArea component={Link} to={"/QRCodeCheckOut?" + activity.activityId}>
                                                                                            <CardMedia>
                                                                                                <CropFreeIcon className={classes.icon_part} />
                                                                                            </CardMedia>
                                                                                            <CardContent className={classes.card_Title}>
                                                                                                QRCode簽退
                                                                                            </CardContent>
                                                                                        </CardActionArea>
                                                                                    </Card>
                                                                                </Grid>
                                                                                <Grid item xs={12} sm={6}>
                                                                                    <Card className={classes.choose_type} title="type_2">
                                                                                        <CardActionArea component={Link} to={"/manualCheckOut?" + activity.activityId}>
                                                                                            <CardMedia>
                                                                                                <ComputerIcon className={classes.icon_part} />
                                                                                            </CardMedia>
                                                                                            <CardContent className={classes.word}>
                                                                                                帳號簽退
                                                                                            </CardContent>
                                                                                        </CardActionArea>
                                                                                    </Card>
                                                                                </Grid>
                                                                            </Grid>
                                                                        </div>
                                                                    </Fade>
                                                                </Modal>
                                                            </TableCell>
                                                            :
                                                            <TableCell align="center">
                                                                <Button
                                                                    variant="contained"
                                                                    className={classes.button}
                                                                    component={Link}
                                                                    to={"/participantList?" + activity.activityId}
                                                                >
                                                                    參加者名單
                                                                </Button>
                                                                <br /><br />
                                                                <Button
                                                                    variant="contained"
                                                                    className={classes.button}
                                                                    component={Link}
                                                                    to={"/UpdatePhoto?" + activity.activityId}

                                                                >
                                                                    管理照片/影片
                                                                </Button>
                                                            </TableCell>
                                                            )}
                                                        </TableRow>
                                                        : ""}
                                                    </TableBody>
                                                    )}
                                                </Table>
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Box>
                    </div>
                </Container>
            </div>
            <Snackbar open={openInfo1} autoHideDuration={2000} onClose={ErrClose} className={classes.alert}>
                <Alert severity="info" className={classes.word}>
                    您已停止舉辦該活動！
                </Alert>
            </Snackbar>
            <Snackbar open={openInfo2} autoHideDuration={2000} onClose={ErrClose} className={classes.alert}>
                <Alert severity="info" className={classes.word}>
                    您已刪除該活動！
                </Alert>
            </Snackbar>
        </div>
    );
}
