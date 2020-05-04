import React , { useState , useEffect } from 'react';
import { makeStyles , withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Header from '../Header/PF_header.jsx';
import LeftBar from 'components/Profile/leftbar.jsx';
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
    content_part : {
        display : "flex" ,
        justifyContent: "center",
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

    const [registration, setRegistration] = useState([]);
    // const memberList = ['memberName', 'memberID', 'memberGender', 'memberBloodType', 'memberBirthday', 'memberEmail', 'memberAddress'];
    useEffect(() => {
        async function fetchDataReg() {
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
                        axios.get("/api/registration/" + result.data.memberEmail)
                        .then(result => {
                            setRegistration(result.data);
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
        fetchDataReg();
    }, []);
    
    const [activity_ID] = useState(localStorage.getItem('activityID'));

    return (
        <div className={classes.div}>
            <Header />
            <div className={classes.content_part}>
                <LeftBar/>
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
