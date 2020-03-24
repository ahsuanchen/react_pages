import React ,{useState}from 'react';
import axios from 'axios';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Header from './header3.jsx';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
//import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container';

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
    root: {
        flexGrow: 1,

    },
    space: {
        marginTop: theme.spacing(5),
    },

    paper: {
        marginTop: theme.spacing(5),
        flexDirection: 'column',
        alignItems: 'center',
        background: '#dcedc8',
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




export default function DenseAppBar() {
    const classes = useStyles();

    const  [activityName,setactivityName] =  useState("");
    const  [activityAddress,setactivityAddress] =  useState("");
    const  [activitySpace,setactivitySpace] =  useState("");
    const  [activityStartDate,setactivityStartDate] =  useState("");
    const  [activityEndDate,setactivityEndDate] =  useState("");
    const  [startSignUpDate,setstartSignUpDate] =  useState("");
    const  [endSignUpDate,setendSignUpDate] =  useState("");
    const  [activityWeb,setactivityWeb] =  useState("");
    const  [activityWebLink,setactivityWebLink] =  useState("");
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
            activityAddress:activityAddress,
            activitySpace:activitySpace,
            activityStartDate:activityStartDate,
            activityEndDate:activityEndDate,
            startSignUpDate:startSignUpDate,
            endSignUpDate:endSignUpDate,
            activityWeb:activityWeb,
            activityWebLink:activityWebLink,
            activityMeal:activityMeal
        };
            alert("1")
        axios.post("/api/activity/", activity,
        {
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
        
    }

    const [value, setValue] = React.useState('yes');

    const handleChange = event => {
        setValue(event.target.value);
    }


    



    return (
        <div className={classes.root}>
            <Header/>
            <Grid className={classes.space}>
                <Container component="main" maxWidth="md">
                    <CssBaseline />
                    <Typography component="h1" variant="h5" align="center">
                        基本資訊
                    </Typography>
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
                                    id="activityAddress"
                                    name="activityAddress"
                                    variant="outlined"
                                    onChange={e=>setactivityAddress(e.target.value)}
                                />


                                <TextField
                                    margin="normal"
                                    fullWidth
                                    label="參考網站名稱（例：Facebook）"
                                    id="activityWeb"
                                    name="activityWeb"
                                    variant="outlined"
                                    onChange={e=>setactivityWeb(e.target.value)}
                                />

                                <TextField
                                    margin="normal"
                                    fullWidth
                                    type="url"
                                    label="參考網站連結"
                                    id="activityLink"
                                    name="activityLink"
                                    variant="outlined"
                                    onChange={e=>setactivityWebLink(e.target.value)}
                                />

                                
                             <FormControl component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend">是否供餐</FormLabel>
                                <RadioGroup 
                                    aria-label="是否供餐" 
                                    name="activityMeal" 
                                    // value={value} 
                                    // onChange={e=>setactivityMeal(e.target.value)} 
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
                                <Grid>
                                <IconButton color="primary" aria-label="next step" href="./new2">
                                    <ArrowBackIcon />
                                </IconButton>
                                <IconButton color="primary" aria-label="next step" href="./new4">
                                    <ArrowForwardIcon />
                                </IconButton>
                                </Grid>

                            </form>
                        </paper>
                        <Grid align-items-xs-flex-end>
                        </Grid>

                    </div>

                </Container>
            </Grid>
        </div>



    );
}
