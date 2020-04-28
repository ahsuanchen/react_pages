import React , { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Header from '../Header/PF_header.jsx';
import { Link } from 'react-router-dom';
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
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

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
    }
  }));

export default function ParticipantList() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const [member, setMember] = useState([]);
    // const memberList = ['memberName', 'memberID', 'memberGender', 'memberBloodType', 'memberBirthday', 'memberEmail', 'memberAddress'];
    useEffect(() => {
        async function fetchDataMem() {
                const result = await axios.get("/api/member/actforfun@gmail.com")
                setMember(result.data);
                // console.log(result);
        }
        fetchDataMem();
    }, []);

    const [organizer, setOrganizer] = useState([]);
    // const organizerList = ['organizerName' , 'organizerEmail' , 'organizerPhone' ,'organizerAddress' , 'organizerInfo'];
    useEffect(() => {
        async function fetchDataOrg() {
                const result = await axios.get("/api/organizer/actforfun@gmail.com");
                setOrganizer(result.data);
        }
        fetchDataOrg();
    }, []);

    const [activity, setActivity] = useState([]);
    // const organizerList = ['organizerName' , 'organizerEmail' , 'organizerPhone' ,'organizerAddress' , 'organizerInfo'];
    useEffect(() => {
        async function fetchDataOrg() {
                const result = await axios.get("/api/activity/1");
                setActivity(result.data);
                // .then(res => {
                //     setMember(res.data)
                //     console.log(res)
                // }).catch(err => {
                //     console.log(err)
                // })
        }
        fetchDataOrg();
    }, []);

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
                                {member.memberName}
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
                                <Box lineHeight={1} m={4}>
                                    報名狀況
                                </Box>
                            </Link>
                            <Divider />
                            <Box lineHeight={3} m={1}>
                                {organizer.organizerName}
                            </Box>
                            <Divider />
                            <Link to="/organizerInfo" className={classes.link}>
                                <Box lineHeight={1} m={4}>
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
                    </Typography>
                </Container>
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
                                        三校六系聯合聖誕舞會 參加者名單
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
                                                    </div>
                                                </Box>
                                                <Table className={classes.table}>
                                                    <TableHead stickyHeader>
                                                        <TableRow>
                                                            <TableCell align="center">編號</TableCell>
                                                            <TableCell align="center">姓名</TableCell>
                                                            <TableCell align="center">手機</TableCell>
                                                            <TableCell align="center">Email</TableCell>
                                                            <TableCell align="center">報名狀況</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        <TableRow hover>
                                                            <TableCell align="center">001</TableCell>
                                                            <TableCell align="center">劉志宏</TableCell>
                                                            <TableCell align="center">0989-753491</TableCell>
                                                            <TableCell align="center">test1@gmial.com</TableCell>
                                                            <TableCell align="center">報名成功</TableCell>
                                                        </TableRow>
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
