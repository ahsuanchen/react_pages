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

const useStyles = makeStyles(theme => ({
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
        textAlign : "center" ,
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
      }
}));

export default function SettingFace() {
    const classes = useStyles();

    const location = useLocation();

    const [member, setMember] = useState([]);
    useEffect(() => {
        async function fetchDataMem() {
                const result = await axios.get("/api/member/actforfun@gmail.com")
                setMember(result.data);
                console.log(result);
        }
        fetchDataMem();
    }, []);

    const [organizer, setOrganizer] = useState([]);
    // const organizerList = ['organizerName' , 'organizerEmail' , 'organizerPhone' ,'organizerAddress' , 'organizerInfo'];
    useEffect(() => {
        async function fetchDataOrg() {
                const result = await axios.get("/api/organizer/actforfun@gmail.com");
                setOrganizer(result.data);
                // .then(res => {
                //     setMember(res.data)
                //     console.log(res)
                // }).catch(err => {
                //     console.log(err)
                // })
        }
        fetchDataOrg();
    }, []);

    const SettingFacePage = props => {
        const location = useLocation();

        useEffect(() => {
           console.log(location.pathname); // result: '/secondpage'
           //console.log(location.search); // result: '?query=abc'
           console.log(location.state.detail); // result: 'some_value'
        }, [location]);


    };


    const  [memberEmail,setMemberEmail] =  useState(localStorage.getItem('memberEmail'));

    let history = useHistory();

    const [data , setData] = useState([]);
    const [image, setImage] = useState({preview: '', raw: ''});
    const handleChange = (e) => {
        setData(e.target.files)
        console.log(data);
      setImage({

        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      })

    };

    let formData = new FormData();
    async function setform()
    {
        console.log(data);
        let url = "/api/files/files/9";

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
            alert("ok");
        }


    const handleSubmit=(event)=> {




        //formData.append('file',data,data.name);
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Access-Control-Allow-Origin' : '*'
                }
            }
            console.log(formData);

        let url = "/api/files/multifiles/6";



        axios.post(url, formData,config)
          .then(res => {
            //alert("yes")
            console.log("test")
            alert("123");
            console.log(res);
            console.log(res.data);



          }).catch(function(error){
              alert(error);
              console.log(error);
          });

    }

    return (
        <div className={classes.left_menu}>
        <LeftBar/>
        <div className={classes.root}>

          <Typography variant="h4">
             上傳活動相片
              </Typography>
          <hr/>
          <Button variant="outlined">
              新增檔案
              <input type="file" onChange={handleChange} id="upload-button" accept="image/*" multiple/>
          </Button>

          {image.preview ?
          <>
          <GridList cols={3} cellHeight={200} className={classes.gridList}>
            {[...data].map(pic => {
              return  <GridListTile cols={1} key={pic.id}>
                      <img key = {pic.id} src = {URL.createObjectURL(pic)} alt ="no pic " width="250px" height="188px"/>
                      <GridListTileBar title={pic.name} subtitle={<span> {pic.type}</span>} />
                      </GridListTile>
                      //<img key = {pic.id} src = {URL.createObjectURL(pic)} alt ="no pic " width="30%" height="30%"></img>
              })
            }
            </GridList>
          </>
          :(<></>)}

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
