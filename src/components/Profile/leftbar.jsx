import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import SaveIcon from '@material-ui/icons/Save';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
            <div className={classes.left_menu}>
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
                </Typography>
            </div>
    );
}
