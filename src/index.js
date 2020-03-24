import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './index.css';
import Layout from 'pages/Layout';
import Home from 'pages/Home/index';
import News from 'pages/News/index';
import routess from 'routes';
import App from './App';

//import Act from 'pages/Home/index';
//import Activity from 'pages/Activity';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Layout/>
    </Switch>
  </Router>


  ,
  document.getElementById('root')

);