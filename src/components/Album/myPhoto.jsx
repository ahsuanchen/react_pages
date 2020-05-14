//我的照片
import React , { useState, useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Image from 'assets/images/1.jpg';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import LeftBar from 'components/Profile/leftbar.jsx';
import Zmage from 'react-zmage';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    width:"100%",
    margin: "2% 2%",
    overflow: "visible"
      //boxSizing: "border-box"
  },
  div: {
      boxSizing: "border-box"
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
      margin: "2% 2%",
      overflow: "visible"
  },
  img: {
      margin: "2% 0",
      minWidth: '150px',
      maxHeight: '200px'
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
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function TestGridList(props) {
  var activityId = window.location.href.substring(window.location.href.lastIndexOf("?")+1)
  const classes = useStyles();

  //設定activity物件
  const [act,setAct] = useState({});
  useEffect(() =>{
    async function fetchData(){
      //將抓取到的id拿去資料庫中查詢
        const url = '/api/activity/' + activityId ;
        axios.get(url)
        .then(result => {
          setAct(result.data);
          console.log(result.data);
          const urll = '/api/login/name/';
          axios.get(urll)
          .then(res => {
            setMember(res.data);
            axios.get("/api/photo/memberPhoto/"+res.data.memberEmail+"/"+ activityId)
            .then(resultt => {
              setPhoto(resultt.data);
              console.log(resultt.data);
            })
            .catch(err => {
              console.log(err);
            })

          })
          .catch(err =>{
            console.log(err);
          })
        })
        .catch(err =>{
          console.log(err);
        })



        //抓取資料並將資料Set給上面設定好的activity物件
        //act = result.data;
        //console.log(act);
      }
      fetchData();
  },[]);
const[photo , setPhoto] = useState([]);
  const[member,setMember] = useState({});
  useEffect(() =>{
    async function fetch(){


    }
  })


  // useEffect(() => {
  //     async function fetchPhoto() {
  //             const resultt = await axios.get("/api/photo/memberPhoto/"+member.memberEmail+"/"+ activityId);
  //             setPhoto(resultt.data);
  //             console.log(resultt.data);
  //     }
  //     fetchPhoto();
  // }, []);



  return (
     <div className={classes.left_menu}>
      <LeftBar/>
    <Container className={classes.root}>

      <Typography variant="h4">
         我的照片
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
  {/*return (
     <div className={classes.left_menu}>
     <LeftBar/>
         <Container className={classes.content}>
         <div>
           <Typography variant="h4">
              我的相簿 > 我的照片
           </Typography>
           <hr />
         </div>
         <div>
       <form>
      <GridList cols={3} cellHeight={200} className={classes.gridList}>
        {/*}<GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ListSubheader component="div" className={classes.title}>
          我的照片
          </ListSubheader>
        </GridListTile>}
        {imageList.map(tile => (
        <GridListTile cols={1} key={tile}>
          <img src={`/assets/images/${tile}.jpg`} alt={tile} />
        </GridListTile>))}
      </GridList>
      </form>
      </div>
    </Container>
    </div>
  );
}
*/}
