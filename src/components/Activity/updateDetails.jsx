import React ,{useState}from 'react';
import axios from 'axios';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Header from '../Header/PF_header.jsx';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import Stepper from 'react-stepper-horizontal'
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
     


const useStyles = makeStyles(theme => ({
    div: {
        boxSizing: "border-box"
    },
    topic_part : {
        textAlign : "center" , 
        margin : "5% auto"
    } ,
    button_part : {
        display: "flex" ,
        justifyContent : "space-between"
    } ,
    button_part1 : {
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)',
        color : "#fff" ,
        minWidth : "100px" ,
        '&:hover' : {
            background : "none" ,
            color : "#000"
        } , 
    } ,
    button_part2 : {
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)',
        color : "#fff" ,
        minWidth : "100px" ,
        marginLeft : "80%" ,
        '&:hover' : {
            background : "none" ,
            color : "#000"
        } , 
    } ,
    space: {
        marginTop: theme.spacing(5),
    },

    paper: {
        marginTop: theme.spacing(5),
        flexDirection: 'column',
        alignItems: 'center',
        background: '#f4f4f4',
        display: 'flex',
        '& > *': {
            marginTop: theme.spacing(3),
            width: theme.spacing(40),
            height: theme.spacing(43),
        },
    },


    form: {
        width: '100%',
        height: theme.spacing(1),


    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

    margin: {
        margin: theme.spacing(2),
    },
}));

const UpdateContentPage = props => {
    const location = useLocation();

    useEffect(() => {
       console.log(location.pathname); // result: '/secondpage'
       //console.log(location.search); // result: '?query=abc'
       console.log(location.state.detail); // result: 'some_value'
    }, [location]);

    
};

export default function UpdateActivity_step() {
    const classes = useStyles();

     //宣吿要接值的變數
    const [act, setAct] = useState({
        activityId:localStorage.getItem('activityId'),
        // activityId:'',
        activityMoreContent:'',
        activityPrecautions:'',
        activityLinkName:'',
        activityLink:'',
    });

    let history = useHistory();


    let url = "api/activity/";
    url = url + act.activityId;

    const handleChange = updateActContent => event => {
        setAct({...act, [updateActContent]: event.target.value});
    
    }

    useEffect(() => {
        async function fetchDataActContent() {
                await axios.get(url)
                .then(result => {
                    // if(result.data.toString().startsWith("<!DOCTYPE html>"))
                    // {
                    //     alert("您尚未登入，請先登入！")
                    //     goSignin();
                    // }
                    // else
                    // {
                        
                        setAct(result.data);
                        console.log(result);
                        
                
                    // }
                })
                .catch(err => {
                    console.log(err.response.status);
                    if(err.response.status === 403)
                    {
                        alert("您的權限不足!");
                        
                    }
                })
        }
        fetchDataActContent();
        
    }, []);

    const handleSubmit = event => {
        const updateActivityContent={
            
            activityMoreContent:act.activityMoreContent,
            activityPrecautions:act.activityPrecautions,
            activityLinkName:act.activityLinkName,
            activityLink:act.activityLink,
        };

            axios.patch(url, updateActivityContent,
            {
                headers: {
                        
                    'Access-Control-Allow-Origin' : '*'
                }
            })
            .then(response => {
                //alert("yy")
                
                console.log(response);
                console.log(updateActivityContent);
                //alert("內容已修改");
                localStorage.setItem('activityId',act.activityId);
                history.push({
                    pathname: "/updatePic",
                  });
            })
            .catch(function(error){
                console.log(error);
                alert("no")
                alert(error)
            });
    }

    const [value, setValue] = React.useState();
    

    return (
        <div className={classes.root}>
            <Header/>
            <div>
            <Stepper steps={[{title: '修改基本資訊'},{title: '修改活動內容'},{title: '修改活動封面照片'}]} activeStep={1} />
            </div>
            <div className={classes.topic_part}>
            <Typography variant="h5">
                    修改活動內容
                </Typography>
            </div>
            <Grid className={classes.space}>
                <Container component="main" maxWidth="md">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <paper>
                            
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="activityMoreContent"
                                    label="更多內容"
                                    variant="outlined"
                                    multiline
                                    rows="8"
                                    placeholder="請填寫更多內容"
                                    value={act.activityMoreContent}
                                    onChange={handleChange('activityMoreContent')}
                                />

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="activityPrecautions"
                                    label="注意事項"
                                    variant="outlined"
                                    multiline
                                    rows="5"
                                    placeholder="請填寫注意事項（限五十字）"
                                    value={act.activityPrecautions}
                                    onChange={handleChange('activityPrecautions')}
                                />

                                <TextField
                                    margin="normal"
                                    fullWidth
                                    label="參考網站名稱（例：Facebook）"
                                    id="activityLinkName"
                                    variant="outlined"
                                    value={act.activityLinkName}
                                    onChange={handleChange('activityLinkName')}
                                />

                                <TextField
                                    margin="normal"
                                    fullWidth
                                    label="參考網站連結"
                                    id="activityLink"
                                    variant="outlined"
                                    value={act.activityLink}
                                    onChange={handleChange('activityLink')}
                                />


                                <Grid item xs={12} sm={6} className={classes.button_part}>
                                    <Box lineHeight="normal" m={1}>
                                        <Button 
                                            className={classes.button_part1}
                                            component={Link}
                                            to="/updateInfo"
                                        >
                                            上一步
                                        </Button>
                                    </Box>
                                    <Box lineHeight="normal" m={1}>
                                        <Button
                                            type="submit"
                                            className={classes.button_part2}
                                            onClick={handleSubmit}
                                        >
                                            下一步
                                        </Button>
                                    </Box>
                                </Grid>
                                {/* <IconButton color="primary" aria-label="next step" href="./new3">
                                    <ArrowBackIcon />
                                </IconButton>
                                <IconButton color="primary" aria-label="next step" href="./">
                                    <ArrowForwardIcon />
                                </IconButton> */}

                        </paper>
                        <Grid align-items-xs-flex-end>
                        </Grid>

                    </div>

                </Container>
            </Grid>
        </div>



    );
}
