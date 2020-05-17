import React , {useState , useEffect} from 'react';
import Header1 from '../Header/HM_header1.jsx';
import BottomBar from './bottomBar.jsx';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Link , useHistory } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import { faClock , faSearch } from "@fortawesome/free-solid-svg-icons";
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

    // const [isSign , setIsSign] = React.useState(false);
    // const [member , setMember] = useState([]);
    const [activity, setActivity] = useState([]);
    useEffect(() => {
        async function fetchDataOrg() {
                let url = "/api/login/name"
                await axios.get(url)
                .then(result => {
                    // setMember(result.data);
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
            <Header1/>
            <div className={classes.container}>
                <div>
                    <Slide {...properties}>
                        {activity.map(activity =>
                        <div className={classes.slide}>
                            <Link to="/">
                                <img className={classes.slide_img} src={activity.activityCover} alt={activity.activityName} />
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
                                <CardActionArea className={classes.card_area}>
                                    <CardMedia
                                        className={classes.card_media}
                                        image={activity.activityCover}
                                        title="act_1"
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
