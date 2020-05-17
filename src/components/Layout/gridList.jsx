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
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  gridList: {
    width: "100%",
    height: "100%",
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  title: {
    'fontSize' : '18px',
    'fontWeight' : 'bolder',
  }
}));

export default function TestGridList(props) {
  const classes = useStyles();


  //設定一個陣列，裡面是裝activity物件
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
  );
}
