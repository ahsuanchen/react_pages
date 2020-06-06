import React ,{useState}from 'react'
import ReactPlayer from 'react-player'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    player_wrapper :{
        position: 'relative',
        //paddingTop: '56.25%' /* Player ratio: 100 / (1280 / 720) */
        paddingTop: '25%'
    },
        
    react_player :{
    position: 'absolute',
    top: 0,
    left: 0,
    },
}));
export default function Video() {

    const classes = useStyles();


      return (
        <div className={classes.player_wrapper}>
          <ReactPlayer
            className={classes.react_player}
            //url='https://youtu.be/68ir9IR-vDA'
            url='/assets/images/123.mp4'
            // width='100%'
            // height='100%'
            width="400px"
            height="225px"
            controls={true}
          />
        </div>

        
        
      )
    
  }