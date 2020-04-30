import axios from 'axios';
import React , { useState,useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth : "1080px" ,
    margin : "2% auto" ,

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  var activityId = window.location.href.substring(window.location.href.lastIndexOf("?")+1)

  console.log(activityId);

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const activityContent = ['activityContent'];

  const [content,setContent] = useState({});
  useEffect(() =>{
    async function fetchData(){
      //將抓取到的id拿去資料庫中查詢
        const url = '/api/activity/' + activityId ;
        const result = await axios.get(url);
        setContent(result.data);
        console.log(result.data);
        //抓取資料並將資料Set給上面設定好的activity物件
        //act = result.data;
        //console.log(act);
      }
      fetchData();
  },[]);

  return (

    <Card className={classes.root}>
      <CardContent>
        <Typography  className={classes.title} color="textSecondary" gutterBottom>
          活動介紹
        </Typography>
        <Typography variant="body2" component="p">
          {content.activityInfo}
        </Typography>
        <br/>

        <Typography  className={classes.title} color="textSecondary" gutterBottom>
          更多資訊
        </Typography>
        <Typography variant="body2" component="p">
          {content.activityMoreContent}
        </Typography>
        <br/>
        <Typography  className={classes.title} color="textSecondary" gutterBottom>
          注意事項
        </Typography>
        <Typography variant="body2" component="p">
          {content.activityPrecautions}
        </Typography>
      </CardContent>
    </Card>

  );
}
