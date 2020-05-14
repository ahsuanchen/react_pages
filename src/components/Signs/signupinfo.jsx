import React ,{useState}from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";




const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            background: 'linear-gradient(45deg, #009688 30%, #b2ff59 90%)',
        },
    },

    root: {
        //height: '140%',
        width:'100%',
        marginTop: theme.spacing(10),
        color: 'white',
        //borderRadius: 10,
        //borderColor: ,
        //background: 'linear-gradient(45deg, #00796b 30%, #00acc1 90%)',

    },

    paper: {
        marginTop: theme.spacing(5),
        // width: theme.spacing(50),
        flexDirection: 'column',
        alignItems: 'center',
        color:'white',
        background: 'linear-gradient(45deg, #81c784 30%, #9ad29c 90%)',
        display: 'flex',
        '& > *': {
            marginTop: theme.spacing(2),
            //margin: theme.spacing(1),
            width: theme.spacing(40),
            height: theme.spacing(51),
        },
    },


    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '85%',
        height: theme.spacing(1),
        marginLeft: theme.spacing(3),
    },

    submit: {
        textAlign : "center" ,
        background : '#00bfa5',
        color : '#fafafa' ,
        //minWidth : "100px" ,
        '&:hover' : {
            background : '#00bfa5',
            color : "#fff"
        } , 
        fontSize: "10px",
        marginTop : "8%" ,
        margin:"1% 10%",
        marginBottom : "8%" ,
    },
    
    font: {
        color: theme.palette.grey,
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

const SignUpInfoPage = props => {
    const location = useLocation();

    useEffect(() => {
       console.log(location.pathname); // result: '/secondpage'
       //console.log(location.search); // result: '?query=abc'
       console.log(location.state.detail); // result: 'some_value'
    }, [location]);

    
};


export default function SignUpInfo(props) {
    const classes = useStyles();

    const  [memberEmail,setMemberEmail] =  useState(localStorage.getItem('memberEmail'));
    const  [memberPassword,setMemberPassword] =  useState(localStorage.getItem('memberPassword'));
    const  [memberName,setMemberName] =  useState("");
    const  [memberGender,setMemberGender] =  useState("");
    const  [memberBloodType,setMemberBloodType] =  useState("");
    const  [memberID,setMemberID] =  useState("");
    const  [memberBirthday,setMemberBirthday] =  useState("");
    const  [memberPhone,setMemberPhone] =  useState("");
    const  [memberAddress,setMemberAddress] =  useState("");
    const  [emergencyContact,setEmergencyContact] =  useState("");
    const  [emergencyContactRelation,setEmergencyContactRelation] =  useState("");
    const  [emergencyContactPhone,setEmergencyContactPhone] =  useState("");
    const  [memberType,setMemberType] =  useState("0");//只有會員身份時為0
    const  [memberEnabled,setMemberEnabled] =  useState("1");

    let history = useHistory();

    const handleSubmit=(event)=> {

        const member={
            memberEmail:memberEmail,
            memberPassword:memberPassword,
            memberName:memberName,
            memberGender:memberGender,
            memberBloodType:memberBloodType,
            memberID:memberID,
            memberBirthday:memberBirthday,
            memberPhone:memberPhone,
            memberAddress:memberAddress,
            emergencyContact:emergencyContact,
            emergencyContactRelation:emergencyContactRelation,
            emergencyContactPhone:emergencyContactPhone,
            memberType:memberType,
            memberEnabled:memberEnabled,
        };

        localStorage.setItem('memberEmail',memberEmail);

        if(member.memberName == "" || member.memberGender == "" || member.memberBloodType == ""
            || member.memberID == "" || member.memberBirthday == "" || member.memberPhone == "" || member.memberAddress == ""
            || member.emergencyContact == "" || member.emergencyContactRelation == "" || member.emergencyContactPhone == ""){

                alert("所有欄位不得為空")

            }
        else{
            axios.post("/api/member", member)
            .then(res => {
            //alert("yes")
                console.log("test")
                console.log(res);
                console.log(res.data);
                history.push({
                    pathname: "/settingface",
                });
            
            
            }).catch(function(error){
                alert(error);
            });
        }

        
        
    }



    return (
        
        <Grid className={classes.root}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Typography className={classes.font} component="h1" variant="h5" align="center">
                    註 冊
                </Typography>
                <Paper className={classes.paper}>
                    <Grid container justify="center">
                        <Container className={classes.container}>

                            <input
                                type="hidden"
                                id="memberEmail"
                                label="帳號"
                                value={memberEmail}
                                onChange={e=>setMemberEmail(e.target.value)}
                            />

                            <input
                                type="hidden"
                                id="memberPassword"
                                label="密碼"
                                value={memberPassword}
                                onChange={e=>setMemberPassword(e.target.value)}
                            />

                        
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="memberName"
                                label="姓名"
                                autoFocus
                                onChange={e=>setMemberName(e.target.value)}
                            />

                            <FormControl component="fieldset" className={classes.formControl} required>
                                <FormLabel component="legend">性別</FormLabel>
                                <RadioGroup 
                                    aria-label="性別"
                                    id="memberGender" 
                                    value={memberGender} 
                                    onChange={e=>setMemberGender(e.target.value)} 
                                >
                                    <Grid container>
                                        <Grid item> 
                                            <FormControlLabel value="female" control={<GreenRadio size="small" />} label="女性" />
                                        </Grid>
                                        <Grid item> 
                                            <FormControlLabel value="male" control={<GreenRadio size="small" />} label="男性" />
                                        </Grid>
                                        <Grid item>
                                        <FormControlLabel value="other" control={<GreenRadio size="small" />} label="暫不透露" />
                                        </Grid>
                                    </Grid>
                                </RadioGroup>
                            </FormControl>

                            <FormControl component="fieldset" className={classes.formControl} required>
                                <FormLabel component="legend">血型</FormLabel>
                                <RadioGroup 
                                    aria-label="血型" 
                                    id="memberBloodType" 
                                    value={memberBloodType} 
                                    onChange={e=>setMemberBloodType(e.target.value)} 
                                >
                                    <Grid container>
                                        <Grid item> 
                                            <FormControlLabel value="A" control={<GreenRadio size="small" />} label="A" />
                                        </Grid>
                                        <Grid item> 
                                            <FormControlLabel value="B" control={<GreenRadio size="small" />} label="B" />
                                        </Grid>
                                        <Grid item>
                                        <FormControlLabel value="O" control={<GreenRadio size="small" />} label="O" />
                                        </Grid>
                                        <Grid item>
                                        <FormControlLabel value="AB" control={<GreenRadio size="small" />} label="AB" />
                                        </Grid>
                                    </Grid>
                                </RadioGroup>
                            </FormControl>

                            
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                id="memberID"
                                label="身分證字號"
                                onChange={e=>setMemberID(e.target.value)}
                            />

                            <TextField 
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                label="生日" 
                                type="date" 
                                id="memberBirthday"
                                defaultValue={new Date().getFullYear()}
                                InputLabelProps={{shrink: true,}}
                                onChange={e=>setMemberBirthday(e.target.value)} 
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                id="memberPhone"
                                label="聯絡電話"
                                onChange={e=>setMemberPhone(e.target.value)}
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="memberAddress"
                                label="聯絡地址"
                                onChange={e=>setMemberAddress(e.target.value)}
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="emergencyContact"
                                label="緊急聯絡人"
                                onChange={e=>setEmergencyContact(e.target.value)}
                            /> 
                            
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="emergencyContactRelation"
                                label="緊急聯絡人關係"
                                onChange={e=>setEmergencyContactRelation(e.target.value)}
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="emergencyContactPhone"
                                label="緊急聯絡人電話"
                                onChange={e=>setEmergencyContactPhone(e.target.value)}
                            />

                        </Container>
                    </Grid>
                    
                    <Grid align-items-xs-flex-end>
                    </Grid>

                </Paper>
                <Grid container justify="center"  key={10}>
                        
                    <Button
                        type="submit"
                        width="50"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        href="./signup"
                    >
                        <ChevronLeftIcon />
                        上一步
                    </Button>

                    <Button
                        type="submit"
                        Width="50"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onChange={e=>setMemberType(0)}
                        onChange={e=>setMemberEnabled(1)}
                        onClick={handleSubmit}
                    >
                        <ChevronRightIcon />
                        下一步
                    </Button>
                    </Grid>
            </Container>
        </Grid>
    );
}