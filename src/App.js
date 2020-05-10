import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';

import indexRoutes from 'routes';
import logo from './logo.svg';
import './App.css';

import Layout from 'pages/Layout';
import Home from 'pages/Home/index';

function App() {
  return (


    <Router>
      <Switch>
        <Route path="/" component={Layout}/>
      </Switch>
    </Router>
     );
}

export default App;
