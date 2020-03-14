import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './header3.jsx';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    div : {
        boxSizing : "border-box"
    } ,
    left_menu : {
        display: "flex" ,
        justifyContent : "space-around" ,
        minHeight : 800 ,
        color : "#000"
    } ,
    left_container : {
        maxWidth : "280px" , 
        borderRight : "1px solid" ,
    } ,
    avatar : {
        minWidth : "150px" , 
        minHeight : "150px" ,
    } ,
    link : {
        textDecoration : "none" , 
        color : "#D0D0D0" ,
        '&:hover' : {
          color : '#00AEAE' 
        }
    } ,
    content : {
        margin : "2% 2%" ,
    } ,
    activity_part : {
        margin : "5% auto" ,
    } ,
    topic_part : {
        margin : "2%" ,
    } ,
    content_part : {
        margin : "2%" ,
        borderRight : "2px solid" ,
    } ,
    button_part : {
        margin : "auto 2%" ,
        display: "grid" ,
        justifyContent : "center" ,
    } ,
    button : {
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)' ,
        color : "#fff"
    } ,
    open_paper : {
        maxWidth : '500px' ,
        maxHeight : '600px' ,
        background : 'linear-gradient(160deg, #6C6C6C 10%, #E0E0E0 80%)' ,
        margin : "auto" ,
    } ,
  }));

