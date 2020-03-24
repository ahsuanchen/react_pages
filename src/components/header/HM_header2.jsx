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
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import { faHome , faTasks , faQuestionCircle , faEnvelope, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Fab from '@material-ui/core/Fab';

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
    leftbar: theme.mixins.toolbar,
    list: {
      width: "220px" ,
    } ,
    link : {
      textDecoration : "none" , 
      color : "#9D9D9D" ,
      '&:hover' : {
        color : '#00AEAE' 
      }
    } ,
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
            <AppBar className={classes.appbar}>
                <Toolbar className={classes.toolbar}>
                    <IconButton 
                        edge="start"
                        color="inherit" 
                        onClick={toggleDrawer('left', true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        FJU-FUN
                    </Typography>
                    <IconButton 
                        edge="start"
                        color="inherit"
                        component={Link}
                        to="/profile"
                    >
                      <Tooltip title="個人檔案">
                        <Avatar src="./img/profile.jpg" alt="user" />
                      </Tooltip>
                    </IconButton>
                    <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                      {sideList('left')}
                    </Drawer>
                </Toolbar>
            </AppBar>
        </div>
    );
}