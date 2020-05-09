import React , {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/PF_header.jsx';
import LeftBar from 'components/Profile/leftbar.jsx';
import { Link , useHistory} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

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
    topic : {
        margin : "2% auto" ,
        textAlign : "center"
    } ,
    table : {
        display: "flex" ,
        justifyContent : "center" ,
        margin : "4% auto" ,
    } ,
    button : {
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)' ,
        color : "#fff" ,
    }
  }));

export default function ManualCheck() {
    const classes = useStyles();

    var actID = window.location.href.substring(window.location.href.lastIndexOf("?") + 1)

    let history = useHistory();
    function goSignin()
    {
        history.push("/signin");
    }

    function goHomePage()
    {
        history.push("/");
    }

    const [registration , setRegistration] = useState([]);
    const [signinEmail , setSigninEmail] = useState("") ;
    useEffect(() => {
        async function fetchDataReg() {
            axios.get("/api/registration/activity/" + actID)
                .then(result => {
                    setRegistration(result.data);
                    console.log(result);
                })
                .catch(err => {
                    console.log(err.response.status);
                    if(err.response.status === 403)
                    {
                        alert("您的權限不足!");
                        goHomePage();
                    }
                })
        }
        fetchDataReg();
    }, []);

    const handleSubmit = event => {
        event.preventDefault();    
        let url =  "/api/registration/signIn/" ;
        url = url + actID + "/" + signinEmail ;
        if (signinEmail != registration.map(registration => registration.member_Email))
        {
            alert("您輸入的帳號有誤或是該使用者沒有報名此活動");
            console.log(registration.map(registration => registration.member_Email))
            console.log(url)    
        }
        else if (registration.map(registration => registration.isSignIn) != 0)
        {
            alert("該參加者已簽到成功");
        }
        else
        {
            axios.post(url)
            .then(res => {
                alert("簽到成功");
                window.location.reload();
                // console.log(res);
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
                            <Typography variant="h4">
                                手 動 簽 到
                            </Typography>
                            <hr />
                        </div>
                        <div>
                            <form>
                                <Table className={classes.table}>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="h6">
                                                    請輸入參加者帳號：
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <TextField
                                                    variant="outlined"
                                                    value={signinEmail}
                                                    onChange={e=>setSigninEmail(e.target.value)}
                                                    name="Email"
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    onClick={handleSubmit}
                                                    className={classes.button}
                                                    // component={Link}
                                                    // to="/profile"
                                                >
                                                    確認身分
                                                </Button>
                                            </TableCell>
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