export default function MenuAppBar() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div className={classes.div}>
            <Header />
            <div className={classes.left_menu}>
                <Container className={classes.left_container}>
                    <Typography variant="h5">
                            <Box lineHeight="normal" m={4}>
                                <Avatar className={classes.avatar} src="./img/profile.jpg" alt="user" />
                            </Box>
                            <Box lineHeight={2} m={1}>
                                王小明
                            </Box>
                            <Divider />    
                            <Link to="/profile" className={classes.link}>
                                <Box lineHeight={1} m={4}>
                                    個人檔案
                                </Box>
                            </Link>
                            <Link to="/trainingFace" className={classes.link}>
                                <Box lineHeight={1} m={4}>
                                    訓練人臉
                                </Box>
                            </Link>
                            <Link to="/signupSituation" className={classes.link}>
                                <Box lineHeight={1} m={4} color="#000">
                                    報名狀況
                                </Box>
                            </Link>
                            <Divider />
                            <Box lineHeight={3} m={1}>
                                王氏集團
                            </Box>
                            <Divider />
                            <Link to="/organizerInfo" className={classes.link}>
                                <Box lineHeight={1} m={4} >
                                    主辦單位資訊
                                </Box>
                            </Link>    
                            <Link to="/" className={classes.link}>
                                <Box lineHeight={1} m={4}>
                                    管理活動
                                </Box>
                            </Link>
                            <Divider />
                            <Link to="/" className={classes.link}>
                                <Box lineHeight={2} m={1}>
                                    我的相簿
                                </Box>
                            </Link>
                    </Typography>
                </Container>
                <Container className={classes.content}>
                    <div>
                        <Typography variant="h4">
                            報 名 狀 況
                        </Typography>
                        <hr />
                    </div>
                    <div className={classes.activity_part}>
                        <Box lineHeight="normal" m={1}>
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
                                    <Grid container spacing={5}>
                                        <Grid item xs={12}>
                                            <Paper>
                                                <Grid container>
                                                    <Grid item xs={3} className={classes.topic_part}>
                                                        <Typography variant="h5" >
                                                            三校六系聯合聖誕舞會
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={3} className={classes.topic_part}>
                                                        <Typography variant="h6">
                                                            <FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;
                                                            三創生活園區
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={3} className={classes.topic_part}>
                                                        <Typography variant="h6">
                                                            <FontAwesomeIcon icon={faClock} />&nbsp;
                                                            2020-12-23 (三)
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid container>
                                                    <Grid item xs={9} className={classes.content_part}>
                                                        <Typography>
                                                        「對岸的城堡，總是在黑夜中綻放動人的光芒，誰也不知道它的主人來自何方，
                                                        而耗之不盡的財富又源自何處？眾人只曉得，每當夜幕低垂，他壯觀的堡壘即聚滿了整個城市的活力......」
                                                        <br/>
                                                        「看著紙醉金迷、沈浸在歡愉喜樂當中的各方人士，
                                                        城堡的主人 — 蓋茲比，卻無法與他的客人們同樂⋯⋯」
                                                        <br/>
                                                        🚩12/23 星期三 晚上六點 我們在🔸三創生活園區🔸 繼續我們的未完待續...
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={2} className={classes.button_part}>
                                                        <Button
                                                            variant="contained"
                                                            className={classes.button}
                                                            component={Link}
                                                            to="/editSignupInformation"
                                                        >
                                                            更改資料
                                                        </Button>
                                                        <br />
                                                        <Button
                                                            variant="contained"
                                                            className={classes.button}
                                                            component={Link}
                                                            to="/"
                                                        >
                                                            取消報名
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Paper>
                                                <Grid container>
                                                    <Grid item xs={3} className={classes.topic_part}>
                                                        <Typography variant="h5">
                                                            臺北市政府跨年晚會
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={3} className={classes.topic_part}>
                                                        <Typography variant="h6">
                                                            <FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;
                                                            臺北市府前廣場
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={3} className={classes.topic_part}>
                                                        <Typography variant="h6">
                                                            <FontAwesomeIcon icon={faClock} />&nbsp;
                                                            2020-12-31 (四)
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid container>
                                                    <Grid item xs={9} className={classes.content_part}>
                                                        <Typography>
                                                        我們以「臺北」做發想，找出臺北獨有的特色，臺北本是個多元融合的城市，匯集了來自臺灣、世界各地擁有個性故事的人們，在臺北打拼生活、追逐夢想、壯志旅遊，無限想像、無限可能、無時無刻的事情都在發生，這就是臺北，是我們「混」大的地方。
                                                        <br/>
                                                        因此，臺北最High新年城-2020跨年晚會將以「混」為核心概念，將臺北「多元」特色帶出來，打破以往純粹歌手拼盤的演出形式，藉由跨界的mix、不同領域的crossover產生出新的內容！
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={2} className={classes.button_part}>
                                                        <Button
                                                            variant="contained"
                                                            className={classes.button}
                                                            component={Link}
                                                            to="/"
                                                        >
                                                            更改資料
                                                        </Button>
                                                        <br />
                                                        <Button
                                                            variant="contained"
                                                            className={classes.button}
                                                            component={Link}
                                                            to="/"
                                                        >
                                                            取消報名
                                                        </Button>
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
                                    <Grid container spacing={5}>
                                        <Grid item xs={12}>
                                            <Paper>
                                                <Grid container>
                                                    <Grid item xs={3} className={classes.topic_part}>
                                                        <Typography variant="h5">
                                                            星光夜跑 Just running
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={3} className={classes.topic_part}>
                                                        <Typography variant="h6">
                                                            <FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;
                                                            輔仁大學
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={3} className={classes.topic_part}>
                                                        <Typography variant="h6">
                                                            <FontAwesomeIcon icon={faClock} />&nbsp;
                                                            2019-12-20 (五)
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid container>
                                                    <Grid item xs={9} className={classes.content_part}>
                                                        <Typography>
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
                                                    <Grid item xs={2} className={classes.button_part}>
                                                        <Button
                                                            variant="contained"
                                                            className={classes.button}
                                                            component={Link}
                                                            to="/"
                                                        >
                                                            查看資訊
                                                        </Button>
                                                        <br />
                                                        <Button
                                                            variant="contained"
                                                            className={classes.button}
                                                            component={Link}
                                                            to="/"
                                                        >
                                                            查看照片
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Paper>
                                                <Grid container>
                                                    <Grid item xs={3} className={classes.topic_part}>
                                                        <Typography variant="h5">
                                                            李友廷小型演奏會
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={3} className={classes.topic_part}>
                                                        <Typography variant="h6">
                                                            <FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;
                                                            BonSpace 蹦空間
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={3} className={classes.topic_part}>
                                                        <Typography variant="h6">
                                                            <FontAwesomeIcon icon={faClock} />&nbsp;
                                                            2019-11-09 (六)
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid container>
                                                    <Grid item xs={9} className={classes.content_part}>
                                                        <Typography>
                                                        與生俱來的孤獨 聲嘶力竭 城市輕易的消化
                                                        <br/>
                                                        茫茫人海中 該怎麼證明自己值得存在 你會找到我嗎?
                                                        <br/>
                                                        從2012年在streetvoice上傳第一首作品《微風》波折至今，所有故事線終於彙成一個點，一張彈唱作互相耽誤矛盾又偏執的作品誕生。
                                                        <br/>
                                                        把每一個我 用最李友廷的方式唱給你聽。
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={2} className={classes.button_part}>
                                                        <Button
                                                            variant="contained"
                                                            className={classes.button}
                                                            component={Link}
                                                            to="/"
                                                        >
                                                            查看資訊
                                                        </Button>
                                                        <br />
                                                        <Button
                                                            variant="contained"
                                                            className={classes.button}
                                                            component={Link}
                                                            to="/"
                                                        >
                                                            查看照片
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Box>
                    </div>  
                </Container>
            </div>
        </div>
    );
}