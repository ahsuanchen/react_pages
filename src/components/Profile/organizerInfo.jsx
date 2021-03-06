import React , {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/PF_header.jsx';
import LeftBar from 'components/Profile/leftbar.jsx';
// import { Link , useHistory} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles(theme => ({
    div : {
        boxSizing : "border-box"
    } ,
    content_part : {
        display : "flex" ,
        justifyContent: "center",
    } ,
    content : {
        margin : "2% 2%" ,
        overflow : "visible"
    } ,
    word : {
        fontFamily : "微軟正黑體"
    } ,
    topic : {
        margin : "2% auto" ,
        textAlign : "center" ,
        fontFamily : "微軟正黑體"
    } ,
    table : {
        display: "flex" ,
        justifyContent : "center" ,
    } ,
    button_part : {
        margin : "2%" ,
        display: "flex" ,
        justifyContent : "center" ,
    } ,
    button : {
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)' ,
        color : "#fff" ,
        margin : "auto 2%" ,
        fontFamily : "微軟正黑體"
    } ,
    alert: {
        marginBottom : 60 , 
        marginLeft : 125
    }
  }));

export default function OrganizerInfo() {
    const classes = useStyles();

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    // 成功簽到
    const [openSuccess, setOpenSuccess] = React.useState(false);
    // 失敗(姓名字數)
    const [openErr, setOpenErr] = React.useState(false);
    const ErrClose = () => {
        setOpenSuccess(false);
        setOpenErr(false);
    };  

    const [member, setMember] = useState([]);
    const [organizer, setOrganizer] = useState({
        organizerName : '' ,
        organizerEmail : '' ,
        organizerPhone : '' ,
        organizerAddress : '' ,
        organizerInfo : ''
    });
    useEffect(() => {
        async function fetchDataOrg() {
                let url = "/api/login/name"
                await axios.get(url)
                .then(result => {
                    setMember(result.data);
                    axios.get("/api/organizer/" + result.data.memberEmail)
                    .then(result => {
                        setOrganizer(result.data);
                        // console.log(result);
                    })
                    .catch(err => {
                        console.log(err.response.status);
                    })
                })
                .catch(err => {
                    console.log(err.response.status);
                })
        }
        fetchDataOrg();
    }, []);

    const handleChange = updateOrgInfo => event => {
        setOrganizer({...organizer, [updateOrgInfo]: event.target.value});
    }
    const handleSubmit = event => {
        event.preventDefault();
        const updateOrganizerInfo = {
            organizerName : organizer.organizerName ,
            organizerEmail : organizer.organizerEmail ,
            organizerPhone : organizer.organizerPhone ,
            organizerAddress : organizer.organizerAddress ,
            organizerInfo : organizer.organizerInfo
        }

        if (updateOrganizerInfo.organizerPhone.length > 11 || updateOrganizerInfo.organizerPhone.length < 9)
        {
            setOpenErr(true);
        }
        else
        {
            // let url = "/api/login/name"
            // axios.patch(url , updateOrganizerInfo)
            let url = "/api/organizer/" ;
            url = url + member.memberEmail ;
            axios.patch(url , updateOrganizerInfo)
            .then(response => {
                setOpenSuccess(true);
                window.location.reload();
            })
            .catch(function(error){
                // console.log(updateOrganizerInfo);
            });
        }
    };

    return (
        <div className={classes.div}>
            <Header />
            <div className={classes.content_part}>
                <LeftBar/>
                <Container className={classes.content}>
                        <div>
                            <Typography variant="h4" className={classes.word}>
                                主 辦 單 位 資 訊
                            </Typography>
                            <hr />
                        </div>
                        <div>
                            <form>
                                <Box lineHeight="normal" m={1}>
                                    <Typography variant="h4" className={classes.topic}>
                                        我 的 主 辦 單 位
                                    </Typography>
                                </Box>
                                <Table className={classes.table}>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="h6" className={classes.word}>
                                                    主辦單位名稱：
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <TextField
                                                    style={{minWidth:"250px"}}
                                                    value={organizer.organizerName}
                                                    onChange={handleChange('organizerName')}
                                                />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="h6" className={classes.word}>
                                                    聯絡電子信箱：
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <TextField
                                                    type="email"
                                                    style={{minWidth:"250px"}}
                                                    value={organizer.organizerEmail}
                                                    onChange={handleChange('organizerEmail')}
                                                />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="h6" className={classes.word}>
                                                    連絡電話：
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <TextField value={organizer.organizerPhone} onChange={handleChange('organizerPhone')} />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="h6" className={classes.word}>
                                                    聯絡地址：
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                            <TextField
                                                style={{minWidth:"350px"}}
                                                value={organizer.organizerAddress}
                                                onChange={handleChange('organizerAddress')}
                                            />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="h6" className={classes.word}>
                                                    主辦單位簡介：
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <TextareaAutosize
                                                    style={{minWidth:"350px" , minHeight:"250px"}}
                                                    value={organizer.organizerInfo}
                                                    onChange={handleChange('organizerInfo')}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                                <Box lineHeight={5} m={1}>
                                    <div className={classes.button_part}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            onClick={handleSubmit}
                                            className={classes.button}
                                        >
                                            確認更改
                                        </Button>
                                    </div>
                                </Box>
                            </form>
                        </div>
                </Container>
            </div>
            <Snackbar open={openSuccess} autoHideDuration={2000} onClose={ErrClose} className={classes.alert}>
                <Alert severity="success" className={classes.word}>
                    主辦單位資訊已修改！
                </Alert>
            </Snackbar>
            <Snackbar open={openErr} autoHideDuration={2000} onClose={ErrClose} className={classes.alert}>
                <Alert severity="error" className={classes.word}>
                    聯絡電話格式錯誤！
                </Alert>
            </Snackbar>
        </div>
    );
}
