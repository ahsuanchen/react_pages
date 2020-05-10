import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import FacebookIcon from '@material-ui/icons/Facebook';
import YoutubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles(theme => ({
    div : {
        boxSizing : "border-box" ,
    } ,
    container : {
        maxWidth : "1080px" ,
        margin : "2% auto" ,
    } ,
    service_type : {
        margin : "2% auto" ,
    } ,
    bottom_bar : {
        background : "#4F4F4F" ,
        width : "100%" ,
        height : "100%" ,
        color : "#fff"
    } ,
    bottom_link : {
        
        color : "#ADADAD" ,
        textDecoration : "none" ,
        '&:hover' : {
            color : '#fff' 
        }
    } ,
    avatar_part : {
        display : "flex" ,
        justifyContent: "space-between",
    } ,
    avatar : {
        background : "#fff" ,
        color : "#00AEAE"
    }
}));

function Copyright() {
    return (
      <Typography variant="body2" color="#000" align="center">
        {'Copyright © ACTFUN '}
        {new Date().getFullYear()}
        {' . All Rights Reserved .'}
      </Typography>
    );
}

export default function MenuApp() {
    const classes = useStyles();

    return(
        <div className={classes.bottom_bar}>
            <div className={classes.container}>
                <Grid container spacing={3} >
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.service_type}>
                        <Box lineHeight={2} >
                            <Typography variant="h6">
                                會員服務
                            </Typography>
                            <Link className={classes.bottom_link} to="">
                                會員條款
                            </Link>
                            <br/>
                            <Link className={classes.bottom_link} to="">
                                隱私權政策
                            </Link>
                            <br/>
                            <Link className={classes.bottom_link} to="">
                                常見問題
                            </Link>
                            <br/>
                            <Link className={classes.bottom_link} to="">
                                訂閱電子報
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.service_type}>
                        <Box lineHeight={2}>
                            <Typography variant="h6">
                                聯絡我們
                            </Typography>
                            <br/>
                            <div className={classes.avatar_part}>
                                <Link className={classes.bottom_link} to="">
                                    <Avatar className={classes.avatar}>
                                        <FacebookIcon/>
                                    </Avatar>
                                </Link>
                                <Link className={classes.bottom_link} to="">
                                    <Avatar className={classes.avatar}>
                                        <YoutubeIcon/>
                                    </Avatar>
                                </Link>
                                <Link className={classes.bottom_link} to="">
                                    <Avatar className={classes.avatar}>
                                        <TwitterIcon/>
                                    </Avatar>
                            </Link>
                            </div>    
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.service_type}>
                        <Box lineHeight={1}>
                            <Typography variant="h6">
                                客服中心
                            </Typography>
                            <br/>
                            <Typography variant="body2">
                                Email : actfun.official@gmail.com
                            </Typography>
                            <br/>
                            <Typography variant="body2">
                                服務時間 : 周一至周五 9:00 ~ 18:00
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Divider style={{background : "#9D9D9D"}} />
                <br/>
                <Copyright/>
            </div>
        </div>
    );
}