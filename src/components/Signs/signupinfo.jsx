import React ,{useState}from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
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
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';



const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            background: 'linear-gradient(45deg, #009688 30%, #b2ff59 90%)',
            //backgroundColor: theme.palette.common.white,
        },
    },

    root: {
        height: '90vh',
        width:'100%',
        marginTop: theme.spacing(10),
        color: 'white',
        //borderRadius: 10,
        //borderColor: ,
        //background: 'linear-gradient(45deg, #00796b 30%, #00acc1 90%)',

    },

    paper: {
        marginTop: theme.spacing(8),

        flexDirection: 'column',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #81c784 30%, #9ad29c 90%)',
        display: 'flex',
        '& > *': {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
            //margin: theme.spacing(1),
            width: "100%",
            height: "210px",
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
        margin: theme.spacing(3, 0, 2),
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




export default function SignUp() {
    const classes = useStyles();

    const [value, setValue] = React.useState('female');

    const handleChange = event => {
        setValue(event.target.value);
    }


    const  [memberName,setMemberName] =  useState("");
    const  [memberGender,setMemberGender] =  useState("");
    const  [memberBirthday,setMemberBirthday] =  useState("");
    const  [memberPhone,setMemberPhone] =  useState("");
    const  [memberAddress,setMemberAddress] =  useState("");
    const  [memberType,setMemberType] =  useState("0");//只有會員身份時為0

    const handleSubmit=(event)=> {
        //event.preventDefault();
        const member={
            memberName:memberName,
            memberGender:memberGender,
            memberBirthday:memberBirthday,
            memberPhone:memberPhone,
            memberAddress:memberAddress,
            memberType:memberType,
        };
            alert("1")
        axios.post("/api/member/", member,
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



    return (
        <Grid className={classes.root}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Typography className={classes.font} component="h1" variant="h5" align="center">
                    註 冊
                </Typography>
                <div className={classes.paper}>
                    <paper>
                        <Grid>
                        <form className={classes.form} noValidate onSubmit={handleSubmit}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="memberName"
                                label="姓名"
                                onChange={e=>setMemberName(e.target.value)}
                            />

                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend">性別</FormLabel>
                                <RadioGroup aria-label="性別" id="memberGender" value={value} onChange={handleChange} >
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


                            <TextField 
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
                                margin="normal"
                                fullWidth
                                required
                                id="memberPhone"
                                label="聯絡電話"
                                onChange={e=>setMemberPhone(e.target.value)}
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="memberAddress"
                                label="聯絡地址"
                                onChange={e=>setMemberAddress(e.target.value)}
                            />
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
                                // href="./settingface"
                            >
                                <ChevronRightIcon />
                                下一步
                            </Button>
                        </Grid>
                        

                        </form>
                        </Grid>
                    </paper>
                    <Grid align-items-xs-flex-end>
                    </Grid>

                </div>

            </Container>
        </Grid>
    );
}