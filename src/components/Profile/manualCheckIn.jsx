import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/PF_header.jsx';
import LeftBar from 'components/Profile/leftbar.jsx';
// import { Link , useHistory} from 'react-router-dom';
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

    const [signinEmail , setSigninEmail] = useState("") ;

    const handleSubmit = event => {
        event.preventDefault();    
        let url =  "/api/registration/signIn/" ;
        url = url + actID + "/" + signinEmail ;
            axios.post(url)
            .then(res => {
                alert("簽到成功");
                window.location.reload();
            })
            .catch(function(error){
                alert("該使用者並未報名此活動或帳號輸入錯誤");
                console.log(error.response.status);
            });
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
