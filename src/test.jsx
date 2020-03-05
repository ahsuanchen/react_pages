import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { faArrowAltCircleLeft, faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const style = {
    toolbar : {
        width : '97%' ,
        height : '50px' ,
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)' ,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
    } ,
    back_button : {
        marginRight : '5px' ,
    } ,
    title : {
        marginLeft : '20px' ,
    } ,
    line1 : {
        position : 'absolute' ,
        left : '4%' ,
        top : '23%'
    } ,
    line2 : {
        position : 'absolute' ,
        left : '4%' ,
        top : '58.5%'
    } ,
    line3 : {
        position : 'absolute' ,
        left : '16%' ,
    } ,
    text_leftside : {
        position : 'absolute',
        top : '15%' ,
        left : '3%' ,
        color : '#D0D0D0'
    } ,
    text_title : {
        position : 'absolute',
        top : '14%' ,
        left : '20%' ,
    } ,
    box : {
        position : 'absolute',
        top : '25%' ,
        left : '20%' ,
        width : "1000px"
    } ,
    paper : {
        width : "950px" ,
        height : '220px' ,
        borderRadius : '10px' ,
    } ,
    container : {
        marginTop : "10px"
    } ,
    line_first : {
        position : 'absolute' ,
        top : "18%" ,
        marginLeft : "50px"
    } ,
    line_second : {
        position : 'absolute' ,
        top : "61%" ,
        marginLeft : "50px"
    } ,
    button : {
        position : 'absolute',
        marginLeft : "20px"
    }
}

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    }
  }));

  export default function Trainingpage() {
    const classes = useStyles();

    const preventDefault = event => event.preventDefault();

    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar style={style.toolbar}>
                    <Button 
                        edge="start"
                        style={style.back_button} 
                        color="inherit"
                        display="none" 
                        // onClick={}
                    >
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} style={style.awesomeicon} />
                        <Typography variant="h6" style={style.title}>
                            返 回 首 頁
                        </Typography>
                    </Button>
                </Toolbar>
            </AppBar>
            <div>
                <Typography variant="h5" style={style.text_leftside}>
                    <Box lineHeight="normal" m={1}>
                        王小明
                    </Box>
                    <Link href="#" onClick={preventDefault} style={{color : "#D0D0D0"}}>
                        <Box lineHeight={1} m={4}>
                            個人檔案
                        </Box>
                    </Link>
                    <Link href="#" onClick={preventDefault} style={{color : '#D0D0D0'}}>
                        <Box lineHeight={1} m={4}>
                            訓練人臉
                        </Box>
                    </Link>
                    <Link href="#" onClick={preventDefault} style={{color : '#000000'}}>
                        <Box lineHeight={1} m={4}>
                            報名狀況
                        </Box>
                    </Link>
                    <Box lineHeight={3} m={1}>
                        王氏集團
                    </Box>
                    <Link href="#" onClick={preventDefault} style={{color : '#D0D0D0'}}>
                        <Box lineHeight={1} m={4}>
                            主辦單位資訊
                        </Box>
                    </Link>    
                    <Link href="#" onClick={preventDefault} style={{color : '#D0D0D0'}}>
                        <Box lineHeight={1} m={4}>
                            管理活動
                        </Box>
                    </Link>
                    <Link href="#" onClick={preventDefault} style={{color : '#D0D0D0'}}>
                        <Box lineHeight={3} m={1}>
                            我的相簿
                        </Box>
                    </Link>
                </Typography>
                <div style={style.line1}>
                    <hr width="1" size="145" color="#6C6C6C" />
                </div>
                <div style={style.line2}>
                    <hr width="1" size="95" color="#6C6C6C" />
                </div>
                <div style={style.line3}>
                    <hr width="1" size="1300" color="#E0E0E0" />
                </div>
            </div>
            <div>
                <Typography variant="h4" style={style.text_title}>
                    報 名 狀 況
                    <hr width="1010" />
                </Typography>
                <Box lineHeight="normal" m={1} style={style.box}>
                    <ExpansionPanel defaultExpanded>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1c-content"
                            id="panel1c-header"
                        >
                        <div>
                            <Typography variant="h6">
                                已報名
                            </Typography>
                        </div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Paper style={style.paper}>
                                        <Grid container>
                                            <Grid item xs={4} sm={4}>
                                                <Typography variant="h5" style={{marginLeft : "25px" , marginTop : "25px"}}>
                                                    聖誕舞會
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography variant="h6" style={{marginTop : "25px"}}>
                                                    <FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;
                                                    三創生活園區
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography variant="h6" style={{marginTop : "25px"}}>
                                                    <FontAwesomeIcon icon={faClock} />&nbsp;
                                                    2020-12-23 (三)
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container style={style.container}>
                                            <Grid item xs={9} >
                                                <Typography style={{marginLeft : "25px" , marginTop : "10px"}}>
                                                「對岸的城堡，總是在黑夜中綻放動人的光芒，誰也不知道它的主人來自何方，
                                                而耗之不盡的財富又源自何處？眾人只曉得，每當夜幕低垂，他壯觀的堡壘即聚滿了整個城市的活力......」
                                                <br/>
                                                「看著紙醉金迷、沈浸在歡愉喜樂當中的各方人士，
                                                城堡的主人 — 蓋茲比，卻無法與他的客人們同樂⋯⋯」
                                                <br/>
                                                🚩12/23 星期三 晚上六點 我們在🔸三創生活園區🔸 繼續我們的未完待續...
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={1} sm={1}>
                                                <div style={style.line_first}>
                                                    <hr width="1" size="180" color="#000000" />
                                                </div>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <div style={style.button}>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        style={{background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)'}}
                                                    >
                                                        更改資料
                                                    </Button>
                                                    <br /><br /><br />
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        style={{background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)'}}
                                                    >
                                                        取消報名
                                                    </Button>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12}>
                                    <Paper style={style.paper}>
                                        <Grid container>
                                            <Grid item xs={4} sm={4}>
                                                <Typography variant="h5" style={{marginLeft : "25px" , marginTop : "30px"}}>
                                                    臺北市政府跨年晚會
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography variant="h6" style={{marginTop : "30px"}}>
                                                    <FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;
                                                    臺北市府前廣場
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography variant="h6" style={{marginTop : "30px"}}>
                                                    <FontAwesomeIcon icon={faClock} />&nbsp;
                                                    2020-12-31 (四)
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container style={style.container}>
                                            <Grid item xs={9} >
                                                <Typography style={{marginLeft : "25px" , marginTop : "10px"}}>
                                                我們以「臺北」做發想，找出臺北獨有的特色，臺北本是個多元融合的城市，匯集了來自臺灣、世界各地擁有個性故事的人們，在臺北打拼生活、追逐夢想、壯志旅遊，無限想像、無限可能、無時無刻的事情都在發生，這就是臺北，是我們「混」大的地方。
                                                <br/>
                                                因此，臺北最High新年城-2020跨年晚會將以「混」為核心概念，將臺北「多元」特色帶出來，打破以往純粹歌手拼盤的演出形式，藉由跨界的mix、不同領域的crossover產生出新的內容！
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={1} sm={1}>
                                                <div style={style.line_second}>
                                                    <hr width="1" size="180" color="#000000" />
                                                </div>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <div style={style.button}>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        style={{background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)'}}
                                                    >
                                                        更改資料
                                                    </Button>
                                                    <br /><br /><br />
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        style={{background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)'}}
                                                    >
                                                        取消報名
                                                    </Button>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel defaultExpanded>
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                        >
                        <div>
                            <Typography variant="h6">
                                已結束
                            </Typography>
                        </div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Paper style={style.paper}>
                                        <Grid container>
                                            <Grid item xs={4} sm={4}>
                                                <Typography variant="h5" style={{marginLeft : "25px" , marginTop : "30px"}}>
                                                    星光夜跑 Just running
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography variant="h6" style={{marginTop : "30px"}}>
                                                    <FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;
                                                    輔仁大學
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography variant="h6" style={{marginTop : "30px"}}>
                                                    <FontAwesomeIcon icon={faClock} />&nbsp;
                                                    2019-12-20 (五)
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container style={style.container}>
                                            <Grid item xs={9} >
                                                <Typography style={{marginLeft : "25px" , marginTop : "10px"}}>
                                                    報名時間：108年11月16日(六)~12月7日(六)17：00 報名截止！
                                                    <br/>
                                                    活動日期：108年12月20日(星期五) 晚上17:30~21:00
                                                    <br/>
                                                    活動地點：本校校園      參加對象：本校教職員工生
                                                    <br/>
                                                    人數限制：名額上限總計2200人
                                                    <br/>
                                                    參賽組別：
                                                    一、教職員工組  二、學生甲組  三、學生乙組
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={1} sm={1}>
                                                <div style={style.line_first}>
                                                    <hr width="1" size="180" color="#000000" />
                                                </div>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <div style={style.button}>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        style={{background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)'}}
                                                    >
                                                        查看資訊
                                                    </Button>
                                                    <br /><br /><br />
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        style={{background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)'}}
                                                    >
                                                        查看照片
                                                    </Button>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12}>
                                    <Paper style={style.paper}>
                                        <Grid container>
                                            <Grid item xs={4} sm={4}>
                                                <Typography variant="h5" style={{marginLeft : "25px" , marginTop : "30px"}}>
                                                    李友廷小型演奏會
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography variant="h6" style={{marginTop : "30px"}}>
                                                    <FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;
                                                    BonSpace 蹦空間
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography variant="h6" style={{marginTop : "30px"}}>
                                                    <FontAwesomeIcon icon={faClock} />&nbsp;
                                                    2019-11-09 (六)
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container style={style.container}>
                                            <Grid item xs={9} >
                                                <Typography style={{marginLeft : "25px" , marginTop : "10px"}}>
                                                與生俱來的孤獨 聲嘶力竭 城市輕易的消化
                                                <br/>
                                                茫茫人海中 該怎麼證明自己值得存在 你會找到我嗎?
                                                <br/>
                                                從2012年在streetvoice上傳第一首作品《微風》波折至今，所有故事線終於彙成一個點，一張彈唱作互相耽誤矛盾又偏執的作品誕生。
                                                <br/>
                                                把每一個我 用最李友廷的方式唱給你聽。
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={1} sm={1}>
                                                <div style={style.line_second}>
                                                    <hr width="1" size="180" color="#000000" />
                                                </div>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <div style={style.button}>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        style={{background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)'}}
                                                    >
                                                        查看資訊
                                                    </Button>
                                                    <br /><br /><br />
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        style={{background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)'}}
                                                    >
                                                        查看照片
                                                    </Button>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Box>
            </div>
        </div>
    );
  }