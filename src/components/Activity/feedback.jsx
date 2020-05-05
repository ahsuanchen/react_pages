import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Button from '@material-ui/core/Button';
import React, { useState,useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Box from '@material-ui/core/Box';
import LeftBar from 'components/Profile/leftbar.jsx';


const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    maxWidth : "1080px" ,
  },
  cardroot:{
    maxWidth:500,
  },
  content: {
      margin: "2% 2%",
      overflow: "visible"
  },
  left_menu: {
      display: "flex",
      justifyContent: "space-around",
      minHeight: 800,
      color: "#000"
  },
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

  const[feedback,setFeedback] = useState({});
  useEffect(() =>{
    async function fetchData(){

      const result = await axios.get("api/login/name")
      .then(result => {
        setFeedback(result.data);
        console.log(result.data);
      })

    }
    fetchData();
  },[]);

const [activity_Id,setActivity_Id] = useState("");
const [placeFeedback,setPlaceFeedback] = useState("");
const [scheduleFeedback,setScheduleFeedback] = useState("");
const [processFeedback,setProcessFeedback] = useState("");
const [contentFeedback,setContentFeedback] = useState("");
const [staffFeedback,setStaffFeedback] = useState("");
const [overallFeedback,setOverallFeedback] = useState("");
const [suggestFeedback,setSuggestFeedback] = useState("");

    console.log(member);
    //將要顯示的欄位利用物件導向的方式從activity中抓出 Ex{act.activityName} = activity的名稱
    //如資料庫中有照片路徑的話，可把src="assets/images/1.jpg" 改成 src = {act.activityCover}

    const [value, setValue] = React.useState("0");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) =>{

    alert("感謝您的建議!");

    const Feedback =
    {
      activity_Id : act.activityId,
      placeFeedback : feedback.placeFeedback,
      scheduleFeedback : feedback.scheduleFeedback,
      processFeedback : feedback.processFeedback,
      contentFeedback : feedback.contentFeedback,
      staffFeedback : feedback.staffFeedback,
      overallFeedback : feedback.overallFeedback,
      suggestFeedback : feedback.suggestFeedback,
    }

    console.log(Feedback);
    axios.post("api/feedback/",Feedback)
    .then( res => {
      console.log("ok");

    }).catch(function(error)
  {
    console.log(error);
  });


  };

  return (
    <div className={classes.left_menu}>
    <LeftBar/>
    <Container className={classes.content}>
     <div>
       <Typography variant="h4">
          活動回饋單
       </Typography>
       <hr />
     </div>
      <Card className={classes.cardroot}>
        <CardContent>
        <Typography>
          活動名稱:{act.activityName}
        </Typography>
          <br/>

          <Typography>
            滿意度調查:
          </Typography>

            <Box component="fieldset" borderColor="transparent">

              <Typography component="legend">活動場地</Typography>
              <Rating
                name="place"
                defaultValue={5}
                getLabelText={(value) => customIcons[value].label}
                IconContainerComponent={IconContainer}
              />

              <Typography component="legend">活動時間安排</Typography>
              <Rating
                name="schedule"
                defaultValue={5}
                getLabelText={(value) => customIcons[value].label}
                IconContainerComponent={IconContainer}
              />

              <Typography component="legend">活動流程</Typography>
              <Rating
                name="process"
                defaultValue={5}
                getLabelText={(value) => customIcons[value].label}
                IconContainerComponent={IconContainer}
              />

              <Typography component="legend">活動內容</Typography>
              <Rating
                name="content"
                defaultValue={5}
                getLabelText={(value) => customIcons[value].label}
                IconContainerComponent={IconContainer}
              />

              <Typography component="legend">工作人員(服務品質)</Typography>
              <Rating
                name="staff"
                defaultValue={5}
                getLabelText={(value) => customIcons[value].label}
                IconContainerComponent={IconContainer}
              />

                <Typography component="legend">活動整體滿意度</Typography>
                <Rating name="overall" defaultValue={5} max={5} />
            </Box>

            <Typography>
              其他建議:
            </Typography>
            <TextField
              name="registrationRemark"
              style={{minWidth:"100%"}}
              id="outlined-multiline-static"
              multiline
              rows={4}
              variant="outlined"/>
        </CardContent>
        <CardActions align="center">
          <Button onClick={handleSubmit} variant="contained" color="secondary">確定</Button>
        </CardActions>
      </Card>
      </Container>
    </div>

  );
}
