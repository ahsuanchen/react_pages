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
    const [data , setData] = useState([]);
    const [image, setImage] = useState({preview: '', raw: ''});
    const handleChange = (e) => {
        setData(e.target.files)
      setImage({

        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      })
    };

    console.log(data);
    let formData = new FormData();
  for(var i = 0 ; i < data.length ; i++)
  {
    formData.append(data[i].name,data[i]);
  }

    const  [memberEmail,setMemberEmail] =  useState(localStorage.getItem('memberEmail'));

    let history = useHistory();

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
        <Grid className={classes.root}>

          <Typography variant="h4">
             上傳活動相片
              </Typography>
          <hr/>

        </Grid>
        </div>
    );
}
