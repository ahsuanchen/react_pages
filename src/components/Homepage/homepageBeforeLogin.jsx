import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { Slide } from 'react-slideshow-image';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';
import Image1 from 'assets/images/1.jpg';
import Image2 from 'assets/images/2.jpg';
import Image3 from 'assets/images/3.jpg';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const style = {
    toolbar : {
        width : '97%' ,
        height : '50px' ,
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)' ,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
    } ,
    menubutton : {
        marginRight : '5px' ,
    } ,
    title : {
        marginLeft : '20px' ,
    } ,
    loginbutton : {
        marginLeft : '1240px' ,
    } ,
    slideimage : {
        width : '50%',
        position : 'absolute',
        top : '12%' ,
        left : '25%' ,
    } ,
    each_slide : {
        height : '400px'
    } ,
    slide_img_style : {
        width : '800px' ,
        height : '400px'
    } ,
    text_title : {
        position : 'absolute',
        top : '75%' ,
        left : '5%' ,
    } ,
    img : {
        width : '350px' ,
        height : '200px' ,
        borderRadius : '10px 10px 0px 0px'
    } ,
    text_in_paper : {
        marginLeft : '10px'
    } ,
    text_date : {
        color : '#D0D0D0' ,
    } ,
    awesomeicon : {
        fontSize : '25px' ,
        color : '#E0E0E0'
    } ,
    paper1 : {
        width : '350px' ,
        height : '300px' ,
        position : 'absolute',
        top : '85%' ,
        left : '5%' ,
        borderRadius : '10px' ,
        padding : '5' ,
        color : 'inherit'
    } ,
    paper2 : {
        width : '350px' ,
        height : '300px' ,
        position : 'absolute',
        top : '85%' ,
        left : '35%' ,
        borderRadius : '10px' ,
        padding : '5' ,
        color : 'inherit'
    } ,
    paper3 : {
        width : '350px' ,
        height : '300px' ,
        position : 'absolute',
        top : '85%' ,
        left : '65%' ,
        borderRadius : '10px' ,
        padding : '5' ,
        color : 'inherit'
    }
}

const properties = {
    duration: 5000,
    transitionDuration: 400,
    infinite: true,
    indicators: true,
    arrows: true,
}

const Slideshow = (
    <div style={style.slideimage}>
      <Slide {...properties}>
        <div style={style.each_slide}>
            <img src={Image1} style={style.slide_img_style} alt="img1" />
        </div>
        <div style={style.each_slide}>
            <img src={Image2} style={style.slide_img_style} alt="img2" />
        </div>
        <div style={style.each_slide}>
            <img src={Image3} style={style.slide_img_style} alt="img3" />
        </div>
      </Slide>
    </div>
  );

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    }
  }));

  export default function Homepage() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
      };

    const handleClose = () => {
        setAnchorEl(null);
      };

    return(
        <div className={classes.root}>
            {Slideshow}
            <Typography variant="h5" style={style.text_title}>
                熱 門 活 動 /
            </Typography>
            <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
                <Paper style={style.paper1}>
                    <img src={Image1} style={style.img} alt="img1" />
                    <Typography variant="h6" style={style.text_in_paper}>
                         「#管他就跑我的」路跑
                    </Typography>
                    <hr />
                    <Box lineHeight="normal" m={1}>
                      <Typography variant="h6" style={style.text_date}>
                        <FontAwesomeIcon icon={faClock} style={style.awesomeicon} />
                        &nbsp; 2020-03-22 (日)
                      </Typography>
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Paper style={style.paper2}>
                    <img src={Image2} style={style.img} alt="img2" />
                    <Typography variant="h6" style={style.text_in_paper}>
                             世界巡迴演唱會-高雄場
                    </Typography>
                    <hr />
                    <Box lineHeight="normal" m={1}>
                      <Typography variant="h6" style={style.text_date}>
                        <FontAwesomeIcon icon={faClock} style={style.awesomeicon} />
                        &nbsp; 2020-07-25 (六)
                      </Typography>
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Paper style={style.paper3}>
                    <img src={Image3} style={style.img} alt="img3" />
                    <Typography variant="h6" style={style.text_in_paper}>
                            Pinkoi Experience | 質感體驗
                    </Typography>
                    <hr />
                    <Box lineHeight="normal" m={1}>
                      <Typography variant="h6" style={style.text_date}>
                        <FontAwesomeIcon icon={faClock} style={style.awesomeicon} />
                        &nbsp; 2020-05-20 (六)
                      </Typography>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
        </div>
    );
  }
