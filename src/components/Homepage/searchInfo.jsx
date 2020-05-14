import React , {useState , useEffect} from 'react';
import Header from '../Header/HM_header2.jsx';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import axios from 'axios';
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
import { browserHistory } from 'react-router'


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
        src : 'https://images.pexels.com/photos/3418058/pexels-photo-3418058.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        title : '臺北市政府跨年晚會',
        organizer : '王氏股份有限公司',
        createdAt : 'A week ago',
        content : '我們以「臺北」做發想，找出臺北獨有的特色，臺北本是個多元融合的城市，匯集了來自臺灣、世界各地擁有個性故事的人們，在臺北打拼生活、追逐夢想、壯志旅遊，無限想像、無限可能、無時無刻的事情都在發生，這就是臺北，是我們「混」大的地方。因此，以「混」為核心概念，將臺北「多元」特色帶出來，打破以往純粹歌手拼盤的演出形式，藉由跨界的mix、不同領域的crossover產生出新的內容！'
    },
    {
        src : 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title : '三校六系聯合聖誕舞會',
        organizer : '王氏股份有限公司',
        createdAt : 'A month ago',
        content : '「對岸的城堡，總是在黑夜中綻放動人的光芒，誰也不知道它的主人來自何方，而耗之不盡的財富又源自何處？眾人只曉得，每當夜幕低垂，他壯觀的堡壘即聚滿了整個城市的活力......」「看著紙醉金迷、沈浸在歡愉喜樂當中的各方人士，城堡的主人 — 蓋茲比，卻無法與他的客人們同樂⋯⋯」12/23 星期三 晚上六點 我們在三創生活園區 繼續我們的未完待續...'
    },
    {
        src : 'https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title : '從「心」開始，你我無「礙」-助人者自我照護活動',
        organizer : '王氏股份有限公司',
        createdAt : 'A week ago',
        content : 'ALTC長照網，完整的機構介紹，免費護理師諮詢，給家人第二個溫暖的家'
    }
];

const SearchOrganizerdata = [
    {
        src : 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        organizer : '王氏股份有限公司',
        activitycount : "30 Activities" ,
        createdAt : 'Created 1 year ago',
        content : '本主辦單位之目標旨在讓使用者能應用資訊科技解決組織的管理問題，因此，除資訊科技與管理理論之傳授外，整合二者於資訊管理與資訊系統之課程更為本主辦單位之重心。'
    },
];

function SearchResult(props) { 

    const style = {
        Typography : {
            color : "#000" ,
            "&:hover" : {
                color : "#00AEAE"
            }
        } ,
        link : {
            textDecoration : "none" , 
            color : "#ADADAD" , 
            "&:hover" : {
                color : "#00AEAE"
            }
        } ,
        content : {
            overflow: "hidden"
        }
    }

    return (
        <Grid container spacing={3}>
            {Searchdata.map(Searchdata =>           
            <Grid item xs={12}>
                    <div>
                        <Container component={Link} to="/" style={{textDecoration : "none"}}>
                                <img 
                                    src={Searchdata.src}
                                    title={Searchdata.title}
                                    style={{width : 225 , height : 135 , float : "left" , marginRight : "2%"}}
                                />
                                <Box lineHeight="normal">
                                    <Typography variant="h6" title={Searchdata.title} style={style.Typography}>
                                        {Searchdata.title}
                                    </Typography>
                                    <Link 
                                        to="/"
                                        style={style.link}
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
                                    <Typography variant="caption" color="textSecondary" style={style.content}>
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
                                    <Typography variant="h6" style={{color: "#000"}}>
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

    const [searchResult] =  useState(localStorage.getItem('searchResult'));

    const [activity, setActivity] = useState();
    useEffect(() => {
        async function fetchDataSearch() {
            let url = "/api/activity/search"
            const searchInfo = searchResult;
            axios.get(url , searchInfo)
            .then(result => {
                setActivity(result.data);
                console.log(result);
            })
            .catch(err => {
                alert(searchInfo.search)
                console.log(err.response.status);
            })
        }
        fetchDataSearch();
    }, []);


    const [searchResult_N , setSearchResult_N] = useState("");

    let history = useHistory();
    const SendSearchResult = event =>
    {
        if (searchResult_N === "")
        {
            alert("您未輸入任何東西");
        }
        else
        {
            localStorage.setItem('searchResult' , searchResult_N);
            // history.push({
            //     pathname: "/searchInfo",
            // });
            browserHistory.push('/searchInfo')
        }
    }
    return (
        <div className={classes.div}>
            <Header />
            <div className={classes.container}>
                <div className={classes.search}>
                    <Box lineHeight="normal" m={1} className={classes.search_bar}>
                        <InputBase
                            placeholder="搜尋你感興趣的活動"
                            className={classes.inputBase}
                            value={searchResult}
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
                        搜尋關鍵字&nbsp;&nbsp;"{searchResult}"
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
                        <br/>
                        <SearchResult />
                    </Box>
                </div>
            </div>
        </div>
    )
}