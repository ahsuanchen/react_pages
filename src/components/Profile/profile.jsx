import React , { useState, useEffect } from 'react';
import { makeStyles , withStyles } from '@material-ui/core/styles';
import axios from 'axios';
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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SaveIcon from '@material-ui/icons/Save';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
    div: {
        boxSizing: "border-box"
    },
    left_menu: {
        display: "flex",
        justifyContent: "space-around",
        minHeight: 800,
        color: "#000" ,
    },
    left_container: {
        maxWidth: "280px",
        borderRight: "1px solid",
    },
    avatar: {
        minWidth: "150px",
        minHeight: "150px",
    },
    link: {
        textDecoration: "none",
        color: "#D0D0D0",
        '&:hover': {
            color: '#00AEAE'
        }
    },
    content: {
        margin: "2% 2%",
        overflow: "visible" ,
    },
    img: {
        margin: "2% 0",
        minWidth: '150px',
        maxHeight: '200px'
    },
    button: {
        background: 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)',
        color : "#fff" ,
        margin: "2% auto",
        display: "flex",
        justifyContent: "center",
    } ,
    change_password : {
        background: 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)',
        color : "#fff" ,
        margin: "2%",
    }
}));

//radio 顏色設定
const RadioColor = withStyles({
        root: {
            color: "#E0E0E0",
            '&$checked': {
                color: "#00CACA",
            },
        },
        checked: {},
})(props => <Radio color="default" {...props} />);



    

