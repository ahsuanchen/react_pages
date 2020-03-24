import React , { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Header from '../Header/PF_header2.jsx';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
// import { faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
    topic : {
        margin : "2%" ,
        textAlign : "center"
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
        justifyContent : "center" ,
    } ,
    button1 : {
        background: '#ADADAD',
        color : "#fff" ,
        margin: "auto 2%",
    } , 
    button2 : {
        background: 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)',
        color : "#fff" ,
        margin: "auto 2%",
    }
  }));

export default function ManageActivity() {
    const classes = useStyles();

    const [gender, setgender] = React.useState();
    const handleSelectGender = event => {
        setgender(event.target.value);
    };

    const [blood, setblood] = React.useState();
    const handleSelectBlood = event => {
        setblood(event.target.value);
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
                            <Link to="/" className={classes.link}>
                                <Box lineHeight={2} m={1}>
                                    我的相簿
                                </Box>
                            </Link>
                    </Typography>
                </Container>
                <Container className={classes.content}>
                    <div>
                        <Typography variant="h4">
                            三 校 六 系 聯 合 聖 誕 舞 會
                        </Typography>
                        <hr />
                    </div>
                    <div className={classes.activity_part}>
                        <form>
                            <Box lineHeight="normal" m={1}>
                                <Typography variant="h4" className={classes.topic}>
                                    新增參加者
                                </Typography>
                            </Box>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>姓名：</TableCell>
                                        <TableCell>
                                            <TextField label="Name" variant="outlined" required />
                                        </TableCell>
                                        <TableCell>身分證字號：</TableCell>
                                        <TableCell>
                                            <TextField label="ID" variant="outlined" size="10" required />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>性別：</TableCell>
                                        <TableCell>
                                            <RadioGroup aria-label="gender" name="gender">
                                                <FormControlLabel value="male" control={<Radio color="default" />} label="男性" />
                                                <FormControlLabel value="female" control={<Radio color="default" />} label="女性" />
                                                <FormControlLabel value="unknown" control={<Radio color="default" />} label="暫不透漏" />
                                            </RadioGroup>
                                        </TableCell>
                                        <TableCell>血型：</TableCell>
                                        <TableCell>
                                            <FormControl style={{ minWidth: "100px" }}>
                                                <Select
                                                    labelId="blood-type"
                                                    variant="outlined"
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
                                            <TextField type="date" label="Birthday" variant="outlined" InputLabelProps={{shrink: true}} required />
                                        </TableCell>
                                        <TableCell>聯絡電話：</TableCell>
                                        <TableCell>
                                            <TextField label="Phone" variant="outlined" required />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>電子郵件：</TableCell>
                                        <TableCell>
                                            <TextField style={{ minWidth: "250px" }} label="Email" variant="outlined" size="50" required />
                                        </TableCell>
                                        <TableCell>聯絡地址：</TableCell>
                                        <TableCell>
                                            <TextField style={{ minWidth: "300px" }} label="Address" variant="outlined" size="50" required />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>緊急聯絡人：</TableCell>
                                        <TableCell>
                                            <TextField label="EmergencyContact" variant="outlined" required />
                                        </TableCell>
                                        <TableCell>緊急聯絡人關係：</TableCell>
                                        <TableCell>
                                            <TextField label="ContactRelationship" variant="outlined" required />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>緊急連絡人電話：</TableCell>
                                        <TableCell colspan="3">
                                            <TextField label="ContactPhone" variant="outlined" required />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <Box lineHeight={5} m={1}>
                                <div className={classes.button_part}>
                                    <Button
                                        className={classes.button1}
                                        variant="contained"
                                        component={Link}
                                        to="/participantList"
                                    >
                                        取消新增
                                    </Button>
                                    <Button
                                        type="submit"
                                        className={classes.button2}
                                        variant="contained"
                                    >
                                        確定新增
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