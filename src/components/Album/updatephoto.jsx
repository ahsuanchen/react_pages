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
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import LeftBar from 'components/Profile/leftbar.jsx';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Header from 'components/Header/PF_header.jsx';
import ListSubheader from '@material-ui/core/ListSubheader';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
    root : {
      width:"100%",
      margin: "2% 2%",
      overflow: "visible"
    },

    container : {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper
    } ,
      left_menu: {
          display: "flex",
          //justifyContent: "space-around",
          minHeight: 800,
          color: "#000"
      },
      gridList: {
        width: "100%",
        height: "100%",
      },
      titleBar: {
        background:
        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      },
      icon: {
        color: 'white',
      },
}));

export default function Updatephoto() {
    var activityId = window.location.href.substring(window.location.href.lastIndexOf("?")+1)
    const classes = useStyles();

    const location = useLocation();

    const [member, setMember] = useState([]);
    const[photo , setPhoto] = useState([]);
    useEffect(() => {
        async function fetchPhoto() {
                const result = await axios.get("/api/photo/activityPhoto/"+activityId)
                setPhoto(result.data);
                console.log(result.data);
        }
        fetchPhoto();
    }, []);

    const [organizer, setOrganizer] = useState([]);
    // const organizerList = ['organizerName' , 'organizerEmail' , 'organizerPhone' ,'organizerAddress' , 'organizerInfo'];

    const  [memberEmail,setMemberEmail] =  useState(localStorage.getItem('memberEmail'));

    let history = useHistory();
    async function refreshPage() {
      setTimeout(function(){

        window.location.reload();
    }, 5000);
      setform();

    }
    async function refreshPage2() {
      setTimeout(function(){
        window.location.reload();
    }, 500);

    }
    const [data , setData] = useState([]);
    const [image, setImage] = useState({preview: '', raw: ''});
    const handleChange = (e) => {
        setData(e.target.files)
        console.log(e.target.files);
      setImage({

        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      })

    };

    let formData = new FormData();
    async function setform()
    {
        console.log(data);
        let url = "/api/files/files/" + activityId;

        console.log(formData);

        for await(const a of data)
        {
            formData = new FormData();

            formData.append('file',a , a.name);
            //await delay();
            fetch(url,{
                method : "post",
                headers: {

                    'Access-Control-Allow-Origin' : '*'
                },
                body : formData
            }).then(async(response) => {


                return response.json();
              }).then(async(response) => {

                debugger;
              }).catch((error) => {
                console.error(error);
              });
            }
            formData = new FormData();
            //alert("ok");
        }

    const handleClick=(event,pic) =>{

      console.log(pic);

      axios.delete("/api/photo",
      {
        data:
        {
        acitivty_Id : pic.activity_Id,
        photoId : pic.photoId
          }
      })
      refreshPage2();
    }

    const handleSubmit=(event)=> {

      //setform();
      alert("上傳中，等待畫面轉跳");
      refreshPage();
    }

    return (
      <div>
      <Header/>

        <div className={classes.left_menu}>
        <LeftBar/>
        <div className={classes.root}>

          <Typography variant="h4">
             管理活動相片
              </Typography>
          <hr/>
          <Button variant="outlined" >
              新增檔案
              <input type="file" onChange={handleChange} id="upload-button" accept="image/*" multiple/>
          </Button>




          {image.preview ?
            <div className={classes.container}>
          <GridList cols={3} cellHeight={200} className={classes.gridList}>
          <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
            <ListSubheader component="div">預覽照片</ListSubheader>
          </GridListTile>
            {[...data].map(pic => {
              return  <GridListTile cols={1} key={pic.id}>
                      <img key = {pic.id} src = {URL.createObjectURL(pic)} alt ="no pic " width="250px" height="188px"/>
                      </GridListTile>
                      //<img key = {pic.id} src = {URL.createObjectURL(pic)} alt ="no pic " width="30%" height="30%"></img>
              })
            }
          </GridList>
          <Button onClick={handleSubmit} variant="outlined" color="secondary">
            確定上傳
          </Button>
           </div>
          :(<></>)}
          {
            photo ?
            <div className={classes.container}>
            <GridList cols={3} cellHeight={200} className={classes.gridList}>
            <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
              <ListSubheader component="div">已上傳照片</ListSubheader>
            </GridListTile>
              {[...photo].map(pic => {
                return  <GridListTile cols={1} key={pic.photoId}>
                        <img key = {pic.photoId} src = {pic.photoId} alt ="no pic " width="250px" height="188px"/>
                        <GridListTileBar
                          title={pic.name}
                          titlePosition="top"
                          actionIcon={
                            <IconButton
                              className={classes.icon}
                              onClick={((e) => handleClick(e,pic))}>
                            <DeleteIcon/>
                            </IconButton>
                          }
                          actionPosition="left"
                          className={classes.titleBar}/>
                        </GridListTile>
                        //<img key = {pic.id} src = {URL.createObjectURL(pic)} alt ="no pic " width="30%" height="30%"></img>
                })
              }
              </GridList>
              </div>
            :(<></>)}
          </div>
        </div>
        </div>
    );
}
{/*
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {useState}from 'react';
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
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import LeftBar from 'components/Profile/leftbar.jsx';

const styles = (theme) => ({
    input: {
        display: 'none'
    },
    root : {
      width:"100%",
      margin: "2% 2%",
      overflow: "visible"
    },

    container : {
        maxWidth : "350px" ,
        maxHeight: "220px",
        marginTop:"3%",
        background : '' ,
        display: "flex" ,
        alignItems : "center" ,
        justifyContent : "center" ,
        textAlign : "center"
    } ,
      left_menu: {
          display: "flex",
          //justifyContent: "space-around",
          minHeight: 800,
          color: "#000"
      },

});
class MediaCapture extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired
    };
    state: {
        images: []
    };
    handleCapture = ({ target }) => {
        const fileReader = new FileReader();
        const name = target.accept.includes('image');
        fileReader.readAsDataURL(target.files[0]);
        fileReader.onload = (e) => {
            this.setState((prevState) => ({
                [name]: [...prevState[name], e.target.result]
            }));
        };
    };
    render() {
        const { classes } = this.props;
        return (
          <div className={classes.left_menu}>
          <LeftBar/>
          <div className={classes.root}>

            <Typography variant="h4">
               上傳活動相片
                </Typography>
            <hr/>
            <Fragment>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="icon-button-photo"
                    onChange={this.handleCapture}
                    type="file"
                />
                <label htmlFor="icon-button-photo">
                    <IconButton color="primary" component="span">
                        <PhotoCamera />
                    </IconButton>
                </label>
            </Fragment>

          </div>
          </div>

        );
    }
}
export default withStyles(styles, { withTheme: true })(MediaCapture);
*/}
