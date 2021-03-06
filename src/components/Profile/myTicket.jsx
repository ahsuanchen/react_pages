import React , {useState , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/PF_header.jsx';
import LeftBar from 'components/Profile/leftbar.jsx';
import { Link , useHistory} from 'react-router-dom';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import QRCode from 'qrcode.react';
import {v4 as uuidv4} from 'uuid';


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
        fontFamily : "微軟正黑體" ,
    } ,
    form : {
        margin : "5% auto" ,
    } ,
    ticket_part : {
        display: "flex" ,
        justifyContent : "center" ,
    } ,
    topic_part : {
        margin : "2%" ,
    } ,
    paper: {
        backgroundImage : "url(./assets/images/ticket/actfun.png)",
        backgroundSize : "100%" ,
        width : "100%" ,
        borderRadius : 10
    } ,
    QRcode_part : {
        margin : "2%" ,
        display: "flex" ,
        justifyContent : "flex-end" ,
    } ,
  }));

export default function QRCodeCheckIn() {
    const classes = useStyles();

    var actID = window.location.href.substring(window.location.href.indexOf("?") + 1 , window.location.href.indexOf("&"))
    var AInum = window.location.href.substring(window.location.href.lastIndexOf("&") + 1)
    
    const [qrcode] = React.useState(AInum);

    const [member, setMember] = useState([]);
    const [activity, setActivity] = useState([]);
    useEffect(() => {
        async function fetchDataAct() {
                let url = "/api/login/name"
                await axios.get(url)
                .then(result => {
                    setMember(result.data);
                    axios.get("/api/activity/" + actID)
                    .then(result => {
                        setActivity(result.data);
                    })
                    .catch(err => {
                        console.log(err.response.status);
                    })
                })
                .catch(err => {
                    console.log(err.response.status);
                })
        }
        fetchDataAct();
    }, []);

    return (
        <div className={classes.div}>
            <Header />
            <div className={classes.content_part}>
                <LeftBar/>
                <Container className={classes.content}>
                        <div>
                            <Typography variant="h4" className={classes.word}>
                                我 的 票 券
                            </Typography>
                            <hr />
                        </div>
                        <div>
                            <form className={classes.form}>
                                <div className={classes.ticket_part}>
                                    <Paper className={classes.paper}>
                                        <Grid container>
                                            <Grid item xs={12} sm={8} className={classes.topic_part}>
                                                <Typography variant="h4" className={classes.word}>
                                                    {activity.activityName}
                                                </Typography>
                                                <br/>
                                                <Typography variant="h5" className={classes.word}>
                                                    {activity.activitySpace}
                                                </Typography>
                                                <br/>
                                                <Typography variant="h5" className={classes.word}>
                                                    {activity.activityStartDateString} ~ {activity.activityEndDateString}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={3} className={classes.QRcode_part}>
                                                <Box lineHeight="normal">
                                                    <QRCode value={qrcode} size={135}/>
                                                    <Typography variant="h6" className={classes.word}>
                                                        參加者：<strong>{member.memberName}</strong>
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </div>
                            </form>
                        </div>  
                </Container>
            </div>
        </div>
    );
}
