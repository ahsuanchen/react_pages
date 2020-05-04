import React , { useState , useEffect } from 'react';
import { makeStyles , withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Header from '../Header/PF_header.jsx';
import { Link , useHistory } from 'react-router-dom';
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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
    table : {
        display: "flex" ,
        justifyContent : "center" ,
    } ,
    button_part : {
        margin : "2%" ,
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

  const RadioColor = withStyles({
    root: {
        color: "#E0E0E0",
        '&$checked': {
            color: "#00CACA",
        },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

export default function EditSignupInfo() {
    const classes = useStyles();

    const handleChange = updateMemInfo => event => {
        setRegistration({...registration, [updateMemInfo]: event.target.value});
    }
    
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
    const [organizer, setOrganizer] = useState([]);
    const [registration, setRegistration] = useState([]);
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
                        axios.get("/api/registration/" + result.data.memberEmail)
                        .then(result => {
                            setRegistration(result.data);
                            console.log(result);
                        })
                        .catch(err => {
                            console.log(err.response.status);
                            if(err.response.status === 403)
                            {
                                alert("您的權限不足!");
                                goHomePage();
                            }
                        })
                        axios.get("/api/organizer/"+result.data.memberEmail)
                        .then(result => {
                            setOrganizer(result.data);
                            console.log(result);
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

    
    // // const organizerList = ['organizerName' , 'organizerEmail' , 'organizerPhone' ,'organizerAddress' , 'organizerInfo'];
    // useEffect(() => {
    //     async function fetchDataOrg() {
    //             // let url = "/api/login/name"
    //             // await axios.get(url)
    //             await axios.get("/api/organizer/actforfun@gmail.com")
    //             .then(result => {
    //                 if(result.data.toString().startsWith("<!DOCTYPE html>"))
    //                 {
    //                     alert("您尚未登入，請先登入！")
    //                     goSignin();
    //                 }
    //                 else
    //                 {
    //                     setOrganizer(result.data);
    //                     console.log(result);
    //                 }
    //             })
    //             .catch(err => {
    //                 console.log(err.response.status);
    //                 if(err.response.status === 403)
    //                 {
    //                     alert("您的權限不足!");
    //                     goHomePage();
    //                 }
    //             })
    //     }
    //     fetchDataOrg();
    // }, []);
    
    const [activity_ID] = useState(localStorage.getItem('activityID'));

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
                            <input type="hidden" value={activity_ID}></input>
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
                                <Table className={classes.table}>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>聯絡電子信箱：</TableCell>
                                            <TableCell>
                                                <TextField label="Name" value={registration.memberEmail} />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>性別：</TableCell>
                                            <TableCell>
                                                <TextField label="Name" defaultValue="王小明" />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>供餐選項：</TableCell>
                                            <TableCell>
                                                <RadioGroup name="Gender" value={registration.registrationMeal} onChange={handleChange('memberGender')}>
                                                    <FormControlLabel value={0} control={<RadioColor />} label="暫不供餐" />
                                                    <FormControlLabel value={1} control={<RadioColor />} label="葷食" />
                                                    <FormControlLabel value={2} control={<RadioColor />} label="素食" />
                                                </RadioGroup>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>備註：</TableCell>
                                            <TableCell>
                                                <TextField label="Address" style={{minWidth:"350px"}} defaultValue="新北市新莊區中正路510號" />
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                                <Box lineHeight={5} m={1}>
                                    <div className={classes.button_part}>
                                        <Button
                                            variant="contained"
                                            className={classes.button1}
                                            component={Link}
                                            to="/signupSituation"
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
