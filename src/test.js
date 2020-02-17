import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Slide } from 'react-slideshow-image';
import slide_1 from '../src/image/1.jpg';
import slide_2 from '../src/image/2.jpg';
import slide_3 from '../src/image/3.jpg';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const style = {
    toolbar : {
        width : '100%' ,
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
        width: '100%' ,
        maxWidth: '500' ,
        position : 'absolute',
        top : '75%' ,
        left : '5%' ,
    } ,
    acc_circle : {
        marginLeft : '1280px'
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
        marginLeft : '10px'
    } ,
    awesomeicon : {
        marginLeft : '10px' ,
        fontSize : '25px' ,
        color : '#E0E0E0'
    } ,
    paper1 : {
        width : '350px' ,
        height : '310px' ,
        position : 'absolute',
        top : '85%' ,
        left : '5%' ,
        borderRadius : '10px' ,
        padding : '5' ,
        color : 'inherit'
    } ,
    paper2 : {
        width : '350px' ,
        height : '310px' ,
        position : 'absolute',
        top : '85%' ,
        left : '35%' ,
        borderRadius : '10px' ,
        padding : '5' ,
        color : 'inherit'
    } ,
    paper3 : {
        width : '350px' ,
        height : '310px' ,
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
            <img src={slide_1} style={style.slide_img_style} alt="img1" />
        </div>
        <div style={style.each_slide}>
            <img src={slide_2} style={style.slide_img_style} alt="img2" />
        </div>
        <div style={style.each_slide}>
            <img src={slide_3} style={style.slide_img_style} alt="img3" />
        </div>
      </Slide>
    </div>
  );

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={style.toolbar}>
          <IconButton edge="start" style={style.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
            <Typography variant="h6" style={style.title}>
                FJU-FUN
            </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                style={style.acc_circle}
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>個人檔案</MenuItem>
                <MenuItem onClick={handleClose}>舉辦活動</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {Slideshow}
        <Typography variant="h5" style={style.text_title}>
            熱 門 活 動 /
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
                <Paper style={style.paper1}>
                    <img src={slide_1} style={style.img} alt="img1" />
                    <Typography variant="h6" style={style.text_in_paper}>
                         「#管他就跑我的」路跑
                    </Typography>
                    <hr />
                    <FontAwesomeIcon icon={faClock} style={style.awesomeicon} />
                    <Typography variant="h6" style={style.text_date}>
                         2020-03-22 (日)
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Paper style={style.paper2}>
                    <img src={slide_2} style={style.img} alt="img2" />
                    <Typography variant="h6" style={style.text_in_paper}>
                             世界巡迴演唱會-高雄場
                    </Typography>
                    <hr />
                    <FontAwesomeIcon icon={faClock} style={style.awesomeicon} />
                    <Typography variant="h6" style={style.text_date}>
                          2020-07-25 (六)
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Paper style={style.paper3}>
                    <img src={slide_3} style={style.img} alt="img3" />
                    <Typography variant="h6" style={style.text_in_paper}>
                            Pinkoi Experience | 質感體驗
                    </Typography>
                    <hr />
                    <FontAwesomeIcon icon={faClock} style={style.awesomeicon} />
                    <Typography variant="h6" style={style.text_date}>
                        2020-05-20 (六)
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    </div>
  );
}
