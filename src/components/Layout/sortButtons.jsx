import axios from 'axios';
import React , { useState,useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
  }
}));

export default function SortButtons() {
  const classes = useStyles();

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
    </div>
  );
}
