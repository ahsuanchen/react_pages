import React ,{useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Container from '@material-ui/core/Container';


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
        marginTop: theme.spacing(5),
        flexDirection: 'column',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #81c784 30%, #9ad29c 90%)',
        display: 'flex',
        '& > *': {
            marginTop: theme.spacing(5),
            //margin: theme.spacing(1),
            width: theme.spacing(40),
            height: theme.spacing(15),
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
        background : '#00bfa5',
        color : '#fafafa' ,
        minWidth : "100px" ,
        fontFamily : "微軟正黑體" ,
        '&:hover' : {
            background : '#00bfa5',
            color : "#fff"
        } , 
        margin: theme.spacing(3, 0, 2),
    },
    font: {
        color: theme.palette.grey,
        fontFamily : "微軟正黑體"
    },
}));

const SignUpPage = props => {
    let history = useHistory();
    
        const classes = useStyles();    
    
        const  [memberEmail,setMemberEmail] =  useState("");
        const  [memberPassword,setMemberPassword] =  useState("");
        const  [checkPassword, setCheckPassword] =  useState("");
    
        const handleSubmit=(event)=> {

            const member={
                memberEmail:memberEmail,
                };
            
            if(memberEmail.length > 0 && memberPassword.length > 0 && checkPassword === memberPassword){
                //隔頁傳值
                localStorage.setItem('memberEmail',memberEmail);
                localStorage.setItem('memberPassword',memberPassword);

                axios.post("api/member/check/", member)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    //check判斷後為ok表示此帳號為註冊過即跳到下一頁
                    //PassTextPage();
                    
                    history.push({
                        pathname: "/signupinfo",
                    });
                    
                }).catch(err =>{
                    console.log(err.reponse);
                    console.log(err.data);
                     alert("此帳號已註冊");
                });               

                }
            else if(memberEmail.length > 0 && memberPassword.length > 0 && checkPassword != memberPassword){
                alert("密碼驗證失敗，密碼與驗證密碼不一致");
            }
            else{
                alert("請輸入正確的帳號密碼")
            }  
            
        }

    
        return (
            <Grid className={classes.root}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Typography className={classes.font} component="h1" variant="h5" align="center">
                        註 冊
                    </Typography>
                    <Paper className={classes.paper} elevation='5'>
                        <Grid container justify="center">
                            <Container className={classes.container}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    type="email"
                                    required
                                    fullWidth
                                    id="memberEmail"
                                    label="電子信箱"
                                    name="email"
                                    onChange={e=>setMemberEmail(e.target.value)}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="密碼"
                                    type="password"
                                    id="memberPassword"
                                    onChange={e=>setMemberPassword(e.target.value)}
                                />

                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="checkPassword"
                                    label="確認密碼"
                                    type="password"
                                    id="checkpassword"
                                    onChange={e=>setCheckPassword(e.target.value)}
                                />

                            </Container>
                        </Grid>
                        
                        <Grid align-items-xs-flex-end>
                        </Grid>
                        
                    </Paper>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        //onClick={passText}
                        onClick={handleSubmit}
                    >
                        <ChevronRightIcon />
                        下一步
                    </Button>
    
                </Container>
            </Grid>
        );
    
}
export default withRouter(SignUpPage);

