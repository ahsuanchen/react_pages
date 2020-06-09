//我的照片
import React , { useState, useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LeftBar from 'components/Profile/leftbar.jsx';
import Zmage from 'react-zmage';
import Button from '@material-ui/core/Button';
import Header from 'components/Header/PF_header.jsx';
import WarningIcon from '@material-ui/icons/Warning';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  root: {
    margin: "2%",
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
  word : {
    fontFamily : "微軟正黑體"
  } ,
  left_menu: {
      display: "flex",
      justifyContent: "center",
  },
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

  async function refreshPage() {
    setTimeout(function(){
      window.location.reload();
  }, 500);

  }

  const handleClick=(event,pic) =>{

    console.log(pic.ainum);
    alert("感謝您的回報!");
    axios.delete("/api/photo/memberphoto/" + pic.ainum);
    refreshPage();  
  }

  return (
    <div className={classes.div}>
    <Header/>
     <div className={classes.left_menu}>
      <LeftBar/>
    <Container className={classes.root}>

      <Typography variant="h4" className={classes.word}>
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
                <GridListTileBar
                  title={pic.name}
                  titlePosition="top"
                  actionIcon={
                    <Tooltip title="這不是我!" className={classes.word}>
                    <IconButton
                      className={classes.icon}
                      onClick={((e) => handleClick(e,pic))}>
                    <WarningIcon/>
                    </IconButton>
                    </Tooltip>
                  }
                  actionPosition="left"
                  className={classes.titleBar}/>
                </GridListTile>
                //<img key = {pic.id} src = {URL.createObjectURL(pic)} alt ="no pic " width="30%" height="30%"></img>
        })
      }
      </GridList>
      </div>
    </Container>
</div>
</div>
  );
}
  {/*return (
     <div className={classes.left_menu}>
     <LeftBar/>
         <Container className={classes.content}>
         <div>
           <Typography variant="h4" className={classes.word}>
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
        <GridListTile className={classes.word} cols={1} key={tile}>
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
