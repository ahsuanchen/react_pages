import axios from 'axios';
import React , { useState,useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Image from 'assets/images/1.jpg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  test: {
    'backgroundColor':'#9ed8a4',
    'color':'white',
  },
  title: {
    'fontSize' : '18px',
    'fontWeight' : 'bolder',
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  gridTitle: {
    'fontSize' : '18px',
    'fontWeight' : 'bolder',
  }
}));

export default function SortButtons() {
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

  return (
    <div className={classes.root} >
      <span className={classes.title}>分類:</span>
      <Button classes={{root:classes.test}} variant="contained">
        全部
      </Button>
      <Button classes={{root:classes.test}} variant="contained">
        學習
      </Button>
      <Button classes={{root:classes.test}} variant="contained">
        藝文
      </Button>
      <Button classes={{root:classes.test}} variant="contained">
        親子
      </Button>
      <Button classes={{root:classes.test}} variant="contained">
        體驗
      </Button>
      <Button classes={{root:classes.test}} variant="contained">
        休閒
      </Button>
      <Button classes={{root:classes.test}} variant="contained">
        運動
      </Button>
      <Button classes={{root:classes.test}} variant="contained">
        戶外
      </Button>
      <Button classes={{root:classes.test}} variant="contained">
        講座
      </Button>
      <Button classes={{root:classes.test}} variant="contained">
        資訊
      </Button>

    <div>
      {/*
      利用迴圈(act.map)來把所有的活動資訊都顯示出來
      要顯示的各欄位都用act.xxxx來呼叫
      */}
      <GridList cols={3} cellHeight={200} className={classes.gridList}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ListSubheader component="div" className={classes.act}>
          全部活動
          </ListSubheader>
        </GridListTile>
        {act.map(actt =>  (
        <GridListTile cols={1} key={actt.activityId}>
        <img src={actt.activityCover} alt={actt.activityCover}/>
      <GridListTileBar title={actt.activityName} subtitle={<span> {actt.activitySummary}</span>} actionIcon={
        <IconButton aria-label={`info about ${actt.activitySummary}`} className={classes.icon} component={Link} to={"/ActivityInformation?"+actt.activityId}>
          <InfoIcon/>
        </IconButton>}/>
      </GridListTile>))}
      </GridList>
    </div>
    
    </div>
  );
}
