import React ,{useState}from 'react';
import axios from 'axios';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/PF_header.jsx';
import LeftBar from 'components/Profile/leftbar.jsx';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import FaceIcon from '@material-ui/icons/Face';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import BackupIcon from '@material-ui/icons/Backup';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

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
    } ,
    form : {
        margin : "5% auto" ,
    } ,
    container : {
        maxWidth : '550px' ,
        minHeight : '580px' ,
        //background : "linear-gradient(160deg, #6C6C6C 10%, #E0E0E0 80%)" ,
        background : '#E0E0E0' ,
        overflow : "visible"
    } ,
    img : {
        minWidth : '400px' ,
        maxHeight : '500px' ,
        margin : "auto" ,
        display: "flex" ,
        justifyContent : "center" ,
        //alignItems: 'center',
        //width: '100%',
    } ,
    word : {
        fontFamily : "微軟正黑體"
    } ,
    button : {
        margin : "5% auto" ,
        display: "flex" ,
        justifyContent : "center" ,
        background : '#00bfa5',
        color : "#fff",
        fontFamily : "微軟正黑體"
        //margin:"10% 1%"
    } ,
    open_paper : {
        maxWidth : '500px' ,
        maxHeight : '600px' ,
        //background : 'linear-gradient(160deg, #6C6C6C 10%, #E0E0E0 80%)' ,
        background : '#6C6C6C' ,
        margin : "auto" ,
        alignItems : "center"
    } ,

    file : {
        fontSize : "30px" ,
        position: "absolute" ,
        left: 0 ,
        top: 0 ,
        opacity: 0 ,
        //margin:"1% 10%"
    } ,
  }));

export default function TrainingFace() {
    const classes = useStyles();

    //取memberEmail
    const [member,setMember] = useState({
        memberEmail:'',
    });

    useEffect(() =>{
    async function fetchData(){
        const url = '/api/login/name';
        const result = await axios.get(url);
        setMember(result.data);
      }
      fetchData();
    },[]);

    const [data , setData] = useState();
    const [image, setImage] = useState({preview: '', raw: ''});
    const handleChange = (e) => {
        setData(e.target.files[0])
        setImage({
            
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
        })
    };

    console.log(data);

    // const [open, setOpen] = React.useState(false);

    // const handleOpen = () => {
    //   setOpen(true);
    // };

    // const handleClose = () => {
    //   setOpen(false);
    // };

    let history = useHistory();

    const handleSubmit=(event)=> {

        let formData = new FormData();
        formData.append('file',data,data.name);
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Access-Control-Allow-Origin' : '*'
                }
            }
            console.log(formData);

        let url = "/api/files/uploadFace/";
        url = url + member.memberEmail;

        console.log(url)

       
        axios.post(url, formData,config)
        .then(res => {
            alert("訓練成功!");
            console.log(res.data);
            history.push({
                pathname: "/trainingFace",
            });


        }).catch(function(error){
            alert(error);
            console.log(error);
        });

       
    }
    return (
        <div className={classes.div}>
            <Header />
            <div className={classes.content_part}>
                <LeftBar/>
                <Container className={classes.content}>
                    <div>
                        <Typography variant="h4" className={classes.word}>
                            訓 練 人 臉
                        </Typography>
                        <hr />
                    </div>
                    <div>
                        <form className={classes.form}>
                                <Box lineHeight="normal" m={1}>
                                    <Container className={classes.container}>
                                        {/* <img className={classes.img} src="./img/profile.jpg" alt="img" /> */}
                                        <div className={classes.upload_btn_wrapper}>
                                            <br/><br/><br/>
                                            {
                                                image.preview ?
                                            <>
                                                <img src={ image.preview } width='50%' height="50%" className={classes.img}/>
                                                <br/>
                                                <Button
                                                    variant="contained"
                                                    className={classes.button}
                                                    startIcon={<PhotoLibraryIcon />}
                                                >
                                                    重新上傳
                                                    <input type="file" className={classes.file} onChange={handleChange} id="upload-button" accept="image/*" multiple/>
                                                </Button>
                                                <Button 
                                                    className={classes.button} 
                                                    variant="contained" 
                                                    onClick={handleSubmit} 
                                                    startIcon={<FaceIcon />}
                                                >
                                                    訓練人臉
                                                            
                                                </Button>
                                            </>
                                            :(
                                            <>
                                            {/* <img src={} width='50%' height="50%" /> */}
                                                <Button
                                                    variant="contained"
                                                    className={classes.button}
                                                    startIcon={<PhotoLibraryIcon />}
                                                >
                                                    上傳大頭照
                                                    <input type="file" className={classes.file} onChange={handleChange} id="upload-button" accept="image/*" multiple/>
                                                </Button>
                                                <div>
                                                    <Typography variant="overline" className={classes.word}>
                                                        ＊請上傳清晰的大頭照，本系統僅支持jpg、jpeg和png檔，且檔案不得超過1GB
                                                    </Typography>
                                                </div>
                                            </>
                                        )}
                                        </div> 
                                        {/* <Button
                                            variant="contained"
                                            className={classes.button}
                                            onClick={handleOpen}
                                            startIcon={<SyncAltIcon />}
                                        >
                                            上傳大頭照
                                        </Button>
                                        <Button
                                            variant="contained"
                                            className={classes.button}
                                            onClick={handleOpen}
                                            startIcon={<SyncAltIcon />}
                                        >
                                            開始訓練
                                        </Button> */}
                                    </Container>
                                </Box>
                                {/* <Box lineHeight={1} m={1}>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        closeAfterTransition
                                        BackdropComponent={Backdrop}
                                        BackdropProps={{
                                            timeout: 1000,
                                        }}
                                    >
                                        <Fade in={open}>
                                            <div className={classes.open_paper}>
                                                <img className={classes.img} src="./img/profile.jpg" alt="img" />
                                                <Button
                                                    variant="contained"
                                                    className={classes.button}
                                                    startIcon={<BackupIcon />}
                                                >
                                                    完成訓練
                                                </Button>
                                            </div>
                                        </Fade>
                                    </Modal>
                                </Box> */}
                            </form>
                        </div>
                </Container>
            </div>
        </div>
    );
}
