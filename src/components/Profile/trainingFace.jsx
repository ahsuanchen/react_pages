import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/PF_header.jsx';
import LeftBar from 'components/Profile/leftbar.jsx';
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
        margin : "5% auto" ,
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

    return (
        <div className={classes.div}>
            <Header />
            <div className={classes.content_part}>
                <LeftBar/>
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
