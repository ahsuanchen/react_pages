import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import profile from '../src/image/profile.jpg';
import Container from '@material-ui/core/Container';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import Link from '@material-ui/core/Link';

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
        top : '60%'
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
        left : '28%' ,
    } ,
    container : { 
        width : '500px' ,
        height : '500px' ,
        backgroundColor : '#D0D0D0'
    } ,
    img : {
        width : '300px' ,
        height : '400px' ,
        position : 'absolute',
        top : '10%' ,
        left : '25%' ,
    } ,
    awesomeicon : {
        marginLeft : '10px' ,
        fontSize : '25px' ,
        color : 'fff'
    } ,
    button : {
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)' ,
        left : "40%"
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
                    <Link href="#" onClick={preventDefault}>
                        <Box lineHeight={1} m={4} style={{color : "#D0D0D0"}}>
                            個人檔案
                        </Box>
                    </Link>
                    <Link href="#" onClick={preventDefault} style={{color : '#000000'}}>
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
                    <hr width="1" size="85" color="#6C6C6C" />
                </div>
                <div style={style.line3}>
                    <hr width="1" size="650" color="#E0E0E0" />
                </div>
            </div>
            <div>
                <Typography variant="h4" style={style.text_title}>
                    訓 練 人 臉
                    <hr width="800" />
                </Typography>
                <form style={style.form}>
                    <Box lineHeight="normal" m={1}>
                        <Container>
                            <Typography style={style.container}>
                                <img src={profile} style={style.img} alt="img" />
                            </Typography>
                        </Container>
                        
                    </Box>
                    <Box lineHeight={5} m={1}>
                        <Button
                            variant="contained"
                            color="primary"
                            style={style.button}
                            startIcon={<SyncAltIcon />}
                        >
                        開始訓練
                        </Button>
                    </Box>
                </form>
                
                
            </div>
        </div>
    );
  }