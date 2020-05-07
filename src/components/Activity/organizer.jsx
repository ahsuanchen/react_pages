import React , {useState} from 'react';
import axios from 'axios';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
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

    //取memberEmail
    const [member,setMember] = useState({
        memberEmail:'',
    });

    useEffect(() =>{
    async function fetchData(){
        const url = '/api/login/name';
        const result = await axios.get(url);
        setMember(result.data);
      }
      fetchData();
    },[]);

    const[organ, setOrgan] = useState({
        memberEmail:'',
        organizerName:'',
        organizerEmail:'',
        organizerPhone:'',
        organizerAddress:'',
        organizerInfo:''
    });

   
    const handleChange = newOrganizer => event => {
        setOrgan({...organ, [newOrganizer]: event.target.value});
    
    }

    let history = useHistory();

    const handleSubmit = event => {
        
        //event.preventDefault();
        const organizer={
            memberEmail: member.memberEmail,
            organizerName: organ.organizerName,
            organizerEmail: organ.organizerEmail,
            organizerPhone: organ.organizerPhone,
            organizerAddress: organ.organizerAddress,
            organizerInfo: organ.organizerInfo
        };

        if(organizer.organizerName.length > 0 && organizer.organizerEmail.length > 0 && organizer.organizerPhone.length > 0 
            && organizer.organizerAddress.length > 0 && organizer.organizerInfo.length > 0){

        axios.post("/api/organizer", organizer)
          .then(res => {
            alert("yes")
            console.log(res);
            console.log(res.data);
            history.push({
                pathname: "/new1",
              });
            
          }).catch(function(error){
              alert(error);
          });
        }
        else{
            alert("欄位不得為空")
        }
        
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
                        <input
                            type="hidden"
                            value={member.memberEmail}
                            //onChange={e=>setMemberEmail(e.target.value)}
                            onChange={handleChange('memberEmail')}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="organizerName"
                            label="主辦單位名稱"
                            variant="outlined"
                            onChange={handleChange('organizerName')}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="organizerEmail"
                            label="主辦單位信箱"
                            variant="outlined"
                            onChange={handleChange('organizerEmail')}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="organizerPhone"
                            label="主辦單位電話號碼"
                            variant="outlined"
                            onChange={handleChange('organizerPhone')}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="organizerAddress"
                            label="主辦單位地址"
                            multiline
                            rows="2"
                            variant="outlined"
                            onChange={handleChange('organizerAddress')}
                        />


                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="organizerInfo"
                            label="主辦單位簡介"
                            multiline
                            rows="4"
                            placeholder="上限一百字"
                            variant="outlined"
                            onChange={handleChange('organizerInfo')}
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
