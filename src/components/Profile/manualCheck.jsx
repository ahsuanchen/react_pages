import React , {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/PF_header.jsx';
import LeftBar from 'components/Profile/leftbar.jsx';
import { Link , useHistory} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
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

    let history = useHistory();
    function goSignin()
    {
        history.push("/signin");
    }

    function goHomePage()
    {
        history.push("/");
    }

    const [member, setMember] = useState([]);
    
    useEffect(() => {
        async function fetchDataMem() {
                let url = "/api/login/name"
                await axios.get(url)
                .then(result => {
                    if(result.data.toString().startsWith("<!DOCTYPE html>"))
                    {
                        alert("您尚未登入，請先登入！")
                        goSignin();
                    }
                    else
                    {
                        setMember(result.data);
                        console.log(result);
                    }
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
        fetchDataMem();
    }, []);

    // const handleChange = updateMemPassword => (event) => {
    //     setMember({ ...member, [updateMemPassword]: event.target.value });
    // };

    // const handleSubmit = event => {
    //     event.preventDefault();    
    //         let url =  "/api/member/updatepassword/" ;
    //         url = url + oldPassword + updatePassword.memberPassword ;
    //         axios.patch('/api/member/actforfun@gmail.com', updatePassword , {
    //             auth:
    //             {
    //                 username : "actforfun@gmail.com",
    //                 password : "123"
    //             },
    //         })
    //         .then(response => {
    //             console.log(response);
    //         })
    //         .catch(function(error){
    //         });
    // };

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
                                                    // value={member.memberEmail}
                                                    name="Email"
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    // onClick={handleSubmit}
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