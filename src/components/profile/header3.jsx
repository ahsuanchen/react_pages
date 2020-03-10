import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { faHome , faTasks , faQuestionCircle , faEnvelope , } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles(theme => ({
    div : {
        boxSizing : "border-box" ,
    } ,
    appbar: {
        position : "static" ,
        color : "#000" ,
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)' ,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)" ,
    } ,
    toolbar : {
        maxWidth: "1080px" ,
        width : "100%" ,
        margin : "0 auto" ,
        display: "flex" ,
        justifyContent : "space-between"
    } ,
    leftbar: theme.mixins.toolbar ,
    list: {
      width: "220px" ,
    } ,
    img : {
      width: "50px" ,
      height: "64px" ,
    } ,
    link : {
      textDecoration : "none" , 
      color : "#9D9D9D" ,
      '&:hover' : {
        color : '#00AEAE' 
      }
    }
  }));

export default function MenuAppBar() {
    const classes = useStyles();

    const [state, setState] = React.useState({
      left: false,
    });
  
    const toggleDrawer = (side, open) => event => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setState({ ...state, [side]: open });
    };

    const sideList = side => (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}
      >
        <div className={classes.leftbar}>
          <Box lineHeight={1} m={2} >
            <Link className={classes.link} to="/homepageAfterLogin" >F J U F U N</Link>
          </Box>
        </div>
        <Divider/>
        <List>
            <ListItem component={Link} to="/homepageAfterLogin" button>
              <ListItemIcon>
                <FontAwesomeIcon icon={faHome} />
              </ListItemIcon>
              <ListItemText primary="首頁" />
            </ListItem>
            <Divider/>
            <ListItem component={Link} to="/profile" button>
              <ListItemIcon>
                <FontAwesomeIcon icon={faTasks} />
              </ListItemIcon>
              <ListItemText primary="活動總覽" />
            </ListItem>
            <Divider/>
            <ListItem component={Link} to="/" button>
              <ListItemIcon>
                <FontAwesomeIcon icon={faQuestionCircle} />
              </ListItemIcon>
              <ListItemText primary="常見問題" />
            </ListItem>
            <Divider/>
            <ListItem component={Link} to="/" button>
              <ListItemIcon>
                <FontAwesomeIcon icon={faEnvelope} />
              </ListItemIcon>
              <ListItemText primary="聯絡我們" />
            </ListItem>
        </List>
      </div>
    );

    return (
        <div className={classes.div}>
            <AppBar>
                <Toolbar style={style.toolbar}>
                    <Button 
                        edge="start"
                        style={style.back_button} 
                        color="inherit"
                        display="none"
                        component={Link}
                        to="/homepageAfterLogin"
                    >
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} style={style.awesomeicon} />
                        <Typography variant="h6" style={style.title}>
                            返 回 首 頁
                        </Typography>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}