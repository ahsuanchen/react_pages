import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
// import profile from '../src/image/profile.jpg';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import SaveIcon from '@material-ui/icons/Save';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const style = {
    toolbar : {
        height : '50px' ,
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)' ,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
    } ,
    back_button : {
        marginRight : '5px' ,
    } ,
    title : {
        marginLeft : '20px' ,
    } ,
    line1 : {
        position : 'absolute' ,
        left : '4%' ,
        top : '23%'
    } ,
    line2 : {
        position : 'absolute' ,
        left : '4%' ,
        top : '58.5%'
    } ,
    line3 : {
        position : 'absolute' ,
        left : '16%' ,
    } ,
    text_leftside : {
        position : 'absolute',
        top : '15%' ,
        left : '3%' ,
        color : '#D0D0D0'
    } ,
    text_title : {
        position : 'absolute',
        top : '14%' ,
        left : '20%' ,
    } ,
    form : {
        position : 'absolute',
        top : '25%' ,
        left : '25%' ,
    } ,
    select : {
        minWidth: "100px" ,
    } ,
    text_area : { 
        width : '400px' ,
        height : '250px'
    } ,
    img : {
        width : '180px' ,
        height : '250px'
    } ,
    awesomeicon : {
        marginLeft : '10px' ,
        fontSize : '25px' ,
        color : 'fff'
    } ,
    button : {
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)' ,
        left : "86%"
    }
}

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    }
  }));

  export default function Profilepage() {
    const classes = useStyles();
    const [value, setValue] = React.useState('male');

    const handleChange = event => {
      setValue(event.target.value);
    };

    const [blood, setblood] = React.useState("A");

    const handleSelect = event => {
        setblood(event.target.value);
    };
    
    return(
        <div className={classes.root}>
            <AppBar>
                <Toolbar style={style.toolbar}>
                    <Button 
                        edge="start"
                        style={style.back_button} 
                        color="inherit"
                        display="none"
                        component={Link}
                        to="/homepageAfterLogin"
                    >
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} style={style.awesomeicon} />
                        <Typography variant="h6" style={style.title}>
                            返 回 首 頁
                        </Typography>
                    </Button>
                </Toolbar>
            </AppBar>
            <div>
                <Typography variant="h5" style={style.text_leftside}>
                        <Box lineHeight="normal" m={1}>
                            王小明
                        </Box>
                    <Link to="/profile" style={{color : "#000000"}}>
                        <Box lineHeight={1} m={4}>
                            個人檔案
                        </Box>
                    </Link>
                    <Link to="/trainingFace" style={{color : '#D0D0D0'}}>
                        <Box lineHeight={1} m={4}>
                            訓練人臉
                        </Box>
                    </Link>
                    <Link to="/signupSituation" style={{color : '#D0D0D0'}}>
                        <Box lineHeight={1} m={4}>
                            報名狀況
                        </Box>
                    </Link>
                    <Box lineHeight={3} m={1}>
                        王氏集團
                    </Box>
                    <Link to="/" style={{color : '#D0D0D0'}}>
                        <Box lineHeight={1} m={4}>
                            主辦單位資訊
                        </Box>
                    </Link>    
                    <Link to="/" style={{color : '#D0D0D0'}}>
                        <Box lineHeight={1} m={4}>
                            管理活動
                        </Box>
                    </Link>
                    <Link to="/" style={{color : '#D0D0D0'}}>
                        <Box lineHeight={3} m={1}>
                            我的相簿
                        </Box>
                    </Link>
                </Typography>
                <div style={style.line1}>
                    <hr width="1" size="145" color="#6C6C6C" />
                </div>
                <div style={style.line2}>
                    <hr width="1" size="95" color="#6C6C6C" />
                </div>
                <div style={style.line3}>
                    <hr width="1" size="1220" color="#E0E0E0" />
                </div>
            </div>
            <div>
                <Typography variant="h4" style={style.text_title}>
                    個 人 檔 案
                    <hr width="850" />
                </Typography>
                <form style={style.form}>
                    <Box lineHeight="normal" m={1}>
                        <img src="./img/profile.jpg" style={style.img} alt="img" />
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
                                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                        <FormControlLabel value="male" control={<Radio color="" />} label="男性"/>
                                        <FormControlLabel value="female" control={<Radio color="" />} label="女性" />
                                        <FormControlLabel value="other" control={<Radio color="" />} label="暫不透漏" />
                                    </RadioGroup>
                                </TableCell>
                                <TableCell>血型：</TableCell>
                                <TableCell>
                                    <FormControl style={style.select}>
                                        <InputLabel id="blood-type">Blood Type</InputLabel>
                                        <Select
                                            labelId="blood-type"
                                            value={blood}
                                            onChange={handleSelect}
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
                                <TableCell>電子郵件：</TableCell>
                                <TableCell>
                                    <TextField label="E-mail" defaultValue="aaa12345@gmail.com" />
                                </TableCell>
                                <TableCell>聯絡地址：</TableCell>
                                <TableCell>
                                    <TextField label="Address" style={{minWidth:"300px"}} defaultValue="新北市新莊區中正路510號" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>個人介紹：</TableCell>
                                <TableCell colSpan="3">
                                    <TextareaAutosize aria-label="maximum height" style={style.text_area} placeholder="請介紹你自己..." />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Box lineHeight={4} m={1}>
                        <Button
                            variant="contained"
                            color="primary"
                            style={style.button}
                            startIcon={<SaveIcon />}
                        >
                            儲存更新
                        </Button>
                    </Box>   
                </form>
            </div>
        </div>
    );
  }