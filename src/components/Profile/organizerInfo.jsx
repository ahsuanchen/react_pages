import React , {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/PF_header.jsx';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
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
        margin : "2% 2%" ,
        overflow : "visible"
    } ,
    topic : {
        margin : "2% auto" ,
        textAlign : "center"
    } ,
    table : {
        display: "flex" ,
        justifyContent : "center" ,
    } ,
    button_part : {
        margin : "2%" ,
        display: "flex" ,
        justifyContent : "center" ,
    } ,
    button : {
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)' ,
        color : "#fff" ,
        margin : "auto 2%" ,
    }
  }));

export default function OrganizerInfo() {
    const classes = useStyles();

    const [member, setMember] = useState([]);
    // const memberList = ['memberName', 'memberID', 'memberGender', 'memberBloodType', 'memberBirthday', 'memberEmail', 'memberAddress'];
    useEffect(() => {
        async function fetchDataMem() {
                const result = await axios.get("/api/member/actforfun@gmail.com");
                setMember(result.data);
                // .then(res => {
                //     setMember(res.data)
                //     console.log(res)
                // }).catch(err => {
                //     console.log(err)
                // })
        }
        fetchDataMem();
    }, []);

    const [organizer, setOrganizer] = useState([]);
    // const organizerList = ['organizerName' , 'organizerEmail' , 'organizerPhone' , 'organizerAddress' , 'organizerInfo'];
    useEffect(() => {
        async function fetchDataOrg() {
                const result = await axios.get("/api/organizer/actforfun@gmail.com");
                setOrganizer(result.data);
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
                                <Box lineHeight={1} m={4} color="#000">
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
                                {organizer.organizerName}
                            </Typography>
                            <hr />
                        </div>
                        <div>
                            <form>
                                <Box lineHeight="normal" m={1}>
                                    <Typography variant="h4" className={classes.topic}>
                                        主 辦 單 位 資 訊
                                    </Typography>
                                </Box>
                                <Table className={classes.table}>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="h6">
                                                    主辦單位名稱：
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <TextField style={{minWidth:"250px"}} value={organizer.organizerName} />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="h6">
                                                    電子信箱：
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <TextField style={{minWidth:"250px"}} value={organizer.organizerEmail} disabled />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="h6">
                                                    連絡電話：
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <TextField value={organizer.organizerPhone} />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="h6">
                                                    聯絡地址：
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                            <TextField style={{minWidth:"350px"}} value={organizer.organizerAddress} />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="h6">
                                                    主辦單位簡介：
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <TextareaAutosize value={organizer.organizerInfo} style={{minWidth:"350px" , minHeight:"250px"}}/>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                                <Box lineHeight={5} m={1}>
                                    <div className={classes.button_part}>
                                        <Button
                                            variant="contained"
                                            className={classes.button}
                                        >
                                            確認更改
                                        </Button>
                                    </div>
                                </Box>
                            </form>
                        </div>
                </Container>
            </div>
        </div>
    );
}
