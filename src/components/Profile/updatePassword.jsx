import React , {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/PF_header.jsx';
import LeftBar from 'components/Profile/leftbar.jsx';
import {useHistory} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles(theme => ({
    div : {
        boxSizing : "border-box"
    } ,
    content_part : {
        display : "flex" ,
        justifyContent: "center",
    } ,
    content : {
        margin : "2% 2%" ,
        overflow : "visible"
    } ,
    word : {
        fontFamily : "微軟正黑體"
    } ,
    table : {
        display: "flex" ,
        justifyContent : "center" ,
        margin : "5% auto" ,
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
        fontFamily : "微軟正黑體"
    } ,
    alert: {
        marginBottom : 100 , 
        marginLeft : 125
    }
  }));

export default function Updatepassword() {
    const classes = useStyles();

    let history = useHistory();

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    // 修改成功
    const [openSuccess , setOpenSuccess] = React.useState(false);
    // 修改失敗(舊密碼輸入錯誤)
    const [openErr1 , setOpenErr1] = React.useState(false);
    // 修改失敗(新密碼輸入不一致)
    const [openErr2 , setOpenErr2] = React.useState(false);
    const SuccessClose = () => {
        setOpenSuccess(false);
        history.push("/profile");
    };  
    const ErrClose = () => {
        setOpenErr1(false);
        setOpenErr2(false);
    };  

    const [member, setMember] = useState({
        oldPassword : '' ,
        newPassword : '' ,
        repeatnewPassword : '' ,
        showoldPassword: false ,
        shownewPassword: false ,
        showrepeatnewPassword: false ,
    });
    useEffect(() => {
        async function fetchDataMem() {
                let url = "/api/login/name"
                await axios.get(url)
                .then(result => {
                    setMember(result.data);
                })
                .catch(err => {
                    console.log(err.response.status);
                })
        }
        fetchDataMem();
    }, []);

    const handleClickShowOldPassword = () => {
        setMember({ ...member, showoldPassword: !member.showoldPassword });
    };
    const handleClickShowNewPassword = () => {
        setMember({ ...member, shownewPassword: !member.shownewPassword });
    };
    const handleClickShowRepeatNewPassword = () => {
        setMember({ ...member, showrepeatnewPassword: !member.showrepeatnewPassword });
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChange = updateMemPassword => (event) => {
        setMember({ ...member, [updateMemPassword]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (member.oldPassword != member.memberPassword)
        {
            setOpenErr1(true);
        }
        else if (member.newPassword != member.repeatnewPassword)
        {
            setOpenErr2(true);
        }
        else
        {
            let url = "/api/member/updatepassword/" ;
            url = url + member.oldPassword + "/" + member.newPassword;
            axios.post(url)
            .then(response => {
                setOpenSuccess(true);
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
                                更 改 密 碼
                            </Typography>
                            <hr />
                        </div>
                        <div>
                            <form>
                                <Table className={classes.table}>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="h6" className={classes.word}>
                                                    請輸入舊密碼：
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <FormControl variant="outlined">
                                                    <InputLabel htmlFor="outlined-adornment-password-old">Password</InputLabel>
                                                    <OutlinedInput
                                                        id="outlined-adornment-password-old"
                                                        required
                                                        type={member.showoldPassword ? 'text' : 'password'}
                                                        value={member.oldPassword}
                                                        onChange={handleChange('oldPassword')}
                                                        endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowOldPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                            >
                                                            {member.showoldPassword ? <Visibility /> : <VisibilityOff />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                        }
                                                        labelWidth={70}
                                                    />
                                                </FormControl>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="h6" className={classes.word}>
                                                    請輸入新密碼：
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <FormControl variant="outlined">
                                                    <InputLabel htmlFor="outlined-adornment-password-new">Password</InputLabel>
                                                    <OutlinedInput
                                                        id="outlined-adornment-password-new"
                                                        required
                                                        type={member.shownewPassword ? 'text' : 'password'}
                                                        value={member.newPassword}
                                                        onChange={handleChange('newPassword')}
                                                        endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowNewPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                            >
                                                            {member.shownewPassword ? <Visibility /> : <VisibilityOff />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                        }
                                                        labelWidth={70}
                                                    />
                                                </FormControl>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="h6" className={classes.word}>
                                                    再次輸入新密碼：
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <FormControl variant="outlined">
                                                    <InputLabel htmlFor="outlined-adornment-password-repeat">Password</InputLabel>
                                                    <OutlinedInput
                                                        id="outlined-adornment-password-repeat"
                                                        required
                                                        type={member.showrepeatnewPassword ? 'text' : 'password'}
                                                        value={member.repeatnewPassword}
                                                        onChange={handleChange('repeatnewPassword')}
                                                        endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowRepeatNewPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                            >
                                                            {member.showrepeatnewPassword ? <Visibility /> : <VisibilityOff />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                        }
                                                        labelWidth={70}
                                                    />
                                                </FormControl>
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
                                            // component={Link}
                                            // to="/profile"
                                        >
                                            確認更改
                                        </Button>
                                    </div>
                                </Box>
                            </form>
                        </div>  
                </Container>
            </div>
            <Snackbar open={openSuccess} autoHideDuration={2000} onClose={SuccessClose} className={classes.alert}>
                <Alert severity="success" className={classes.word}>
                    密碼已修改！
                </Alert>
            </Snackbar>
            <Snackbar open={openErr1} autoHideDuration={2000} onClose={ErrClose} className={classes.alert}>
                <Alert severity="error" className={classes.word}>
                    舊密碼輸入錯誤！
                </Alert>
            </Snackbar>
            <Snackbar open={openErr2} autoHideDuration={2000} onClose={ErrClose} className={classes.alert}>
                <Alert severity="warning" className={classes.word}>
                    新密碼輸入不一致！
                </Alert>
            </Snackbar>
        </div>
    );
}
