import React , {useState} from 'react';
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
    }
  }));

export default function PersonalLineAnnouncement() {
    const classes = useStyles();

    var actID = window.location.href.substring(window.location.href.lastIndexOf("?")+1)

    const [activityannounceTitle , setActivityAnnounceTitle] = useState("");
    const [activityannounceContent , setActivityAnnounceContent] = useState("");
    const announcement = [activityannounceTitle , activityannounceContent] ;

    const handleSubmit = event => {
        event.preventDefault();    
        let url = "/api/line/postMessage/announcement/" ;
        url = url + actID ;
            axios.post(url)
            .then(res => {
                alert("發布成功");
                window.location.reload();
            })
            .catch(function(error){
                alert("發布失敗");
                console.log(error.response.status);
                console.log(announcement);
            });
    };

    return (
        <div className={classes.div}>
            <Header />
            <div className={classes.content_part}>
                <LeftBar/>
                <Container className={classes.content}>
                        <div>
                            <Typography variant="h4" className={classes.word}>
                                發 布 Line 個 人 公 告
                            </Typography>
                            <hr />
                        </div>
                        <div>
                            <form>
                                <Box lineHeight="normal" m={1}>
                                    <Typography variant="h4" className={classes.topic}>
                                        公 告 事 項
                                    </Typography>
                                </Box>
                                <Table className={classes.table}>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="h6" className={classes.word}>
                                                    公告標題：
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <TextField 
                                                    style={{minWidth:"350px"}}
                                                    value={activityannounceTitle}
                                                    onChange={e=>setActivityAnnounceTitle(e.target.value)}
                                                />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="h6" className={classes.word}>
                                                    公告內容：
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <TextareaAutosize
                                                    style={{minWidth:"350px" , minHeight:"250px"}}
                                                    value={activityannounceContent}
                                                    onChange={e=>setActivityAnnounceContent(e.target.value)}
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
                                            確認發布
                                        </Button>
                                    </div>
                                </Box>
                            </form>
                        </div>
                </Container>
            </div>
        </div>
    );
}