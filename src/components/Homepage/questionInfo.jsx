import React , {useState , useEffect} from 'react';
import Header1 from '../Header/HM_header1.jsx';
import Header2 from '../Header/HM_header2.jsx';
import BottomBar from './bottomBar.jsx';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Link , useHistory } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import { faClock , faSearch , faPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import EventIcon from '@material-ui/icons/Event';
import GroupIcon from '@material-ui/icons/Group';
import WarningIcon from '@material-ui/icons/Warning';

const useStyles = makeStyles(theme => ({
    div : {
        boxSizing : "border-box" ,
    } ,
    container : {
        maxWidth : "80%" ,
        margin : "2% auto" ,
    } ,
    word : {
        fontFamily : "微軟正黑體"
    } ,
    topic : {
        fontFamily : "微軟正黑體" ,
        textAlign: "center"
    } ,
    search: {
        background : '#80cbc4' ,
        display: "flex" ,
        justifyContent : "center" ,
    } ,
    search_bar : {
        margin : "2% auto" ,
        borderRadius : "10px" ,
        background : '#fff' ,
    } ,
    inputBase : {
        minWidth : "450px" ,
        padding : "5px 20px" ,
        fontFamily : "微軟正黑體"
    } ,
    search_butoon : {
        padding : "10px 0" ,
    } ,
    activity_part : {
        margin : "2% auto" ,
    } ,
    card : {
        maxWidth : "400px" ,
        minHeight : "400px" ,
    } ,
    card_area : {
        maxWidth : "400px" ,
        minHeight : "400px" ,
    } ,
    card_media : {
        width : "100%" ,
        minHeight : "250px"
    } ,
    card_content : {
        width : "100%" ,
        minHeight : "50px" ,
    } ,
    img : {
        width : "100%" ,
        maxHeight : "200px" ,
        borderRadius : '10px 10px 0 0'
    } ,
    link : {
        textDecoration : "none" , 
        color : "#000" ,
        '&:hover' : {
          color : '#00AEAE' 
        }
    } ,
    fab : {
        position : "fixed" ,
        opacity: "0.8" ,
        bottom : "5%" ,
        right : "5%" ,
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)'
    } ,
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    } ,
    choose_type : {
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)' , 
        width : "250px" ,
        height : "250px" ,
        color : "#E0E0E0" ,
        fontSize : "32px" ,
        textAlign : "center" ,
        display: 'flex',
        alignItems: 'center',
    } ,
    warning_type : {
        background : '#ADADAD' , 
        width : "250px" ,
        height : "250px" ,
        color : "#E0E0E0" ,
        fontSize : "32px" ,
        textAlign : "center" ,
        display: 'flex',
        alignItems: 'center',
    } ,
    icon_part : {
        fontSize : "150px"
    } , 
    warning_content : {
        fontSize : "24px" ,
        fontFamily : "微軟正黑體"
    }
  }));

export default function Question() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const [searchResult , setSearchResult] = useState("");

    let history = useHistory();
    const SendSearchResult = event =>
    {
        if (searchResult === "")
        {
            alert("您未輸入任何東西");
        }
        else
        {
            localStorage.setItem('searchResult' , searchResult);
            history.push({
                pathname: "/searchInfo",
            });
        }
    }

    const [member , setMember] = useState([]);
    useEffect(() => {
        async function fetchData() {
                let url = "/api/login/name"
                await axios.get(url)
                .then(result => {
                    setMember(result.data);
                })
                .catch(err => {
                    console.log(err.response.status);
                })
        }
        fetchData();
    }, []);
    
    return (
        <div className={classes.div}>
            {member.memberEmail === undefined ?
                <Header1/>
                :
                <Header2/> 
            }
            <div className={classes.search}>
                <Typography variant="h2" className={classes.topic}>
                    嗨！您遇到甚麼問題呢？
                </Typography>
                <br/>
                {/* <Box lineHeight="normal" m={1} className={classes.search_bar}>
                    <InputBase
                        placeholder="請輸入您遇到的問題或障礙"
                        className={classes.inputBase}
                        value={searchResult}
                        onChange={e=>setSearchResult(e.target.value)}
                    />
                    <Tooltip title="搜尋">
                        <Button
                            type="submit"
                            className={classes.search_butoon}
                            onClick={SendSearchResult}
                        >
                            &nbsp;<FontAwesomeIcon icon={faSearch} style={{fontSize : "20px"}} />
                        </Button>
                    </Tooltip>
                </Box> */}
            </div>
            <div className={classes.container}>

            </div>
            <br/>
            <BottomBar/>
        </div>
    );
}