export default function Profile() {
    const classes = useStyles();
    // const [memberName , setMemberName] = useState("");
    // localStorage.setItem('memberName', memberName);
    const [updateInfo, setUpdateInfo] = React.useState({
        Name : '' ,
        Gender : '' ,
        Birthday : '' ,
        Phone : '' ,
        Address : '' ,
        emergencyContact : '' ,
        emergencyContactPhone : '' ,
        emergencyContactRelation : ''
    })
    const handleChange = member => event => {
        event.persist();
        setUpdateInfo(updateInfo => ({...updateInfo, [member]: event.target.value}));
    } 
    const handleSubmit = event => {
        event.preventDefault();
        fetch('http://localhost:8080/api/member/actforfun@gmail.com', {
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            member: {
                Name : updateInfo.Name ,
                Gender : updateInfo.Gender ,
                Birthday : updateInfo.Birthday ,
                Phone : updateInfo.Phone ,
                Address : updateInfo.Address ,
                emergencyContact : updateInfo.emergencyContact ,
                emergencyContactPhone : updateInfo.emergencyContactPhone ,
                emergencyContactRelation : updateInfo.emergencyContactRelation
            }
        })
        })
        .then(response => response.json())
        .then(json => console.log(json))
    };

    let history = useHistory();
    function goSignin()
    {
        history.push("/signin");
    }

    function goHomePage()
    {
        history.push("/homepageAfterLogin");
    }
    const [member, setMember] = useState([]);
    // const memberList = ['memberName', 'memberID', 'memberGender', 'memberBloodType', 'memberBirthday', 'memberEmail', 'memberAddress'];
    useEffect(() => {
        async function fetchDataMem() {
                const result = await axios.get("/api/member/actforfun@gmail.com")
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
                const result = await axios.get("/api/organizer/actforfun@gmail.com")
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
                            <Box lineHeight={1} m={4} color="#000">
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
                            個 人 檔 案
                        </Typography>
                        <hr />
                    </div>
                    <div>
                        <form>
                            <Box lineHeight="normal" m={1}>
                                <img className={classes.img} src="./img/profile.jpg" alt="img" />
                            </Box>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>姓名：</TableCell>
                                        <TableCell>
                                            <TextField
                                                variant="outlined"
                                                value={member.memberName}
                                                name="Name"
                                                // onChange={e => setMemberName(e.target.value)}
                                            />
                                        </TableCell>
                                        <TableCell>電子郵件(帳號)：</TableCell>
                                        <TableCell>
                                            <TextField variant="outlined" style={{ minWidth: "250px" }} value={member.memberEmail} disabled />
                                            <Tooltip title="修改密碼">
                                                <Button
                                                    className={classes.change_password}
                                                    component={Link}
                                                    to="/updatePassword"
                                                    variant="contained"
                                                >
                                                    更改密碼
                                                </Button>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>身分證字號：</TableCell>
                                        <TableCell>
                                            <TextField variant="outlined" value={member.memberID} disabled />
                                        </TableCell>
                                        <TableCell>血型：</TableCell>
                                        <TableCell>
                                            {/* <TextField variant="outlined" value={member.memberBloodType} disabled /> */}
                                            <FormControl style={{ minWidth: "100px" }} variant="outlined">
                                                <Select
                                                    labelId="blood-type"
                                                    value={member.memberBloodType}
                                                    name="BloodType"
                                                >
                                                    <MenuItem value="A" >A</MenuItem>
                                                    <MenuItem value="B" >B</MenuItem>
                                                    <MenuItem value="AB" >AB</MenuItem>
                                                    <MenuItem value="O">O</MenuItem>
                                                    <MenuItem value="RH" >RH 陰性</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>性別：</TableCell>
                                        <TableCell>
                                            <RadioGroup name="Gender" value={member.memberGender}>
                                                <FormControlLabel checked={member.memberGender === "male"} control={<RadioColor />} label="男性" />
                                                <FormControlLabel checked={member.memberGender === "female"} control={<RadioColor />} label="女性" />
                                                <FormControlLabel checked={member.memberGender === "unknown"} control={<RadioColor />} label="暫不透漏" />
                                            </RadioGroup>
                                        </TableCell>
                                        <TableCell>生日：</TableCell>
                                        <TableCell>
                                            <TextField
                                                type="date"
                                                variant="outlined"
                                                value={member.memberBirthdayString}
                                                InputLabelProps={{shrink: true}}
                                                name="Birthday"
                                                // onChange={e => setMemberBirthday(e.target.value)}
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>聯絡電話：</TableCell>
                                        <TableCell>
                                            <TextField 
                                                variant="outlined"
                                                value={member.memberPhone}
                                                name="Phone"
                                                // onChange={e=>setMemberPhone(e.target.value)}
                                            />
                                        </TableCell>
                                        <TableCell>聯絡地址：</TableCell>
                                        <TableCell>
                                            <TextField 
                                                variant="outlined"
                                                style={{ minWidth: "400px" }}
                                                value={member.memberAddress}
                                                name="Address"
                                                // onChange={e=>setMemberAddress(e.target.value)}
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>緊急聯絡人：</TableCell>
                                        <TableCell>
                                            <TextField
                                                variant="outlined"
                                                value={member.emergencyContact}
                                                name="emergencyContact"
                                                // onChange={e=>setEmergencyContact(e.target.value)}
                                            />
                                        </TableCell>
                                        <TableCell>緊急聯絡人關係：</TableCell>
                                        <TableCell>
                                            <TextField
                                                variant="outlined"
                                                value={member.emergencyContactRelation}
                                                name="emergencyContactRelation"
                                                // onChange={e=>setEmergencyContactRelation(e.target.value)}
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>緊急連絡人電話：</TableCell>
                                        <TableCell colspan="3">
                                            <TextField
                                                variant="outlined"
                                                value={member.emergencyContactPhone}
                                                name="emergencyContactPhone"
                                                // onChange={e=>setEmergencyContactPhone(e.target.value)}
                                            />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <Box lineHeight={5} m={1}>
                                <Tooltip title="確認儲存">
                                    <Button
                                        type="submit"
                                        className={classes.button}
                                        onClick={handleSubmit}
                                        variant="contained"
                                        startIcon={<SaveIcon />}
                                    >
                                        儲存更新
                                    </Button>
                                </Tooltip>
                            </Box>
                        </form>
                    </div>
                </Container>
            </div>
        </div>
    );
}