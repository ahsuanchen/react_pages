import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  title: {
    'fontSize' : '18px',
    'fontWeight' : 'bolder',
  }
}));

export default function HomeTextField(props) {
  const classes = useStyles();

  return (
    <div className = {classes.margin}>
      {/*<Grid container spacing={1} alignItems="flex-end">*/}
      <span className = {classes.title}>搜尋:</span>
        {/*<Grid item>*/}
          <Input id = "input" placeholder="輸入活動名稱"/>
        {/*</Grid>
      </Grid>*/}
    </div>
  );
}
