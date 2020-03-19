import React from 'react';
import { Route, Switch, Router} from 'react-router-dom';

import routess from 'routes';

import UserList from 'components/Home/userList.jsx';
import Header from 'components/Home/header.jsx';
import News from 'pages/News/index.jsx'
import Home from 'pages/Home/index.jsx'
class Layout extends React.Component {

  render() {
    const routes = routess;
    return (

      <>
      <Header routes={routes}/>
      {routes.map((page,key) => (
        <Route exact ={page.exact} path={page.path} component={page.component} key={key}/>
      ))}
      </>
    );
  }
}

export default Layout;
{/*<Header routes={routes} /> */}
{/*
  routes.map((page,key) => (
    <Route path={page.path} component={page.component} key={key}/>
  ))
*/}
