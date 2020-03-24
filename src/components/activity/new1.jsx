import React from './node_modules/react';
import { makeStyles } from './node_modules/@material-ui/core/styles';
import AppBar from './node_modules/@material-ui/core/AppBar';
import CssBaseline from './node_modules/@material-ui/core/CssBaseline';
import Toolbar from './node_modules/@material-ui/core/Toolbar';
import Typography from './node_modules/@material-ui/core/Typography';
import IconButton from './node_modules/@material-ui/core/IconButton';
import ChevronLeftIcon from './node_modules/@material-ui/icons/ChevronLeft';
import ArrowBackIcon from './node_modules/@material-ui/icons/ArrowBack';
import ArrowForwardIcon from './node_modules/@material-ui/icons/ArrowForward';
import GridList from './node_modules/@material-ui/core/GridList';
import GridListTile from './node_modules/@material-ui/core/GridListTile';
import GridListTileBar from './node_modules/@material-ui/core/GridListTileBar';
import StarBorderIcon from './node_modules/@material-ui/icons/StarBorder';
//import tileData from './tileData';
import image from './logo1.png';
import { blue } from './node_modules/@material-ui/core/colors';


const tileData = [
    {

        img: image,
        title: 'Image',
        author: 'author',
        featured: true,
    },
    //     {
    //    [etc...]
    //    },
];


const useStyles = makeStyles(theme => ({
    root: {
        //flexGrow: 1,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },

    gridList: {
        width: 500,
        height: 450,
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },


    control: {
        padding: theme.spacing(2),
    },

    menuButton: {
        marginRight: theme.spacing(2),
    },

    paper: {
        marginTop: theme.spacing(8),

        flexDirection: 'column',
        alignItems: 'center',
        background: 'lightblue',
        display: 'flex',
        '& > *': {
            marginTop: theme.spacing(5),
            //margin: theme.spacing(1),
            width: theme.spacing(30),
            height: theme.spacing(20),
        },
    },





}));

export default function SpacingGrid() {

    const classes = useStyles();


    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <ChevronLeftIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        返回首頁
                    </Typography>
                </Toolbar>
            </AppBar>
            <CssBaseline />
                    <Typography component="h1" variant="h5" align="center">
                        基本資訊
                    </Typography>
                    <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
            <IconButton color="primary" aria-label="next step" href="./signup.js">
                <ArrowBackIcon />
            </IconButton>
            <IconButton color="primary" aria-label="next step" href="./signup.js">
                <ArrowForwardIcon />
            </IconButton>
        </div>
    );
}