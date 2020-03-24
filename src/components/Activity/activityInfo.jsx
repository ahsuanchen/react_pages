
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import DateRangeIcon from '@material-ui/icons/DateRange';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ScheduleIcon from '@material-ui/icons/Schedule';
import React, { useState,useEffect } from 'react';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ActivityInfo() {

  const [act,setAct] = useState([]);

  const classes = useStyles();

  const activityList = ['activityName'];

  useEffect(() =>{
    async function fetchData(){
        const result = await axios.get('/activity/');
        setAct(result.data);
        //console.log(result.data);
      }
      fetchData();
  },[]);

  return (
    <Container maxWidth="md">
    <Typography variant="h5">&nbsp;
        台北設計電波
    </Typography>
    <List className={classes.root}>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <LocationOnIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="活動地點" secondary="Jan 7, 2014" />
    </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <DateRangeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="活動時間" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ScheduleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="報名時間" secondary="July 20, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LinkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="相關連結" secondary="July 20, 2014" />
      </ListItem>
    </List>
    </Container>
  );
}
