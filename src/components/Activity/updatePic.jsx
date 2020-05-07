import React ,{useState}from 'react';
import axios from 'axios';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/PF_header.jsx';
import { Link } from 'react-router-dom';
import Stepper from 'react-stepper-horizontal'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';

const useStyles = makeStyles(theme => ({
    div: {
        boxSizing: "border-box"
    },
    topic_part : {
        textAlign : "center" , 
        margin : "2% auto"
    } ,
    container : {
        minHeight : "600px" ,
        background : "#f4f4f4" , 
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
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)',
        borderRadius: "5px",
        fontSize: "20px",
        marginBottom : "10%" ,
        '&:hover' : {
            background : 'none',
            color : "#000"
        }
    } ,
    btn_file : {
        fontSize : "30px" ,
        position: "absolute" ,
        left: 0 ,
        top: 0 ,
        opacity: 0 ,
    } ,
    span : {
        color : "red" ,
        fontSize: "12px"
    } ,
    button_part : {
        margin : "1% auto" ,
        display: "flex" ,
        justifyContent : "space-between"
    } ,
    button_part1 : {
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)',
        color : "#fff" ,
        minWidth : "100px" ,
        '&:hover' : {
            background : '#E0E0E0',
            color : "#000"
        } , 
    } ,
    button_part2 : {
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)',
        color : "#fff" ,
        minWidth : "100px" ,
        '&:hover' : {
            background : '#E0E0E0',
            color : "#000"
        } , 
    }

}));

export default function UpdateActivity_step2() {

    const classes = useStyles();

    const [act, setAct] = useState({
        // activityId:localStorage.getItem('activityId'),
        activityId:"10",
        activityCover:'',
    });

    let url = "api/activity/";
    url = url + act.activityId;

    useEffect(() => {
        async function fetchDataActContent() {
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
        fetchDataActContent();
        
    }, []);


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
    // const handleUpload = async (e) => {
    //   e.preventDefault()
    //   const formData = new FormData()
    //   formData.append('image', image.raw)
    //   const config = { headers: { 'content-type': 'multipart/form-data' } }
    //   await uploadToBackend('endpoint', {image: image.raw}, config)
    // };

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

        
        let url_update = "/api/files/files/activityCover/";
        url_update = url_update + act.activityId;


        axios.post(url_update, formData,config)
          .then(res => {
            //alert("yes")
            console.log("test")
            console.log(res);
            console.log(res.data);
            history.push({
                pathname: "/.",
              });
            
            
          }).catch(function(error){
              alert(error);
              console.log(error);
          });
        
    }
    let cover_name = "./" + act.activityCover;

    return (
        <div className={classes.div}>
            <Header />
            <div>
            <Stepper steps={[{title: '修改基本資訊'},{title: '修改活動內容'},{title: '修改活動封面照片'}]} activeStep={1} />
            </div>
            <div className={classes.topic_part}>
                <Typography variant="h4">
                    修改活動資訊照片
                </Typography>
                <br/>
                <Typography variant="h5">
                    (上傳您的封面照)
                </Typography>
            </div>
            <div>
                <Container className={classes.container}>
                    <div className={classes.upload_btn_wrapper}>
                        {
                            image.preview ? 
                            <>
                                <img src={ image.preview } width="800" height="480" />
                                <br/>
                                <Button className={classes.upload_button} variant="outlined">
                                    <CropOriginalIcon/>
                                    &nbsp;新增檔案
                                    <input type="file" className={classes.btn_file} onChange={handleChange} id="upload-button" accept="image/*" multiple/>
                                </Button>
                                <div>
                                    <span className={classes.span}>* </span>
                                    <Typography variant="overline">
                                        本系統僅支持jpg、jpeg和png檔，且單一檔案不得超過
                                    </Typography>
                                    <span className={classes.span}> 1GB</span>
                                </div>
                            </>
                            :(
                            <>
                            {/* 修改前 */}
                                <img src= "./assets/images/10/actfun.png"  width="800" height="480" />
                                <br/>
                                <Button className={classes.upload_button} variant="outlined">
                                    <CropOriginalIcon/>
                                    &nbsp;新增檔案
                                    <input type="file" className={classes.btn_file} onChange={handleChange} id="upload-button" accept="image/*" multiple/>
                                </Button>
                                <div>
                                    <span className={classes.span}>* </span>
                                    <Typography variant="overline">
                                        本系統僅支持jpg、jpeg和png檔，且單一檔案不得超過
                                    </Typography>
                                    <span className={classes.span}> 1GB</span>
                                </div>
                            </>
                        )}
                    </div>
                </Container>
                <Grid item xs={12} sm={6} className={classes.button_part}>
                    <Box lineHeight="normal" m={1}>
                        <Button 
                            className={classes.button_part1}
                            component={Link}
                            to="/updateDetails"
                        >
                            上一步
                        </Button>
                    </Box>
                    <Box lineHeight="normal" m={1}>
                        <Button 
                            className={classes.button_part2}
                            component={Link}
                            to="/manageActivity"
                        >
                            下一步
                        </Button>
                    </Box>
                </Grid> 
            </div>
        </div>
    );
}
