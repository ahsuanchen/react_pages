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
    slide : {
        height : "100%",
        maxHeight : "540px" ,
    } , 
    slide_img : {
        width : "100%" ,
        height : "100%",
        objectFit : 'contain' 
    } ,
    search: {
        margin : "2% auto" ,
        display: "flex" ,
        justifyContent : "center" ,
    } ,
    search_bar : {
        margin : "auto" ,
        borderRadius : "10px" ,
        background : '#80cbc4' ,
    } ,
    inputBase : {
        minWidth : "450px" ,
        padding : "5px 20px" ,
        fontFamily : "微軟正黑體"
    } ,
    search_butoon : {
        padding : "10px 0" ,
    } ,
    word : {
        fontFamily : "微軟正黑體"
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

const properties = {
    duration: 5000,
    transitionDuration: 400,
    infinite: true,
    indicators: true,
    arrows: true,
    //objectFit : 'contain'
    //variableWidth: true
}

export default function MenuApp() {
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
    const [activity, setActivity] = useState([]);
    const [organizer, setOrganizer] = useState([]);
    useEffect(() => {
        async function fetchDataOrg() {
                let url = "/api/login/name"
                await axios.get(url)
                .then(result => {
                    setMember(result.data);
                    axios.get("/api/organizer/" + result.data.memberEmail)
                    .then(result => {
                        setOrganizer(result.data);
                        // console.log(result);
                    })
                    .catch(err => {
                        console.log(err.response.status);
                    })
                    axios.get("/api/activity")
                    .then(res => {
                        setActivity(res.data);
                        // console.log(res);
                    })
                    .catch(err => {
                        console.log(err.response.status);
                    })
                })
                .catch(err => {
                    console.log(err.response.status);
                })
        }
        fetchDataOrg();
    }, []);

    return (
        <div className={classes.div}>
            {member.memberEmail === undefined ?
                <Header1/>
                :
                <Header2/> 
            }
            <div className={classes.container}>
                <div>
                    <Slide {...properties}>
                        {activity.map(activity =>
                        <div className={classes.slide}>
                            <Link to={"/ActivityInformation?" + activity.activityId}>
                                <img
                                    className={classes.slide_img}
                                    title={activity.activityName}
                                    src={activity.activityCover}
                                    alt={activity.activityName}
                                />
                            </Link>
                        </div>
                        )}
                    </Slide>
                </div>
                <div className={classes.search}>
                    <Box lineHeight="normal" m={1} className={classes.search_bar}>
                        <InputBase
                            placeholder="搜尋你感興趣的活動"
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
                    </Box>
                </div>
            </div>
            <div>
            {member.memberEmail === undefined ? ""
                :
                <Grid 
                    container
                    direction="column"
                    justify="flex-end"
                    alignItems="flex-end"
                >
                    <Tooltip title="新增">
                        <Fab 
                            className={classes.fab}
                            onClick={handleOpen}
                        >
                            <FontAwesomeIcon icon={faPlus} color="white" />
                        </Fab>
                    </Tooltip>
                    <Modal
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                        timeout: 1000,
                        }}
                    >
                        <Fade in={open}>
                            <div>
                                <Grid container spacing={10}>
                                    {organizer.memberEmail === undefined ?
                                    <Grid item xs={12} sm={6}>
                                        <Card className={classes.choose_type} title="type_1">
                                            <CardActionArea component={Link} to="/organizer">
                                                <CardMedia>
                                                    <GroupIcon className={classes.icon_part} />
                                                </CardMedia>
                                                <CardContent className={classes.word}>
                                                    申請主辦單位
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                    :
                                    <Grid item xs={12} sm={6}>
                                        <Card className={classes.warning_type} title="warning">
                                            <CardActionArea>
                                                <CardMedia>
                                                    <WarningIcon className={classes.icon_part} />
                                                </CardMedia>
                                                <CardContent className={classes.warning_content}>
                                                    您已申請過主辦單位
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                    }
                                    <Grid item xs={12} sm={6}>
                                        <Card className={classes.choose_type} title="type_2">
                                            <CardActionArea component={Link} to="/new1">
                                                <CardMedia>
                                                    <EventIcon className={classes.icon_part} />
                                                </CardMedia>
                                                <CardContent className={classes.word}>
                                                    建立活動
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </div>
                        </Fade>
                    </Modal>
                </Grid>
                }
            </div>
            <div className={classes.container}>
                <div>
                    <Typography variant="h5" className={classes.word}>
                        熱 門 活 動 /
                    </Typography>
                </div>
                <div className={classes.activity_part}>
                    <Grid container spacing={3}>
                    {activity.map(activity =>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardActionArea className={classes.card_area} component={Link} to={"/ActivityInformation?" + activity.activityId}>
                                    <CardMedia
                                        className={classes.card_media}
                                        image={activity.activityCover}
                                        title={activity.activityName}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" className={classes.word}>
                                            {activity.activityName}
                                        </Typography>
                                        <hr/>
                                        <Typography variant="h6" className={classes.word}>
                                            <FontAwesomeIcon icon={faClock} />
                                            &nbsp; {activity.activityStartDateString.substring(0,10)}
                                        </Typography>
                                    </CardContent>
                                    
                                </CardActionArea>
                                <Divider/>
                                <CardActions>
                                    <Link to="/" className={classes.link}>#running </Link>
                                    <Link to="/" className={classes.link}>#marathon </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    )}
                    </Grid>
                </div>
            </div>
            <br/>
            <BottomBar/>
        </div>
    );
}
