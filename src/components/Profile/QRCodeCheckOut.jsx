import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/PF_header.jsx';
import LeftBar from 'components/Profile/leftbar.jsx';
// import { Link , useHistory} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import QRCode from 'qrcode.react';
import {v4 as uuidv4} from 'uuid';
// import {usePosition} from 'use-position';


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
    word : {
        fontFamily : "微軟正黑體"
    } ,
    form : {
        margin : "5% auto" ,
    } ,
    QRcode_part : {
        display: "flex" ,
        justifyContent : "center" ,
    } ,
    button_part : {
        margin : "2%" ,
        display: "flex" ,
        justifyContent : "center" ,
    } ,
    button1 : {
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)' ,
        color : "#fff" ,
        fontFamily : "微軟正黑體" ,
        margin: "5% 10%",
    } ,
    button2 : {
        background : '#FF0000' ,
        color : "#fff" ,
        fontFamily : "微軟正黑體" ,
        margin: "5% 10%",
    }
  }));

export default function QRCodeCheckOut() {
    const classes = useStyles();

    var actID = window.location.href.substring(window.location.href.lastIndexOf("?") + 1)

    const [qrcode , setQrcode] = React.useState('0');

    // const handleSubmit = event => {
    //     event.preventDefault();    
    //     let url =  "/api/registration/signIn/" ;
    //     url = url + actID + "/" + signinEmail ;
    //         axios.post(url)
    //         .then(res => {
    //             alert("簽到成功");
    //             window.location.reload();
    //         })
    //         .catch(function(error){
    //             alert("該使用者並未報名此活動或帳號輸入錯誤");
    //             console.log(error.response.status);
    //         });
    // };

    return (
        <div className={classes.div}>
            <Header />
            <div className={classes.content_part}>
                <LeftBar/>
                <Container className={classes.content}>
                        <div>
                            <Typography variant="h4" className={classes.word}>
                                手 動 簽 退 — QRCode 簽 退
                            </Typography>
                            <hr />
                        </div>
                        <div>
                            <form className={classes.form}>
                                <div className={classes.QRcode_part}>
                                    <QRCode value={qrcode} size={400}/>
                                </div>
                                <div className={classes.button_part}> 
                                    <Button
                                        className={classes.button1}
                                        // onClick={handleSubmit}
                                        variant="contained"
                                    >
                                        開始簽退
                                    </Button>
                                    <Button
                                        className={classes.button2}
                                        // onClick={handleSubmit}
                                        variant="contained"
                                    >
                                        停止簽退
                                    </Button>
                                </div>
                            </form>
                        </div>  
                </Container>
            </div>
        </div>
    );
}
