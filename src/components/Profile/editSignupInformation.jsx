import React , { useState , useEffect } from 'react';
import { makeStyles , withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Header from '../Header/PF_header.jsx';
import LeftBar from 'components/Profile/leftbar.jsx';
import { Link , useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
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

    var AINum = window.location.href.substring(window.location.href.lastIndexOf("?") + 1)
    
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
    const [activity, setActivity] = useState([]);
    const [registration, setRegistration] = useState([]);
    useEffect(() => {
        async function fetchDataReg() {
                let url = "/api/login/name"
                await axios.get(url)
                .then(result1 => {
                    if(result1.data.toString().startsWith("<!DOCTYPE html>"))
                    {
                        alert("您尚未登入，請先登入！")
                        goSignin();
                    }
                    else
                    {
                        axios.get("/api/registration/" + AINum)
                        .then(result2 => {
                            setRegistration(result2.data);
                            console.log(result2.data.member);
                            axios.get("/api/activity/" + result2.data.activity_Id)
                            .then(result3 => {
                                setActivity(result3.data);
                                console.log(result3);
                            })
                            .catch(err => {
                                console.log(err.response.status);
                                if(err.response.status === 403)
                                {
                                    alert("您的權限不足!");
                                    goHomePage();
                                }
                            })
                            axios.get("/api/member/" + result1.data.memberEmail)
                            .then(result4 => {
                                setMember(result4.data);
                                console.log(result4);
                            })
                            .catch(err => {
                                console.log(err.response.status);
                                if(err.response.status === 403)
                                {
                                    alert("您的權限不足!");
                                    goHomePage();
                                }
                            })
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

    const handleChange = updateRegInfo => event => {
        setRegistration({...registration, [updateRegInfo]: event.target.value});
    }
    const handleSubmit = event => {
        event.preventDefault();
        const updateRegistrationInfo = {
            registrationMeal : registration.registrationMeal ,
            registrationRemark : registration.registrationRemark
        }
        let url = "/api/registration/";
        url = url + AINum;
        axios.patch(url , updateRegistrationInfo)
        .then(res => {
            alert("報名資料已修改");
            history.push("/signupSituation");
        })
        .catch(function(error){
            console.log(error.response.status);
        });
    };

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
                                    {activity.activityName}
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="h6">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;&nbsp;
                                    {activity.activitySpace}
                                </Typography>
                                <Typography variant="h6">
                                    <FontAwesomeIcon icon={faClock} />&nbsp;
                                    {activity.activityStartDateStringDate}
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
                                            <TableCell>姓名：</TableCell>
                                            <TableCell>
                                                <TextField value={member.memberName} disabled />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>聯絡電子信箱：</TableCell>
                                            <TableCell>
                                                <TextField value={member.memberEmail} disabled />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>連絡電話：</TableCell>
                                            <TableCell>
                                                <TextField value={member.memberPhone} disabled />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>供餐選項：</TableCell>
                                            {activity.activityMeal == 0 ?
                                            <TableCell>
                                                <RadioGroup name="Gender" value={registration.registrationMeal + ""}>
                                                    <FormControlLabel value="0" control={<RadioColor />} label="暫不供餐" disabled />
                                                </RadioGroup>
                                            </TableCell>
                                            :
                                            <TableCell>
                                                <RadioGroup name="Gender" value={registration.registrationMeal + ""} onChange={handleChange('registrationMeal')}>
                                                    <FormControlLabel value="1" control={<RadioColor />} label="葷食" />
                                                    <FormControlLabel value="2" control={<RadioColor />} label="素食" />
                                                </RadioGroup>
                                            </TableCell>
                                            }
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>備註：</TableCell>
                                            <TableCell>
                                                <TextField style={{minWidth:"350px"}} value={registration.registrationRemark} onChange={handleChange('registrationRemark')} />
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
                                            onClick={handleSubmit}
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
