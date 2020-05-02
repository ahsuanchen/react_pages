import React ,{useState}from 'react';
import axios from 'axios';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Header from '../Header/PF_header.jsx';
import { useHistory } from "react-router-dom";
import Stepper from 'react-stepper-horizontal'
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
// import DatePicker from 'react-datepicker';


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
            height: theme.spacing(53),
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

const UpdateInfoPage = props => {
    const location = useLocation();

    useEffect(() => {
       console.log(location.pathname); // result: '/secondpage'
       //console.log(location.search); // result: '?query=abc'
       console.log(location.state.detail); // result: 'some_value'
    }, [location]);

    
};

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

export default function UpdateInfo() {
    const classes = useStyles();

    // //宣吿要接值的變數
    const [act, setAct] = useState({
        // activityId:localStorage.getItem('activityId'),
        activityId:"10",
        activityName:'',
        activityStartDateStringDate:'',
        activityStartDateStringMinute:'',
        activityEndDateStringDate:'',
        activityEndDateStringMinute:'',
        startSignUpDateStringDate:'',
        startSignUpDateStringMinute:'',
        startSignUpDateStringDate: '',
        startSignUpDateStringMinute:'',
        endSignUpDateStringDate:'',
        endSignUpDateStringMinute:'',
        activityStartDateString:'',
        activityEndDateString:'',
        startSignUpDateString:'',
        endSignUpDateString:'',
        attendPeople:'',
        activitySpace:'',
        activitySummary:'',
        activityInfo:'',
        activityMeal:'',
    });


    let history = useHistory();


    let url = "api/activity/";
    url = url + act.activityId;

    const handleChange = updateActInfo => event => {
        setAct({...act, [updateActInfo]: event.target.value});
    
    }

    useEffect(() => {
        async function fetchDataActInfo() {
                await axios.get(url)
                .then(result => {
                    // if(result.data.toString().startsWith("<!DOCTYPE html>"))
                    // {
                    //     alert("您尚未登入，請先登入！")
                    //     goSignin();
                    // }
                    // else
                    // {
                        // setactivityName(result.data.activityName);
                        // setactivityStart_Date(result.data.activityStart_Date);
                        // setattendPeople(result.data.attendPeople);
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
        fetchDataActInfo();
        
    }, []);

    const activityStart_Date = act.activityStartDateString.substring(0,10);
    const activityStart_Time = act.activityStartDateString.substring(11);
    const handleSubmit = event => {
        const updateActivityInfo={
            activityName:act.activityName,

            activityStartDateString:act.activityStartDateString,
            activityEndDateString:act.activityEndDateString ,
            startSignUpDateString:act.startSignUpDateString ,
            endSignUpDateString:act.endSignUpDateString ,

            activityStartDate:new Date(act.activityStartDateStringDate+" "+act.activityStartDateStringMinute+":00").getTime() ,
            activityEndDate:new Date(act.activityEndDateStringDate+" "+act.activityEndDateStringMinute+":00").getTime() ,
            startSignUpDate:new Date(act.startSignUpDateStringDate+" "+act.startSignUpDateStringMinute+":00").getTime() ,
            endSignUpDate:new Date(act.endSignUpDateStringDate+" "+act.endSignUpDateStringMinute+":00").getTime() ,
            
            attendPeople:act.attendPeople,
            activitySpace:act.activitySpace,
            activitySummary:act.activitySummary,
            activityInfo:act.activityInfo,
            activityMeal:act.activityMeal
        };

        let activityStartDate = (activityStart_Date+" "+activityStart_Time+":00");

            axios.patch(url, updateActivityInfo)
            .then(response => {
                console.log(response);
                // console.log(response.data);
                console.log(updateActivityInfo);
                alert("內容已修改");
                history.push({
                    pathname: "/updateDetails",
                  });
            })
            .catch(function(error){
                console.log(error);
            });
    }

    const [value, setValue] = React.useState();
    // const handleChange = event => {
    //     setValue(event.target.value);
    // }


        const [startDate, setStartDate] = useState(new Date());
        

    return (
        <div className={classes.root}>
            <Header/>
            <div>
            <Stepper steps={[{title: '修改基本資訊'},{title: '修改活動內容'},{title: '修改活動封面照片'}]} activeStep={0} />
            </div>
            <div className={classes.topic_part}>
                <Typography variant="h5">
                    修改活動基本資訊
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
                                        value={act.activityName}
                                        onChange={handleChange('activityName')}

                                        
                                    />

                                    {/* <DatePicker
                                        selected={startDate}
                                        onChange={date => setStartDate(date)}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={15}
                                        timeCaption="time"
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                    /> */}

                                    <TextField 
                                        margin="normal"
                                        width="70%"
                                        label="活動開始日期" 
                                        type="date" 
                                        id="activityStart_Date"
                                        value={act.activityStartDateStringDate}
                                        defaultValue={new Date().getFullYear()}
                                        InputLabelProps={{shrink: true,}}
                                        onChange={handleChange('activityStartDateStringDate')}
                                    />

                                    <TextField 
                                        margin="normal"
                                        Width='60'
                                        label="活動開始時間" 
                                        type="time" 
                                        id="activityStartTimeStringMinute"
                                        value={act.activityStartDateStringMinute}
                                        InputLabelProps={{shrink: true,}} 
                                        onChange={handleChange('activityStartDateStringMinute')}
                                    />

                                    <TextField 
                                        margin="normal"
                                        Width="50%"
                                        label="活動結束日期" 
                                        type="date" 
                                        id="activityEnd_Date"
                                        value={act.activityEndDateStringDate}
                                        defaultValue={new Date().getFullYear()}
                                        InputLabelProps={{shrink: true,}} 
                                        onChange={handleChange('activityEndDateStringDate')}
                                    />

                                    <TextField 
                                        margin="normal"
                                        Width="50%"
                                        label="活動結束時間" 
                                        type="time" 
                                        id="activityEnd_Time"
                                        value={act.activityEndDateStringMinute}
                                        InputLabelProps={{shrink: true,}}
                                        onChange={handleChange('activityEndDateStringMinute')}
                                    />

                                    <TextField 
                                        margin="normal"
                                        width="70%"
                                        label="報名開始日期" 
                                        type="date" 
                                        id="startSignUp_Date"
                                        value={act.startSignUpDateStringDate}
                                        defaultValue={new Date().getFullYear()}
                                        InputLabelProps={{shrink: true,}} 
                                        onChange={handleChange('startSignUpDateStringDate')}
                                    />

                                    <TextField 
                                        margin="normal"
                                        Width='60'
                                        label="報名開始時間" 
                                        type="time" 
                                        id="startSignUp_Time"
                                        value={act.startSignUpDateStringMinute}
                                        InputLabelProps={{shrink: true,}} 
                                        onChange={handleChange('startSignUpDateStringMinute')}
                                    />

                                    <TextField 
                                        margin="normal"
                                        Width="50%"
                                        label="報名結束日期" 
                                        type="date" 
                                        id="endSignUp_Date"
                                        value={act.endSignUpDateStringDate}
                                        defaultValue={new Date().getFullYear()}
                                        InputLabelProps={{shrink: true,}} 
                                        onChange={handleChange('endSignUpDateStringDate')}
                                    />

                                    <TextField 
                                        margin="normal"
                                        Width="50%"
                                        label="報名結束時間" 
                                        type="time" 
                                        id="endSignUp_Time"
                                        value={act.endSignUpDateStringMinute}
                                        InputLabelProps={{shrink: true,}} 
                                        onChange={handleChange('endSignUpDateStringMinute')}
                                    />

                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        type="int"
                                        label="活動人數上限"
                                        id="attendPeople"
                                        value={act.attendPeople}
                                        variant="outlined"
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">人</InputAdornment>,
                                          }}
                                        onChange={handleChange('attendPeople')}
                                    />

                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="地址"
                                        id="activitySpace"
                                        value={act.activitySpace}
                                        variant="outlined"
                                        onChange={handleChange('activitySpace')}
                                    />

                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="activitySummary"
                                        value={act.activitySummary}
                                        label="活動摘要"
                                        variant="outlined"
                                        multiline
                                        rows="4"
                                        placeholder="請填寫活動摘要（限三十字）"
                                        onChange={handleChange('activitySummary')}
                                    />

                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="activityInfo"
                                        value={act.activityInfo}
                                        label="活動簡介"
                                        variant="outlined"
                                        multiline
                                        rows="4"
                                        placeholder="請填寫活動簡介（限一千字）"
                                        onChange={handleChange('activityInfo')}
                                    />


                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormLabel component="legend">是否供餐</FormLabel>
                                        <RadioGroup 
                                            aria-label="是否供餐" 
                                            name="activityMeal" 
                                            value={act.activityMeal} 
                                            onChange={handleChange('activityMeal')} 
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
                                        <Box lineHeight="normal" m={8}>
                                            {/* <Button 
                                                className={classes.button_part1}
                                                component={Link}
                                                to="/new1"
                                            >
                                                上一步
                                            </Button> */}
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
