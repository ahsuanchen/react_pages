import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import React, { useState,useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import LeftBar from 'components/Profile/leftbar.jsx';
import Header from 'components/Header/PF_header.jsx';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
  div : {
      boxSizing : "border-box"
  } ,
  content: {
      margin: "2%",
      overflow: "visible"
  },
  left_menu: {
      display: "flex",
      justifyContent: "center",
  },
  root: {
    width: '5% auto',
  },
  container: {
    maxHeight: "100%",
  },
  space:{
    paddingTop:"2%",
    marginBottom:"2%",
    marginLeft:"1%",
  }
}));

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

export default function ActivityInfo() {
  //抓取此筆活動Id，利用Url ?之後的數字
  var activityId = window.location.href.substring(window.location.href.lastIndexOf("?")+1)

  console.log(activityId)

  const[member,setMember] = useState({});
  useEffect(() =>{
    async function fetchData(){

      const result = await axios.get("api/login/name")
      .then(result => {
        setMember(result.data);
        console.log(result.data);
      })

    }
    fetchData();
  },[]);

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

  const[feedbacks,setFeedbacks] = useState([{}]);
  useEffect(() =>{
    async function fetchData(){

      const result = await axios.get("api/feedback/activity/"+activityId)
      .then(result => {
        
        if(result.data.length == 0)
        {

        }
        else
        {
          setFeedbacks(result.data);
          console.log(result.data);
        }
        
      })

    }
    fetchData();
  },[]);




  const [value, setValue] = React.useState("0");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
let count = 0;
let sumPlace = 0;
let sumSchedule = 0;
let sumProcess = 0;
let sumContent = 0;
let sumStaff = 0;
let sumOverall = 0;

for(var i = 0 ; i < feedbacks.length ; i++)
{
  sumPlace = sumPlace + feedbacks[i].placeFeedback
  sumSchedule =sumSchedule + feedbacks[i].scheduleFeedback
  sumProcess =sumProcess + feedbacks[i].processFeedback
  sumContent =sumContent + feedbacks[i].contentFeedback
  sumStaff =sumStaff + feedbacks[i].staffFeedback
  sumOverall =sumOverall + feedbacks[i].overallFeedback
}





  return (
    <div className={classes.div}>
    <Header/>

    <div className={classes.left_menu}>
    <LeftBar/>

    <Container className={classes.content}>

     <div>
       <Typography variant="h4">
          活動回饋統計
       </Typography>
       <hr />
     </div>

     <Paper className={classes.root}>
     <Typography variant="h5" className={classes.space}>
        {act.activityName}
     </Typography>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
              <TableRow>
                <TableCell align="center" width = '8%'>編號</TableCell>
                <TableCell align="center" width = '10%'>活動場地滿意度</TableCell>
                <TableCell align="center" width = '10%'>活動時間安排滿意度</TableCell>
                <TableCell align="center" width = '10%'>活動流程滿意度</TableCell>
                <TableCell align="center" width = '10%'>活動內容滿意度</TableCell>
                <TableCell align="center" width = '10%'>工作人員(服務品質)</TableCell>
                <TableCell align="center" width = '10%'>整體滿意度</TableCell>
                <TableCell align="center" width = '32%'>活動建議</TableCell>
            </TableRow>
          </TableHead>

          {feedbacks.map(feedback =>
          <TableBody>
              <TableRow hover>
                  <TableCell align="center" >{count += 1}</TableCell>
                  <TableCell align="center">{feedback.placeFeedback}</TableCell>
                  <TableCell align="center">{feedback.scheduleFeedback}</TableCell>
                  <TableCell align="center">{feedback.processFeedback}</TableCell>
                  <TableCell align="center">{feedback.contentFeedback}</TableCell>
                  <TableCell align="center">{feedback.staffFeedback}</TableCell>
                  <TableCell align="center">{feedback.overallFeedback}</TableCell>
                  <TableCell align="center">{feedback.suggestFeedback}</TableCell>
              </TableRow>
          </TableBody>
          )}
          <TableHead>

              <TableRow >
                <TableCell align="center">平均</TableCell>
                <TableCell align="center">{sumPlace / count}</TableCell>
                <TableCell align="center">{sumSchedule / count}</TableCell>
                <TableCell align="center">{sumProcess / count}</TableCell>
                <TableCell align="center">{sumContent / count}</TableCell>
                <TableCell align="center">{sumStaff / count}</TableCell>
                <TableCell align="center">{sumOverall / count}</TableCell>
                <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </Paper>
      </Container>
    </div>
</div>
  );
}
