import React from './node_modules/react';
import { makeStyles } from './node_modules/@material-ui/core/styles';
import { Link } from './node_modules/react-router-dom';
import AppBar from './node_modules/@material-ui/core/AppBar';
import Toolbar from './node_modules/@material-ui/core/Toolbar';
import Typography from './node_modules/@material-ui/core/Typography';
import Button from './node_modules/@material-ui/core/Button';
import { faArrowAltCircleLeft } from "./node_modules/@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "./node_modules/@fortawesome/react-fontawesome"

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
                        to="/signupSituation"
                    >
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} />&nbsp;
                        <Typography variant="h6">
                            返 回 上 一 頁
                        </Typography>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}