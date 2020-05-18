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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Header from 'components/Header/PF_header.jsx';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    maxWidth : "1080px" ,
  },
  cardroot:{
    maxWidth:500,
  } ,
  word : {
    fontFamily : "微軟正黑體"
  } ,
}));

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
  const [isSignup,setIsSignUp] = useState("");
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

  useEffect(() =>{
    async function fetchisSignUp() {
      const urll = '/api/registration/ifSignUp/' + activityId;
      const res = await axios.get(urll);
      setIsSignUp(res.data);

      console.log(res.data)

    }
    fetchisSignUp();
  },[]);

const [member_Email,setMember_Email] = useState("");
const [activity_Id,setActivity_Id] = useState("");
const [registrationRemark,setRegistrationRemark] = useState("");
const [registrationMeal,setRegistrationMeal] = useState("");

    console.log(member);
    //將要顯示的欄位利用物件導向的方式從activity中抓出 Ex{act.activityName} = activity的名稱
    //如資料庫中有照片路徑的話，可把src="assets/images/1.jpg" 改成 src = {act.activityCover}

    const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) =>{

    alert("報名成功");

    const Registration =
    {
      member_Email : member.memberEmail,
      activity_Id : act.activityId,
      registrationRemark :registrationRemark,
      registrationMeal : registrationMeal
    }

    console.log(Registration);
    axios.post("/api/registration/",Registration)
    .then( res => {
      console.log("ok");

    }).catch(function(error)
  {
    console.log(error);
  });


  };

  return (
    <>
      <Table align = "center" style = {{width : "85%"}}>
        <TableBody>
          <TableRow >
            <TableCell style={{width: '40%'}} rowSpan={2}>
              <img src={act.activityCover} width = "500"/>
              <Typography variant="h6" gutterBottom>{act.activityName}</Typography>
              <Typography gutterBottom className={classes.word}>活動報名時間:</Typography>
              <Typography gutterBottom>{act.startSignUpDateString}到{act.endSignUpDateString} </Typography>
              <Typography gutterBottom className={classes.word}>活動時間:</Typography>
              <Typography gutterBottom>{act.activityStartDateString}到{act.activityEndDateString}</Typography>
              <Typography gutterBottom className={classes.word}>活動地點:</Typography>
              <Typography gutterBottom>{act.activitySpace}</Typography>
              <Typography gutterBottom className={classes.word}>參加人數:</Typography>
              <Typography gutterBottom>{act.attendPeople}</Typography>
              <Typography gutterBottom className={classes.word}>相關連結:</Typography>
              <Typography gutterBottom>{act.activityLink}</Typography>

            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
                <Typography variant="h6" className={classes.word}>確認參加者資料</Typography>
                <Card className={classes.cardroot}>
      <CardContent>
        <Typography className={classes.word}>
          姓名:
        </Typography>
        <TextField style={{minWidth:"100%"}} value={member.memberName}
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}/>
        <Typography className={classes.word}>
          電子郵件:
        </Typography>
        <TextField style={{minWidth:"100%"}} value={member.memberEmail}
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}/>
          <Typography className={classes.word}>
            行動電話:
          </Typography>
        <TextField style={{minWidth:"100%"}} value={member.memberPhone}
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}/>
          <Typography className={classes.word}>
            {(act.activityMeal==1)?"餐點:":null}
          </Typography>
          {(act.activityMeal==1)?
            <FormControl component="fieldset">
              <RadioGroup aria-label="meal" name="registrationMeal" value={registrationMeal} onChange={e=>setRegistrationMeal(e.target.value)}>
              <FormControlLabel value="2" control={<Radio />} label="葷食" />
              <FormControlLabel value="1" control={<Radio />} label="素食" />
              <FormControlLabel value="0" control={<Radio />} label="不需要" />
          </RadioGroup>
          </FormControl> : null
          }
          <Typography className={classes.word}>
            備註:
          </Typography>
          <TextField
            name="registrationRemark"
            style={{minWidth:"100%"}}
            id="outlined-multiline-static"
            multiline
            rows={4}
            variant="outlined"
            onChange={e=>setRegistrationRemark(e.target.value)}/>
          <Typography gutterBottom className={classes.word}>{(act.activityMeal==1)?null:"*此活動不提供餐點*"}</Typography>
      </CardContent>
      <CardActions align="center">
        {(isSignup =="ok")?
        <Button onClick={handleSubmit} variant="contained" color="secondary" className={classes.word}>確定報名</Button>
        :
        <Button className={classes.word} variant="contained" color="secondary" disabled>無法報名</Button>}
      </CardActions>
    </Card>
           </TableCell>
        </TableRow>
      </TableBody>
      </Table>
      </>

  );
}
