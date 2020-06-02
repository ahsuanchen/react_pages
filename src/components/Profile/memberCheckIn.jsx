import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/PF_header.jsx';
import LeftBar from 'components/Profile/leftbar.jsx';
// import { Link , useHistory} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import QRCode from 'qrcode.react';
import {useParams} from "react-router-dom";
import QrReader from 'react-qr-reader'
import { usePosition } from 'use-position';
import Button from '@material-ui/core/Button';
import axios from 'axios';
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
    scanner_part : {
        display: "flex" ,
        justifyContent : "center" ,
    } ,
    scanner : {
        width : 500 ,
        height : 250
    } ,
    button : {
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)' ,
        color : "#fff" ,
        fontFamily : "微軟正黑體"
    }
  }));

export default function QRCodeCheckIn() {
    const classes = useStyles();

    var actID = window.location.href.substring(window.location.href.lastIndexOf("?") + 1)

    const [qrcode , setQrcode] = React.useState('0');
    const [open, setOpen] = React.useState(false);
    const [change, setChange] = React.useState(0);  
    // 成功簽到簽退
    const [openSuccess, setOpenSuccess] = React.useState(false);
    // 失敗(簽到簽退時間已超過)
    const [openErr1, setOpenErr1] = React.useState(false);
    // 失敗(此QRCode並不存在)
    const [openErr2, setOpenErr2] = React.useState(false);
    // 失敗(距離太遠)
    const [openErr3, setOpenErr3] = React.useState(false);
    const [scan, setScan] = useState();

    function handleScan (scan) {
      if(scan){
        setScan(scan);
        setChange(1);
      }
    }
    const ErrClose = () => {
        setOpenSuccess(false);
        setOpenErr1(false);
        setChange(0);
    };  
    function handleError (err) {
        console.error(err);
    }
    const handleClickOpen = () => {
        setOpen(true);  
        setScan("");
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    
    const watch = true;
    const { latitude , longitude } = usePosition(watch);
    const GPSlocation = latitude + ',' + longitude;

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
                                活 動 簽 到 簽 退 — QRCode 掃 描
                            </Typography>
                            <hr />
                        </div>
                        <div>
                            <form className={classes.form}>
                                <div className={classes.scanner_part}>
                                    <QrReader
                                        // ref={qr}
                                        className={classes.scanner}
                                        facingMode="environment"
                                        delay={300}
                                        onError={handleError}
                                        onScan={handleScan}
                                    />
                                </div>
                            </form>
                        </div>  
                </Container>
            </div>
        </div>
    );
}
