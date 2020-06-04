import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/PF_header.jsx';
import LeftBar from 'components/Profile/leftbar.jsx';
// import { Link , useHistory} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import QrReader from 'react-qr-reader'
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";


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
        backgroundImage : "url(./assets/images/ticket/QRCode.png)",
        backgroundSize : "100%" ,
        width : 500 ,
    } ,
    button_part : {
        margin : "2%" ,
        display: "flex" ,
        justifyContent : "center" ,
    } ,
    button : {
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)' ,
        color : "#fff" ,
        fontFamily : "微軟正黑體" ,
        margin: "2% 10%",
    } ,
    alert: {
        marginBottom : 100 , 
        marginLeft : 125
    }
  }));

export default function QRCodeCheckIn() {
    const classes = useStyles();

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    
    const [change, setChange] = React.useState(0);  
    // 成功簽到
    const [openSuccess, setOpenSuccess] = React.useState(false);
    // 失敗(此QRCode不存在)
    const [openErr, setOpenErr] = React.useState(false);
    const [memberName , setMemberName] = React.useState("");
    const [scan, setScan] = useState();
    function handleScan (scan) {
        if(scan){
          setScan(scan);
          setChange(1);
        }
    }
    function handleError (err) {
        console.error(err);
    }
    const ErrClose = () => {
        setOpenSuccess(false);
        setOpenErr(false);
        setChange(0);
    };

    function signIn(registration)
    {
        let url =  "/api/registration/QRcodeSignIn" ;
        axios.post(url , registration)
        .then(res => {
            console.log(res);
            setOpenSuccess(true);            
            setMemberName(res.data.memberName);
            // window.location.reload();
        })
        .catch(function(error){
            setOpenErr(true);
            console.log(registration)
            console.log(error.response.status);
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(scan);
        const registration = {
            ainum : parseInt(scan)
        }
        console.log(registration);
        signIn(registration);
    };

    return (
        <div className={classes.div}>
            <Header />
            <div className={classes.content_part}>
                <LeftBar/>
                <Container className={classes.content}>
                        <div>
                            <Typography variant="h4" className={classes.word}>
                                手 動 簽 到 — QRCode 掃 描
                            </Typography>
                            <hr />
                        </div>
                        <div>
                            <form className={classes.form}>
                                <div className={classes.scanner_part}>
                                    <QrReader
                                        className={classes.scanner}
                                        facingMode="environment"
                                        delay={200}
                                        onError={handleError}
                                        onScan={handleScan}
                                    />
                                </div>
                                <div className={classes.button_part}>
                                    <Button
                                        // type="submit"
                                        variant="contained"
                                        disabled={change === 0 ? true : false}
                                        onClick={handleSubmit}
                                        className={classes.button}
                                    >
                                        進行簽到
                                    </Button>
                                </div>
                            </form>
                        </div>  
                </Container>
            </div>
            <Snackbar open={openSuccess} autoHideDuration={2000} onClose={ErrClose} className={classes.alert}>
                <Alert severity="success">
                    會員 {memberName} 簽到成功！
                </Alert>
            </Snackbar>
            <Snackbar open={openErr} autoHideDuration={2000} onClose={ErrClose} className={classes.alert}>
                <Alert severity="error">
                    此QRCode不存在！
                </Alert>
            </Snackbar>
        </div>
    );
}
