import React , { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Header from '../Header/PF_header1.jsx';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
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
    left_menu : {
        display: "flex" ,
        justifyContent : "space-around" ,
        minHeight : 800 ,
        color : "#000"
    } ,
    left_container : {
        maxWidth : "280px" , 
        borderRight : "1px solid" ,
    } ,
    avatar : {
        minWidth : "150px" , 
        minHeight : "150px" ,
    } ,
    link : {
        textDecoration : "none" , 
        color : "#D0D0D0" ,
        '&:hover' : {
          color : '#00AEAE' 
        }
    } ,
    content : {
        margin : "2% 2%" ,
    } ,
    form : {
        margin : "5% auto" ,
    } ,
    container : {
        maxWidth : '550px' ,
        minHeight : '550px' ,
        background : "linear-gradient(160deg, #6C6C6C 10%, #E0E0E0 80%)" ,
        overflow : "visible"
    } ,
    img : {
        minWidth : '400px' ,
        maxHeight : '500px' ,
        margin : "auto" ,
        display: "flex" ,
        justifyContent : "center" ,
    } ,
    button : {
        margin : "2% auto" ,
        display: "flex" ,
        justifyContent : "center" ,
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)' ,
        color : "#fff"
    } ,
    open_paper : {
        maxWidth : '500px' ,
        maxHeight : '600px' ,
        background : 'linear-gradient(160deg, #6C6C6C 10%, #E0E0E0 80%)' ,
        margin : "auto" ,
        alignItems : "center"
    } ,
  }));

export default function TrainingFace() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const [member, setMember] = useState([]);
    // const memberList = ['memberName', 'memberID', 'memberGender', 'memberBloodType', 'memberBirthday', 'memberEmail', 'memberAddress'];
    useEffect(() => {
        async function fetchDataMem() {
                const result = await axios.get("/api/member/actforfun@gmail.com")
                setMember(result.data);
                console.log(result);           
                // .then(result => {
                //     setMember(result.data)
                //     console.log(result)
                // }).catch(err => {
                //     console.log(err)
                // })
        }
        fetchDataMem();
    }, []);

    const [organizer, setOrganizer] = useState([]);
    // const organizerList = ['organizerName' , 'organizerEmail' , 'organizerPhone' ,'organizerAddress' , 'organizerInfo'];
    useEffect(() => {
        async function fetchDataOrg() {
                const result = await axios.get("/api/organizer/actforfun@gmail.com");
                setOrganizer(result.data);             
                // .then(res => {
                //     setMember(res.data)
                //     console.log(res)
                // }).catch(err => {
                //     console.log(err)
                // })
        }
        fetchDataOrg();
    }, []);

    return (
        <div className={classes.div}>
            <Header />
            <div className={classes.left_menu}>
                <Container className={classes.left_container}>
                    <Typography variant="h5">
                            <Box lineHeight="normal" m={4}>
                                <Avatar className={classes.avatar} src="./img/profile.jpg" alt="user" />
                            </Box>
                            <Box lineHeight={2} m={1}>
                                {member.memberName}
                            </Box>
                            <Divider />    
                            <Link to="/profile" className={classes.link}>
                                <Box lineHeight={1} m={4}>
                                    個人檔案
                                </Box>
                            </Link>
                            <Link to="/trainingFace" className={classes.link}>
                                <Box lineHeight={1} m={4} color="#000">
                                    訓練人臉
                                </Box>
                            </Link>
                            <Link to="/signupSituation" className={classes.link}>
                                <Box lineHeight={1} m={4}>
                                    報名狀況
                                </Box>
                            </Link>
                            <Divider />
                            <Box lineHeight={3} m={1}>
                                {organizer.organizerName}
                            </Box>
                            <Divider />
                            <Link to="/organizerInfo" className={classes.link}>
                                <Box lineHeight={1} m={4} >
                                    主辦單位資訊
                                </Box>
                            </Link>    
                            <Link to="/manageActivity" className={classes.link}>
                                <Box lineHeight={1} m={4}>
                                    管理活動
                                </Box>
                            </Link>
                            <Divider />
                            <Link to="/" className={classes.link}>
                                <Box lineHeight={2} m={1}>
                                    我的相簿
                                </Box>
                            </Link>
                    </Typography>
                </Container>
                <Container className={classes.content}>
                    <div>
                        <Typography variant="h4">
                            訓 練 人 臉
                        </Typography>
                        <hr />
                    </div>
                    <div>
                        <form className={classes.form}>
                                <Box lineHeight="normal" m={1}>
                                    <Container className={classes.container}>
                                        <img className={classes.img} src="./img/profile.jpg" alt="img" />
                                        <Button
                                            variant="contained"
                                            className={classes.button}
                                            onClick={handleOpen}
                                            startIcon={<SyncAltIcon />}
                                        >
                                            開始訓練
                                        </Button>
                                    </Container>
                                </Box>
                                <Box lineHeight={1} m={1}>
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
                                </Box>
                            </form>
                        </div>  
                </Container>
            </div>
        </div>
    );
}