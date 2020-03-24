import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Image from 'assets/images/1.jpg';

const useStyles = makeStyles(theme => ({
  gridList: {
    width: 900,
    height: 500,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  title: {
    'fontSize' : '18px',
    'fontWeight' : 'bolder',
  }
}));


const imageList = [1,2,3,4,5];

export default function TestGridList(props) {
  const classes = useStyles();

  return (
    <div>
      <GridList cols={3} cellHeight={200} className={classes.gridList}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ListSubheader component="div" className={classes.title}>全部活動</ListSubheader>
        </GridListTile>
        {imageList.map(tile => (
          <GridListTile cols={1} key={tile.img}>
            <img src={`/assets/images/${tile}.jpg`} alt={tile} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon/>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
