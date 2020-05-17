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

const useStyles = makeStyles(theme => ({
  div: {
      boxSizing: "border-box"
  },
  gridList: {
    width: 900,
    height: 500,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  title: {
    'fontSize' : 20,
    'fontWeight' : 'bolder',
  },
  word : {
    fontFamily : "微軟正黑體"
  } ,
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
  }
}));


const imageList = [1,2,3,4,5];


export default function TestGridList(props) {
  const classes = useStyles();

  const [member, setMember] = useState([]);
  useEffect(() => {
      async function fetchDataMem() {
              const result = await axios.get("/api/member/actforfun@gmail.com")
              setMember(result.data);
              console.log(result);
      }
      fetchDataMem();
  }, []);

  const [organizer, setOrganizer] = useState([]);
  // const organizerList = ['organizerName' , 'organizerEmail' , 'organizerPhone' ,'organizerAddress' , 'organizerInfo'];
  useEffect(() => {
      async function fetchDataOrg() {
              const result = await axios.get("/api/organizer/actforfun@gmail.com");
              setOrganizer(result.data);
              // .then(res => {
              //     setMember(res.data)
              //     console.log(res)
              // }).catch(err => {
              //     console.log(err)
              // })
      }
      fetchDataOrg();
  }, []);

  return (
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
        </GridListTile>*/}
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
