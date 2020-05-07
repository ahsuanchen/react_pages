//活動總覽
import axios from 'axios';
import React, { useState,useEffect } from 'react';
import HomeTextField from 'components/Layout/homeTextField.jsx';
import SortButtons from 'components/Layout/sortButtons.jsx';
import TagButtons from 'components/Layout/tagButtons.jsx';
import GridList from 'components/Layout/gridList.jsx';
import Header from 'components/Header/PF_header.jsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    maxWidth : "1080px" ,
    margin : "2% auto" ,
  },
}));
export default function Home(props) {
  const classes = useStyles();

  return (
    <>
      <Header/>
      <Grid container direction="column" className={classes.root}>
        <HomeTextField />
        <SortButtons />
        <GridList />
      </Grid>
      </>

  );
}
//<Container maxWidth="md">
