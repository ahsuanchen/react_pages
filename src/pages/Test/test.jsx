import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from 'components/Home/header.jsx';
import { makeStyles } from '@material-ui/core/styles';

import Homepage from 'components/Homepage/homepageBeforeLogin.jsx';
import Profile from 'components/Profile/profile.jsx';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
}));
export default function Test(props) {
  const classes = useStyles();
    return (
    <>

      <Profile/>
    </>
    );
}
