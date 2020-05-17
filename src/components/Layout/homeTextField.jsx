import axios from 'axios';
import React,{ useState,useEffect } from 'react';
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
import { Link ,useHistory } from 'react-router-dom';
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

  const [act,setAct] = useState([{}]);
  useEffect(() =>{
    async function fetchData(){
        const result = await axios.get('/api/activity/');
        setAct(result.data);
        //獲取資料

      }
      fetchData();
  },[]);

  console.log(act);

  const [searchResult , setSearchResult] = useState("");

  let history = useHistory();
  const SendSearchResult = event =>
  {
      if (searchResult === "")
      {
          alert("您未輸入任何東西");
      }
      else
      {
          localStorage.setItem('searchResult' , searchResult);
          history.push({
              pathname: "/searchInfo",
          });
      }
  }

  return (

    <div>

        <form className={classes.root} noValidate autoComplete="off" color="secondary">
          <span className={classes.title}>搜尋:</span>
          <Inputt placeholder="輸入活動名稱"
          inputProps={ {'aria-label': 'description'} } 
          value={searchResult}
          onChange={e=>setSearchResult(e.target.value)}
          />

          <IconButton color="primary" aria-label="upload picture" component="submit" onClick={SendSearchResult}>
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
