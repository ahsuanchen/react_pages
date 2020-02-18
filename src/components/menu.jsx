import React from 'react';

import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@material-ui/core/';

export default function MyMenu() {

  return (
    <AppBar >
      <Toolbar>
        MyApp
        <Button component={Link} to='/signinside' color="inherit">signinside</Button>
        <Button component={Link} to='/signup' color="inherit">signup</Button>
        <Button component={Link} to='/settingface' color="inherit">face</Button>
        <Button component={Link} to='/forgot1' color="inherit">forgot</Button>
        <Button component={Link} to='/forgot2' color="inherit">forgot2</Button>
        <Button component={Link} to='/finish' color="inherit">finish</Button>
        <Button component={Link} to='/bar' color="inherit">bar</Button>
      </Toolbar>
    </AppBar>
  )

}