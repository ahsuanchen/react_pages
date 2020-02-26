import React from 'react';
import { Route, Switch } from 'react-router-dom';

import indexRoutes from 'routes';
import logo from './logo.svg';
import './App.css';

import Layout from 'pages/Layout';
import Home from 'pages/Test/test';

function App() {
  return (
    <div>
    <Home/>
     {/*<Switch>
        <Layout routes={ indexRoutes }/>
      </Switch>*/}
    </div>
  );
}

export default App;
