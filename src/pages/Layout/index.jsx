import React from 'react';
import { Route, Switch } from 'react-router-dom';

import indexRoutes from 'routes';

import UserList from 'components/Home/userList.jsx';
import Header from 'components/Layout/header.jsx';

import Drawer from '@material-ui/core/Drawer';

class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Test'
    }
  }

  render() {
    const routes = this.props.routes;
    return (
      <>
        <Header />
        <Drawer>
          <UserList routes={ routes }/>
        </Drawer>
        { routes.map((page, key) => (
            <Route exact={'exact' in page} path={page.path} component={page.component} key={key}/>
          ))
        }
      </>
    );
  }
}

export default Layout;
