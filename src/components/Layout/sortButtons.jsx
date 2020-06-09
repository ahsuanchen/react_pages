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
      <span className={classes.title}>類別:</span>
      <Button classes={{root:classes.test}} variant="contained">
        全部
      </Button>
      <Button classes={{root:classes.test}} variant="contained">
        學術
      </Button>
      <Button classes={{root:classes.test}} variant="contained">
        資訊
      </Button>
      <Button classes={{root:classes.test}} variant="contained">
        體驗
      </Button>
      <Button classes={{root:classes.test}} variant="contained">
        講座
      </Button>
      <Button classes={{root:classes.test}} variant="contained">
        休閒
      </Button>
      <Button classes={{root:classes.test}} variant="contained">
        親子
      </Button>
      <Button classes={{root:classes.test}} variant="contained">
        藝文
      </Button>
      <Button classes={{root:classes.test}} variant="contained">
        運動
      </Button>
      <Button classes={{root:classes.test}} variant="contained">
        戶外
      </Button>
      <Button classes={{root:classes.test}} variant="contained">
        美食
      </Button>
      <Button classes={{root:classes.test}} variant="contained">
        遊戲
      </Button>
      <Button classes={{root:classes.test}} variant="contained">
        其他
      </Button>

    </div>
  );
}
