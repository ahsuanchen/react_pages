import React ,{useState}from 'react';
import axios from 'axios';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';




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

    div: {
        boxSizing: "border-box"
    },

    container : {
        maxWidth : "350px" ,
        maxHeight: "220px",
        marginTop:"3%",
        background : '' ,
        display: "flex" ,
        alignItems : "center" ,
        justifyContent : "center" ,
        textAlign : "center" ,
    } ,

    upload_btn_wrapper : {
        position: "relative" ,
        overflow: "hidden" ,
        display: "block" ,
    } ,

    upload_button : {
        border: 0 ,
        color : "#fff" ,
        textAlign : "center" ,
        background : '#00bfa5',
        borderRadius: "5px",
        fontSize: "15px",
        marginBottom : "10%" ,
    } ,

    btn_file : {
        fontSize : "30px" ,
        position: "absolute" ,
        left: 0 ,
        top: 0 ,
        opacity: 0 ,
    } ,


    paper: {
        marginTop: theme.spacing(8),
        flexDirection: 'column',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #81c784 30%, #9ad29c 90%)',
        display: 'flex',
        '& > *': {
            marginTop: theme.spacing(5),
            //margin: theme.spacing(1),
            width: theme.spacing(70),
            height: theme.spacing(20),
        },
    },


    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        height: theme.spacing(1),


    },
    submit: {
        border: 0 ,
        color : "#fff" ,
        textAlign : "center" ,
        background : '#00bfa5',
        borderRadius: "5px",
        fontSize: "10px",
        marginTop : "10%" ,
        margin:"1% 10%"
    },
    font: {
        color: theme.palette.grey,
    },

    img: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 200,
    },

    button: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },

    location: {
        gridRowGap: '20px',

      },
}));

export default function SettingFace() {
    const classes = useStyles();

    const location = useLocation();

    const SettingFacePage = props => {
        const location = useLocation();

        useEffect(() => {
           console.log(location.pathname); // result: '/secondpage'
           //console.log(location.search); // result: '?query=abc'
           console.log(location.state.detail); // result: 'some_value'
        }, [location]);


    };
    const [data , setData] = useState();
    const [image, setImage] = useState({preview: '', raw: ''});
    const handleChange = (e) => {
        setData(e.target.files[0])
      setImage({

        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      })
    };

    console.log(data);
    const  [memberEmail,setMemberEmail] =  useState(localStorage.getItem('memberEmail'));

    let history = useHistory();



    const handleSubmit=(event)=> {

        let formData = new FormData();
        formData.append('file',data,data.name);
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Access-Control-Allow-Origin' : '*'
                }
            }
            console.log(formData);

        let url = "/api/files/uploadFace/";
        url = url + memberEmail;


        axios.post(url, formData,config)
          .then(res => {
            //alert("yes")
            console.log("test")
            console.log(res);
            console.log(res.data);
            history.push({
                pathname: "/finish",
              });


          }).catch(function(error){
              alert(error);
              console.log(error);
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
                        <Typography variant="subtitle1" gutterBottom align="center">
                            設定使用者人臉
                        </Typography>
                        <form className={classes.form} noValidate>

                        {/* <img className={classes.img} src="./img/1.jpg" alt="description of ./img/1.jpg"></img> */}
                        <Grid container justify="center">
                    <Container className={classes.container}>
                    <div className={classes.upload_btn_wrapper}>
                        {
                            image.preview ?
                            <>
                                <img src={ image.preview } width="200" height="120" />
                                <br/>
                                <Button className={classes.upload_button} variant="outlined">

                                    新增檔案
                                    <input type="file" className={classes.btn_file} onChange={handleChange} id="upload-button" accept="image/*" multiple/>
                                </Button>
                                <div>
                                    <Typography variant="overline">
                                        ＊本系統僅支持jpg、jpeg和png檔，且單一檔案不得超過1GB＊
                                    </Typography>
                                </div>
                            </>
                            :(
                            <>
                                <Button className={classes.upload_button} variant="outlined">

                                    新增檔案
                                    <input type="file" className={classes.btn_file} onChange={handleChange} id="upload-button" accept="image/*" multiple/>
                                </Button>
                                <div>
                                    <Typography variant="overline">
                                        ＊本系統僅支持jpg、jpeg和png檔，且單一檔案不得超過4MB＊
                                    </Typography>
                                </div>
                            </>
                        )}
                        </div>
                        </Container>
                        </Grid>


                        </form>
                    </paper>
                    <Grid align-items-xs-flex-end>
                    </Grid>

                </div>
                <Grid container justify="center"  key={10}>
                            <Button
                                type="submit"
                                width="50"
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                //onClick={submit}
                                href="./signupinfo"
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
                                onClick={handleSubmit}
                                //href="./finish"
                            >
                                <ChevronRightIcon />
                                下一步
                             </Button>
                             </Grid>

            </Container>
        </Grid>
    );
}
