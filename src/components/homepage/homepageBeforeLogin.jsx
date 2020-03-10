import React from 'react';
import Header from './header1.jsx';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import { faClock , faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
        maxWidth : "1080px" ,
        margin : "2% auto" ,
    } ,
    slide_show : {
        // maxHeight : "540px" ,
    } ,
    slide : {
        maxHeight : "540px" ,
    } , 
    slide_img : {
        maxWidth : "100%" ,
        maxHeight : "100%" 
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
        minWidth : "450px" ,
        padding : "5px 20px" ,
    } ,
    search_butoon : {
        padding : "10px 0" ,
    } ,
    activity_part : {
        margin : "2% auto" ,
    } ,
    card : {
        maxWidth : "400px" ,
    } ,
    card_content : {
        width : "100%" ,
        height : "200px"
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
      }
  }));

const properties = {
    duration: 5000,
    transitionDuration: 400,
    infinite: true,
    indicators: true,
    arrows: true,
}

export default function MenuApp() {
    const classes = useStyles();

    return (
        <div className={classes.div}>
            <Header />
            <div className={classes.container}>
                <div>
                    <Slide {...properties}>
                        <div className={classes.slide}>
                            <Link to="/">
                                <img className={classes.slide_img} src="./img/slide1.jpg" alt="img1" />
                            </Link>
                        </div>
                        <div className={classes.slide}>
                            <Link to="/">
                                <img className={classes.slide_img} src="./img/slide2.jpg" alt="img2" />
                            </Link>
                        </div>
                        <div className={classes.slide}>
                            <Link to="/">
                                <img className={classes.slide_img} src="./img/slide3.jpg" alt="img3" />
                            </Link>
                        </div>
                    </Slide>
                </div>
                <div className={classes.search}>
                    <Box lineHeight="normal" m={1} className={classes.search_bar}>
                        <InputBase
                            placeholder="搜尋你感興趣的活動"
                            className={classes.inputBase}
                        />
                        <Tooltip title="搜尋">
                            <Button className={classes.search_butoon}>
                                &nbsp;<FontAwesomeIcon icon={faSearch} style={{fontSize : "20px"}} />
                            </Button>
                        </Tooltip>
                    </Box>
                </div>
                <div>
                    <Typography variant="h5">
                        熱 門 活 動 /
                    </Typography>
                </div>
                <div className={classes.activity_part}>
                    <Grid container spacing={3}>
                        <Grid item xs={6} sm={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.card_content}
                                        image="../img/slide1.jpg"
                                        title="act_1"
                                    />
                                    <CardContent>
                                        <Typography variant="h6">
                                            「#管他就跑我的」路跑
                                        </Typography>
                                        <hr/>
                                        <Typography variant="h6">
                                            <FontAwesomeIcon icon={faClock} />
                                            &nbsp; 2020-03-22 (日)
                                        </Typography>
                                    </CardContent>
                                    <Divider/>
                                </CardActionArea>
                                <CardActions>
                                    <Link to="/" className={classes.link}>#running </Link>
                                    <Link to="/" className={classes.link}>#marathon </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.card_content}
                                        image="./img/slide2.jpg"
                                        title="act_2"
                                    />
                                    <CardContent>
                                        <Typography variant="h6">
                                            世界巡迴演唱會-高雄場
                                        </Typography>
                                        <hr/>
                                        <Typography variant="h6">
                                            <FontAwesomeIcon icon={faClock} />
                                            &nbsp; 2020-07-25 (六)
                                        </Typography>
                                    </CardContent>
                                    <Divider/>
                                </CardActionArea>
                                <CardActions>
                                    <Link to="/" className={classes.link}>#singer </Link>
                                    <Link to="/" className={classes.link}>#concert </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.card_content}
                                        image="./img/slide3.jpg"
                                        title="act_3"
                                    />
                                    <CardContent>
                                        <Typography variant="h6">
                                            Pinkoi Experience | 質感體驗
                                        </Typography>
                                        <hr/>
                                        <Typography variant="h6">
                                            <FontAwesomeIcon icon={faClock} />
                                            &nbsp; 2020-05-20 (六)
                                        </Typography>
                                    </CardContent>
                                    <Divider/>
                                </CardActionArea>
                                <CardActions>
                                    <Link to="/" className={classes.link}>#fashion </Link>
                                    <Link to="/" className={classes.link}>#experience </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}