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

{/*<Router>
<Switch>
    <Route exact={true} path="/" component={Home}/>
    <Route exact={true} path="/news" component={News}/>

</Switch>
</Router>
<Router>
<Switch>
    <Route exact={true} path="/" component={Home}/>
    <Route path="/news" component={News}/>

</Switch>
</Router>*/}
