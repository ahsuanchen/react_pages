import React , {useState , useEffect} from 'react';
import Header from '../Header/HM_header2.jsx';
import { makeStyles } from '@material-ui/core/styles';
import { Link , useHistory } from 'react-router-dom';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
// import { browserHistory } from 'react'


const useStyles = makeStyles(theme => ({
    div : {
        boxSizing : "border-box" ,
    } ,
    container : {
        maxWidth : "1080px" ,
        margin : "2% auto" ,
    } ,
    word : {
        fontFamily : "微軟正黑體"
    } ,
    search: {
        margin : "2% auto" ,
        display: "flex" ,
        justifyContent : "center" ,
    } ,
    search_bar : {
        margin : "auto" ,
        borderRadius : "10px" ,
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)' ,
    } ,
    inputBase : {
        minWidth : "1010px" ,
        padding : "5px 20px" ,
        fontFamily : "微軟正黑體"
    } ,
    Typography : {
        color : "#000" ,
        fontFamily : "微軟正黑體" ,
        "&:hover" : {
            color : "#00AEAE"
        }
    } ,
    link : {
        textDecoration : "none" , 
        color : "#ADADAD" , 
        fontFamily : "微軟正黑體" ,
        "&:hover" : {
            color : "#00AEAE"
        }
    } ,
    content : {
        overflow: "hidden"
    } ,
    search_NoResult : {
        display: "flex" ,
        justifyContent : "center" ,
        fontFamily : "微軟正黑體"
    }
  }));

export default function SearchInfo() {
    const classes = useStyles();

    const [searchResult , setSearchResult] =  useState(localStorage.getItem('searchResult'));

    const [count, setCount] = useState(0);
    const [activity, setActivity] = useState([]);
    const [organizer, setOrganizer] = useState([]);
    useEffect(() => {
        async function fetchDataSearch() {
            let url = "/api/activity/search"+"?search="+searchResult;
            let url1 = "/api/organizer/search"+"?search="+searchResult;
            axios.get(url)
            .then(result => {
                setActivity(result.data);
            })
            .catch(err => {
                console.log(err.response.status);
            })
            axios.get(url1)
            .then(result => {
                setOrganizer(result.data);
            })
            .catch(err => {
                console.log(err.response.status);
            })
        }
        fetchDataSearch();
    },[count]);

    return (
        <div className={classes.div}>
            <Header />
            <div className={classes.container}>
                <div className={classes.search}>
                    <Box lineHeight="normal" m={1} className={classes.search_bar}>
                        <InputBase
                            placeholder="搜尋你感興趣的活動"
                            className={classes.inputBase}
                            value={searchResult}
                            onChange={e=>setSearchResult(e.target.value)}
                        />
                        <Tooltip title="搜尋" className={classes.word}>
                            <Button
                                type="submit"
                                className={classes.search_butoon}
                                onClick={() => setCount(count+1)}
                            >
                                &nbsp;<FontAwesomeIcon icon={faSearch} style={{fontSize : "20px"}} />
                            </Button>
                        </Tooltip>
                    </Box>
                </div>
                <div>
                    <Typography variant="h5" className={classes.word}>
                        搜尋關鍵字&nbsp;&nbsp;"{searchResult}"
                    </Typography>
                </div>
                <br/>
                <Divider />
                <br/>
                <div>
                    <Typography variant="h6" className={classes.word}>
                        與搜尋內容相關
                    </Typography>
                    <br/>
                    {activity.length === 0 ? 
                        <Typography variant="h6" className={classes.search_NoResult}>
                            查無相關之內容
                        </Typography>
                        :
                    <Box overflow="hidden">
                    {activity.map(activity =>
                        <Grid container spacing={3}>    
                            <Grid item xs={12}>
                                    <div>
                                        <Container component={Link} to={"/ActivityInformation?" + activity.activityId} style={{textDecoration : "none"}}>
                                                <img 
                                                    src={activity.activityCover}
                                                    title={activity.activityName}
                                                    style={{width : 225 , height : 135 , float : "left" , marginRight : "2%"}}
                                                />
                                                <Box lineHeight="normal">
                                                    <Typography variant="h6" title={activity.activityName} className={classes.Typography}>
                                                        {activity.activityName}
                                                    </Typography>
                                                    <Link 
                                                        // to={"/ActivityInformation?" + activity.activityId}
                                                        className={classes.link}
                                                        title={activity.organizerName}
                                                    >
                                                        <Typography variant="overline">
                                                            {activity.organizerName}
                                                        </Typography>
                                                    </Link>
                                                    <Typography variant="caption" className={classes.word} color="textSecondary">
                                                        {` • ${activity.activityStartDateString} • ${activity.activitySpace}`}
                                                    </Typography>
                                                    <br/>
                                                    <Typography variant="caption" className={classes.word} color="textSecondary" className={classes.content}>
                                                        {activity.activityInfo}
                                                    </Typography>
                                                </Box>
                                        </Container> 
                                    </div>                          
                            </Grid>            
                        </Grid>
                        )} 
                    </Box>
                    }
                </div>
                <br/>
                <Divider />
                <br/>
                <div>
                    <Typography variant="h6" className={classes.word}>
                        與主辦單位相關
                    </Typography>
                    <br/>
                   {organizer.length === 0 ? 
                        <Typography variant="h6" className={classes.search_NoResult}>
                            查無相關之主辦單位
                        </Typography>
                        : 
                    <Box overflow="hidden">
                        {organizer.map(organizer =>       
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                    <div>
                                        <Container component={Link} to="" style={{textDecoration : "none"}}>
                                                <Box lineHeight="normal">
                                                    <Typography variant="h6" title={organizer.organizerName} className={classes.Typography}>
                                                        {organizer.organizerName}
                                                    </Typography>
                                                    <Typography variant="overline" className={classes.word}>
                                                        電話：{organizer.organizerPhone}
                                                    </Typography>
                                                    <br/>
                                                    <Typography variant="caption" className={classes.word}>
                                                        聯絡信箱： {organizer.organizerEmail}
                                                    </Typography>
                                                    <br/>
                                                    <Typography variant="overline" className={classes.word}>
                                                        聯絡地址： {organizer.organizerAddress}
                                                    </Typography>
                                                    <br/>
                                                    <Typography variant="caption" className={classes.word} color="textSecondary">
                                                        主辦單位資訊： {`  ${organizer.organizerInfo}`}
                                                    </Typography>
                                                </Box>
                                        </Container> 
                                    </div>                          
                            </Grid>
                        </Grid>
                        )} 
                    </Box>
                   } 
                </div>
            </div>
        </div>
    )
}