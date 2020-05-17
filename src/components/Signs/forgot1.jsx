import React ,{useState}from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
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
        color:'white',
        background: 'linear-gradient(45deg, #81c784 30%, #9ad29c 90%)',
        display: 'flex',
        '& > *': {
            marginTop: theme.spacing(5),
            //margin: theme.spacing(1),
            width: theme.spacing(40),
            height: theme.spacing(20),
        },
    },


    form: {
        width: '100%',
        height: theme.spacing(1),
    },

    link: {
        marginTop: theme.spacing(5),
    },

    // submit: {
    //     background : '#00bfa5',
    //     color : '#fafafa' ,
    //     minWidth : "100px" ,
    //     '&:hover' : {
    //         background : '#00bfa5',
    //         color : "#fff"
    //     } , 
    //     margin: theme.spacing(3, 0, 2),
    // },
    submit: {
        color : "#fafafa" ,
        textAlign : "center" ,
        background : '#00bfa5',
        fontFamily : "微軟正黑體" ,
        '&:hover' : {
            background : '#00bfa5',
            color : "#fff"
        } , 
        fontSize: "15px",
        marginTop : "10%" ,
    },
    font: {
        color: theme.palette.grey,
        fontFamily : "微軟正黑體"
    },
    word : {
        fontFamily : "微軟正黑體"
    } ,
}));

export default function ForgotPW1() {
    const classes = useStyles();

    const  [memberEmail_forget, setMemberEmail] =  useState("");


    let history = useHistory();

    const handleSubmit=(event)=> {
        //event.preventDefault();
        const member={
            memberEmail:memberEmail_forget,
        }
        
        localStorage.setItem('memberEmail_forget', memberEmail_forget);

        let url = "/api/member/forgetpassword/";
        url = url + member.memberEmail;

        
        axios.post(url)
        .then(res => {
            console.log("test")
            console.log(res);
            console.log(res.data);
            history.push({
                pathname: "/signin",
              });
            
          }).catch(function(error){
              alert(error);
          });
        }

                     
        

    return (
        <Grid className={classes.root}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Typography className={classes.font} component="h1" variant="h5" align="center">
                    無 法 登 入 ？
                    </Typography>
                <Paper className={classes.paper}>
                <Grid container justify="center">
                            <Container className={classes.word}>
                            請輸入您的電子信箱，我們將會傳送新密碼至您的信箱。
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="memberEmail"
                                label="電子信箱"
                                name="memberEmail"
                                onChange={e=>setMemberEmail(e.target.value)}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={handleSubmit}
                            >
                                傳送新密碼
                            </Button>
<br/><br/>
                            <Typography className={classes.word} variant="overline" display="block" gutterBottom align="center">
                            ---或---
                            </Typography>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                href="./signup"
                            >
                                註冊新帳號
                            </Button>

                    </Container>
                    </Grid>
                    <Grid align-items-xs-flex-end>
                    </Grid>

                </Paper>
                <Grid container justify="center" className={classes.link}>
                    <Link className={classes.word} href="signin" variant="body1" color="inherit">
                        或 登入
                    </Link>
                </Grid>
            </Container>
        </Grid>
    );
}