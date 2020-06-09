
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
import Fab from '@material-ui/core/Fab';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    Width : "90%" ,
  },
  fab: {
    position : "fixed" ,
    bottom : "5%" ,
    right : "5%" ,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  word : {
    fontFamily : "微軟正黑體"
  } ,
}));

export default function ActivityInfo() {
  //抓取此筆活動Id，利用Url ?之後的數字
  var activityId = window.location.href.substring(window.location.href.lastIndexOf("?")+1);
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


  const classes = useStyles();

  const activityList = ['activityName'];
  //設定activity物件
  const [act,setAct] = useState({});
  useEffect(() =>{
    async function fetchData(){
      //將抓取到的id拿去資料庫中查詢
        const url = '/api/activity/' + activityId ;
        const result = await axios.get(url);
        setAct(result.data);
        // console.log(result.data);
        //抓取資料並將資料Set給上面設定好的activity物件
        //act = result.data;
        //console.log(act);
      }
      fetchData();
  },[]);

{/* <>
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
    </> */}

    // console.log(act);
    //將要顯示的欄位利用物件導向的方式從activity中抓出 Ex{act.activityName} = activity的名稱
    //如資料庫中有照片路徑的話，可把src="assets/images/1.jpg" 改成 src = {act.activityCover}
  return (
    <>
      <Table align = "center" style = {{width : "85%"}}>
        <TableHead>
            <TableRow>
              <TableCell colSpan={2}>
                <Typography variant="h5" className={classes.word}>
                  {act.activityName}
                </Typography>
              </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          <TableRow >
            <TableCell style={{width: '40%'}} rowSpan={5}>
              <img src={act.activityCover} width = "700"/>
            </TableCell>
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
                  <ListItemText primary="活動地點" secondary={act.activitySpace} />
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
                  <ListItemText primary="活動時間" secondary={act.activityStartDateString + " ~ " +act.activityEndDateString}/>
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
                  <ListItemText primary="報名時間" secondary={act.startSignUpDateString + " ~ " + act.endSignUpDateString } />
                </ListItem>
              </List>
            </TableCell>
          </TableRow>
         

      </TableBody>
      </Table>
      {member.memberEmail === undefined ? ""
      :
      <div className={classes.fab}>
        <Fab
          className={classes.word}
          variant="extended"
          size="medium"
          color="secondary"
          component={Link}
          to={"/activitySignUp?" +act.activityId}
        >
          <PersonAddIcon className={classes.extendedIcon} />
          我要報名!
        </Fab>
      </div>
      }

      </>

  );
}
