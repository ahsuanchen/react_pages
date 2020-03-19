import React , {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Header from '../header/PF_header2.jsx';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
        overflow : "visible"
    } ,
    topic : {
        margin : "2% auto" ,
        textAlign : "center"
    } ,
    button_part : {
        margin : "2% 2%" ,
        display: "flex" ,
        justifyContent : "center" ,
    } ,
    button1 : {
        background : '#ADADAD' ,
        color : "#fff" ,
        margin : "auto 2%" ,
    } ,
    button2 : {
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)' ,
        color : "#fff" ,
        margin : "auto 2%" ,
    }
  }));

export default function MenuAppBar() {
    const classes = useStyles();

    const [gender, setgender] = React.useState("male");
    const [blood, setblood] = React.useState("A");

    const handleSelectGender = event => {
        setgender(event.target.value);
    };

    const handleSelectBlood = event => {
        setblood(event.target.value);
    };

    const [member, setMember] = useState([]);
    // const memberList = ['memberName', 'memberID', 'memberGender', 'memberBloodType', 'memberBirthday', 'memberEmail', 'memberAddress'];
    useEffect(() => {
        async function fetchDataMem() {
                const result = await axios.get("/api/member/actforfun@gmail.com")
                setMember(result.data);
                console.log(result);           
                // .then(result => {
                //     setMember(result.data)
                //     console.log(result)
                // }).catch(err => {
                //     console.log(err)
                // })
        }
        fetchDataMem();
    }, []);

    const [organizer, setOrganizer] = useState([]);
    // const organizerList = ['organizerName' , 'organizerEmail' , 'organizerPhone' ,'organizerAddress' , 'organizerInfo'];
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
                            <Link to="/" className={classes.link}>
                                <Box lineHeight={2} m={1}>
                                    我的相簿
                                </Box>
                            </Link>
                    </Typography>
                </Container>
                <Container className={classes.content}>
                    <div>
                        <Grid container>
                            <Grid item xs={10}>
                                <Typography variant="h3">
                                    三校六系聯合聖誕舞會
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="h6">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;&nbsp;
                                    三創生活園區
                                </Typography>
                                <Typography variant="h6">
                                    <FontAwesomeIcon icon={faClock} />&nbsp;
                                    2020-12-23 (三)
                                </Typography>
                            </Grid>
                        </Grid>
                        <hr /> 
                    </div> 
                        <div>
                            <form>
                                <Box lineHeight="normal" m={1}>
                                    <Typography variant="h4" className={classes.topic}>
                                        報名資料
                                    </Typography>
                                </Box>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>姓名：</TableCell>
                                            <TableCell>
                                                <TextField label="Name" defaultValue="王小明" />
                                            </TableCell>
                                            <TableCell>身分證字號：</TableCell>
                                            <TableCell>
                                                <input type="text" name="ID" disabled placeholder="A123456789" />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>性別：</TableCell>
                                            <TableCell>
                                                <FormControl style={{minWidth: "100px"}}>
                                                    <InputLabel id="gender">Gender</InputLabel>
                                                    <Select
                                                        labelId="gender"
                                                        value={gender}
                                                        onChange={handleSelectGender}
                                                    >
                                                        <MenuItem value="male">男</MenuItem>
                                                        <MenuItem value="female">女</MenuItem>
                                                        <MenuItem value="unknown">暫不透漏</MenuItem>
                                                    </Select>
                                                </FormControl>   
                                            </TableCell>
                                            <TableCell>血型：</TableCell>
                                            <TableCell>
                                                <FormControl style={{minWidth: "100px"}}>
                                                    <InputLabel id="blood-type">Blood Type</InputLabel>
                                                    <Select
                                                        labelId="blood-type"
                                                        value={blood}
                                                        onChange={handleSelectBlood}
                                                    >
                                                        <MenuItem value="A">A</MenuItem>
                                                        <MenuItem value="B">B</MenuItem>
                                                        <MenuItem value="AB">AB</MenuItem>
                                                        <MenuItem value="O">O</MenuItem>
                                                        <MenuItem value="RH">RH 陰性</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>生日：</TableCell>
                                            <TableCell>
                                                <TextField label="Birthday" type="date" defaultValue="1999-03-25" InputLabelProps={{shrink: true,}} />
                                            </TableCell>
                                            <TableCell>聯絡電話：</TableCell>
                                            <TableCell>
                                                <TextField label="Cellphone" defaultValue="0919478653" />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>聯絡地址：</TableCell>
                                            <TableCell colspan="3">
                                                <TextField label="Address" style={{minWidth:"350px"}} defaultValue="新北市新莊區中正路510號" />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>緊急聯絡人：</TableCell>
                                            <TableCell>
                                                <TextField label="ContactpersonName" defaultValue="王俊凱" />
                                            </TableCell>
                                            <TableCell>緊急聯絡人關係：</TableCell>
                                            <TableCell>
                                                <TextField label="Relationship" defaultValue="父子" />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>緊急連絡人電話：</TableCell>
                                            <TableCell colspan="3">
                                                <TextField label="ContactpersonCellphone" defaultValue="0939457963" />
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                                <Box lineHeight={5} m={1}>
                                    <div className={classes.button_part}>
                                        <Button
                                            variant="contained"
                                            className={classes.button1}
                                        >
                                            取消更改
                                        </Button>
                                        <Button
                                            variant="contained"
                                            className={classes.button2}
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