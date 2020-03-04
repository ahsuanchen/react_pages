import React from 'react';
import { Route, Switch } from 'react-router-dom';

import indexRoutes from 'routes';
import logo from './logo.svg';
import './App.css';

import Layout from 'pages/Layout';
import Home from 'pages/Home/index';
import Test from 'pages/Test/test';


function App() {
  return (
    <div>
    <Test/>

     {/*<Switch>
        <Layout routes={ indexRoutes }/>
      </Switch>
      <Home/>*/}
    </div>
  );
}

export default App;
