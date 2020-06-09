//活動總覽
import axios from 'axios';
import React , { useState,useEffect } from 'react';
import HomeTextField from 'components/Layout/homeTextField.jsx';
import SortButtons from 'components/Layout/sortButtons.jsx';
import TagButtons from 'components/Layout/tagButtons.jsx';
import GridList from 'components/Layout/gridList.jsx';
import Header1 from 'components/Header/HM_header1.jsx';
import Header2 from 'components/Header/HM_header2.jsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import BottomBar from 'components/Homepage/bottomBar.jsx';

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
  const [member , setMember] = useState([]);
  useEffect(() => {
    async function fetchData() {
            let url = "/api/login/name"
            await axios.get(url)
            .then(result => {
                setMember(result.data);
            })
            .catch(err => {
                console.log(err.response.status);
            })
    }
    fetchData();
  }, []);

  return (
    <>
      {member.memberEmail === undefined ?
        <Header1/>
        :
        <Header2/> 
      }
      <Grid container direction="column" className={classes.root}>
        <HomeTextField />
        <SortButtons />
        <GridList />
      </Grid>
      <br/>
      <BottomBar/>
      </>

  );
}
//<Container maxWidth="md">
