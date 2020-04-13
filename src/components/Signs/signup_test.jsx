import React ,{useState} from 'react';
import {Router, Route, hashHistory} from 'react-router';
import {Link} from 'react-router-dom';
import { HashRouter, withRouter } from 'react-router-dom'
import axios from 'axios';
//import Avatar from '@material-ui/core/Avatar';
//import { borders } from '@material-ui/system';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//import { ICON_NAME } from "react-icons/io";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";
import SignupInfo from 'components/Signs/signupinfo.jsx';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';





const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            background: 'linear-gradient(45deg, #009688 30%, #b2ff59 90%)',
            //backgroundColor: theme.palette.common.white,
        },
    },

    root: {
        height: '90vh',
        width:'100%',
        marginTop: theme.spacing(10),
        color: 'white',
        //borderRadius: 10,
        //borderColor: ,
        //background: 'linear-gradient(45deg, #00796b 30%, #00acc1 90%)',

    },


    paper: {
        marginTop: theme.spacing(8),
        margin: theme.spacing(-35),
        width: theme.spacing(120),
        flexDirection: 'column',
        //alignItems: 'center',
        background: 'linear-gradient(45deg, #81c784 30%, #9ad29c 90%)',
        display: 'flex',
        '& > *': {
            marginTop: theme.spacing(5),
            margin: theme.spacing(5),
            width: theme.spacing(100),
            height: theme.spacing(20),
        },
    },


    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),


    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    font: {
        color: theme.palette.grey,
    },
}));

  
    
    export default function SignUp() {
        const classes = useStyles();
        //let history = useHistory();
    
        // function handleClick() {
        //     history.push("/signupinfo");
        // }
    
        
        // var data = {id:'user',password:'123'};
        // var path = {
        // pathname:'/signupinfo',
        // state:data}
    
    
        //hashHistory.push(path);
        
        
    
        const  [memberEmail,setMemberEmail] =  useState("");
        const  [memberPassword,setMemberPassword] =  useState("");
    
        const handleSubmit=(event)=> {
            //event.preventDefault();
            const member={
                memberEmail:memberEmail,
                memberPassword:memberPassword};
            axios.post("api/member/check/", member,
            {
                auth:
                {
                    username : "user",
                    password : "123"
                }
            })
            .then(res => {
                console.log("test")
                console.log(res);
                console.log(res.data);
                //再新增！判斷後為ok就跳到下一頁
                //PassTextPage();
                
              }).catch(function(error){
                  alert(error);
              });
            
        }
    
        return (
            <Grid className={classes.root}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Typography className={classes.font} component="h1" variant="h5" align="center">
                        註 冊
                        </Typography>
                    <div className={classes.paper}>
                        <paper>
                            {/* <form className={classes.form} noValidate onSubmit={handleSubmit}> */}
                          
                            <Table>
                            <TableBody>
                                <TableRow>
                                <TableCell>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    //fullWidth
                                    id="memberEmail"
                                    label="帳號"
                                    name="email"
                                    onChange={e=>setMemberEmail(e.target.value)}
                                />
                                </TableCell>

                                <TableCell>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    //fullWidth
                                    name="password"
                                    label="密碼"
                                    type="password"
                                    id="memberPassword"
                                    onChange={e=>setMemberPassword(e.target.value)}
                                />
                                </TableCell>

                                <TableCell>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    //fullWidth
                                    name="checkpassword"
                                    label="確認密碼"
                                    type="password"
                                    id="checkpassword"
                                    autoComplete="current-password"
                                />
                                
                                </TableCell>
                                
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        //fullWidth
                                        id="memberName"
                                        label="姓名"
                                        //onChange={e=>setMemberName(e.target.value)}
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        required
                                        id="memberGender"
                                        label="性別"
                                        //onChange={e=>setMemberGender(e.target.value)}
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        required
                                        id="memberBloodType"
                                        label="血型"
                                        //onChange={e=>setMemberBloodType(e.target.value)}
                                    />
                                </TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell>
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        required
                                        id="memberID"
                                        label="身分證字號"
                                        //onChange={e=>setMemberID(e.target.value)}
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField 
                                        margin="normal"
                                        fullWidth
                                        required
                                        label="生日" 
                                        type="date" 
                                        id="memberBirthday"
                                        defaultValue={new Date().getFullYear()}
                                        InputLabelProps={{shrink: true,}}
                                        //onChange={e=>setMemberBirthday(e.target.value)} 
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        required
                                        id="memberPhone"
                                        label="聯絡電話"
                                        //onChange={e=>setMemberPhone(e.target.value)}
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="memberAddress"
                                        label="聯絡地址"
                                        //onChange={e=>setMemberAddress(e.target.value)}
                                    />
                                </TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="emergencyContact"
                                        label="緊急聯絡人"
                                        //onChange={e=>setEmergencyContact(e.target.value)}
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="emergencyContactRelation"
                                        label="緊急聯絡人關係"
                                        //onChange={e=>setEmergencyContactRelation(e.target.value)}
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="emergencyContactPhone"
                                        label="緊急聯絡人電話"
                                        //onChange={e=>setEmergencyContactPhone(e.target.value)}
                                    />
                                </TableCell>
                                </TableRow>
                                </TableBody>
                                </Table>
                                

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    //onClick={handleClick}
                                    onClick={handleSubmit}
                                    // href="./signupinfo"
                                >
                                    <ChevronRightIcon />
                                    下一步
                                </Button>
    
                            {/* </form> */}
                        </paper>
                        <Grid align-items-xs-flex-end>
                        </Grid>
    
                    </div>
    
                </Container>
            </Grid>
        );
    }
    


