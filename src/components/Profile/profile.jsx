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

    // const [value, setValue] = React.useState();

    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // };
    
    // const [memberName,setMemberName] =  useState("");
    // const [memberBirthday,setMemberBirthday] =  useState("");
    // const [memberPhone,setMemberPhone] =  useState("");
    // const [memberAddress,setMemberAddress] =  useState("");
    // const [emergencyContact,setEmergencyContact] =  useState("");
    // const [emergencyContactRelation,setEmergencyContactRelation] =  useState("");
    // const [emergencyContactPhone,setEmergencyContactPhone] =  useState("");


    // const handleSubmit=(event)=> {
    //     //event.preventDefault();
    //     const member={
    //         memberName : memberName ,
    //         memberBirthday : memberBirthday ,
    //         memberPhone : memberPhone ,
    //         memberAddress : memberAddress ,
    //         emergencyContact : emergencyContact ,
    //         emergencyContactRelation : emergencyContactRelation ,
    //         emergencyContactPhone : emergencyContactPhone
    //     };
    //     axios.post("api/member", member,
    //     {
    //         auth:
    //         {
    //             username : "user",
    //             password : "123"
    //         }
    //     })
    //     .then(res => {
    //         console.log("test")
    //         console.log(res);
    //         console.log(res.data);
    //         //再新增！判斷後為ok就跳到下一頁
    //         //PassTextPage();
            
    //       }).catch(function(error){
    //           alert(error);
    //       });
    // }

    // const [inputs , setInputs] = React.useState({
    //     Name : "" ,
    //     // Gender : "" ,
    //     // BloodType : "" ,
    //     Phone : "" ,
    //     Email : "" ,
    //     Address : "" ,
    //     ContactPerson : "" ,
    //     ContactRelation : "" ,
    //     ContactPhone : "" ,
    // });

    // const handlechange = member => event => {
    //     event.persist();
    //     setInputs(inputs => ({...inputs , [member] : event.target.value}));
    // }

    // let update; //宣告一個布林值變數
    // // let history = useHistory(); //傳值跳頁的方法
    // const handleSubmit = () =>
    // {
    //     if(inputs.name.length > 0 
    //         || inputs.Name.length > 0 
    //         || inputs.Phone.length > 0
    //         || inputs.Address.length > 0
    //         || inputs.ContactPerson.length > 0
    //         || inputs.ContactRelation.length > 0
    //         || inputs.ContactPhone.length > 0 ) //每個輸入格都不為空值、驗證密碼等於密碼
    //         {
    //             fetch('/member',{
    //                 method: 'PUT',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify({
    //                     memberName : inputs.Name ,
    //                     memberPhone : inputs.Phone ,
    //                     memberAddress : inputs.Address ,
    //                     emergencyContact : inputs.ContactPerson ,
    //                     emergencyContactPhone : inputs.ContactPhone ,
    //                     emergencyContactRelation : inputs.ContactRelation
    //                 })
    //             })
    //             .then(res => {
    //                 async function fetchres(){
    //                 const test = await res.text();  //接收後端傳來的訊息
    //                 if(test === "request failed. Email format error!") //信箱不包含@
    //                 {
    //                     alert("信箱格式有誤 請輸入有效信箱！");
    //                     update = false;
    //                     console.log(1);
    //                     return update;
    //                 }
    //                 else if(inputs.Phone.length !== 10) //手機長度不等於10
    //                 {
    //                     alert("手機長度有誤 請重新輸入！");
    //                     update = false;
    //                     console.log(2);
    //                     return update;
    //                 }
    //                 else if(inputs.ContactPhone.length !== 10) //手機長度不等於10
    //                 {
    //                     alert("手機長度有誤 請重新輸入！");
    //                     update = false;
    //                     console.log(3);
    //                     return update;
    //                 }
    //                 else
    //                 {
    //                     alert("修改成功！");
    //                     update = true;
    //                     console.log(0);
    //                     history.push("/login");
    //                     return update;                        
    //                 }
                    
    //             } fetchres() })
    //             // .then(res => console.log(post))
    //             .then(res => console.log(res))
    //             .catch(err => console.log(`Error with message: ${err}`))
    //         }            
    //     else
    //     {
    //         alert("請再次確認!!")
    //     }  
    // }

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
                            {member.memberName}
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
                                                id="name"
                                                // onChange={e=>setMemberName(e.target.value)}
                                            />
                                        </TableCell>
                                        <TableCell>電子郵件(帳號)：</TableCell>
                                        <TableCell>
                                            <TextField variant="outlined" style={{ minWidth: "250px" }} value={member.memberEmail} disabled />
                                            <Button
                                                className={classes.change_password}
                                                component={Link}
                                                to="/updatePassword"
                                                variant="contained"
                                            >
                                                更改密碼
                                            </Button>
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
                                            <RadioGroup name="gender" value={member.memberGender} id="memeberGender">
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
                                                id="memberBirthday"
                                                // onChange={e=>setMemberBirthday(e.target.value)}
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>聯絡電話：</TableCell>
                                        <TableCell>
                                            <TextField 
                                                variant="outlined"
                                                value={member.memberPhone}
                                                id="memberPhone"
                                                // onChange={e=>setMemberPhone(e.target.value)}
                                            />
                                        </TableCell>
                                        <TableCell>聯絡地址：</TableCell>
                                        <TableCell>
                                            <TextField 
                                                variant="outlined"
                                                style={{ minWidth: "400px" }}
                                                value={member.memberAddress}
                                                id="memberAddress"
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
                                                id="emergencyContact"
                                                // onChange={e=>setEmergencyContact(e.target.value)}
                                            />
                                        </TableCell>
                                        <TableCell>緊急聯絡人關係：</TableCell>
                                        <TableCell>
                                            <TextField
                                                variant="outlined"
                                                value={member.emergencyContactRelation}
                                                id="emergencyContactRelation"
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
                                                id="emergencyContactPhone"
                                                // onChange={e=>setEmergencyContactPhone(e.target.value)}
                                            />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <Box lineHeight={5} m={1}>
                                <Button
                                    className={classes.button}
                                    // onClick={handleSubmit}
                                    variant="contained"
                                    startIcon={<SaveIcon />}
                                >
                                    儲存更新
                                </Button>
                            </Box>
                        </form>
                    </div>
                </Container>
            </div>
        </div>
    );
}