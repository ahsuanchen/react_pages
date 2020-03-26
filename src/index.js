import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './index.css';
import Layout from 'pages/Layout';
import Home from 'pages/Home/index';
import News from 'pages/News/index';
import routess from 'routes';
import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import ProductList from './components/click.js';

// ReactDOM.render(<ProductList />,document.getElementById('root'));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

// import './index.css';
// import ReactApp from './App.js';
// import Act from 'pages/Home/index';
// import Index from 'pages/Test/test';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <Router>
//   <Switch>
//       <Route path="/Index" component={Index}/>
//       <Route path="/Act" component={Act}/>
//       <Route path="/" component={ReactApp}/>
//   </Switch>
//   </Router>,
//   document.getElementById('root')

// );
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
//import App from './App';
import ReactApp from './components/react-app.jsx';
import signIn from './components/Signs/signIn.jsx';
import signUp from './components/Signs/signup.jsx';
import SignupInfo from './components/Signs/signupinfo.jsx';
import SettingFace from './components/Signs/settingface.jsx';
import Forgot1 from './components/Signs/forgot1.jsx';
import Forgot2 from './components/Signs/forgot2.jsx';
import Finish from './components/Signs/finish.jsx';
import Organizer from './components/Activity/organizer.jsx';
import New1 from './components/Activity/new1.jsx';
import New1B from './components/Activity/new1-button.jsx';
import New2 from './components/Activity/new2.jsx';
import New3 from './components/Activity/new3.jsx';
import New4 from './components/Activity/new4.jsx';
import UpdatePic from './components/Activity/updatePic.jsx';
import UpdateInfo from './components/Activity/updateInfo.jsx';
import UpdateDetails from './components/Activity/updateDetails.jsx';
import Bar from './components/bar.jsx';
import Homepage from './components/Profile/editSignupInformation.jsx';
import HomepageAfterLogin from './components/Homepage/homepageAfterLogin.jsx';
import HomepageBeforeLogin from './components/Homepage/homepageBeforeLogin.jsx';
import Profile from './components/Profile/profile.jsx';
import SignupSituation from './components/Profile/signupSituation.jsx';
import TrainingFace from './components/Profile/trainingFace.jsx';
import OrganizerInfo from './components/Profile/organizerInfo.jsx';
import ManageActivity from './components/Profile/manageActivity.jsx';
import ParticipantList from './components/Profile/participantList.jsx';
import AddParticipant from './components/Profile/addParticipant.jsx';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Layout/>
    </Switch>
  </Router>


  ,
  document.getElementById('root')

);