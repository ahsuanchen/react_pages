import React ,{useState}from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Header from './header3.jsx';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
//import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
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
        background: '#dcedc8',
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


                            <IconButton type="submit" color="primary" aria-label="next step" onClick={handleSubmit}>
                                <ArrowForwardIcon />
                            </IconButton>

                        {/* </form> */}
                    </paper>
                    <Grid align-items-xs-flex-end>
                    </Grid>

                </div>

            </Container>
        </Grid>
        </div>
        


    );
}
