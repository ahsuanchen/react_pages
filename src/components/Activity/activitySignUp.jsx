import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import React, { useState,useEffect } from 'react';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    maxWidth : "1080px" ,
  },
  fab: {
    position : "fixed" ,
    opacity: "0.8" ,
    bottom : "5%" ,
    right : "5%" ,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function ActivityInfo() {
  //抓取此筆活動Id，利用Url ?之後的數字
  var activityId = window.location.href.substring(window.location.href.lastIndexOf("?")+1)

  console.log(activityId)



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
        console.log(result.data);
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

    console.log(act);
    //將要顯示的欄位利用物件導向的方式從activity中抓出 Ex{act.activityName} = activity的名稱
    //如資料庫中有照片路徑的話，可把src="assets/images/1.jpg" 改成 src = {act.activityCover}
  return (
    <>
      <Table align = "center" style = {{width : "85%"}}>
        <TableBody>
          <TableRow >
            <TableCell style={{width: '40%'}} rowSpan={2}>
              <img src="assets/images/1.jpg" width = "400"/>
              <Typography variant="h6" gutterBottom>台北設計展</Typography>
              <Typography gutterBottom>活動報名截止時間:</Typography>
              <Typography gutterBottom>202020202020</Typography>
              <Typography gutterBottom>活動時間:</Typography>
              <Typography gutterBottom>202020202020</Typography>
              <Typography gutterBottom>活動地點:</Typography>
              <Typography gutterBottom>輔大</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
                <Typography variant="h6" gutterBottom>確認參加者資料</Typography>
                <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" component="h2">
          姓名:
        </Typography>
        <TextField style={{minWidth:"100%"}} defaultValue="鄭貝蒂" />
        <Typography variant="h6" component="h2">
          電子郵件:
        </Typography>
        <TextField style={{minWidth:"100%"}} defaultValue="bobo22588337@yahoo.com.tw" />
        <Typography variant="h6" component="h2">
          行動電話:
        </Typography>
        <TextField style={{minWidth:"100%"}} defaultValue="0933035809" />
      </CardContent>
      <CardActions>
        <Button variant="contained" color="secondary">確定報名</Button>
      </CardActions>
    </Card>
           </TableCell>
        </TableRow>
      </TableBody>
      </Table>
      </>

  );
}
