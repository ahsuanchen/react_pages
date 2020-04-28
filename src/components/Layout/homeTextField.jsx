import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from '@material-ui/core/Button';
import { faClock , faSearch , faPlus} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import Tooltip from '@material-ui/core/Tooltip';
import Inputt from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
   '& > *': {
     margin: theme.spacing(1),
   },
 },
  title: {
    'fontSize' : '18px',
    'fontWeight' : 'bolder',
  },

}));

export default function HomeTextField(props) {
  const classes = useStyles();

  return (

    <div>

        <form className={classes.root} noValidate autoComplete="off" color="secondary">
          <span className={classes.title}>搜尋:</span>
          <Inputt placeholder="輸入活動名稱" inputProps={{ 'aria-label': 'description' }} />

          <IconButton color="primary" aria-label="upload picture" component="span">
            <SearchIcon />
          </IconButton>

        </form>
    </div>


  );
}
{/*<div className = {classes.margin}>
  <span className = {classes.title}>搜尋:</span>
      <Input id = "input" placeholder="輸入活動名稱"/>
</div>*/}
