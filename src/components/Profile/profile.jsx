import React , { useState , useEffect } from 'react';
import { makeStyles , withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Header from '../Header/PF_header.jsx';
import LeftBar from 'components/Profile/leftbar.jsx';
import { Link , useHistory} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
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
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles(theme => ({
    div: {
        boxSizing: "border-box" ,
    },
    content_part : {
        display : "flex" ,
        justifyContent: "center",
    } ,
    content: {
        margin: "2%",
    },
    word : {
        fontFamily : "微軟正黑體"
    } ,
    table_form : {
        margin: "5% auto",
    } ,
    button: {
        background: 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)',
        color : "#fff" ,
        margin: "5% auto",
        display: "flex",
        justifyContent: "center",
    } ,
    change_password : {
        background: 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)',
        color : "#fff" ,
        margin: "2%",
    } ,
    alert: {
        marginBottom : 105 , 
        marginLeft : 125
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

    const [member, setMember] = useState({
        memberName : '' ,
        memberEmail : '' ,
        memberBloodType : ' ' ,
        memberGender : '' ,
        memberBirthday : '' ,
        memberBirthdayString : '' ,
        memberPhone : '' ,
        memberAddress : '' ,
        emergencyContact : '' ,
        emergencyContactPhone : '' ,
        emergencyContactRelation : ''
    });
    useEffect(() => {
        async function fetchDataMem() {
                let url = "/api/login/name"
                axios.get(url)
                .then(result => {
                    setMember(result.data);
                })
                .catch(err => {
                    console.log(err.response.status);
                })
        }
        fetchDataMem();
    }, []);

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    // 成功簽到
    const [openSuccess, setOpenSuccess] = React.useState(false);
    // 失敗(姓名字數)
    const [openErr1, setOpenErr1] = React.useState(false);
    // 失敗(連絡電話格式)
    const [openErr2, setOpenErr2] = React.useState(false);
    // 失敗(生日格式)
    const [openErr3, setOpenErr3] = React.useState(false);
    const ErrClose = () => {
        setOpenSuccess(false);
        setOpenErr1(false);
        setOpenErr2(false);
        setOpenErr3(false);
    };  

    const handleChange = updateMemInfo => event => {
        setMember({...member, [updateMemInfo]: event.target.value});
    }
    const handleSubmit = event => {
        event.preventDefault();
        const updateMemberInfo = {
            memberName : member.memberName ,
            memberBloodType : member.memberBloodType ,
            memberGender : member.memberGender ,
            memberBirthday : new Date(member.memberBirthdayString).getTime() ,
            memberBirthdayString : member.memberBirthdayString ,
            memberPhone : member.memberPhone ,
            memberAddress : member.memberAddress ,
            emergencyContact : member.emergencyContact ,
            emergencyContactPhone : member.emergencyContactPhone ,
            emergencyContactRelation : member.emergencyContactRelation
        }
        if ((updateMemberInfo.memberName.length > 5 || updateMemberInfo.memberName.length < 2)
        || (updateMemberInfo.emergencyContact.length > 5 || updateMemberInfo.emergencyContact.length < 2))
        {
            // alert("姓名字數錯誤");
            setOpenErr1(true);
        }
        else if (updateMemberInfo.memberPhone.length != 10 || updateMemberInfo.emergencyContactPhone.length != 10)
        {
            // alert("連絡電話格式錯誤");
            setOpenErr2(true);
        }
        else if (new Date(updateMemberInfo.memberBirthdayString).getTime() > new Date().getTime() )
        {
            // alert("生日格式錯誤");
            setOpenErr3(true);
        }
        else
        {
            let url = "/api/member/";
            url = url + member.memberEmail;
            axios.patch(url , updateMemberInfo)
            .then(response => {
                // alert("個人檔案內容已修改");
                setOpenSuccess(true);
                window.location.reload();
            })
            .catch(function(error){
                console.log(error.response.status);
            });
        }
    };

    return (
        <div className={classes.div}>
            <Header />
            <div className={classes.content_part}>
                <LeftBar/>
                <Container className={classes.content}>
                    <div>
                        <Typography variant="h4" className={classes.word}>
                            個 人 檔 案
                        </Typography>
                        <hr />
                    </div>
                    <div>
                        <form className={classes.table_form}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className={classes.word}>姓名：</TableCell>
                                        <TableCell>
                                            <TextField
                                                variant="outlined"
                                                value={member.memberName}
                                                name="Name"
                                                onChange={handleChange('memberName')}
                                            />
                                        </TableCell>
                                        <TableCell className={classes.word}>電子郵件(帳號)：</TableCell>
                                        <TableCell>
                                            <TextField
                                                variant="outlined"
                                                style={{ minWidth: "250px" }}
                                                value={member.memberEmail}
                                                disabled
                                            />
                                            <Tooltip title="修改密碼" className={classes.word}>
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
                                        <TableCell className={classes.word}>身分證字號：</TableCell>
                                        <TableCell>
                                            <TextField variant="outlined" value={member.memberID} disabled />
                                        </TableCell>
                                        <TableCell className={classes.word}>血型：</TableCell>
                                        <TableCell>
                                            <FormControl style={{ minWidth: "100px" }} variant="outlined">
                                                <Select
                                                    labelId="blood-type"
                                                    value={member.memberBloodType}
                                                    onChange={handleChange('memberBloodType')}
                                                    name="BloodType"
                                                    className={classes.word}
                                                >
                                                    <MenuItem value="A" className={classes.word}>A</MenuItem>
                                                    <MenuItem value="B" className={classes.word}>B</MenuItem>
                                                    <MenuItem value="AB" className={classes.word}>AB</MenuItem>
                                                    <MenuItem value="O" className={classes.word}>O</MenuItem>
                                                    <MenuItem value="RH" className={classes.word}>RH 陰性</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className={classes.word}>性別：</TableCell>
                                        <TableCell>
                                            <RadioGroup name="Gender" value={member.memberGender} onChange={handleChange('memberGender')}>
                                                <FormControlLabel value="male" control={<RadioColor />} label="男性" />
                                                <FormControlLabel value="female" control={<RadioColor />} label="女性" />
                                                <FormControlLabel value="unknown" control={<RadioColor />} label="暫不透露" />
                                            </RadioGroup>
                                        </TableCell>
                                        <TableCell className={classes.word}>生日：</TableCell>
                                        <TableCell>
                                            <TextField
                                                type="date"
                                                variant="outlined"
                                                value={member.memberBirthdayString}
                                                onChange={handleChange('memberBirthdayString')}
                                                InputLabelProps={{shrink: true}}
                                                name="Birthday"
                                                // onChange={e => setMemberBirthday(e.target.value)}
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className={classes.word}>聯絡電話：</TableCell>
                                        <TableCell>
                                            <TextField 
                                                variant="outlined"
                                                value={member.memberPhone}
                                                onChange={handleChange('memberPhone')}
                                                name="Phone"
                                                // onChange={e=>setMemberPhone(e.target.value)}
                                            />
                                        </TableCell>
                                        <TableCell className={classes.word}>聯絡地址：</TableCell>
                                        <TableCell>
                                            <TextField 
                                                variant="outlined"
                                                style={{ minWidth: "400px" }}
                                                value={member.memberAddress}
                                                onChange={handleChange('memberAddress')}
                                                name="Address"
                                                // onChange={e=>setMemberAddress(e.target.value)}
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className={classes.word}>緊急聯絡人：</TableCell>
                                        <TableCell>
                                            <TextField
                                                variant="outlined"
                                                value={member.emergencyContact}
                                                onChange={handleChange('emergencyContact')}
                                                name="emergencyContact"
                                                // onChange={e=>setEmergencyContact(e.target.value)}
                                            />
                                        </TableCell>
                                        <TableCell className={classes.word}>緊急聯絡人關係：</TableCell>
                                        <TableCell>
                                            <TextField
                                                variant="outlined"
                                                value={member.emergencyContactRelation}
                                                onChange={handleChange('emergencyContactRelation')}
                                                name="emergencyContactRelation"
                                                // onChange={e=>setEmergencyContactRelation(e.target.value)}
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className={classes.word}>緊急連絡人電話：</TableCell>
                                        <TableCell colspan="3">
                                            <TextField
                                                variant="outlined"
                                                value={member.emergencyContactPhone}
                                                onChange={handleChange('emergencyContactPhone')}
                                                name="emergencyContactPhone"
                                                // onChange={e=>setEmergencyContactPhone(e.target.value)}
                                            />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <Box lineHeight={5} m={1}>
                                <Tooltip title="確認儲存" className={classes.word}>
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
            <Snackbar open={openSuccess} autoHideDuration={2000} onClose={ErrClose} className={classes.alert}>
                <Alert severity="success" className={classes.word}>
                    個人檔案內容已修改！
                </Alert>
            </Snackbar>
            <Snackbar open={openErr1} autoHideDuration={2000} onClose={ErrClose} className={classes.alert}>
                <Alert severity="error" className={classes.word}>
                    姓名字數錯誤！
                </Alert>
            </Snackbar>
            <Snackbar open={openErr2} autoHideDuration={2000} onClose={ErrClose} className={classes.alert}>
                <Alert severity="error" className={classes.word}>
                    連絡電話格式錯誤！
                </Alert>
            </Snackbar>
            <Snackbar open={openErr3} autoHideDuration={2000} onClose={ErrClose} className={classes.alert}>
                <Alert severity="error" className={classes.word}>
                    生日格式錯誤！
                </Alert>
            </Snackbar>
        </div>
    );
}
