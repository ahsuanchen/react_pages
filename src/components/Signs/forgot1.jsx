import React ,{useState}from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
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
        marginTop: theme.spacing(8),

        flexDirection: 'column',
        alignItems: 'center',
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
    submit: {
        color : "#fff" ,
        textAlign : "center" ,
        background : '#00bfa5',
        fontSize: "15px",
        marginTop : "10%" ,
    },
    font: {
        color: theme.palette.grey,
    },
}));

export default function ForgotPW1() {
    const classes = useStyles();

    const  [memberEmail1, setMemberEmail] =  useState("");

    let history = useHistory();

    const handleSubmit=(event)=> {
        //event.preventDefault();
        const member={
            memberEmail:memberEmail1,
        }
        
        let url = "http://localhost:8080/api/forgetpassword/";
        //const memberEmail = memberEmail;
        url = url + member.memberEmail;

        
        axios.post(url, 
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
            history.push({
                pathname: "/forgot2",
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
                <div className={classes.paper}>
                    <paper>
                        
                            輸入您的電子信箱，我們將會傳送恢復帳號存取權的連結給您。
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
                                傳送登入連結
                            </Button>

                            <Typography variant="overline" display="block" gutterBottom align="center">
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

                    </paper>
                    <Grid align-items-xs-flex-end>
                    </Grid>

                </div>

            </Container>
        </Grid>
    );
}