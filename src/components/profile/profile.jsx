import React , { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Header from '../header/PF_header1.jsx';
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
        color: "#000"
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
        overflow: "visible"
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
    }
}));

export default function Profile() {
    const classes = useStyles();

    // const constructor = props => {
    //     super(props)
    //     this.state = {
    //         name: '',
    //         ID: '',
    //         Gender: 'male'
    //     }
    //     this.changeState = this.changeState.bind(this)
    //     this.submitForm = this.submitForm.bind(this)
    // }
    // const changeState = event => {
    //     //使用setState將值寫到nameVal中
    //     this.setState({name : event.target.value});
    // }

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
                                            <TextField variant="outlined" value={member.memberName} disabled />
                                        </TableCell>
                                        <TableCell>身分證字號：</TableCell>
                                        <TableCell>
                                            <TextField variant="outlined" value={member.memberID} disabled />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>性別：</TableCell>
                                        <TableCell>
                                            <RadioGroup name="gender" value={member.memberGender} disabled>
                                                <FormControlLabel checked={member.memberGender === "male"} control={<Radio color="default" />} label="男性" />
                                                <FormControlLabel checked={member.memberGender === "female"} control={<Radio color="default" />} label="女性" />
                                                <FormControlLabel checked={member.memberGender === "unknown"} control={<Radio color="default" />} label="暫不透漏" />
                                            </RadioGroup>
                                        </TableCell>
                                        <TableCell>血型：</TableCell>
                                        <TableCell>
                                            <FormControl style={{ minWidth: "100px" }} variant="outlined" disabled>
                                                <Select
                                                    labelId="blood-type"
                                                    value={member.memberBloodType}
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
                                            <TextField type="date-time" variant="outlined" value={member.memberBirthday} InputLabelProps={{shrink: true}} disabled />
                                        </TableCell>
                                        <TableCell>聯絡電話：</TableCell>
                                        <TableCell>
                                            <TextField variant="outlined" value={member.memberPhone} disabled />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>電子郵件：</TableCell>
                                        <TableCell>
                                            <TextField variant="outlined" style={{ minWidth: "250px" }} value={member.memberEmail} disabled />
                                        </TableCell>
                                        <TableCell>聯絡地址：</TableCell>
                                        <TableCell>
                                            <TextField variant="outlined" style={{ minWidth: "300px" }} value={member.memberAddress} disabled />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>緊急聯絡人：</TableCell>
                                        <TableCell>
                                            <TextField variant="outlined" value={member.emergencyContact} disabled />
                                        </TableCell>
                                        <TableCell>緊急聯絡人關係：</TableCell>
                                        <TableCell>
                                            <TextField variant="outlined" value={member.emergencyContactRelation} disabled/>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>緊急連絡人電話：</TableCell>
                                        <TableCell colspan="3">
                                            <TextField variant="outlined" value={member.emergencyContactPhone} disabled />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <Box lineHeight={5} m={1}>
                                <Button
                                    className={classes.button}
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