import React , { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Header from '../Header/PF_header.jsx';
import LeftBar from 'components/Profile/leftbar.jsx';
import { Link , useHistory} from 'react-router-dom';
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
import Tooltip from '@material-ui/core/Tooltip';
import CommentIcon from '@material-ui/icons/Comment';

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
        margin : "2% 2%" ,
    } ,
    activity_part : {
        margin : "5% auto" ,
    } ,
    button_part : {
        margin : "2%" ,
        display: "flex" ,
        justifyContent : "flex-start" ,
    } ,
    button : {
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)' ,
        color : "#fff" ,
    } ,
    button1 : {
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)' ,
        color : "#fff" ,
        margin : "2% 1%" ,
    } ,
    button2 : {
        background : 'linear-gradient(50deg, #FF0000 30%, #EA0000 70%)' ,
        color : "#fff" ,
        margin : "2% 1%" ,
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
    feedback_Link : {
        color : "#000" ,
        '&:hover' : {
            color : '#00AEAE' 
        }
    }
  }));

export default function ParticipantList() {
    const classes = useStyles();

    var activityId = window.location.href.substring(window.location.href.lastIndexOf("?")+1)
    let count = 0 ;

    let history = useHistory();
    function goSignin()
    {
        history.push("/signin");
    }

    function goHomePage()
    {
        history.push("/");
    }

    const [activity, setActivity] = useState([]);
    const [registration, setRegistration] = useState([]);
    useEffect(() => {
        async function fetchData() {
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
                        axios.get("/api/activity/" + activityId)
                        .then(res1 => {
                            setActivity(res1.data);
                            console.log(res1);
                        })
                        .catch(err => {
                            console.log(err.response.status);
                        })
                        axios.get("/api/registration/activity/" + activityId)
                        .then(res2 => {
                            setRegistration(res2.data);
                        })
                        .catch(err => {
                            console.log(err.response.status);
                        })
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
        fetchData();
    }, []);

    return (
        <div className={classes.div}>
            <Header />
            <div className={classes.content_part}>
                <LeftBar/>
                <Container className={classes.content}>
                    <div>
                        <Typography variant="h4">
                            參 加 者 名 單
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
                                    <Typography variant="h5">
                                        {activity.activityName} 參加者名單
                                    </Typography>
                                </div>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Grid container spacing={5}>
                                        <Grid item xs={12}>
                                            <Paper>
                                                <Box lineHeight={5} m={1}>
                                                    <div className={classes.button_part}>
                                                        <Tooltip title="匯出成Excel檔">
                                                            <Button
                                                                variant="contained"
                                                                className={classes.button1}
                                                                // onClick={}
                                                            >
                                                                匯出名單
                                                            </Button>
                                                        </Tooltip>
                                                        <Tooltip title="宣傳活動內容、提醒活動時間">
                                                            <Button
                                                                variant="contained"
                                                                className={classes.button1}
                                                                // onClick={}
                                                            >
                                                                Line推播
                                                            </Button>
                                                        </Tooltip>
                                                        <Tooltip title="發行活動公告">
                                                            <Button
                                                                variant="contained"
                                                                className={classes.button1}
                                                                component={Link}
                                                                to="/makeAnnouncement"
                                                            >
                                                                發行公告
                                                            </Button>
                                                        </Tooltip>
                                                    </div>
                                                </Box>
                                                <Table className={classes.table}>
                                                    <TableHead stickyHeader>
                                                        <TableRow>
                                                            <TableCell align="center">編號</TableCell>
                                                            <TableCell align="center">姓名</TableCell>
                                                            <TableCell align="center">聯絡電話</TableCell>
                                                            <TableCell align="center">聯絡電子郵件</TableCell>
                                                            <TableCell align="center">報名狀況</TableCell>
                                                            <TableCell align="center">回饋單</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    {registration.map(registration =>
                                                    <TableBody>
                                                        <TableRow hover>
                                                            <TableCell align="center">{count += 1}</TableCell>
                                                            <TableCell align="center">{registration.member.memberName}</TableCell>
                                                            <TableCell align="center">{registration.member.memberPhone}</TableCell>
                                                            <TableCell align="center">{registration.member.memberEmail}</TableCell>
                                                            <TableCell align="center">報名成功</TableCell>
                                                            <TableCell align="center">
                                                                <Tooltip title="予後回饋">
                                                                    <Link to="/" className={classes.feedback_Link}>
                                                                        <CommentIcon />
                                                                    </Link>
                                                                </Tooltip>
                                                            </TableCell>
                                                        </TableRow>
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
        </div>
    );
}
