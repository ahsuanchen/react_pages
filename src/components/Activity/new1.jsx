import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
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
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    div: {
        boxSizing: "border-box"
    },
    topic_part : {
        textAlign : "center" , 
        margin : "2% auto"
    } ,
    type_part : {
        maxWidth : "750px"
    } ,
    card : {
        background : "#E0E0E0" ,
        maxWidth : "200px" ,
        textAlign : "center" , 
        margin : "5% auto" ,
    } ,
    cardActived : {
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)',
        color : "#fff"
    } ,
    card_content : {
        width : "100%" ,
        height : "150px" ,
    } ,
    icon_part : {
        margin : "10% auto" ,
        fontSize : "150px"
    } , 
    typeword_part : {
        fontSize : "24px"
    } ,
    button_part : {
        background : 'linear-gradient(50deg, #00bfa5 40%, #00acc1 85%)',
        color : "#fff" ,
        minWidth : "100px" ,
        marginLeft : "50%", 
        '&:hover' : {
            background : '#E0E0E0',
            color : "#000"
        } , 
    }
}));

export default function BulidActivity() {
    const classes = useStyles();

    const [cardActive, setCardActive] = React.useState();
    const clickCard = event => {
        const active = cardActive;
        setCardActive(!active);
    };

    return (
        <div className={classes.div}>
            <Header/>
            <div>
                <Stepper steps={[{title: '活動類別'},{title: '上傳活動資訊照片'},{title: '基本資訊'},{title: '活動內容'}]} activeStep={0} />
            </div>
            <div className={classes.topic_part}>
                <Typography variant="h4">
                    Step1 : 活動類別
                </Typography>
                <br/>
                <Typography variant="h5">
                    (選擇一種活動類別)
                </Typography>
            </div>
            <div>
                <Container className={classes.type_part}>
                    <Grid container direction="row">
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={[classes.card , cardActive ? classes.cardActived: '']} onClick={clickCard}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.card_content}
                                        title="type_1"
                                    >
                                        <AccessTimeIcon className={classes.icon_part} />
                                    </CardMedia>
                                    <CardContent className={classes.typeword_part}>
                                        實驗1
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.card_content}
                                        title="type_4"
                                    >
                                        <AccessTimeIcon className={classes.icon_part} />
                                    </CardMedia>
                                    <CardContent className={classes.typeword_part}>
                                        學術2
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.card_content}
                                        title="type_7"
                                    >
                                        <AccessTimeIcon className={classes.icon_part} />
                                    </CardMedia>
                                    <CardContent className={classes.typeword_part}>
                                        表演3
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.card_content}
                                        title="type_2"
                                    >
                                        <AccessTimeIcon className={classes.icon_part} />
                                    </CardMedia>
                                    <CardContent className={classes.typeword_part}>
                                        實驗1
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.card_content}
                                        title="type_5"
                                    >
                                        <AccessTimeIcon className={classes.icon_part} />
                                    </CardMedia>
                                    <CardContent className={classes.typeword_part}>
                                        學術2
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.card_content}
                                        title="type_8"
                                    >
                                        <AccessTimeIcon className={classes.icon_part} />
                                    </CardMedia>
                                    <CardContent className={classes.typeword_part}>
                                        表演3
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.card_content}
                                        title="type_3"
                                    >
                                        <AccessTimeIcon className={classes.icon_part} />
                                    </CardMedia>
                                    <CardContent className={classes.typeword_part}>
                                        實驗1
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.card_content}
                                        title="type_6"
                                    >
                                        <AccessTimeIcon className={classes.icon_part} />
                                    </CardMedia>
                                    <CardContent className={classes.typeword_part}>
                                        學術2
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.card_content}
                                        title="type_9"
                                    >
                                        <AccessTimeIcon className={classes.icon_part} />
                                    </CardMedia>
                                    <CardContent className={classes.typeword_part}>
                                        表演3
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Box lineHeight={5} m={2}>
                                <Button 
                                    className={classes.button_part}
                                    component={Link}
                                    to="/newPic"
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