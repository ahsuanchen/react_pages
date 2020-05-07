import React , {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/PF_header.jsx';
import { Link , useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    div : {
        boxSizing : "border-box"
    } ,
    left_menu : {
        display: "flex" ,
        justifyContent : "space-around" ,
        minHeight : 800 ,
        color : "#000"
    } ,
    left_container : {
        maxWidth : "280px" ,
        borderRight : "1px solid" ,
    } ,
    avatar : {
        minWidth : "150px" ,
        minHeight : "150px" ,
    } ,
    link : {
        textDecoration : "none" ,
        color : "#D0D0D0" ,
        '&:hover' : {
          color : '#00AEAE'
        }
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
    } ,
  }));

export default function SignupSituation() {
    const classes = useStyles();

    let history = useHistory();
    function goSignin()
    {
        history.push("/signin");
    }

    function goHomePage()
    {
        history.push("/");
    }

    const [member, setMember] = useState([]);
    // const memberList = ['memberName', 'memberID', 'memberGender', 'memberBloodType', 'memberBirthday', 'memberEmail', 'memberAddress'];
    useEffect(() => {
        async function fetchDataMem() {
                let url = "/api/login/name"
                await axios.get(url)
                .then(result => {
                    if(result.data.toString().startsWith("<!DOCTYPE html>"))
                    {
                        alert("您尚未登入，請先登入！")
                        goSignin();
                    }
                    else
                    {
                        setMember(result.data);
                        console.log(result);
                    }
                })
                .catch(err => {
                    console.log(err.response.status);
                    if(err.response.status === 403)
                    {
                        alert("您的權限不足!");
                        goHomePage();
                    }
                })
        }
        fetchDataMem();
    }, []);

    const [organizer, setOrganizer] = useState([]);
    // const organizerList = ['organizerName' , 'organizerEmail' , 'organizerPhone' ,'organizerAddress' , 'organizerInfo'];
    useEffect(() => {
        async function fetchDataOrg() {
                // let url = "/api/login/name"
                // await axios.get(url)
                await axios.get("/api/organizer/actforfun@gmail.com")
                .then(result => {
                    if(result.data.toString().startsWith("<!DOCTYPE html>"))
                    {
                        alert("您尚未登入，請先登入！")
                        goSignin();
                    }
                    else
                    {
                        setOrganizer(result.data);
                        console.log(result);
                    }
                })
                .catch(err => {
                    console.log(err.response.status);
                    if(err.response.status === 403)
                    {
                        alert("您的權限不足!");
                        goHomePage();
                    }
                })
        }
        fetchDataOrg();
    }, []);

    const [registration, setRegistration] = useState([]);
    // const organizerList = ['organizerName' , 'organizerEmail' , 'organizerPhone' ,'organizerAddress' , 'organizerInfo'];
    useEffect(() => {
        async function fetchDataReg() {
                // let url = "/api/login/name"
                // await axios.get(url)
                await axios.get("/api/registration/actforfun@gmail.com")
                .then(result => {
                    // if(result.data.toString().startsWith("<!DOCTYPE html>"))
                    // {
                    //     alert("您尚未登入，請先登入！")
                    //     goSignin();
                    // }
                    // else
                    // {
                        setActivity(result.data);
                        console.log(result);
                    // }
                })
                .catch(err => {
                    console.log(err.response.status);
                    if(err.response.status === 403)
                    {
                        alert("您的權限不足!");
                        goHomePage();
                    }
                })
        }
        fetchDataReg();
    }, []);

    const [activity, setActivity] = useState([]);
    // const organizerList = ['organizerName' , 'organizerEmail' , 'organizerPhone' ,'organizerAddress' , 'organizerInfo'];
    useEffect(() => {
        async function fetchDataAct() {
                // let url = "/api/login/name"
                // await axios.get(url)
                await axios.get("/api/activity/organizer/actforfun@gmail.com")
                .then(result => {
                    if(result.data.toString().startsWith("<!DOCTYPE html>"))
                    {
                        alert("您尚未登入，請先登入！")
                        goSignin();
                    }
                    else
                    {
                        setActivity(result.data);
                        console.log(result);
                    }
                })
                .catch(err => {
                    console.log(err.response.status);
                    if(err.response.status === 403)
                    {
                        alert("您的權限不足!");
                        goHomePage();
                    }
                })
        }
        fetchDataAct();
    }, []);

    const activity_End_or_not = new Date().getTime();

    return (
        <div className={classes.div}>
            <Header />
            <div className={classes.left_menu}>
                <Container className={classes.left_container}>
                    <Typography variant="h5">
                            <Box lineHeight="normal" m={4}>
                                <Avatar className={classes.avatar} src="./img/profile.jpg" alt="user" />
                            </Box>
                            <Box lineHeight={2} m={1}>
                                <strong>{member.memberName}</strong>
                            </Box>
                            <Divider />
                            <Link to="/profile" className={classes.link}>
                                <Box lineHeight={1} m={4}>
                                    個人檔案
                                </Box>
                            </Link>
                            <Link to="/trainingFace" className={classes.link}>
                                <Box lineHeight={1} m={4}>
                                    訓練人臉
                                </Box>
                            </Link>
                            <Link to="/signupSituation" className={classes.link}>
                                <Box lineHeight={1} m={4} color="#000">
                                    報名狀況
                                </Box>
                            </Link>
                            <Divider />
                            <Box lineHeight={3} m={1}>
                                <strong>{organizer.organizerName}</strong>
                            </Box>
                            <Divider />
                            <Link to="/organizerInfo" className={classes.link}>
                                <Box lineHeight={1} m={4} >
                                    主辦單位資訊
                                </Box>
                            </Link>
                            <Link to="/manageActivity" className={classes.link}>
                                <Box lineHeight={1} m={4}>
                                    管理活動
                                </Box>
                            </Link>
                            <Divider />
                            <Link to="/MyAlbum" className={classes.link}>
                                <Box lineHeight={2} m={1}>
                                    我的相簿
                                </Box>
                            </Link>
                            <Link to="/ActivityAlbum" className={classes.link}>
                                <Box lineHeight={2} m={1}>
                                    活動相簿
                                </Box>
                            </Link>
                    </Typography>
                </Container>
                <Container className={classes.content}>
                    <div>
                        <Typography variant="h4">
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
                                    <Typography variant="h6">
                                        已報名
                                    </Typography>
                                </div>
                                </ExpansionPanelSummary>
                                {activity.map(activity =>
                                    (new Date(activity.activityEndDate).getTime() >= new Date(activity_End_or_not).getTime()) ?
                                <ExpansionPanelDetails>
                                    <Grid container spacing={5}>
                                        <Grid item xs={12}>
                                            <Paper>
                                                <Grid container>
                                                    <Grid item xs={12} sm={8} className={classes.topic_part}>
                                                        <Typography variant="h5" >
                                                            {activity.activityName}
                                                        </Typography>
                                                        <br/>
                                                        <Typography variant="h6">
                                                            <FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;
                                                            {activity.activitySpace}
                                                        </Typography>
                                                        <br/>
                                                        <Typography variant="h6">
                                                            <FontAwesomeIcon icon={faClock} />&nbsp;
                                                            {activity.activityStartDateString} ~ {activity.activityEndDateString}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} sm={3} className={classes.button_part}>
                                                        <Box lineHeight="normal" m={1}>
                                                            <Button
                                                                variant="contained"
                                                                className={classes.button}
                                                                component={Link}
                                                                to="/"
                                                            >
                                                                活動頁面
                                                            </Button>
                                                            <br /><br />
                                                            <Button
                                                                variant="contained"
                                                                className={classes.button}
                                                                component={Link}
                                                                to="/editSignupInformation"
                                                            >
                                                                更改資料
                                                            </Button>
                                                        </Box>
                                                        <Box lineHeight="normal" m={1}>
                                                            <Button
                                                                variant="contained"
                                                                className={classes.button}
                                                                component={Link}
                                                                to="/"
                                                            >
                                                                前往繳費
                                                            </Button>
                                                            <br /><br />
                                                            <Button
                                                                variant="contained"
                                                                className={classes.button}
                                                                component={Link}
                                                                to="/editSignupInformation"
                                                            >
                                                                取消報名
                                                            </Button>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </ExpansionPanelDetails>
                                : "")}
                            </ExpansionPanel>
                            <ExpansionPanel defaultExpanded>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1c-content"
                                    id="panel1c-header"
                                >
                                <div>
                                    <Typography variant="h6">
                                        已結束
                                    </Typography>
                                </div>
                                </ExpansionPanelSummary>
                                {activity.map(activity =>
                                    (new Date(activity.activityEndDate).getTime() < new Date(activity_End_or_not).getTime()) ?
                                <ExpansionPanelDetails>
                                    <Grid container spacing={5}>
                                        <Grid item xs={12}>
                                            <Paper>
                                                <Grid container>
                                                    <Grid item xs={12} sm={8} className={classes.topic_part}>
                                                        <Typography variant="h5" >
                                                            {activity.activityName}
                                                        </Typography>
                                                        <br/>
                                                        <Typography variant="h6">
                                                            <FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;
                                                            {activity.activitySpace}
                                                        </Typography>
                                                        <br/>
                                                        <Typography variant="h6">
                                                            <FontAwesomeIcon icon={faClock} />&nbsp;
                                                            {activity.activityStartDateString} ~ {activity.activityEndDateString}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} sm={3} className={classes.button_part}>
                                                        <Box lineHeight="normal" m={1}>
                                                            <Button
                                                                variant="contained"
                                                                className={classes.button}
                                                                component={Link}
                                                                to="/"
                                                            >
                                                                查看資訊
                                                            </Button>
                                                            <br /><br />
                                                            <Button
                                                                variant="contained"
                                                                className={classes.button}
                                                                component={Link}
                                                                to="/"
                                                            >
                                                                活動照片
                                                            </Button>
                                                        </Box>
                                                        <Box lineHeight="normal" m={1}>
                                                            <Button
                                                                variant="contained"
                                                                className={classes.button}
                                                                component={Link}
                                                                to="/Feedback"
                                                            >
                                                                給予回饋
                                                            </Button>
                                                            <br /><br />
                                                            <Button
                                                                variant="contained"
                                                                className={classes.button}
                                                                component={Link}
                                                                to="/"
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
        </div>
    );
}
