import React from 'react';
import Header from 'components/Home/header.jsx';
import GridList from 'components/Layout/gridList.jsx';
import HomeTextField from 'components/Layout/homeTextField.jsx';
import SortButtons from 'components/Layout/sortButtons.jsx';
import TagButtons from 'components/Layout/tagButtons.jsx';
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
  },
}));

export default function News(props) {
  const classes = useStyles();
    return (

      <Container maxWidth="md">
        <Grid container direction="column" className={classes.root}>
          <HomeTextField/>
          <SortButtons/>
          <TagButtons/>

        </Grid>
      </Container>

    );
}
