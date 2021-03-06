//活動照片
import React , { useState, useEffect }from 'react';
import ReactPlayer from 'react-player'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Zmage from 'react-zmage';
import LeftBar from 'components/Profile/leftbar.jsx';
import Header from '../Header/PF_header.jsx';
import WarningIcon from '@material-ui/icons/Warning';
import IconButton from '@material-ui/core/IconButton';
import Video from 'components/Album/video.jsx';

const useStyles = makeStyles(theme => ({
  div : {
      boxSizing : "border-box"
  } ,
  root: {
    //width:"100%",
    margin: "2%",
    overflow: "visible"
      //boxSizing: "border-box"
  },react_player :{
    position: 'absolute',
    top: 0,
    left: 0,
    },
    
  gridList: {
    width: "100%",
    height: "100%",
  },
  left_menu: {
      display: "flex",
      justifyContent: "center",
  } ,
  word : {
    fontFamily : "微軟正黑體"
  } ,
  container : {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  } ,
  icon: {
    color: 'white',
  },
  titleBar: {
    background:
    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },

  video : {
    display: 'flex',
    marginTop:'2%',
    //flexWrap: 'wrap',
  } ,
}));

export default function TestGridList(props) {
  var activityId = window.location.href.substring(window.location.href.lastIndexOf("?")+1)
  const classes = useStyles();

  const [act,setAct] = useState({});
  useEffect(() =>{
    async function fetchData(){
      //將抓取到的id拿去資料庫中查詢
        const url = '/api/activity/' + activityId ;
        const result = await axios.get(url);
        setAct(result.data);
        console.log(result.data);
        //抓取資料並將資料Set給上面設定好的activity物件
        //act = result.data;
        //console.log(act);
      }
      fetchData();
  },[]);

  {/*const [act,setAct] = useState([{}]);
  useEffect(() =>{
    async function fetchData(){
        const result = await axios.get('/api/activity/');
        setAct(result.data);
        //獲取資料
      }
      fetchData();
  },[]);*/}

  const[photo , setPhoto] = useState([]);
  useEffect(() => {
      async function fetchPhoto() {
              const result = await axios.get("/api/photo/activityPhoto/"+activityId)
              setPhoto(result.data);
              console.log(result.data);
      }
      fetchPhoto();
  }, []);

  const[video , setVideo] = useState([]);
  useEffect(() => {
      async function fetchVideo() {
              const result = await axios.get("/api/photo/video/"+activityId)
              setVideo(result.data);
              console.log(result.data);
      }
      fetchVideo();
  }, []);

  async function refreshPage() {
    setTimeout(function(){
      window.location.reload();
  }, 500);

  }

  return (
  <div className={classes.div}>
    <Header/>
    <div className={classes.left_menu}>
      <LeftBar/>
      <Container className={classes.root}>

          <Typography variant="h4" className={classes.word}>
            活動照片
          </Typography>
          <hr />

          <div className={classes.container}>
          <GridList cols={3}  className={classes.gridList}>
          <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
            <ListSubheader component="div">{act.activityName}</ListSubheader>
          </GridListTile>
            {[...photo].map(pic => {
              return  <GridListTile cols={1} key={pic.photoId}>
                      <Zmage key = {pic.photoId} src = {pic.photoId} alt ="no pic " width="250px"/>
                      </GridListTile>
                      //<img key = {pic.id} src = {URL.createObjectURL(pic)} alt ="no pic " width="30%" height="30%"></img>
              })
            }
            </GridList>

        </div>

        {/* 影片 */}
<br/><br/><br/>
        <Typography variant="h4" className={classes.word}>
            活動影片
          </Typography>
          <hr />

        <div className={classes.video}>

        
          <GridList cols={3}  className={classes.gridList}>
          
            {[...video].map(vid => {
              return  <GridListTile cols={1.5} key={vid.videoId} align = "center" >
                      <ReactPlayer
                        className={classes.react_player}
                        //url='https://youtu.be/68ir9IR-vDA'
                        url={vid.videoId}
                        align = "center"
                        width="500px"
                        height="100%"
                        
                        controls={true}
                      />
                      </GridListTile>
                      //<img key = {pic.id} src = {URL.createObjectURL(pic)} alt ="no pic " width="30%" height="30%"></img>
              })
            }
            </GridList>

        

        {/* <ListSubheader component="div">活動影片</ListSubheader>
         <GridList cols={3}  className={classes.gridList}>
          <GridListTile key="Subheader" cols={0} style={{ height: 'auto' }}>
            <ListSubheader component="div">活動影片</ListSubheader>
          </GridListTile>
          
          </GridList> */}
          
          
        

      
          
         

        </div>
      </Container>
    </div>
  </div>
  );
}
{/*
  <GridList cols={3} cellHeight={200} className={classes.gridList}>
    <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
      <ListSubheader component="div" className={classes.title}>
      {act.activityName}
      </ListSubheader>
    </GridListTile>
    {tileData.map(tile => (
    <GridListTile cols={1} key={tile}>
       <Zmage width="250px" src={tile.img} alt={tile} />
    </GridListTile>))}
  </GridList>
  */}
