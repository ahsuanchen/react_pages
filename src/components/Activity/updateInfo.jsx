import React ,{useState}from 'react';
import axios from 'axios';
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

import { green } from '@material-ui/core/colors';

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
            height: theme.spacing(50),
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

 //radio 顏色設定
const GreenRadio = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);




export default function UpdateActivity_step3() {
    const classes = useStyles();

    // //宣吿要接值的變數
    // const [inputs, setInputs] = React.useState({
    //     activityName:'',
    //     activitySpace:'',
    //     activityStartDate:'',
    //     activityEndDate:'',
    //     startSignUpDate:'',
    //     endSignUpDate:'',
    //     activityLinkName:'',
    //     activityLink:'',
    //     activityMeal:'',
    // });

    const  [activityName,setactivityName] =  useState("");
    const  [activitySpace,setactivitySpace] =  useState("");
    const  [activityStartDate,setactivityStartDate] =  useState("");
    const  [activityEndDate,setactivityEndDate] =  useState("");
    const  [startSignUpDate,setstartSignUpDate] =  useState("");
    const  [endSignUpDate,setendSignUpDate] =  useState("");
    const  [activitySummary,setactivitySummary] =  useState("");
    const  [activityInfo,setactivityInfo] =  useState("");
    const  [activityMeal,setactivityMeal] =  useState("");

    const today  = new Date();
    const year   = today.getFullYear();
    const month  = today.getMonth()+1;
    const day  = today.getDate();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const second  = today.getSeconds();
    console.log(year + "/" + month + "/" + day + " " + hour + ":"+ minute + ":" +second);



    const handleSubmit=(event)=> {
        //event.preventDefault();
        const activity={
            activityName:activityName,
            activitySpace:activitySpace,
            activityStartDate:activityStartDate,
            activityEndDate:activityEndDate,
            startSignUpDate:startSignUpDate,
            endSignUpDate:endSignUpDate,
            activitySummary:activitySummary,
            activityInfo:activityInfo,
            activityMeal:activityMeal
        };
           
        axios({
            method: 'post',
            baseURL: 'http://localhost:8080',
            url: '/api/activity/',
            'Content-Type': 'application/json',
            auth:
            {
                username : "user",
                password : "123"
            }
          })
          .then(res => {
            console.log("test")
            console.log(res);
            console.log(res.data);
            
          }).catch(function(error){
              alert(error);
          });

        // axios.post("/api/activity/", activity,
        // {
            
        //     auth:
        //     {
        //         username : "user",
        //         password : "123"
        //     }
        // })
        //   .then(res => {
        //     console.log("test")
        //     console.log(res);
        //     console.log(res.data);
            
        //   }).catch(function(error){
        //       alert(error);
        //   });
        console.log(activity);
    }

    const [value, setValue] = React.useState();
    const handleChange = event => {
        setValue(event.target.value);
    }

    return (
        <div className={classes.root}>
            <Header/>
            <div>
                <Stepper steps={[{title: '活動類別'},{title: '上傳活動資訊照片'},{title: '基本資訊'},{title: '活動內容'}]} activeStep={2} />
            </div>
            <div className={classes.topic_part}>
                <Typography variant="h4">
                    Step3 : 修改活動基本資訊
                </Typography>
                <br/>
                <Typography variant="h5">
                    (填寫活動資訊)
                </Typography>
            </div>
            <div>
                <Grid className={classes.space}>
                    <Container component="main" maxWidth="md">
                        <CssBaseline />
                        <div className={classes.paper}>
                            <paper>
                                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
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
                                        id="activityStartDate"
                                        name="activityStartDate"
                                        defaultValue={new Date().getFullYear()}
                                        InputLabelProps={{shrink: true,}}
                                        onChange={e=>setactivityStartDate(e.target.value)}
                                    />

                                    <TextField 
                                    margin="normal"
                                    Width='60'
                                    label="活動開始時間" 
                                    type="time" 
                                    id="activityStartDate"
                                    name="activityStartDate"
                                    InputLabelProps={{shrink: true,}} 
                                    onChange={e=>setactivityStartDate(e.target.value)}
                                    />

                                    <TextField 
                                    margin="normal"
                                    Width="50%"
                                    label="活動結束日期" 
                                    type="date" 
                                    id="activityEndDate"
                                    name="activityEndDate"
                                    defaultValue={new Date().getFullYear()}
                                    InputLabelProps={{shrink: true,}} 
                                    onChange={e=>setactivityEndDate(e.target.value)}
                                    />

                                    <TextField 
                                    margin="normal"
                                    Width="50%"
                                    label="活動結束時間" 
                                    type="time" 
                                    id="activityEndDate"
                                    name="activityEndDate"
                                    InputLabelProps={{shrink: true,}}
                                    onChange={e=>setactivityEndDate(e.target.value)} 
                                    />

                                    <TextField 
                                    margin="normal"
                                    width="70%"
                                    label="報名開始日期" 
                                    type="date" 
                                    id="startSignUpDate"
                                    name="startSignUpDate"
                                    defaultValue={new Date().getFullYear()}
                                    InputLabelProps={{shrink: true,}} 
                                    onChange={e=>setstartSignUpDate(e.target.value)}
                                    />

                                    <TextField 
                                    margin="normal"
                                    Width='60'
                                    label="報名開始時間" 
                                    type="time" 
                                    id="startSignUpDate"
                                    name="startSignUpDate"
                                    InputLabelProps={{shrink: true,}} 
                                    onChange={e=>setstartSignUpDate(e.target.value)}
                                    />

                                    <TextField 
                                    margin="normal"
                                    Width="50%"
                                    label="報名結束日期" 
                                    type="date" 
                                    id="endSignUpDate"
                                    name="endSignUpDate"
                                    defaultValue={new Date().getFullYear()}
                                    InputLabelProps={{shrink: true,}} 
                                    onChange={e=>setendSignUpDate(e.target.value)}
                                    />

                                    <TextField 
                                    margin="normal"
                                    Width="50%"
                                    label="報名結束時間" 
                                    type="time" 
                                    id="endSignUpDate"
                                    name="endSignUpDate"
                                    InputLabelProps={{shrink: true,}} 
                                    onChange={e=>setendSignUpDate(e.target.value)}
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
                                                        value="yes" 
                                                        control={<GreenRadio />} 
                                                        label="是" 
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <FormControlLabel 
                                                    value="no" 
                                                    control={<GreenRadio />} 
                                                    label="否" 
                                                    />
                                                </Grid>
                                            </Grid>
                                        </RadioGroup>
                                    </FormControl>
                                    <Grid item xs={12} sm={6} className={classes.button_part}>
                                        <Box lineHeight="normal" m={1}>
                                            <Button 
                                                className={classes.button_part1}
                                                component={Link}
                                                to="/updatePic"
                                            >
                                                上一步
                                            </Button>
                                        </Box>
                                        <Box lineHeight="normal" m={1}>
                                            <Button 
                                                className={classes.button_part2}
                                                component={Link}
                                                to="/updateDetails"
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
                                </form>
                            </paper>
                            <Grid align-items-xs-flex-end></Grid>
                        </div>

                    </Container>
                </Grid>
            </div>
            
        </div>



    );
}
