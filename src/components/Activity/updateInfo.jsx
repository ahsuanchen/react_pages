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
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
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
            height: theme.spacing(68),
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

    formControl: {
        margin: theme.spacing(3),
      },
}));

// const UpdateInfoPage = props => {
//     const location = useLocation();

//     useEffect(() => {
//        console.log(location.pathname); // result: '/secondpage'
//        //console.log(location.search); // result: '?query=abc'
//        console.log(location.state.detail); // result: 'some_value'
//     }, [location]);


// };
let activity_Id = window.location.href.substring(window.location.href.lastIndexOf("?")+1);
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

console.log(activity_Id)
export default function UpdateInfo() {
    const classes = useStyles();

    // //宣吿要接值的變數
    const [act, setAct] = useState({
        activityId:activity_Id,
        activityName:'',
        activityTypes:'',
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
    //類別
    const [type, setType] = useState({
        learning:'',
        art:'',
        family:'',
        experience:'',
        leisure:'',
        sport:'',
        outdoor:'',
        lecture:'',
        information:''
      });
    
      const handleChangeType = (event) => {
        setType({ ...type, [event.target.name]: event.target.checked });
      };
    
      const { learning, art, family, experience, leisure, sport, outdoor, lecture, information} = type;
      const error = [learning, art, family, experience, leisure, sport, outdoor, lecture, information].filter((v) => v).length < 1;
    //

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


    const handleSubmit = event => {
        const updateActivityInfo={
            activityName:act.activityName,
            activityTypes:act.activityTypes,

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

        //let activityStartDate = (activityStart_Date+" "+activityStart_Time+":00");

            axios.patch(url, updateActivityInfo)
            .then(response => {
                console.log(response);
                // console.log(response.data);
                console.log(updateActivityInfo);
                alert("內容已修改");
                localStorage.setItem('activityId',act.activityId);
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

                                    <FormControl required error={error} component="fieldset" className={classes.formControl}>
                                        <FormLabel component="legend">類別</FormLabel>
                                            <FormGroup>
                                            <Grid container>
                                            <Grid item> 
                                            <FormControlLabel
                                                control={<Checkbox checked={learning} value={act.activityTypes} onChange={handleChangeType} name="learning" />}
                                                label="學習"
                                            />
                                            </Grid>
                                            <Grid item> 
                                            <FormControlLabel
                                                control={<Checkbox checked={art} value={act.activityTypes} onChange={handleChangeType} name="art" />}
                                                label="藝文"
                                            />
                                            </Grid>
                                            <Grid item> 
                                            <FormControlLabel
                                                control={<Checkbox checked={family} value={act.activityTypes} onChange={handleChangeType} name="family" />}
                                                label="親子"
                                            />
                                            </Grid>
                                            <Grid item> 
                                            <FormControlLabel
                                                control={<Checkbox checked={experience} value={act.activityTypes} onChange={handleChangeType} name="experience" />}
                                                label="體驗"
                                            />
                                            </Grid>
                                            <Grid item> 
                                            <FormControlLabel
                                                control={<Checkbox checked={leisure} value={act.activityTypes} onChange={handleChangeType} name="leisure" />}
                                                label="休閒"
                                            />
                                            </Grid>
                                            <Grid item> 
                                            <FormControlLabel
                                                control={<Checkbox checked={sport} value={act.activityTypes} onChange={handleChangeType} name="sport" />}
                                                label="運動"
                                            />
                                            </Grid>
                                            <Grid item> 
                                            <FormControlLabel
                                                control={<Checkbox checked={outdoor} value={act.activityTypes} onChange={handleChangeType} name="outdoor" />}
                                                label="戶外"
                                            />
                                            </Grid>
                                            <Grid item> 
                                            <FormControlLabel
                                                control={<Checkbox checked={lecture} value={act.activityTypes} onChange={handleChangeType} name="lecture" />}
                                                label="講座"
                                            />
                                            </Grid>
                                            <Grid item> 
                                            <FormControlLabel
                                                control={<Checkbox checked={information} value={act.activityTypes} onChange={handleChangeType} name="information" />}
                                                label="資訊"
                                            />
                                            </Grid>
                                            </Grid>
                                            </FormGroup>
                                        <FormHelperText>請至少選擇一項類別</FormHelperText>
                                    </FormControl>


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

                            </paper>
                            <Grid align-items-xs-flex-end></Grid>
                        </div>

                    </Container>
                </Grid>
            </div>

        </div>



    );
}
