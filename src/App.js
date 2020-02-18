import React from 'react';
import { Route, Switch } from 'react-router-dom';

import indexRoutes from 'routes';
import logo from './logo.svg';
import './App.css';

import Layout from 'pages/Layout';

function App() {
  return (
    <div>
      <Switch>
        <Layout routes={ indexRoutes }/>
      </Switch>
    </div>
  );
}

export default App;
