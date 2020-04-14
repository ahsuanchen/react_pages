import React from 'react';
import Header from '../Header/HM_header2.jsx';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    div : {
        boxSizing : "border-box" ,
    } ,
    container : {
        maxWidth : "1080px" ,
        margin : "2% auto" ,
    } ,
    search: {
        margin : "2% auto" ,
        display: "flex" ,
        justifyContent : "center" ,
    } ,
    search_bar : {
        margin : "auto" ,
        borderRadius : "10px" ,
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)' ,
    } ,
    inputBase : {
        minWidth : "1010px" ,
        padding : "5px 20px" ,
    } ,
  }));

const Searchdata = [
    {
        src : 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
        title : '臺北市政府跨年晚會',
        organizer : '王氏股份有限公司',
        createdAt : 'A week ago',
        content : '臺北最High新年城-2020跨年晚會將以「混」為核心概念，將臺北「多元」特色帶出來，打破以往純粹歌手拼盤的演出形式，藉由跨界的mix、不同領域的crossover產生出新的內容！'
    },
    {
        src : 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
        title : '臺北市政府跨年晚會',
        organizer : '王氏股份有限公司',
        createdAt : 'A week ago',
        content : '臺北最High新年城-2020跨年晚會將以「混」為核心概念，將臺北「多元」特色帶出來，打破以往純粹歌手拼盤的演出形式，藉由跨界的mix、不同領域的crossover產生出新的內容！'
    },
    {
        src : 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
        title : '臺北市政府跨年晚會',
        organizer : '王氏股份有限公司',
        createdAt : 'A week ago',
        content : '臺北最High新年城-2020跨年晚會將以「混」為核心概念，將臺北「多元」特色帶出來，打破以往純粹歌手拼盤的演出形式，藉由跨界的mix、不同領域的crossover產生出新的內容！'
    }
];

const SearchOrganizerdata = [
    {
        src : 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
        organizer : '王氏股份有限公司',
        activitycount : "30 Activities" ,
        createdAt : 'Created 1 year ago',
        content : '本主辦單位之目標旨在讓使用者能應用資訊科技解決組織的管理問題，因此，除資訊科技與管理理論之傳授外，整合二者於資訊管理與資訊系統之課程更為本主辦單位之重心。'
    },
];

function SearchResult(props) { 
    return (
        <Grid container spacing={3}>
            {Searchdata.map(Searchdata =>           
            <Grid item xs={12}>
                    <div>
                        <Container>
                                <img 
                                    src={Searchdata.src}
                                    title={Searchdata.title}
                                    style={{width : 225 , height : 135 , float : "left" , marginRight : "2%"}}
                                />
                                <Box lineHeight="normal">
                                    <Typography gutterBottom variant="h6" title={Searchdata.title}>
                                        {Searchdata.title}
                                    </Typography>
                                    <Link 
                                        to="/homepageAfterLogin"
                                        style={{
                                            textDecoration : "none" , 
                                            color : "#ADADAD" , 
                                            "&:hover" : {
                                                color : "#00AEAE"
                                            }
                                        }}
                                        title={Searchdata.organizer}
                                    >
                                        <Typography variant="overline">
                                            {Searchdata.organizer}
                                        </Typography>
                                    </Link>
                                    <Typography variant="caption" color="textSecondary">
                                        {` • ${Searchdata.createdAt}`}
                                    </Typography>
                                    <br/>
                                    <Typography variant="caption" color="textSecondary" overflow="hidden">
                                        {Searchdata.content}
                                    </Typography>
                                </Box>
                        </Container> 
                    </div>                          
            </Grid>            
            )}    
        </Grid>
    );
}

function SearchOrgResult(props) { 
    return (
        <Grid container spacing={3}>
            {SearchOrganizerdata.map(SearchOrganizerdata =>           
            <Grid item xs={12}>
                    <div>
                        <Container component={Link} to="/" style={{textDecoration : "none"}}>
                                <Avatar 
                                    src={SearchOrganizerdata.src}
                                    title={SearchOrganizerdata.organizer}
                                    style={{
                                        width : 150 , 
                                        height : 150 , 
                                        float : "left" , 
                                        marginLeft : "3%" ,
                                        marginRight : "6%" , }}
                                />
                                <Box lineHeight="normal">
                                    <Typography gutterBottom variant="h6" style={{color: "#000"}}>
                                        {SearchOrganizerdata.organizer}
                                    </Typography>
                                    <Typography variant="caption" color="textSecondary">
                                        {`${SearchOrganizerdata.activitycount} • ${SearchOrganizerdata.createdAt}`}
                                    </Typography>
                                    <br/>
                                    <Typography variant="caption" color="textSecondary" overflow="hidden">
                                        {SearchOrganizerdata.content}
                                    </Typography>
                                </Box>
                        </Container> 
                    </div>                          
            </Grid>            
            )}    
        </Grid>
    );
}


export default function SearchInfo() {
    const classes = useStyles();

    return (
        <div className={classes.div}>
            <Header />
            <div className={classes.container}>
                <div className={classes.search}>
                    <Box lineHeight="normal" m={1} className={classes.search_bar}>
                        <InputBase
                            placeholder="搜尋你感興趣的活動"
                            className={classes.inputBase}
                        />
                        <Tooltip title="搜尋">
                            <Button className={classes.search_butoon}>
                                &nbsp;<FontAwesomeIcon icon={faSearch} style={{fontSize : "20px"}} />
                            </Button>
                        </Tooltip>
                    </Box>
                </div>
                <div>
                    <Typography variant="h5">
                        搜尋關鍵字&nbsp;&nbsp;" "
                    </Typography>
                </div>
                <br/>
                <Divider />
                <br/>
                <div>
                    <Typography variant="h6">
                        與搜尋內容相關
                    </Typography>
                    <br/>
                    <Box overflow="hidden">
                        <SearchResult />
                    </Box>
                </div>
                <br/>
                <Divider />
                <br/>
                <div>
                    <Typography variant="h6">
                        與主辦單位相關
                    </Typography>
                    <br/>
                    <Box overflow="hidden">
                        <SearchOrgResult />
                        <SearchResult />
                    </Box>
                </div>
            </div>
        </div>
    )
}