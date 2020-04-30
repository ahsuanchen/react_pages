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
    <div className={classes.div}>
     <div className={classes.left_menu}>
         <Container className={classes.left_container}>
             <Typography variant="h5">
                 <Box lineHeight="normal" m={4}>
                     <Avatar className={classes.avatar} src="./img/profile.jpg" alt="user" />
                 </Box>
                 <Box lineHeight={2} m={1}>
                     {member.memberName}
                 </Box>
                 <Divider />
                 <Link to="/profile" className={classes.link}>
                     <Box lineHeight={1} m={4}>
                         個人檔案
                     </Box>
                 </Link>
                 <Link to="/trainingFace" className={classes.link}>
                     <Box lineHeight={1} m={4}>
                         訓練人臉
                         </Box>
                 </Link>
                 <Link to="/signupSituation" className={classes.link}>
                     <Box lineHeight={1} m={4}>
                         報名狀況
                         </Box>
                 </Link>
                 <Divider />
                 <Box lineHeight={3} m={1}>
                     {organizer.organizerName}
                 </Box>
                 <Divider />
                 <Link to="/organizerInfo" className={classes.link}>
                     <Box lineHeight={1} m={4} >
                         主辦單位資訊
                         </Box>
                 </Link>
                 <Link to="/manageActivity" className={classes.link}>
                     <Box lineHeight={1} m={4}>
                         管理活動
                         </Box>
                 </Link>
                 <Divider />
                 <Link to="/MyAlbum" className={classes.link}>
                     <Box lineHeight={2} m={1}>
                         我的相簿
                     </Box>
                 </Link>
                 <Link to="/ActivityAlbum" className={classes.link}>
                     <Box lineHeight={2} m={1} color="#000">
                         活動相簿
                     </Box>
                 </Link>
             </Typography>
         </Container>

    <Container className={classes.content}>
    <div>
      <Typography variant="h4">
         活動相簿 > 活動照片
          </Typography>
      <hr />
    </div>

    <div>
    <form>
      <GridList cols={3} cellHeight={200} className={classes.gridList}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ListSubheader component="div" className={classes.title}>
          活動照片
          </ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
        <GridListTile cols={1} key={tile}>
           <Zmage src={tile.img} alt={tile} />
        </GridListTile>))}
      </GridList>
      </form>
      </div>
    </Container>
    </div>
    </div>
  );
}
