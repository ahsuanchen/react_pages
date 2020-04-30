import React , {useState} from 'react';
import axios from 'axios';
import { Link , useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/PF_header.jsx';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
//import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';



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
        background: '#f4f4f4',
        display: 'flex',
        '& > *': {
            marginTop: theme.spacing(5),
            width: theme.spacing(40),
            height: theme.spacing(30),
        },
    },
    form: {
        width: '100%',
        height: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
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
    }
}));

export default function Organizer() {
    const classes = useStyles();

    // const[inputs, setInputs] = React.useState({
    //     organizerName:'',
    //     organizerEmail:'',
    //     organizerPhone:'',
    //     organizerAddress:'',
    //     organizerInfo:''
    // });

    // const handleChange = user => event =>{
    //     event.persist();
    //     setInputs(inputs =>({...inputs, [user]: event.target.value}));
    // }

    // const handleSubmit = () =>{
    //     fetch('/organizer', {
    //         method: 'post',
            
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },

    //         body: JSON.stringify({
    //             organizerName: inputs.organizerName,
    //             organizerEmail: inputs.organizerEmail,
    //             organizerPhone: inputs.organizerPhone,
    //             organizerAddress: inputs.organizerAddress,
    //             organizerInfo: inputs.organizerInfo
    //         }),
          
    //       })

    //       .then(res => {
    //         console.log("test")
    //         console.log(res);
    //         console.log(res.data);
            
    //       }).catch(function(error){
    //           alert(error);
    //       });
    // }
    const  [organizerName,setorganizerName] =  useState("");
    const  [organizerEmail,setorganizerEmail] =  useState("");
    const  [organizerPhone,setorganizerPhone] =  useState("");
    const  [organizerAddress,setorganizerAddress] =  useState("");
    const  [organizerInfo,setorganizerInfo] =  useState("");

    let history = useHistory();

    const handleSubmit=(event)=> {
        
        //event.preventDefault();
        const organizer={
            organizerName:organizerName,
            organizerEmail:organizerEmail,
            organizerPhone:organizerPhone,
            organizerAddress:organizerAddress,
            organizerInfo:organizerInfo
            // organizerName: inputs.organizerName,
            // organizerEmail: inputs.organizerEmail,
            // organizerPhone: inputs.organizerPhone,
            // organizerAddress: inputs.organizerAddress,
            // organizerInfo: inputs.organizerInfo
        };

        axios.post("/api/organizer", organizer,
        {
            auth:
            {
                username : "user",
                password : "123"
            }
        })
          .then(res => {
            alert("yes")
            console.log("test")
            console.log(res);
            console.log(res.data);
            // history.push({
            //     pathname: "/settingface",
            //   });
            
          }).catch(function(error){
              alert(error);
          });
        
    }

    return (
        <div className={classes.root}>
            <Header/>
            <Grid className={classes.space}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Typography component="h1" variant="h5" align="center">
                    新增主辦單位
                    </Typography>
                <div className={classes.paper}>
                    <paper>
                        {/* <form className={classes.form} noValidate onSubmit={handleSubmit}> */}
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="organizerName"
                                label="主辦單位名稱"
                                name="organizerName"
                                variant="outlined"
                                onChange={e=>setorganizerName(e.target.value)}
                                //onChange={handleChange}
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="organizerEmail"
                                label="主辦單位信箱"
                                name="organizerEmail"
                                variant="outlined"
                                //onChange={handleChange}
                                onChange={e=>setorganizerEmail(e.target.value)}
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="organizerPhone"
                                label="主辦單位電話號碼"
                                name="organizerPhone"
                                variant="outlined"
                                //onChange={handleChange}
                                onChange={e=>setorganizerPhone(e.target.value)}
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="organizerAddress"
                                label="主辦單位地址"
                                multiline
                                rows="2"
                                name="organizerAddress"
                                variant="outlined"
                                //onChange={handleChange}
                                onChange={e=>setorganizerAddress(e.target.value)}
                            />


                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="organizerInfo"
                                name="organizerInfo"
                                label="主辦單位簡介"
                                multiline
                                rows="4"
                                placeholder="上限一百字"
                                variant="outlined"
                                // onChange={handleChange}
                                onChange={e=>setorganizerInfo(e.target.value)}
                            />

                            <Grid item xs={12} sm={6} className={classes.button_part}>
                                <Box lineHeight="normal" m={1}>
                                    <Button 
                                        className={classes.button_part1}
                                        component={Link}
                                        to="/"
                                    >
                                        返回首頁
                                    </Button>
                                </Box>
                                <Box lineHeight="normal" m={1}>
                                    <Button
                                        type="submit"
                                        className={classes.button_part2}
                                        onClick={handleSubmit}
                                    >
                                        確認申請
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
