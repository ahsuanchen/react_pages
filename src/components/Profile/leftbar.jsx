import React , {useState , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link , useHistory } from 'react-router-dom';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    left_menu: {
        display: "-webkit-inline-box",
        color: "#000" ,
    },
    left_container: {
        mixWidth: "100%",
        borderRight: "1px solid",
    },
    word : {
        fontFamily : "微軟正黑體"
    } ,
    avatar : {
        minWidth : 150 ,
        minHeight : 150 ,
    } ,
    link : {
        textDecoration : "none" ,
        fontFamily : "微軟正黑體" ,
        color : "#8E8E8E" ,
        '&:hover' : {
            color : '#00AEAE'
        } ,
    } ,
    content : {
        margin : "2% 2%" ,
    } ,
    button : {
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)' ,
        alignItems : "right"
    }
  }));

export default function LeftBar() {
    const classes = useStyles();

    let history = useHistory();
    function goSignin()
    {
        history.push("/signin");
    }
    function goHomePage()
    {
        history.push("/");
    }

    const [member, setMember] = useState([]);
    const [organizer, setOrganizer] = useState([]);
    useEffect(() => {
        async function fetchDataMem() {
            let url = "/api/login/name"
            axios.get(url)
            .then(result => {
                if(result.data.toString().startsWith("<!DOCTYPE html>"))
                {
                    alert("您尚未登入，請先登入！")
                    goSignin();
                }
                else
                {
                    setMember(result.data);
                    axios.get("/api/organizer/" + result.data.memberEmail)
                    .then(result => {
                        setOrganizer(result.data);
                        // console.log(result);
                    })
                    .catch(error => {
                        console.log(error.response.status);
                        if(error.response.status === 403)
                        {
                            alert("您的權限不足!");
                            goHomePage();
                        }
                    })
                }
            })
            .catch(err => {
                console.log(err.response.status);
            })
        }
        fetchDataMem();
    }, []);

    return (
        <div className={classes.left_menu}>
            <Container className={classes.left_container}>
                <Typography variant="h5">
                    <Box lineHeight="normal" m={4}>
                        <Avatar className={classes.avatar} />
                    </Box>
                    <Box lineHeight={2} m={1}>
                        <strong className={classes.word}>{member.memberName}</strong>
                   </Box>
                    <Divider />
                    <Link to="/profile" className={classes.link}>
                        <Box lineHeight={1} m={4} >
                            個人檔案
                        </Box>
                    </Link>
                    <Link to="/trainingFace" className={classes.link}>
                        <Box lineHeight={1} m={4}>
                            訓練人臉
                        </Box>
                    </Link>
                    <Link to="/signupSituation" className={classes.link}>
                        <Box lineHeight={1} m={4}>
                            報名狀況
                        </Box>
                    </Link>
                    <Divider />
                    {(organizer.memberEmail != null ?
                    <>
                    <Box lineHeight={3} m={1}>
                        <strong className={classes.word}>{organizer.organizerName}</strong>
                    </Box>
                    <Divider />
                    <Link to="/organizerInfo" className={classes.link}>
                        <Box lineHeight={1} m={4} >
                            主辦單位資訊
                        </Box>
                    </Link>
                    <Link to="/manageActivity" className={classes.link}>
                        <Box lineHeight={1} m={4}>
                            管理活動
                            </Box>
                    </Link>
                    <Divider />
                    <Link to="/MyAlbum" className={classes.link}>
                        <Box lineHeight={2} m={1}>
                            我的相簿
                        </Box>
                    </Link>
                    <Link to="/ActivityAlbum" className={classes.link}>
                        <Box lineHeight={2} m={1}>
                            活動相簿
                        </Box>
                    </Link>
                    </>
                    :
                    <>
                    <Link to="/MyAlbum" className={classes.link}>
                        <Box lineHeight={2} m={1}>
                            我的相簿
                        </Box>
                    </Link>
                    <Link to="/ActivityAlbum" className={classes.link}>
                        <Box lineHeight={2} m={1}>
                            活動相簿
                        </Box>
                    </Link>
                    </>
                    )}
                </Typography>
            </Container>
        </div>
    );
}
{/*    left_menu: {
        display: "-webkit-inline-box",
        color: "#000" ,
    },
    left_container: {
        maxWidth: "280px",
        borderRight: "1px solid",
    },
    avatar : {
        minWidth : "150px" ,
        minHeight : "150px" ,
    } ,
    link : {
        textDecoration : "none" ,
        color : "#D0D0D0" ,
        '&:hover' : {
            color : '#00AEAE'
        } ,
    } ,
    content : {
        margin : "2% 2%" ,
    } ,
    img : {
        margin : "2% 0" ,
        minWidth : '150px' ,
        maxHeight : '200px'
    } ,
    button : {
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)' ,
        alignItems : "right"
    }
    */}
