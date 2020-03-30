
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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { useState,useEffect } from 'react';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    maxWidth : "1080px" ,
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
    <>
    <Table align = "center" style = {{width : "85%"}}>
      <TableHead>
          <TableRow>
            <TableCell colSpan={2}><Typography variant="h5">台北設計電波</Typography></TableCell>
          </TableRow>
      </TableHead>
      <TableBody>
        <TableRow >
          <TableCell style={{width: '40%'}} rowSpan={5}><img src="assets/images/1.jpg" width="700"/></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LocationOnIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="活動地點" secondary="Jan 7, 2014" />
              </ListItem>
            </List>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <DateRangeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="活動時間" secondary="Jan 9, 2014" />
              </ListItem>
            </List>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ScheduleIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="報名時間" secondary="July 20, 2014" />
              </ListItem>
            </List>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LinkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="相關連結" secondary="July 20, 2014" />
              </ListItem>
           </List>
         </TableCell>
      </TableRow>
    </TableBody>
    </Table>
    </>
  );
}
