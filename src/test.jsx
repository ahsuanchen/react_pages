import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
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
import InputBase from '@material-ui/core/InputBase';
import slide_1 from '../src/image/1.jpg';
import slide_2 from '../src/image/2.jpg';
import slide_3 from '../src/image/3.jpg';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { faClock, faHome, faTasks, faUserAlt, faCalendarPlus, faQuestionCircle, faEnvelope, faSearch } from "@fortawesome/free-solid-svg-icons";
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
    leftside_menu : {
      top : "7.5%" ,
      left : '10px'
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
    searchbar : {
      position : 'absolute',
      background : "linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)" ,
      borderRadius : "5px" ,
      width : '35%',
      top : '72.5%' ,
      left : '32.5%' ,
      fontSize : '22px'
    } ,
    search_button : {
      height : '50px',
      left : '45%' ,
      
      borderRadius : "0px 5px 5px 0px" ,
      background : "rgba(0, 0, 0, 0.4)" ,
      color : "#fff" ,
      fontSize : '16px'
    } ,
    text_title : {
        position : 'absolute',
        top : '82.5%' ,
        left : '5%' ,
    } ,
    img : {
        width : '350px' ,
        height : '200px' ,
        borderRadius : '10px 10px 0px 0px'
    } ,
    text_in_paper : {
        marginLeft : '10px' ,
        color : '#000000' ,
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
        height : '330px' ,
        position : 'absolute',
        top : '92.5%' ,
        left : '5%' ,
        borderRadius : '10px' ,
        padding : '5' ,
        color : 'inherit'
    } ,
    paper2 : {
        width : '350px' ,
        height : '330px' ,
        position : 'absolute',
        top : '92.5%' ,
        left : '35%' ,
        borderRadius : '10px' ,
        padding : '5' ,
        color : 'inherit'
    } ,
    paper3 : {
        width : '350px' ,
        height : '330px' ,
        position : 'absolute',
        top : '92.5%' ,
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

const preventDefault = event => event.preventDefault();

const Slideshow = (
    <div style={style.slideimage}>
      <Slide {...properties}>
        <div style={style.each_slide}>
            <Link href="#" onClick={preventDefault}>
                <img src={slide_1} style={style.slide_img_style} alt="img1" />
            </Link>
        </div>
        <div style={style.each_slide}>
            <Link href="#" onClick={preventDefault}>
                <img src={slide_2} style={style.slide_img_style} alt="img2" />
            </Link>
        </div>
        <div style={style.each_slide}>
            <Link href="#" onClick={preventDefault}>
                <img src={slide_3} style={style.slide_img_style} alt="img3" />
            </Link>
        </div>
      </Slide>
    </div>
  );

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    }
  }));

  export default function MenuAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
      };
    
    const handleClose = () => {
        setAnchorEl(null);
      };

    const leftside_menuid = "menu";
    const leftside_menu = (
        <Menu
            id={leftside_menuid}
            anchorEl={anchorEl}
            style={style.leftside_menu}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>
              <FontAwesomeIcon icon={faHome} />
              &nbsp;&nbsp;首頁
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <FontAwesomeIcon icon={faTasks} />
              &nbsp;&nbsp;活動總覽
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <FontAwesomeIcon icon={faUserAlt} />
              &nbsp;&nbsp;個人資訊
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <FontAwesomeIcon icon={faCalendarPlus} />
              &nbsp;&nbsp;建立活動
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <FontAwesomeIcon icon={faQuestionCircle} />
              &nbsp;&nbsp;常見問題
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <FontAwesomeIcon icon={faEnvelope} />
              &nbsp;&nbsp;聯絡我們
            </MenuItem>
        </Menu>
    );

    return(
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar style={style.toolbar}>
                <IconButton 
                  edge="start"
                  style={style.menubutton} 
                  color="inherit" 
                  aria-controls={leftside_menuid}
                  onClick={handleClick}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={style.title}>
                  FJU-FUN
                </Typography>
                <Button style={style.loginbutton} color="inherit">Log in</Button>
            </Toolbar>
          </AppBar>
          {leftside_menu}
          {Slideshow}
            <Box lineHeight="normal" m={1} style={style.searchbar}>
              &nbsp;<FontAwesomeIcon icon={faSearch} />&nbsp;
              <InputBase
                placeholder="搜尋你感興趣的活動"
                inputProps={{ 'aria-label': 'search' }}
              />
              <Button style={style.search_button}>搜尋</Button>
            </Box>
          <Typography variant="h5" style={style.text_title}>
            熱 門 活 動 /
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
                <Link href="#" onClick={preventDefault}>
                    <Paper style={style.paper1}>
                        <img src={slide_1} style={style.img} alt="img1" />
                        <Typography variant="h6" style={style.text_in_paper}>
                            「#管他就跑我的」路跑
                        </Typography>
                        <hr color="#E0E0E0" />
                        <Box lineHeight="normal" m={1}>
                            <Typography variant="h6" style={style.text_date}>
                                <FontAwesomeIcon icon={faClock} style={style.awesomeicon} />
                                &nbsp; 2020-03-22 (日)
                            </Typography>
                        </Box>
                        <hr color="#E0E0E0" />
                        <Box lineHeight={1} m={1}>
                          <Link href="#" onClick={preventDefault}>#running </Link>
                          <Link href="#" onClick={preventDefault}>#marathon </Link>
                        </Box>
                    </Paper>
                </Link>  
            </Grid>
            <Grid item xs={6} sm={3}>
                <Link href="#" onClick={preventDefault}>
                    <Paper style={style.paper2}>
                        <img src={slide_2} style={style.img} alt="img2" />
                        <Typography variant="h6" style={style.text_in_paper}>
                            世界巡迴演唱會-高雄場
                        </Typography>
                        <hr color="#E0E0E0" />
                        <Box lineHeight="normal" m={1}>
                            <Typography variant="h6" style={style.text_date}>
                                <FontAwesomeIcon icon={faClock} style={style.awesomeicon} />
                                &nbsp; 2020-07-25 (六)
                            </Typography>
                        </Box>
                        <hr color="#E0E0E0" />
                        <Box lineHeight={1} m={1}>
                          <Link href="#" onClick={preventDefault}>#singer </Link>
                          <Link href="#" onClick={preventDefault}>#concert </Link>
                        </Box>
                    </Paper>
                </Link>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Link href="#" onClick={preventDefault}>
                    <Paper style={style.paper3}>
                        <img src={slide_3} style={style.img} alt="img3" />
                        <Typography variant="h6" style={style.text_in_paper}>
                            Pinkoi Experience | 質感體驗
                        </Typography>
                        <hr color="#E0E0E0" />
                        <Box lineHeight="normal" m={1}>
                            <Typography variant="h6" style={style.text_date}>
                                <FontAwesomeIcon icon={faClock} style={style.awesomeicon} />
                                &nbsp; 2020-05-20 (六)
                            </Typography>
                        </Box>
                        <hr color="#E0E0E0" />
                        <Box lineHeight={1} m={1}>
                          <Link href="#" onClick={preventDefault}>#fashion </Link>
                          <Link href="#" onClick={preventDefault}>#experience </Link>
                        </Box>
                    </Paper>
                </Link>
            </Grid>
        </Grid>
        </div>
    );
  }