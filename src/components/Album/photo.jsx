//活動照片
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Cat1 from 'assets/images/11.jpg';
import Cat2 from 'assets/images/12.jpg';
import Cat3 from 'assets/images/13.jpg';
import Cat4 from 'assets/images/14.jpg';
import Cat5 from 'assets/images/15.jpg';
import Cat6 from 'assets/images/16.jpg';
import Cat7 from 'assets/images/17.jpg';
import Cat8 from 'assets/images/18.jpg';
import Cat9 from 'assets/images/19.jpg';

const useStyles = makeStyles(theme => ({
  div: {
      boxSizing: "border-box"
  },
  gridList: {
    width: 900,
    height: 500,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  title: {
    'fontSize' : 20,
    'fontWeight' : 'bolder',
  }
}));


const tileData =[
  {
    img:Cat1,
    title:'Image',
  },
  {
    img:Cat2,
    title:'Image',
  },
  {
    img:Cat3,
    title:'Image',
  },
  {
    img:Cat4,
    title:'Image',
  },
  {
    img:Cat5,
    title:'Image',
  },
  {
    img:Cat6,
    title:'Image',
  },
  {
    img:Cat7,
    title:'Image',
  },
  {
    img:Cat8,
    title:'Image',
  },
  {
    img:Cat9,
    title:'Image',
  },
];

export default function TestGridList(props) {
  const classes = useStyles();


  return (
    <Container maxWidth="md">
      <GridList cols={3} cellHeight={200} className={classes.gridList}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ListSubheader component="div" className={classes.title}>
          活動照片
          </ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
        <GridListTile cols={1} key={tile}>
           <img src={tile.img} alt={tile} />
        </GridListTile>))}
      </GridList>
    </Container>
  );
}
