import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles(theme => ({
    appbar: {
        position : "static" ,
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)' ,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)" ,
    } ,
    button : {
        fontSize : '25px' 
    }
  }));

export default function MenuAppBar() {
    const classes = useStyles();

    return (
        <div>
            <AppBar className={classes.appbar}>
                <Toolbar>
                    <Button 
                         edge="start"
                        color="inherit"
                        className={classes.button}
                        component={Link}
                        to="/homepageAfterLogin"
                    >
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} />&nbsp;
                        <Typography variant="h6">
                            返 回 首 頁
                        </Typography>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}