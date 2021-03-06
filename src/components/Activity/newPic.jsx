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
        boxSizing: "border-box",
    },
    topic_part : {
        textAlign : "center" , 
        margin : "3% auto"
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
        marginBottom : "5%" ,
        fontFamily : "微軟正黑體" ,
        '&:hover' : {
            background : 'linear-gradient(50deg, #00acc1 40%, #00bfa5 85%)',
            color : "#fff"
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
        fontSize: "12px" ,
        fontFamily : "微軟正黑體"
    } ,
    // button_part : {
    //     margin : "1% auto" ,
    //     display: "flex" ,
    //     justifyContent : "space-between"
    // } ,
    button_part : {
        margin : "1% auto" ,
        marginTop: theme.spacing(3),
        display: "flex" ,
        justifyContent : "space-between"
    } ,
    button1 : {
        background : '#bdbdbd',
        color : "#424242" ,
        minWidth : "100px" ,
        fontFamily : "微軟正黑體" ,
        '&:hover' : {
            background : '#757575',
            color : "#fff"
        } , 
    } ,

    button2 : {
        background : 'linear-gradient(50deg, #00acc1 40%, #00bfa5 85%)',
        color : "#fff" ,
        minWidth : "100px" ,
        fontFamily : "微軟正黑體" ,
        '&:hover' : {
            background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)',
            color : "#fff"
        } , 
    } ,
    word : {
        fontFamily : "微軟正黑體"
    } ,

}));

const NewCover = props => {
    const location = useLocation();

    useEffect(() => {
       console.log(location.pathname); // result: '/secondpage'
       console.log(location.state.detail); // result: 'some_value'
    }, [location]);
   
};

export default function BulidActivity_step4() {
    const classes = useStyles();

    const  [activityId,setactivityId] =  useState(localStorage.getItem('activityId'));

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

    let url = "/api/files/files/activityCover/";
        url = url + activityId;

    
        
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

        


        axios.post(url, formData,config)
          .then(res => {
            console.log("test")
            console.log(res);
            console.log(res.data);
            history.push({
                pathname: "/finishAct",
              });
            
            
          }).catch(function(error){
              alert(error);
              console.log(error);
          });
        
    }

    return (
        <div className={classes.div}>
            <Header />
            <div>
            <Stepper steps={[{title: '活動類別'},{title: '基本資訊'},{title: '活動內容'},{title: '活動封面照片'}]} activeStep={3} />
            </div>
            <div className={classes.topic_part}>
                <Typography variant="h5" className={classes.word}>
                    請上傳活動封面照
                </Typography>
            </div>
            <div>
                <Container className={classes.container}>
                    <div className={classes.upload_btn_wrapper}>
                        {
                            image.preview ? 
                            <>
                                <br/><br/><br/>
                                <img src={ image.preview } width="50%" height="50%" />
                                <br/><br/><br/>
                                <Button className={classes.upload_button} variant="outlined">
                                    <CropOriginalIcon/>
                                    &nbsp;重選圖片
                                    <input type="file" className={classes.btn_file} onChange={handleChange} id="upload-button" accept="image/*" multiple/>
                                </Button>
                                <div>
                                    <span className={classes.span}>* </span>
                                    <Typography variant="overline" className={classes.word}>
                                        本系統僅支持jpg、jpeg和png檔，且單一檔案不得超過
                                    </Typography>
                                    <span className={classes.span}> 1GB</span>
                                    <br/>
                                    <span className={classes.span}>* </span>
                                    <Typography variant="overline" className={classes.word}>
                                        圖片尺寸建議
                                    </Typography>
                                    <span className={classes.span}> 3:2</span>
                                </div>
                            </>
                            :(
                            <>
                                <Button className={classes.upload_button} variant="outlined">
                                    <CropOriginalIcon/>
                                    &nbsp;新增圖片
                                    <input type="file" className={classes.btn_file} onChange={handleChange} id="upload-button" accept="image/*" multiple/>
                                </Button>
                                <div>
                                    <span className={classes.span}>* </span>
                                    <Typography variant="overline" className={classes.word}>
                                        本系統僅支持jpg、jpeg和png檔，且單一檔案不得超過
                                    </Typography>
                                    <span className={classes.span}> 1GB</span>
                                    <br/>
                                    <span className={classes.span}>* </span>
                                    <Typography variant="overline" className={classes.word}>
                                        圖片尺寸建議
                                    </Typography>
                                    <span className={classes.span}> 3:2</span>
                                </div>
                            </>
                        )}
                    </div>
                </Container>
                <Grid item xs={12} sm={6} className={classes.button_part}>
                    <Box lineHeight="normal" m={1}>
                        <Button 
                            className={classes.button1}
                            component={Link}
                            to="/newDetails"
                        >
                            上一步
                        </Button>
                    </Box>
                    <Box lineHeight="normal" m={1}>
                        <Button 
                            className={classes.button2}
                            onClick={handleSubmit}
                        >
                            發佈活動
                        </Button>
                    </Box>
                </Grid> 
            </div>
        </div>
    );
}
