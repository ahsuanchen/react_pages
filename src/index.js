/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './components/click.js';

ReactDOM.render(<ProductList />,document.getElementById('root'));
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

import './index.css';
import ReactApp from './App.js';
import Act from 'pages/Home/index';
import Index from 'pages/Test/test';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
  <Switch>
      <Route path="/Index" component={Index}/>
      <Route path="/Act" component={Act}/>
      <Route path="/" component={ReactApp}/>
  </Switch>
  </Router>,
  document.getElementById('root')

);
