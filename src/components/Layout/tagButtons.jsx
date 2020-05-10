import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  title: {
    'fontSize' : '18px',
    'fontWeight' : 'bolder',
  },
  size: {
    width:900,
  }
}));

export default function TagButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.title}>標籤:</span>
      <Button>Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button href="#text-buttons" color="primary">
        Link
      </Button>
    </div>
  );
}
