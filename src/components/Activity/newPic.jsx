import React ,{useState}from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/PF_header.jsx';
import { Link } from 'react-router-dom';
import Stepper from 'react-stepper-horizontal'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    div: {
        boxSizing: "border-box"
    },
    topic_part : {
        textAlign : "center" , 
        margin : "2% auto"
    } ,
    container : {
        minHeight : "400px" ,
        background : "#f4f4f4" , 
        textAlign : "center" ,
    } ,
    label_part : {
        display: "flex" , 
        alignItems : "center" , 
        textAlign : "center" ,
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
            background : '#E0E0E0',
            color : "#000"
        }
    } ,
    btn_file : {
        display : "none" ,
        alignItems : "center" ,
        justifyItems : "center" ,
        // fontSize : "50px" ,
        // position: "absolute" ,
        // left: 0 ,
        // top: 0 ,
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

export default function DenseAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.div}>
            <Header />
            <div>
                <Stepper steps={[{title: '活動類別'},{title: '上傳活動資訊照片'},{title: '基本資訊'},{title: '活動內容'}]} activeStep={1} />
            </div>
            <div className={classes.topic_part}>
                <Typography variant="h4">
                    Step2 : 上傳活動資訊照片
                </Typography>
                <br/>
                <Typography variant="h5">
                    (上傳您的封面照)
                </Typography>
            </div>
            <div>
                <Container className={classes.container}>
                    <div >
                        <label htmlFor="upload-button">
                            <Button className={classes.upload_button} variant="outlined">
                                新增檔案
                            </Button>
                        </label>
                        <input type="file" id="upload-button" accept="image/*" className={classes.btn_file} multiple/>
                        {/* <TextField
                                    accept="image/*"
                                    className={classes.btn_file}
                                    multiple
                                    type="file"
                                    // label=""
                                /> */}
                        {/* <Button
                            className={classes.button}
                            variant="outlined"
                            type="file"
                        >
                            上傳檔案
                        </Button> */}
                    </div>
                    <div>
                        <span className={classes.span}>* </span>
                        <Typography variant="overline">
                            本系統僅支持jpg、jpeg和png檔，且單一檔案不得超過
                        </Typography>
                        <span className={classes.span}> 1GB</span>
                    </div>
                </Container>
                <Grid item xs={12} sm={6} className={classes.button_part}>
                    <Box lineHeight="normal" m={1}>
                        <Button 
                            className={classes.button_part1}
                            component={Link}
                            to="/new1"
                        >
                            上一步
                        </Button>
                    </Box>
                    <Box lineHeight="normal" m={1}>
                        <Button 
                            className={classes.button_part2}
                            component={Link}
                            to="/newInfo"
                        >
                            下一步
                        </Button>
                    </Box>
                </Grid> 
            </div>
            {/* <Grid className={classes.space}>
                <Container component="main" maxWidth="md">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <paper>
                            <form className={classes.form} noValidate>

                            <TextField 
                                margin="normal"
                                fullWidth
                                label="選擇檔案" 
                                type="file" 
                                />

                            <Button 
                                //type="submit"
                                width="50"
                                className={classes.submit}
                                variant="outlined"
                                align="center"
                                >
                                    上傳檔案
                            </Button>


                                <IconButton color="primary" aria-label="next step" href="./new1">
                                    <ArrowBackIcon />
                                </IconButton>
                                <IconButton color="primary" aria-label="next step" href="./newInfo">
                                    <ArrowForwardIcon />
                                </IconButton>

                            </form>
                        </paper>
                        <Grid align-items-xs-flex-end>
                        </Grid>
                    </div>
                </Container>
            </Grid> */}
        </div>



    );
}
