import React ,{useState} from 'react';
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
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import GroupIcon from '@material-ui/icons/Group';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import ComputerIcon from '@material-ui/icons/Computer';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import HotTubIcon from '@material-ui/icons/HotTub';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import LandscapeIcon from '@material-ui/icons/Landscape';
import PaletteIcon from '@material-ui/icons/Palette';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles(theme => ({
    div: {
        boxSizing: "border-box"
    },
    topic_part : {
        textAlign : "center" , 
        margin : "3% auto"
    } ,
    type_part : {
        maxWidth : "950px"
    } ,
    card : {
        background : "#E0E0E0" ,
        maxWidth : "200px" ,
        textAlign : "center" , 
        margin : "10% auto" ,
    } ,
    cardActived : {
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)',
        color : "#fff"
    } ,
    card_content : {
        width : "100%" ,
        height : "135px" ,
    } ,
    icon_part : {
        margin : "20% auto" ,
        fontSize : "80px"
    } , 
    typeword : {
        fontSize : "20px" ,
        fontFamily : "微軟正黑體"
    } ,
    button : {
        background : 'linear-gradient(50deg, #00acc1 40%, #00bfa5 85%)',
        color : "#fff" ,
        minWidth : "100px" ,
        marginLeft : "50%" ,
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

export default function BulidActivity_step1() {
    const classes = useStyles();

    const  [activityTypes,setActivityTypes] =  useState("");

    let types = []
    

    //學術
    const [cardActive1, setCardActive1] = React.useState();
    const clickCard1 = event => {
        const active = cardActive1;
        setCardActive1(!active);
    };
    //資訊
    const [cardActive2, setCardActive2] = React.useState();
    const clickCard2 = event => {
        const active = cardActive2;
        setCardActive2(!active);
    };
    //體驗
    const [cardActive3, setCardActive3] = React.useState();
    const clickCard3 = event => {
        const active = cardActive3;
        setCardActive3(!active);
    };
    //講座
    const [cardActive4, setCardActive4] = React.useState();
    const clickCard4 = event => {
        const active = cardActive4;
        setCardActive4(!active);
    };
    //休閒
    const [cardActive5, setCardActive5] = React.useState();
    const clickCard5 = event => {
        const active = cardActive5;
        setCardActive5(!active);
    };
    //親子
    const [cardActive6, setCardActive6] = React.useState();
    const clickCard6 = event => {
        const active = cardActive6;
        setCardActive6(!active);
    };
    //藝文
    const [cardActive7, setCardActive7] = React.useState();
    const clickCard7 = event => {
        const active = cardActive7;
        setCardActive7(!active);
    };
    //運動
    const [cardActive8, setCardActive8] = React.useState();
    const clickCard8 = event => {
        const active = cardActive8;
        setCardActive8(!active);
    };
    //戶外
    const [cardActive9, setCardActive9] = React.useState();
    const clickCard9 = event => {
        const active = cardActive9;
        console.log(active);
        setCardActive9(!active);
    };
    //美食
    const [cardActive10, setCardActive10] = React.useState();
    const clickCard10 = event => {
        const active = cardActive10;
        setCardActive10(!active);
    };
    //遊戲
    const [cardActive11, setCardActive11] = React.useState();
    const clickCard11 = event => {
        const active = cardActive11;
        setCardActive11(!active);
    };
    //其他
    const [cardActive12, setCardActive12] = React.useState();
    const clickCard12 = event => {
        const active = cardActive12;
        setCardActive12(!active);
    };

    console.log(types);

    let history = useHistory();

    const handleSubmit=(event)=> {

        if(cardActive1 == true){
            types.push("學術")
        }
        if(cardActive2 == true){
            types.push("資訊")
        }
        if(cardActive3 == true){
            types.push("體驗")
        }
        if(cardActive4 == true){
            types.push("講座")
        }
        if(cardActive5 == true){
            types.push("休閒")
        }
        if(cardActive6 == true){
            types.push("親子")
        }
        if(cardActive7 == true){
            types.push("藝文")
        }
        if(cardActive8 == true){
            types.push("運動")
        }
        if(cardActive9 == true){
            types.push("戶外")
        }
        if(cardActive10 == true){
            types.push("美食")
        }
        if(cardActive11 == true){
            types.push("遊戲")
        }
        if(cardActive12 == true){
            types.push("其他")
        }

        const act={
            activityTypes:types
        }

        localStorage.setItem('activityTypes', act.activityTypes);

        history.push({
            pathname: "/newInfo",
          });
    
        }
        

    return (
        <div className={classes.div}>
            <Header/>
            <div>
                <Stepper steps={[{title: '活動類別'},{title: '基本資訊'},{title: '活動內容'},{title: '活動封面照片'}]} activeStep={0} />
            </div>
            <div className={classes.topic_part}>
                <Typography variant="h5" className={classes.word}>
                    請選擇至少一種活動類別
                </Typography>
            </div>
            <div>
                <Container className={classes.type_part}>
                    <Grid container direction="row">
                        <Grid item xs={12} sm={6} md={3}>
                            <Card className={[classes.card , cardActive1 ? classes.cardActived: '']} onClick={clickCard1}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.card_content}
                                        title="type_1"
                                    >
                                        <ImportContactsIcon className={classes.icon_part} />
                                    </CardMedia>
                                    <CardContent className={classes.typeword}>
                                        學術
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className={[classes.card , cardActive5 ? classes.cardActived: '']} onClick={clickCard5}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.card_content}
                                        title="type_5"
                                    >
                                        <BeachAccessIcon className={classes.icon_part} />
                                    </CardMedia>
                                    <CardContent className={classes.typeword}>
                                        休閒
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className={[classes.card , cardActive9 ? classes.cardActived: '']} onClick={clickCard9}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.card_content}
                                        title="type_9"
                                    >
                                        <LandscapeIcon className={classes.icon_part} />
                                    </CardMedia>
                                    <CardContent className={classes.typeword}>
                                        戶外
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card className={[classes.card , cardActive2 ? classes.cardActived: '']} onClick={clickCard2}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.card_content}
                                        title="type_2"
                                    >
                                        <ComputerIcon className={classes.icon_part} />
                                    </CardMedia>
                                    <CardContent className={classes.typeword}>
                                        資訊
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className={[classes.card , cardActive6 ? classes.cardActived: '']} onClick={clickCard6}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.card_content}
                                        title="type_6"
                                    >
                                        <ChildCareIcon className={classes.icon_part} />
                                    </CardMedia>
                                    <CardContent className={classes.typeword}>
                                        親子
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className={[classes.card , cardActive10 ? classes.cardActived: '']} onClick={clickCard10}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.card_content}
                                        title="type_10"
                                    >
                                        <FastfoodIcon className={classes.icon_part} />
                                    </CardMedia>
                                    <CardContent className={classes.typeword}>
                                        美食
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card className={[classes.card , cardActive3 ? classes.cardActived: '']} onClick={clickCard3}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.card_content}
                                        title="type_3"
                                    >
                                        <HotTubIcon className={classes.icon_part} />
                                    </CardMedia>
                                    <CardContent className={classes.typeword}>
                                        體驗
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className={[classes.card , cardActive7 ? classes.cardActived: '']} onClick={clickCard7}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.card_content}
                                        title="type_7"
                                    >
                                        <PaletteIcon className={classes.icon_part} />
                                    </CardMedia>
                                    <CardContent className={classes.typeword}>
                                        藝文
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className={[classes.card , cardActive11 ? classes.cardActived: '']} onClick={clickCard11}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.card_content}
                                        title="type_11"
                                    >
                                        <SportsEsportsIcon className={classes.icon_part} />
                                    </CardMedia>
                                    <CardContent className={classes.typeword}>
                                        遊戲
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card className={[classes.card , cardActive4 ? classes.cardActived: '']} onClick={clickCard4}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.card_content}
                                        title="type_4"
                                    >
                                        <GroupIcon className={classes.icon_part} />
                                    </CardMedia>
                                    <CardContent className={classes.typeword}>
                                        講座
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className={[classes.card , cardActive8 ? classes.cardActived: '']} onClick={clickCard8}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.card_content}
                                        title="type_8"
                                    >
                                        <SportsBasketballIcon className={classes.icon_part} />
                                    </CardMedia>
                                    <CardContent className={classes.typeword}>
                                        運動
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className={[classes.card , cardActive12 ? classes.cardActived: '']} onClick={clickCard12}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.card_content}
                                        title="type_12"
                                    >
                                        <MoreHorizIcon className={classes.icon_part} />
                                    </CardMedia>
                                    <CardContent className={classes.typeword}>
                                        其他
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Box lineHeight={5} m={2}>
                                <Button 
                                    className={classes.button}
                                    onClick={handleSubmit}
                                    // component={Link}
                                    // to="/newInfo"
                                >
                                    下一步
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
}