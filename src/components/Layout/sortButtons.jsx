import React from 'react';
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
    <div className={classes.root}>
      <span className={classes.title}>分類:</span>
      <Button classes={{root:classes.test}} variant="contained">
        Default
      </Button>
      <Button variant="contained" color="">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </div>
  );
}
