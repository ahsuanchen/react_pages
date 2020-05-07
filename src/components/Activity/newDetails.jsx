import React ,{useState}from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from '../Header/PF_header.jsx';
import { Link } from 'react-router-dom';
import Stepper from 'react-stepper-horizontal'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import Container from '@material-ui/core/Container';



const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const useStyles = makeStyles(theme => ({
    div: {
        boxSizing: "border-box"
    },
    topic_part : {
        textAlign : "center" , 
        margin : "2% auto"
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
            height: theme.spacing(40),
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

const NewDetails = props => {
    const location = useLocation();

    useEffect(() => {
       console.log(location.pathname); // result: '/secondpage'
       console.log(location.state.detail); // result: 'some_value'
    }, [location]);
   
};


export default function BulidActivity_step3() {
    const classes = useStyles();

    const  [activityName,setactivityName] =  useState(localStorage.getItem('activityName'));
    const  [activityStartDate,setactivityStartDate] =  useState(new Date(localStorage.getItem('activityStartDate')).getTime());
    const  [activityEndDate,setactivityEndDate] =  useState(new Date(localStorage.getItem('activityEndDate')).getTime());
    const  [startSignUpDate,setstartSignUpDate] =  useState(new Date(localStorage.getItem('startSignUpDate')).getTime());
    const  [endSignUpDate,setendSignUpDate] =  useState(new Date(localStorage.getItem('endSignUpDate')).getTime());
    const  [attendPeople,setattendPeople] =  useState(localStorage.getItem('attendPeople'));
    const  [activitySpace,setactivitySpace] =  useState(localStorage.getItem('activitySpace'));
    const  [activitySummary,setactivitySummary] =  useState(localStorage.getItem('activitySummary'));
    const  [activityInfo,setactivityInfo] =  useState(localStorage.getItem('activityInfo'));
    const  [activityMeal,setactivityMeal] =  useState(localStorage.getItem('activityMeal'));
    const  [Types,setTypes] =  useState(localStorage.getItem('activityTypes'));
    const  [activityMoreContent,setactivityMoreContent] =  useState("");
    const  [activityPrecautions,setactivityPrecautions] =  useState("");
    const  [activityLinkName,setactivityLinkName] =  useState("");
    const  [activityLink,setactivityLink] =  useState("");
    const  [act,setAct] =  useState({
        activityId:'',
    });
    //const  [activityOrganizer,setactivityOrganizer] =  useState("");
    
    let history = useHistory();

    
    var Types_array = Types.split(',')
    console.log(Types_array)


    const handleSubmit=(event)=> {
        
        //event.preventDefault();

        const activity={
            activityName:activityName,
            activityStartDate:activityStartDate,
            activityEndDate:activityEndDate,
            startSignUpDate:startSignUpDate,
            endSignUpDate:endSignUpDate,
            attendPeople:attendPeople,
            activitySpace:activitySpace,
            activitySummary:activitySummary,
            activityInfo:activityInfo,
            activityMeal:activityMeal,
            activityMoreContent:activityMoreContent,
            activityPrecautions:activityPrecautions,
            activityLinkName:activityLinkName,
            activityLink:activityLink,
            //activityOrganizer:activityOrganizer
        };
        
        // const activityTypes={
        //     activityId:act.activityId,
        //     activityType:Types
        // }

        // localStorage.setItem('activityId', act.activityId);
        
        axios.post("/api/activity", activity)
          .then(res => {
            console.log(res);
            console.log(res.data);

            
            let url = "api/activityTypes/"
            url = url + res.data.activityId;

            console.log(url)

            setAct(res.data)
            const actId = res.data.activityId;
            axios.post(url, Types_array)
            .then(result =>{
                console.log(result);
                console.log(result.data);
                localStorage.setItem('activityId',actId);
                history.push({
                    pathname: "/newPic",
                  });

            })
            
          }).catch(function(error){
              alert(error);
          });
        
    }

    //console.log(url)

    return (
        <div className={classes.root}>
            <Header/>
            <div>
            <Stepper steps={[{title: '活動類別'},{title: '基本資訊'},{title: '活動內容'},{title: '上傳活動封面照片'}]} activeStep={2} />
            </div>
            <div className={classes.topic_part}>
                <Typography variant="h5">
                    請填寫活動詳細內容
                </Typography>
            </div>
            <Grid className={classes.space}>
                <Container component="main" maxWidth="md">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <paper>
                            {/* <form className={classes.form} noValidate> */}

                            <input
                                //type="hidden"
                                id="activityName"
                                value={activityName}
                                onChange={e=>setactivityName(e.target.value)}
                            />
                            <input
                                //type="hidden"
                                id="activityStartDate"
                                value={activityStartDate}
                                onChange={e=>setactivityStartDate(e.target.value)}
                            />
                            <input
                                //type="hidden"
                                id="activityEndDate"
                                value={activityEndDate}
                                onChange={e=>setactivityEndDate(e.target.value)}
                            />
                            <input
                                //type="hidden"
                                id="startSignUpDate"
                                value={startSignUpDate}
                                onChange={e=>setstartSignUpDate(e.target.value)}
                            />
                            <input
                                //type="hidden"
                                id="endSignUpDate"
                                value={endSignUpDate}
                                onChange={e=>setendSignUpDate(e.target.value)}
                            />
                            <input
                                //type="hidden"
                                id="attendPeople"
                                value={attendPeople}
                                onChange={e=>setattendPeople(e.target.value)}
                            />
                            <input
                                //type="hidden"
                                id="activitySpace"
                                value={activitySpace}
                                onChange={e=>setactivitySpace(e.target.value)}
                            />
                            <input
                                //type="hidden"
                                id="activitySummary"
                                value={activitySummary}
                                onChange={e=>setactivitySummary(e.target.value)}
                            />
                            <input
                                //type="hidden"
                                id="activityInfo"
                                value={activityInfo}
                                onChange={e=>setactivityInfo(e.target.value)}
                            />
                            <input
                                //type="hidden"
                                id="activityMeal"
                                value={activityMeal}
                                onChange={e=>setactivityMeal(e.target.value)}
                            />
                            {/* <input
                                //type="hidden"
                                id="activityOrganizer"
                                onChange={e=>setactivityOrganizer(e.target.value)}
                            /> */}


                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    autoFocus
                                    id="activityMoreContent"
                                    label="更多內容"
                                    variant="outlined"
                                    multiline
                                    rows="8"
                                    placeholder="請填寫更多內容"
                                    onChange={e=>setactivityMoreContent(e.target.value)}
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
                                    onChange={e=>setactivityPrecautions(e.target.value)}
                                />

                                <TextField
                                    margin="normal"
                                    fullWidth
                                    label="參考網站名稱（例：Facebook）"
                                    id="activityLinkName"
                                    variant="outlined"
                                    onChange={e=>setactivityLinkName(e.target.value)}
                                />

                                <TextField
                                    margin="normal"
                                    fullWidth
                                    label="參考網站連結"
                                    id="activityLink"
                                    variant="outlined"
                                    onChange={e=>setactivityLink(e.target.value)}
                                />


                                <Grid item xs={12} sm={6} className={classes.button_part}>
                                    <Box lineHeight="normal" m={1}>
                                        <Button 
                                            className={classes.button_part1}
                                            component={Link}
                                            to="/newInfo"
                                        >
                                            上一步
                                        </Button>
                                    </Box>
                                    <Box lineHeight="normal" m={1}>
                                        <Button
                                            type="submit"
                                            className={classes.button_part2}
                                            // onChange={e=>setactivityOrganizer("87")}
                                            onClick={handleSubmit}
                                        >
                                            下一步
                                        </Button>
                                    </Box>
                                </Grid>
                        </paper>
                        <Grid align-items-xs-flex-end>
                        </Grid>

                    </div>

                </Container>
            </Grid>
        </div>



    );
}
