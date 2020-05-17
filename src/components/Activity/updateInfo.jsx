import React ,{useState}from 'react';
import axios from 'axios';
import { useEffect } from "react";
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
        justifyContent : "space-between"
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
        fontFamily : "微軟正黑體" ,
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
    word : {
        fontFamily : "微軟正黑體"
    } ,
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


export default function UpdateInfo() {
    const classes = useStyles();

    let activity_Id = window.location.href.substring(window.location.href.lastIndexOf("?")+1);

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

    console.log(act.activityTypes)
    let history = useHistory();


    let url = "/api/activity/";
    url = url + act.activityId;

    let url_post = "/api/activity/";
    url_post = url_post + act.activityId;

    const handleChange = updateActInfo => event => {
        setAct({...act, [updateActInfo]: event.target.value});

    }

    let act_type = act.activityTypes


    //類別
    const [type, setType] = useState({
        //learning:act_type.indexOf('學習')>= 0 ? 1 : -1,
        learning:act.activityTypes.indexOf('學習'),
        art:act.activityTypes.indexOf('藝文'),
        family:act.activityTypes.indexOf('親子'),
        experience:act.activityTypes.indexOf('體驗'),
        leisure:act.activityTypes.indexOf('休閒'),
        sport:act.activityTypes.indexOf('運動'),
        outdoor:act.activityTypes.indexOf('戶外'),
        lecture:act.activityTypes.indexOf('講座'),
        information:act.activityTypes.indexOf('資訊')
      });
      
    
    const handleChangeType = (event) => {
        const {checked, value} = event.target;
        let type = act.activityType;

        if(checked && act.activityTypes.indexOf(value) === -1){
            act.activityTypes.push(value);
        }
        else{
            act.activityTypes = act.activityTypes.filter(item => item !== value);
        }
        
        setType({ ...type, [event.target.name]: !event.target.checked });
    
    };

    console.log(type)
    
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
                        // setLearning(result.data.activityTypes.indexOf('學習')>=0? 1 :-1)
                        // console.log(learning1);


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


        axios.patch(url_post, updateActivityInfo)
        .then(response => {
            console.log(response);
            console.log(updateActivityInfo);
            alert("內容已修改");
            //localStorage.setItem('activityId',act.activityId);

            let url_t = "api/activityTypes/"
            url_t = url_t + act.activityId;

            console.log(url_t)

            axios.post(url_t, act.activityTypes)
            .then(result =>{
                console.log(result);
                console.log(result.data);
                localStorage.setItem('activityId',act.activityId);
                history.push({
                    pathname: "/updateDetails",
                  });

            })

        

        }).catch(function(error){
            console.log(error);
        });
    }


    return (
        <div className={classes.div}>
            <Header/>
            <div>
            <Stepper steps={[{title: '修改基本資訊'},{title: '修改活動內容'},{title: '修改活動封面照片'}]} activeStep={0} />
            </div>
            <div className={classes.topic_part}>
                <Typography variant="h5" className={classes.word}>
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

                                <FormControl 
                                required 
                                error={error} 
                                component="fieldset" className={classes.formControl}>
                                    <FormLabel component="legend">類別</FormLabel>
                                        <FormGroup>
                                        <Grid container>
                                        <Grid item> 
                                        <FormControlLabel
                                            control={<Checkbox checked={act.activityTypes.indexOf("學習") !== -1} value="學習" onChange={handleChangeType} name="learning" />}
                                            label="學習"
                                        />
                                        </Grid>
                                        <Grid item> 
                                        <FormControlLabel
                                            control={<Checkbox checked={act.activityTypes.indexOf("藝文") !== -1} value="藝文" onChange={handleChangeType} name="art" />}
                                            label="藝文"
                                        />
                                        </Grid>
                                        <Grid item> 
                                        <FormControlLabel
                                            control={<Checkbox checked={act.activityTypes.indexOf("親子") !== -1} value="親子" onChange={handleChangeType} name="family" />}
                                            label="親子"
                                        />
                                        </Grid>
                                        <Grid item> 
                                        <FormControlLabel
                                            control={<Checkbox checked={act.activityTypes.indexOf("體驗") !== -1} value="體驗" onChange={handleChangeType} name="experience" />}
                                            label="體驗"
                                        />
                                        </Grid>
                                        <Grid item> 
                                        <FormControlLabel
                                            control={<Checkbox checked={act.activityTypes.indexOf("休閒") !== -1} value="休閒" onChange={handleChangeType} name="leisure" />}
                                            label="休閒"
                                        />
                                        </Grid>
                                        <Grid item> 
                                        <FormControlLabel
                                            control={<Checkbox checked={act.activityTypes.indexOf("運動") !== -1} value="運動" onChange={handleChangeType} name="sport" />}
                                            label="運動"
                                        />
                                        </Grid>
                                        <Grid item> 
                                        <FormControlLabel
                                            control={<Checkbox checked={act.activityTypes.indexOf("戶外") !== -1} value="戶外" onChange={handleChangeType} name="outdoor" />}
                                            label="戶外"
                                        />
                                        </Grid>
                                        <Grid item> 
                                        <FormControlLabel
                                            control={<Checkbox checked={act.activityTypes.indexOf("講座") !== -1} value="講座" onChange={handleChangeType} name="lecture" />}
                                            label="講座"
                                        />
                                        </Grid>
                                        <Grid item> 
                                        <FormControlLabel
                                            control={<Checkbox checked={act.activityTypes.indexOf("資訊") !== -1} value="資訊" onChange={handleChangeType} name="information" />}
                                            label="資訊"
                                        />
                                        </Grid>
                                        </Grid>
                                        </FormGroup>
                                    <FormHelperText className={classes.word}>請至少選擇一項類別</FormHelperText>
                                </FormControl>


                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormLabel component="legend" className={classes.word}>是否供餐</FormLabel>
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
                                            className={classes.button2}
                                            onClick={handleSubmit}
                                        >
                                            下一步
                                        </Button>
                                    </Box>
                                </Grid>
                            </paper>
                            <Grid align-items-xs-flex-end></Grid>
                        </div>

                    </Container>
                </Grid>
            </div>

        </div>



    );
      
}
