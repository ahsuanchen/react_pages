//活動相簿

import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Image from 'assets/images/1.jpg';
import { Link , useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import LeftBar from 'components/Profile/leftbar.jsx';
import Header from 'components/Header/PF_header.jsx';


const useStyles = makeStyles(theme => ({
  div: {
      boxSizing: "border-box"
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
  left_menu: {
      display: "flex",
      justifyContent: "space-around",
      minHeight: 800,
      color: "#000"
  },
  word : {
    fontFamily : "微軟正黑體"
  } ,
  link: {
      textDecoration: "none",
      color: "#D0D0D0",
      '&:hover': {
          color: '#00AEAE'
      }
  },
  content: {
      margin: "2%",
      overflow: "visible"
  },
  container : {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  } ,
}));

export default function TestGridList(props) {
  var activityId = window.location.href.substring(window.location.href.lastIndexOf("?")+1)

  const classes = useStyles();

  const[member,setMember] = useState({});
  useEffect(() =>{
    async function fetchData(){

      const result = await axios.get("api/login/name")
      .then(result => {
        setMember(result.data);
        console.log(result.data);
      })

    }
    fetchData();
  },[]);

      let history = useHistory();
      function goSignin()
      {
          history.push("/signin");
      }

      function goHomePage()
      {
          history.push("/");
      }

  const [registration, setRegistration] = useState([]);
  useEffect(() => {
      async function fetchDataReg() {
              let url = "/api/login/name"
              await axios.get(url)
              .then(result => {
                  if(result.data.toString().startsWith("<!DOCTYPE html>"))
                  {
                      alert("您尚未登入，請先登入！")
                      goSignin();
                  }
                  else
                  {
                      axios.get("/api/registration/member/" + result.data.memberEmail)
                      .then(result => {
                          setRegistration(result.data);
                          console.log(result);
                      })
                      .catch(err => {
                          console.log(err.response.status);
                      })
                  }
              })
              .catch(err => {
                  console.log(err.response.status);
                  if(err.response.status === 403)
                  {
                      alert("您的權限不足!");
                      goHomePage();
                  }
              })
      }
      fetchDataReg();
  }, []);



  const now = new Date().getTime();

  return (
    <div className={classes.div}>
        <Header />
     <div className={classes.left_menu}>
     <LeftBar/>
    <Container className={classes.content}>
      <div>
        <Typography variant="h4" className={classes.word}>
           活動相簿
        </Typography>
        <hr />
      </div>

      <div>
      <form>
      <GridList cols={3} cellHeight={200} className={classes.gridList}>
        {registration.map(actt =>  (
        <GridListTile cols={1} key={actt.activityId}>
          <img src={actt.activityCover} alt={actt.activityCover} />
        <GridListTileBar className={classes.word} title={actt.activityName} subtitle={<span> {actt.activitySummary}</span>} actionIcon={
          <IconButton aria-label={`info about ${actt.activitySummary}`} className={classes.icon} component={Link} to={"/ActivityPhoto?"+actt.activityId}>
            <InfoIcon/>
          </IconButton>}/>
        </GridListTile>))}
      </GridList>
      </form>
      </div>
    </Container>
    </div>
    </div>
  );
}

{/*
  <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
    <ListSubheader component="div" className={classes.title}>
    活動相簿
    </ListSubheader>
  </GridListTile>

  const [registration,setRegistration] = useState([{}]);
  useEffect(() =>{
    async function fetchData(){
        const result = await axios.get('/api/registration/member'+memberEmail);
        setRegistration(result.data);
        //獲取資料

      }
      fetchData();
  },[]);

  */}
