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

const useStyles = makeStyles(theme => ({
    div : {
        boxSizing : "border-box"
    } ,
    content_part : {
        display : "flex" ,
        justifyContent: "center",
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
        minWidth : "125px"
    } ,
    Exclamation_Mark : {
        fontSize : "40px" ,
        color : "red" ,
    } ,
    dig_butoon : {
        color : "#000" ,
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
    }
  }));

  function PaperComponent(props) {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'} disabled>
        <Paper style={{minWidth : '600px' , minHeight : '200px' ,}} {...props} />
      </Draggable>
    );
  }

export default function ManageActivity() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const [checkInModelopen, setCheckInModelOpen] = React.useState(false);
    const handlecheckInmodelOpen = () => {
      setCheckInModelOpen(true);
    };
    const handlecheckInmodelClose = () => {
      setCheckInModelOpen(false);
    };

    const [checkOutModelopen, setCheckOutModelOpen] = React.useState(false);
    const handlecheckOutmodelOpen = () => {
      setCheckOutModelOpen(true);
    };
    const handlecheckOutmodelClose = () => {
      setCheckOutModelOpen(false);
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
                        // console.log(result)
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

    const activity_End_or_not = new Date().getTime();

    const FaceCheckIn = event => {
        event.preventDefault();    
        let url = "/api/signIn/" ;
        url = url + activity.activityID ;
            axios.post(url)
            .then(res => {
                alert("簽到成功");
                window.location.reload();
            })
            .catch(function(error){
                alert("簽到失敗");
                console.log(error.response.status);
                console.log(activity.activityID);
            });
    };
    const FaceCheckOut = event => {
        event.preventDefault();    
        let url = "/api/line/postMessage/announcement/" ;
        url = url + activity.activityID ;
            axios.post(url)
            .then(res => {
                alert("簽退成功");
                window.location.reload();
            })
            .catch(function(error){
                alert("簽退失敗");
                console.log(error.response.status);
                console.log(activity.activityID);
            });
    };

    return (
        <div className={classes.div}>
            <Header />
            <div className={classes.content_part}>
                <LeftBar/>
                <Container className={classes.content}>
                    <div>
                        <Typography variant="h4">
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
                                    <Typography variant="h6">
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
                                                            <TableCell align="center">活動名稱</TableCell>
                                                            <TableCell align="center">活動地點</TableCell>
                                                            <TableCell align="center">活動時間</TableCell>
                                                            <TableCell align="center">可報名總額 / 已報名人數</TableCell>
                                                            <TableCell align="center">活動狀況</TableCell>
                                                            <TableCell align="center">功能</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                    {activity.map(activity =>
                                                        <TableRow hover>
                                                            <TableCell align="center">
                                                                {activity.activityName}
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                {activity.activitySpace}
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                {activity.activityStartDateString}
                                                                <br/>
                                                                <span>|</span>
                                                                <br/>
                                                                {activity.activityEndDateString}
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                {activity.attendPeople}&nbsp;/&nbsp;{activity.registeredPeople}
                                                            </TableCell>
                                                            <TableCell align="center">
                                                            {   ((new Date(activity.endSignUpDate).getTime() > activity_End_or_not) ||  
                                                                (new Date(activity.StartSignUpDate).getTime() < activity_End_or_not))
                                                                    ? "活動報名中" 
                                                                :   ((new Date(activity.endSignUpDate).getTime() < activity_End_or_not) &&  
                                                                    (new Date(activity.activityStartDate).getTime() > activity_End_or_not))
                                                                    ? "等待活動中"
                                                               : (new Date(activity.activityEndDate).getTime() >= activity_End_or_not)
                                                                    ? "活動進行中" : "活動已結束"}
                                                            </TableCell>
                                                            {  (((new Date(activity.endSignUpDate).getTime() > activity_End_or_not) ||  
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
                                                                        onClick={handleOpen}
                                                                    >
                                                                        刪除活動
                                                                    </Button>
                                                                    <Dialog
                                                                        open={open}
                                                                        onClose={handleClose}
                                                                        PaperComponent={PaperComponent}
                                                                        aria-labelledby="draggable-dialog-title"
                                                                    >
                                                                        <DialogTitle id="draggable-dialog-title">
                                                                            <Typography variant="h5">
                                                                                <ErrorIcon className={classes.Exclamation_Mark} />
                                                                                刪除活動
                                                                            </Typography>
                                                                        </DialogTitle>
                                                                        <DialogContent>
                                                                            <DialogContentText style={{fontSize:"20px"}}>
                                                                                您確定要刪除該活動嗎？
                                                                            </DialogContentText>
                                                                        </DialogContent>
                                                                        <DialogActions>
                                                                            <Button autoFocus onClick={handleClose} className={classes.dig_butoon}>
                                                                                取消
                                                                            </Button>
                                                                            <Button onClick={handleClose} className={classes.dig_butoon}>
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
                                                                        onClick={handleOpen}
                                                                    >
                                                                        刪除活動
                                                                    </Button>
                                                                    <Dialog
                                                                        open={open}
                                                                        onClose={handleClose}
                                                                        PaperComponent={PaperComponent}
                                                                        aria-labelledby="draggable-dialog-title"
                                                                    >
                                                                        <DialogTitle id="draggable-dialog-title">
                                                                            <Typography variant="h5">
                                                                                <ErrorIcon className={classes.Exclamation_Mark} />
                                                                                刪除活動
                                                                            </Typography>
                                                                        </DialogTitle>
                                                                        <DialogContent>
                                                                            <DialogContentText style={{fontSize:"20px"}}>
                                                                                您確定要刪除該活動嗎？
                                                                            </DialogContentText>
                                                                        </DialogContent>
                                                                        <DialogActions>
                                                                            <Button autoFocus onClick={handleClose} className={classes.dig_butoon}>
                                                                                取消
                                                                            </Button>
                                                                            <Button onClick={handleClose} className={classes.dig_butoon}>
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
                                                                    onClick={handlecheckInmodelOpen}
                                                                >
                                                                    活動簽到
                                                                </Button>
                                                                <Modal
                                                                    className={classes.modal}
                                                                    open={checkInModelopen}
                                                                    onClose={handlecheckInmodelClose}
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
                                                                                    <Card className={classes.choose_type} title="type_1" onClick={FaceCheckIn}>
                                                                                        <CardActionArea>
                                                                                            <CardMedia>
                                                                                                <TagFacesIcon className={classes.icon_part} />
                                                                                            </CardMedia>
                                                                                            <CardContent>
                                                                                                人臉辨識簽到
                                                                                            </CardContent>
                                                                                        </CardActionArea>
                                                                                    </Card>
                                                                                </Grid>
                                                                                <Grid item xs={12} sm={6}>
                                                                                    <Card className={classes.choose_type} title="type_2">
                                                                                        <CardActionArea component={Link} to={"/manualCheckIn?" + activity.activityId}>
                                                                                            <CardMedia>
                                                                                                <KeyboardIcon className={classes.icon_part} />
                                                                                            </CardMedia>
                                                                                            <CardContent>
                                                                                                手動簽到
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
                                                                    onClick={handlecheckOutmodelOpen}
                                                                >
                                                                    活動簽退
                                                                </Button>
                                                                <Modal
                                                                    className={classes.modal}
                                                                    open={checkOutModelopen}
                                                                    onClose={handlecheckOutmodelClose}
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
                                                                                    <Card className={classes.choose_type} title="type_1">
                                                                                        <CardActionArea component={Link} to="/">
                                                                                            <CardMedia>
                                                                                                <TagFacesIcon className={classes.icon_part} />
                                                                                            </CardMedia>
                                                                                            <CardContent>
                                                                                                人臉辨識簽退
                                                                                            </CardContent>
                                                                                        </CardActionArea>
                                                                                    </Card>
                                                                                </Grid>
                                                                                <Grid item xs={12} sm={6}>
                                                                                    <Card className={classes.choose_type} title="type_2">
                                                                                        <CardActionArea component={Link} to={"/manualCheckOut?" + activity.activityId}>
                                                                                            <CardMedia>
                                                                                                <KeyboardIcon className={classes.icon_part} />
                                                                                            </CardMedia>
                                                                                            <CardContent>
                                                                                                手動簽退
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
                                                                >
                                                                    上傳照片
                                                                </Button>
                                                                <br /><br />
                                                                <Button
                                                                    variant="contained"
                                                                    className={classes.button}
                                                                >
                                                                    管理照片
                                                                </Button>
                                                            </TableCell>
                                                            )}
                                                        </TableRow>
                                                        )}
                                                    </TableBody>
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
        </div>
    );
}
