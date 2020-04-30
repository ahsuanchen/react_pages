import React , {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/PF_header.jsx';
import { Link , useHistory} from 'react-router-dom';
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

    const [organizer, setOrganizer] = useState({
        organizerName : '' ,
        organizerEmail : '' ,
        organizerPhone : '' ,
        organizerAddress : '' ,
        organizerInfo : ''
    });
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

    const handleChange = updateOrgInfo => event => {
        setOrganizer({...organizer, [updateOrgInfo]: event.target.value});
    }
    const handleSubmit = event => {
        event.preventDefault();
        const updateOrganizerInfo = {
            organizerName : organizer.organizerName ,
            organizerEmail : organizer.organizerEmail ,
            organizerPhone : organizer.organizerPhone ,
            organizerAddress : organizer.organizerAddress ,
            organizerInfo : organizer.organizerInfo
        }
        
        if (updateOrganizerInfo.organizerPhone.length > 11 || updateOrganizerInfo.organizerPhone.length < 9)
        {
            alert("連絡電話格式錯誤");
        }
        else
        {
            // let url = "/api/login/name"
            // axios.patch(url , updateOrganizerInfo)
            let url = "/api/organizer/" ;
            url = url + member.memberEmail ;
            axios.patch(url , updateOrganizerInfo)
            .then(response => {
                console.log(response);
                console.log(updateOrganizerInfo);
                alert("主辦單位資訊已修改");
            })
            .catch(function(error){
                console.log(updateOrganizerInfo);
            });
        }
    };

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
                                <Box lineHeight={1} m={4}>
                                    報名狀況
                                </Box>
                            </Link>
                            <Divider />
                            <Box lineHeight={3} m={1}>
                                <strong>{organizer.organizerName}</strong>
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
                                                <TextField 
                                                    style={{minWidth:"250px"}}
                                                    value={organizer.organizerName}
                                                    onChange={handleChange('organizerName')}
                                                />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="h6">
                                                    聯絡電子信箱：
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <TextField
                                                    type="email"
                                                    style={{minWidth:"250px"}}
                                                    value={organizer.organizerEmail}
                                                    onChange={handleChange('organizerEmail')}
                                                />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="h6">
                                                    連絡電話：
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <TextField value={organizer.organizerPhone} onChange={handleChange('organizerPhone')} />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="h6">
                                                    聯絡地址：
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                            <TextField
                                                style={{minWidth:"350px"}}
                                                value={organizer.organizerAddress}
                                                onChange={handleChange('organizerAddress')}
                                            />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="h6">
                                                    主辦單位簡介：
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <TextareaAutosize
                                                    style={{minWidth:"350px" , minHeight:"250px"}}
                                                    value={organizer.organizerInfo}
                                                    onChange={handleChange('organizerInfo')}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                                <Box lineHeight={5} m={1}>
                                    <div className={classes.button_part}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            onClick={handleSubmit}
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
