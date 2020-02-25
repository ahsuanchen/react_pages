import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { faArrowAltCircleLeft, faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const style = {
    toolbar : {
        width : '97%' ,
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
    text_info : {
        position : "absolute" ,
        top : '12%' ,
        left : "75%"
    } ,
    form : {
        position : 'absolute',
        top : '25%' ,
        left : '35%' ,
    } ,
    select : {
        minWidth: "100px" ,
    } ,
    awesomeicon : {
        marginLeft : '10px' ,
        fontSize : '25px' ,
        color : 'fff'
    } ,
    box : {
        position : 'absolute',
        top : '25%' ,
        left : '20%' ,
        width : "1000px"
    } ,
    paper : {
        width : "950px" ,
        height : '220px' ,
        borderRadius : '10px' ,
    } ,
    container : {
        marginTop : "10px"
    } ,
    line_first : {
        position : 'absolute' ,
        top : "18%" ,
        marginLeft : "50px"
    } ,
    line_second : {
        position : 'absolute' ,
        top : "61%" ,
        marginLeft : "50px"
    } ,
    button1 : {
        marginLeft : "10px" ,
        background : '#ADADAD' ,
    } ,
    button2 : {
        marginLeft : "50px" ,
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)' ,
    }


}

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    }
  }));

  export default function Trainingpage() {
    const classes = useStyles();

    const preventDefault = event => event.preventDefault();

    const [gender, setgender] = React.useState("male");
    const [blood, setblood] = React.useState("A");

    const handleSelectGender = event => {
        setgender(event.target.value);
    };

    const handleSelectBlood = event => {
        setblood(event.target.value);
    };

    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar style={style.toolbar}>
                    <Button 
                        edge="start"
                        style={style.back_button} 
                        color="inherit"
                        display="none" 
                        // onClick={}
                    >
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} style={style.awesomeicon} />
                        <Typography variant="h6" style={style.title}>
                            返 回 上 一 頁
                        </Typography>
                    </Button>
                </Toolbar>
            </AppBar>
            <div>
                <Typography variant="h5" style={style.text_leftside}>
                    <Box lineHeight="normal" m={1}>
                        王小明
                    </Box>
                    <Link href="#" onClick={preventDefault} style={{color : "#D0D0D0"}}>
                        <Box lineHeight={1} m={4}>
                            個人檔案
                        </Box>
                    </Link>
                    <Link href="#" onClick={preventDefault} style={{color : '#D0D0D0'}}>
                        <Box lineHeight={1} m={4}>
                            訓練人臉
                        </Box>
                    </Link>
                    <Link href="#" onClick={preventDefault} style={{color : '#D0D0D0'}}>
                        <Box lineHeight={1} m={4}>
                            報名狀況
                        </Box>
                    </Link>
                    <Box lineHeight={3} m={1}>
                        王氏集團
                    </Box>
                    <Link href="#" onClick={preventDefault} style={{color : '#D0D0D0'}}>
                        <Box lineHeight={1} m={4}>
                            主辦單位資訊
                        </Box>
                    </Link>    
                    <Link href="#" onClick={preventDefault} style={{color : '#D0D0D0'}}>
                        <Box lineHeight={1} m={4}>
                            管理活動
                        </Box>
                    </Link>
                    <Link href="#" onClick={preventDefault} style={{color : '#D0D0D0'}}>
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
                    <hr width="1" size="750" color="#E0E0E0" />
                </div>
            </div>
            <div>
                <Typography variant="h4" style={style.text_title}>
                    三校六系聯合聖誕舞會
                    <hr width="1010" />
                </Typography>
                <div style={style.text_info}>
                <Typography variant="h6">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;&nbsp;
                    三創生活園區
                </Typography>
                <Typography variant="h6">
                    <FontAwesomeIcon icon={faClock} />&nbsp;
                    2020-12-23 (三)
                </Typography>
                </div>
            </div>
            
            <div>
                <form style={style.form}>
                    <Box lineHeight="normal" m={1}>
                        <Typography variant="h5" style={{textAlign : "center"}}>
                            報名資料
                        </Typography>
                    </Box>
                    <Box lineHeight={4} m={1}>
                        <label>
                            姓名： &nbsp;
                            <TextField label="Name" defaultValue="王小明" />
                        </label>
                        <label>
                            身分證字號：&nbsp;
                        </label>
                        <input type="text" name="ID" disabled placeholder="A123456789" />
                    </Box>
                    <Box lineHeight={4} m={1}>
                        <label>
                            性別：&nbsp;
                            <FormControl style={style.select}>
                                <InputLabel id="gender">Gender</InputLabel>
                                <Select
                                    labelId="gender"
                                    value={gender}
                                    onChange={handleSelectGender}
                                >
                                    <MenuItem value="male">男</MenuItem>
                                    <MenuItem value="female">女</MenuItem>
                                    <MenuItem value="unknown">暫不透漏</MenuItem>
                                </Select>
                            </FormControl>
                        </label>
                        <label>
                            血型：&nbsp;
                            <FormControl style={style.select}>
                                <InputLabel id="blood-type">Blood Type</InputLabel>
                                <Select
                                    labelId="blood-type"
                                    value={blood}
                                    onChange={handleSelectBlood}
                                >
                                    <MenuItem value="A">A</MenuItem>
                                    <MenuItem value="B">B</MenuItem>
                                    <MenuItem value="AB">AB</MenuItem>
                                    <MenuItem value="O">O</MenuItem>
                                    <MenuItem value="RH">RH 陰性</MenuItem>
                                </Select>
                            </FormControl>&nbsp;型
                        </label>
                    </Box>
                    <Box lineHeight={4} m={1}>
                        <label>
                            生日：&nbsp;
                            <TextField label="Birthday" type="date" defaultValue="1999-03-25" InputLabelProps={{shrink: true,}} />
                        </label>
                    </Box>
                    <Box lineHeight={4} m={1}>
                        <label>
                            聯絡電話：&nbsp;
                            <TextField label="Cellphone" defaultValue="0919478653" />
                        </label>
                    </Box>
                    <Box lineHeight={4} m={1}>
                        <label>
                            聯絡地址：
                            <TextField label="Address" defaultValue="新北市新莊區中正路510號" />
                        </label>
                    </Box>
                    <Box lineHeight={4} m={1}>
                        <label>
                            緊急聯絡人：
                            <TextField label="ContactpersonName" defaultValue="王俊凱" />
                        </label>
                        <label>
                            緊急聯絡人關係：
                            <TextField label="Relationship" defaultValue="父子" />
                        </label>
                    </Box>
                    <Box lineHeight={4} m={1}>
                        <label>
                            緊急連絡人電話：&nbsp;
                            <TextField label="ContactpersonCellphone" defaultValue="0939457963" />
                        </label>
                    </Box>
                    <Box lineHeight={5} m={1}>
                        <div style={{textAlign : "center"}}>
                            <Button
                                variant="contained"
                                color="primary"
                                style={style.button1}
                            >
                                取消更改
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                style={style.button2}
                            >
                                確認更改
                            </Button>
                        </div>
                    </Box>   
                </form>
            </div>
        </div>
    );
  }