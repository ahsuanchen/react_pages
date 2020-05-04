//外面再包<div className={classes.left_menu}>把內容包起來
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

const minHeight = 800 ;

const useStyles = makeStyles(theme => ({
    left_menu : {
        display: "flex" ,
        justifyContent : "space-around" ,
        maxWidth : "280px" ,
        minHeight : minHeight ,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)" ,
        background : '#fff' ,
        color : "#000000"
    } ,
    left_container: {
        boxSizing:"border-box",
        maxWidth: "280px",
        borderRight: "1px solid",
    },
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
    img : {
        margin : "2% 0" ,
        minWidth : '150px' ,
        maxHeight : '200px'
    } ,
    button : {
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)' ,
        // display: "flex" ,
        // justifyContent : "flex-end" ,
        alignItems : "right"
    }
  }));

export default function MenuAppBar() {
    const classes = useStyles();

    const [value, setValue] = React.useState('male');

    const handleChange = event => {
      setValue(event.target.value);
    };

    const [blood, setblood] = React.useState("A");

    const handleSelect = event => {
        setblood(event.target.value);
    };

    return (

            <Container className={classes.left_container}>
                <Typography variant="h5">
                    <Box lineHeight="normal" m={4}>
                        <Avatar className={classes.avatar} src="./img/profile.jpg" alt="user" />
                    </Box>
                    <Box lineHeight={2} m={1}>
                        王小明
                    </Box>
                    <Divider />
                    <Link to="/profile" className={classes.link}>
                        <Box lineHeight={1} m={4}>
                            個人檔案
                        </Box>
                    </Link>
                    <Link to="/trainingFace" className={classes.link}>
                        <Box lineHeight={1} m={4}>
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
                        王氏集團
                    </Box>
                    <Divider />
                    <Link to="/organizerInfo" className={classes.link}>
                        <Box lineHeight={1} m={4} >
                            主辦單位資訊
                        </Box>
                    </Link>
                    <Link to="/" className={classes.link}>
                        <Box lineHeight={1} m={4}>
                            管理活動
                        </Box>
                    </Link>
                    <Divider />
                    <Link to="/MyAlbum" className={classes.link}>
                        <Box lineHeight={2} m={1}>
                            我的相簿
                        </Box>
                    </Link>
                    <Link to="/ActivityAlbum" className={classes.link}>
                        <Box lineHeight={2} m={1}>
                            活動相簿
                        </Box>
                    </Link>
                </Typography>
                </Container>


    );
}
