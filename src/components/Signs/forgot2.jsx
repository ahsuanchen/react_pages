import React ,{useState}from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
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
        height: '120vh',
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


    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
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

const Forgot2Page = props => {
    const location = useLocation();

    useEffect(() => {
       console.log(location.pathname); // result: '/secondpage'
       //console.log(location.search); // result: '?query=abc'
       console.log(location.state.detail); // result: 'some_value'
    }, [location]);

    
};



export default function ForgotPW() {
    const classes = useStyles();

    const HelloMessage = (props) => (
        <div>Hello {props.name}</div>
    );

    // Prop 預設值，若對應 props 沒傳入值將會使用 default 值 Zuck。用法等於 ES5 的 getDefaultProps
    HelloMessage.defaultProps = {
     name: 'Zuck',
    }

    const  [memberEmail,setMemberEmail] =  useState(localStorage.getItem('memberEmail_forget'));
    const  [newPW, setNewPW] =  useState("");
    const  [oldPW,setoldPW] = useState("");

    let history = useHistory();

    let url_id = "/api/member/";
        url_id = url_id + memberEmail;

   

    useEffect(() =>{
        async function fetchData(){
            const result = await axios.get(url_id);
            setoldPW(result.data.memberPassword);
            //console.log(result.data);
          }
          fetchData();
      },[]);

    const handleSubmit=(event)=> {
        //event.preventDefault();

        

        const member={
            memberEmail:memberEmail,
            newPW:newPW,
            oldPW:oldPW
        }
        
        let url = "/api/member/forgetpassword/";
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
                <div className={classes.paper}>
                    <paper>
                    
                        <Typography variant="subtitle1" gutterBottom align="center">
                        <HelloMessage name="Mark" />, 請重新設定密碼。
                        </Typography>
                        
                            <input
                                //type="hidden"
                                id="memberEmail"
                                label="帳號"
                                value={memberEmail}
                                onChange={e=>setMemberEmail(e.target.value)}
                            />  

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                label="輸入密碼"
                                type="password"
                                onChange={e=>setNewPW(e.target.value)}
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="checkpassword"
                                label="再次輸入密碼"
                                type="password"
                                
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={handleSubmit}
                            >
                                完成設定
                            </Button>


                    </paper>
                    <Grid align-items-xs-flex-end>
                    </Grid>

                </div>

            </Container>
        </Grid>
    );
}