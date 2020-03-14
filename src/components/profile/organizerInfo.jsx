import React , {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './header3.jsx';
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
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    div : {
        boxSizing : "border-box"
    } ,
    left_menu : {
        display: "flex" ,
        justifyContent : "space-around" ,
        minHeight : 800 ,
        color : "#000"
    } ,
    left_container : {
        maxWidth : "280px" , 
        borderRight : "1px solid" ,
    } ,
    avatar : {
        minWidth : "150px" , 
        minHeight : "150px" ,
    } ,
    link : {
        textDecoration : "none" , 
        color : "#D0D0D0" ,
        '&:hover' : {
          color : '#00AEAE' 
        }
    } ,
    content : {
        margin : "2% 2%" ,
        overflow : "visible"
    } ,
    img : {
        margin : "2% 0" ,
        minWidth : '150px' ,
        maxHeight : '200px'
    } ,
    button : {
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)' ,
        margin : "0 auto" ,
        display: "flex" ,
        justifyContent : "center" ,
    }
  }));

export default function MenuAppBar() {
    const classes = useStyles();

    const [value, setValue] = React.useState('male');

    const handleChange = event => {
      setValue(event.target.value);
    };

    const [blood, setblood] = React.useState("A");

    const handleSelect = event => {
        setblood(event.target.value);
    };

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
                                    王小明
                                </Box>
                            <Divider />    
                            <Link to="/profile" className={classes.link}>
                                <Box lineHeight={1} m={4}>
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
                                王氏集團
                            </Box>
                            <Divider />
                            <Link to="/organizerInfo" className={classes.link}>
                                <Box lineHeight={1} m={4} color="#000">
                                    主辦單位資訊
                                </Box>
                            </Link>    
                            <Link to="/" className={classes.link}>
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
                                王 氏 集 團
                            </Typography>
                            <hr />
                        </div>
                        <div>
                            <form>
                                <Box lineHeight="normal" m={1}>
                                    <Typography variant="h4" className={classes.topic}>
                                        主 辦 單 位 資 訊
                                    </Typography>
                                </Box>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>主辦單位名稱：</TableCell>
                                            <TableCell>
                                                <TextField label="Name" defaultValue="王小明" />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>電子信箱：</TableCell>
                                            <TableCell>
                                                <TextField label="Name" defaultValue="王小明" />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>連絡電話：</TableCell>
                                            <TableCell>
                                                <TextField label="Birthday" type="date" defaultValue="1999-03-25" InputLabelProps={{shrink: true,}} />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>聯絡地址：</TableCell>
                                            <TableCell>
                                                <TextField label="E-mail" defaultValue="aaa12345@gmail.com" />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>主辦單位簡介：</TableCell>
                                            <TableCell>
                                                <TextareaAutosize/>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell></TableCell>
                                            <TableCell colspan="2">
                                                <Button
                                                    className={classes.button}
                                                    variant="contained"
                                                    color="primary"
                                                    startIcon={<SaveIcon />}
                                                >
                                                    儲存更新
                                                </Button>
                                            </TableCell>
                                            <TableCell></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </form>
                        </div>  
                </Container>
            </div>
        </div>
    );
}