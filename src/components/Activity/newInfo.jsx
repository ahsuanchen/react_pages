import React ,{useState}from 'react';
import axios from 'axios';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Header from '../Header/PF_header.jsx';
import { Link } from 'react-router-dom';
import Stepper from 'react-stepper-horizontal'
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';


const useStyles = makeStyles(theme => ({
    div: {
        boxSizing: "border-box"
    },
    topic_part : {
        textAlign : "center" , 
        margin : "3% auto"
    } ,
    button_part : {
        display: "flex" ,
        justifyContent : "space-between",
        marginTop: theme.spacing(2),
    } ,
    button1 : {
        background : '#bdbdbd',
        color : "#424242" ,
        minWidth : "100px" ,
        '&:hover' : {
            background : '#757575',
            color : "#fff"
        } , 
    } ,

    button2 : {
        background : 'linear-gradient(50deg, #00acc1 40%, #00bfa5 85%)',
        color : "#fff" ,
        minWidth : "100px" ,
        marginLeft : "80%" ,
        '&:hover' : {
            background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)',
            color : "#fff"
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
            height: theme.spacing(53),
        },
    },
    form: {
        width: '100%',
        height: theme.spacing(1),
    },
    submit: {
        //margin: theme.spacing(3, 0, 2),
        marginTop : "10%" ,
    },
    margin: {
        margin: theme.spacing(2),
        width:'40%'
    },
    //下拉式
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

 //radio 顏色設定
const RadioColor = withStyles({
    root: {
        color: "#E0E0E0",
        '&$checked': {
            color: "#00CACA",
        },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

const NewInfo = props => {
    const location = useLocation();

    useEffect(() => {
       console.log(location.pathname); // result: '/secondpage'
       //console.log(location.search); // result: '?query=abc'
       console.log(location.state.detail); // result: 'some_value'
    }, [location]);
   
};


export default function BulidActivity_step2() {
    const classes = useStyles();

    
    const  [activityTypes,setactivityTypes] =  useState(localStorage.getItem('activityTypes'));
    const  [activityName,setactivityName] =  useState("");
    const  [activityStart_Date,setactivityStart_Date] =  useState("");
    const  [activityStart_Time,setactivityStart_Time] =  useState("");
    const  [activityEnd_Date,setactivityEnd_Date] =  useState("");
    const  [activityEnd_Time,setactivityEnd_Time] =  useState("");
    const  [startSignUp_Date,setstartSignUp_Date] =  useState("");
    const  [startSignUp_Time,setstartSignUp_Time] =  useState("");
    const  [endSignUp_Date,setendSignUp_Date] =  useState("");
    const  [endSignUp_Time,setendSignUp_Time] =  useState("");
    const  [attendPeople,setattendPeople] =  useState("");
    const  [activitySpace,setactivitySpace] =  useState("");
    const  [activitySummary,setactivitySummary] =  useState("");
    const  [activityInfo,setactivityInfo] =  useState("");
    const  [activityMeal,setactivityMeal] =  useState("");

    console.log(activityTypes)
    
    let history = useHistory();

    const handleSubmit=(event)=> {
        //event.preventDefault();
        const activity={
            activityName:activityName,
            activityStart_Date:activityStart_Date,
            activityStart_Time:activityStart_Time,
            activityEnd_Date:activityEnd_Date,
            activityEnd_Time:activityEnd_Time,
            startSignUp_Date:startSignUp_Date,
            startSignUp_Time:startSignUp_Time,
            endSignUp_Date:endSignUp_Date,
            endSignUp_Time:endSignUp_Time,
            attendPeople:attendPeople,
            activitySpace:activitySpace,
            activitySummary:activitySummary,
            activityInfo:activityInfo,
            activityMeal:activityMeal
        };

        //隔頁傳值
        let activityStartDate = (activityStart_Date+" "+activityStart_Time+":00");
        let activityEndDate = (activityEnd_Date+" "+activityEnd_Time+":00");
        let startSignUpDate = (startSignUp_Date+" "+startSignUp_Time+":00");
        let endSignUpDate = (endSignUp_Date+" "+endSignUp_Time+":00");
        localStorage.setItem('activityName', activityName);
        localStorage.setItem('activityStartDate', activityStartDate);
        localStorage.setItem('activityEndDate', activityEndDate);
        localStorage.setItem('startSignUpDate', startSignUpDate);
        localStorage.setItem('endSignUpDate', endSignUpDate);
        localStorage.setItem('attendPeople', attendPeople);
        localStorage.setItem('activitySpace', activitySpace);
        localStorage.setItem('activitySummary', activitySummary);
        localStorage.setItem('activityInfo', activityInfo);
        localStorage.setItem('activityMeal', activityMeal);
        localStorage.setItem('activityTypes', activityTypes);


        if(activitySummary.length > 30){
            alert('字數超過三十字');
        }
        else if(activityInfo.length > 1000){
            alert('字數超過一千字');
        }
        else{
            history.push({
                pathname: "/newDetails",
              });
        }
    
        
    }

    const [value, setValue] = React.useState();
    const handleChange = event => {
        setValue(event.target.value);
    }

    return (
        <div className={classes.div}>
            <Header/>
            <div>
            <Stepper steps={[{title: '活動類別'},{title: '基本資訊'},{title: '活動內容'},{title: '活動封面照片'}]} activeStep={1} />
            </div>
            <div className={classes.topic_part}>
                <Typography variant="h5">
                    請填寫活動基本資訊
                </Typography>
            </div>
            <div>
                <Grid className={classes.space}>
                    <Container component="main" maxWidth="md">
                        <CssBaseline />
                        <div className={classes.paper}>
                            <paper>
                                {/* <form className={classes.form} noValidate onSubmit={handleSubmit}> */}
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        autoFocus
                                        id="activityName"
                                        label="活動名稱"
                                        name="activityName"
                                        variant="outlined"
                                        placeholder="請填寫活動名稱"
                                        onChange={e=>setactivityName(e.target.value)}
                                    />

                                    <TextField 
                                        margin="normal"
                                        width="70%"
                                        label="活動開始日期" 
                                        type="date" 
                                        id="activityStart_Date"
                                        defaultValue={new Date().getFullYear()}
                                        InputLabelProps={{shrink: true,}}
                                        onChange={e=>setactivityStart_Date(e.target.value)}
                                    />

                                    <TextField 
                                        margin="normal"
                                        Width='60'
                                        label="活動開始時間" 
                                        type="time" 
                                        id="activityStart_Time"
                                        InputLabelProps={{shrink: true,}} 
                                        onChange={e=>setactivityStart_Time(e.target.value)}
                                    />

                                    <TextField 
                                        margin="normal"
                                        Width="50%"
                                        label="活動結束日期" 
                                        type="date" 
                                        id="activityEnd_Date"
                                        defaultValue={new Date().getFullYear()}
                                        InputLabelProps={{shrink: true,}} 
                                        onChange={e=>setactivityEnd_Date(e.target.value)}
                                    />

                                    <TextField 
                                        margin="normal"
                                        Width="50%"
                                        label="活動結束時間" 
                                        type="time" 
                                        id="activityEnd_Time"
                                        InputLabelProps={{shrink: true,}}
                                        onChange={e=>setactivityEnd_Time(e.target.value)} 
                                    />

                                    <TextField 
                                        margin="normal"
                                        width="70%"
                                        label="報名開始日期" 
                                        type="date" 
                                        id="startSignUp_Date"
                                        defaultValue={new Date().getFullYear()}
                                        InputLabelProps={{shrink: true,}} 
                                        onChange={e=>setstartSignUp_Date(e.target.value)}
                                    />

                                    <TextField 
                                        margin="normal"
                                        Width='60'
                                        label="報名開始時間" 
                                        type="time" 
                                        id="startSignUp_Time"
                                        InputLabelProps={{shrink: true,}} 
                                        onChange={e=>setstartSignUp_Time(e.target.value)}
                                    />

                                    <TextField 
                                        margin="normal"
                                        Width="50%"
                                        label="報名結束日期" 
                                        type="date" 
                                        id="endSignUp_Date"
                                        defaultValue={new Date().getFullYear()}
                                        InputLabelProps={{shrink: true,}} 
                                        onChange={e=>setendSignUp_Date(e.target.value)}
                                    />

                                    <TextField 
                                        margin="normal"
                                        Width="50%"
                                        label="報名結束時間" 
                                        type="time" 
                                        id="endSignUp_Time"
                                        InputLabelProps={{shrink: true,}} 
                                        onChange={e=>setendSignUp_Time(e.target.value)}
                                    />

                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        type="int"
                                        label="活動人數上限"
                                        id="attendPeople"
                                        variant="outlined"
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">人</InputAdornment>,
                                          }}
                                        onChange={e=>setattendPeople(e.target.value)}
                                    />

                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="地址"
                                        id="activitySpace"
                                        name="activitySpace"
                                        variant="outlined"
                                        onChange={e=>setactivitySpace(e.target.value)}
                                    />

                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="activitySummary"
                                        label="活動摘要"
                                        variant="outlined"
                                        multiline
                                        rows="4"
                                        placeholder="請填寫活動摘要（限三十字）"
                                        onChange={e=>setactivitySummary(e.target.value)}
                                    />

                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="activityInfo"
                                        label="活動簡介"
                                        variant="outlined"
                                        multiline
                                        rows="4"
                                        placeholder="請填寫活動簡介（限一千字）"
                                        onChange={e=>setactivityInfo(e.target.value)}
                                    />


                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormLabel component="legend">是否供餐</FormLabel>
                                        <RadioGroup 
                                            aria-label="是否供餐" 
                                            name="activityMeal" 
                                            value={value} 
                                            onChange={e=>setactivityMeal(e.target.value)} 
                                        >
                                            <Grid container>
                                                <Grid item> 
                                                    <FormControlLabel 
                                                        value="Y" 
                                                        control={<RadioColor />} 
                                                        label="是" 
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <FormControlLabel 
                                                    value="N" 
                                                    control={<RadioColor />} 
                                                    label="否" 
                                                    />
                                                </Grid>
                                            </Grid>
                                        </RadioGroup>
                                    </FormControl>
                                    <Grid item xs={12} sm={6} className={classes.button_part}>
                                        <Box lineHeight="normal" m={1}>
                                            <Button 
                                                className={classes.button1}
                                                component={Link}
                                                to="/new1"
                                            >
                                                上一步
                                            </Button>
                                        </Box>
                                        <Box lineHeight="normal" m={1}>
                                            <Button 
                                                type="submit"
                                                className={classes.button2}
                                                onClick={handleSubmit}
                                            >
                                                下一步
                                            </Button>
                                        </Box>
                                    </Grid>
                                    {/* <Grid>
                                        <IconButton color="primary" aria-label="next step" href="./new2">
                                            <ArrowBackIcon />
                                        </IconButton>
                                        <IconButton type="submit" color="primary" aria-label="next step" >
                                            <ArrowForwardIcon />
                                        </IconButton>
                                    </Grid> */}
                                {/* 
                                 */}
                            </paper>
                            <Grid align-items-xs-flex-end></Grid>
                        </div>

                    </Container>
                </Grid>
            </div>
            
        </div>



    );
}
