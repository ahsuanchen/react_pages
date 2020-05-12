//活動照片
import React , { useState, useEffect }from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Zmage from 'react-zmage';
import LeftBar from 'components/Profile/leftbar.jsx';

import Cat1 from 'assets/images/11.jpg';
import Cat2 from 'assets/images/12.jpg';
import Cat3 from 'assets/images/13.jpg';
import Cat4 from 'assets/images/14.jpg';
import Cat5 from 'assets/images/15.jpg';
import Cat6 from 'assets/images/16.jpg';
import Cat7 from 'assets/images/17.jpg';
import Cat8 from 'assets/images/18.jpg';
import Cat9 from 'assets/images/19.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    //width:"100%",
    margin: "2% 2%",
    overflow: "visible"
      //boxSizing: "border-box"
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  title: {
    'fontSize' : 20,
    'fontWeight' : 'bolder',
  },
  left_menu: {
      display: "flex",
      justifyContent: "space-around",
      minHeight: 800,
      color: "#000"
  },
  link: {
      textDecoration: "none",
      color: "#D0D0D0",
      '&:hover': {
          color: '#00AEAE'
      }
  },
  button: {
      background: 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)',
      color : "#fff" ,
      margin: "2% auto",
      display: "flex",
      justifyContent: "center",
  },
  container : {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  } ,

}));


const tileData =[
  {
    img:Cat1,
    title:'Image',

  },
  {
    img:Cat2,
    title:'Image',
  },
  {
    img:Cat3,
    title:'Image',
  },
  {
    img:Cat4,
    title:'Image',
  },
  {
    img:Cat5,
    title:'Image',
  },
  {
    img:Cat6,
    title:'Image',
  },
  {
    img:Cat7,
    title:'Image',
  },
  {
    img:Cat8,
    title:'Image',
  },
  {
    img:Cat9,
    title:'Image',
  },
];

export default function TestGridList(props) {
  var activityId = window.location.href.substring(window.location.href.lastIndexOf("?")+1)
  const classes = useStyles();

  const activityList = ['activityName'];
  //設定activity物件
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


  return (
     <div className={classes.left_menu}>
      <LeftBar/>
    <Container className={classes.root}>

      <Typography variant="h4">
         活動照片
      </Typography>
      <hr />

    <div className={classes.container}>
    <GridList cols={3} cellHeight={200} className={classes.gridList}>
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
    </Container>
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
