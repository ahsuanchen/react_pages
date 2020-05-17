//我的相簿
import React , { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Link , useHistory} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
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
  left_container: {
      maxWidth: "280px",
      borderRight: "1px solid",
  },
  avatar: {
      minWidth: "150px",
      minHeight: "150px",
  },
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
  img: {
      margin: "2% 0",
      minWidth: '150px',
      maxHeight: '200px'
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
                          if(err.response.status === 403)
                          {
                              alert("您的權限不足!");
                              goHomePage();
                          }
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
    <Header/>
     <div className={classes.left_menu}>
     <LeftBar/>
    <Container className={classes.content}>
      <div>
        <Typography variant="h4">
           我的相簿
        </Typography>
        <hr />
      </div>

      <div className={classes.container}>
      <GridList cols={3} cellHeight={200} className={classes.gridList}>
      {registration.map( registration=>
          (new Date(registration.activity.activityEndDate).getTime() <= now) ?

              <GridListTile cols={1} key={registration.activity.activityId}>
                <img src={registration.activity.activityCover} alt={registration.activity.activityCover} />
              <GridListTileBar title={registration.activity.activityName} subtitle={<span> {registration.activity.activitySummary}</span>} actionIcon={
              <IconButton aria-label={`info about ${registration.activity.activitySummary}`} className={classes.icon} component={Link} to={"/MyPhoto?"+registration.activity.activityId}>
                <InfoIcon/>
              </IconButton>}/>
              </GridListTile>
              :null)}
        </GridList>
      </div>
    </Container>
    </div>
    </div>
  );
  }
{/*
  return (
   <div className={classes.left_menu}>
    <LeftBar/>
        <Container className={classes.content}>
        <div>
          <Typography variant="h4" className={classes.word}>
             我的相簿
              </Typography>
          <hr />
        </div>
        <div>
      <form>

      <GridList cols={3} cellHeight={200} className={classes.gridList}>
        {imageList.map(tile => (
        <GridListTile cols={1} key={tile}>
          <img src={`/assets/images/${tile}.jpg`} alt={tile} />
        <GridListTileBar className={classes.word} title={tile.title} subtitle={<span>by: {tile.author}</span>} actionIcon={
          <IconButton aria-label={`info about ${tile.title}`} className={classes.icon} component={Link} to="/MyPhoto">
            <InfoIcon/>
          </IconButton>}/>
        </GridListTile>))}
      </GridList>
      </form>
      </div>
    </Container>
</div>
  );
}
  */}
