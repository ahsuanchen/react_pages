import React from 'react';
import { Route, Switch, Router} from 'react-router-dom';

import routess from 'routes';

import Header from 'components/Home/header.jsx';
import News from 'pages/News/index.jsx'
import Home from 'pages/Home/index.jsx'

import ReactApp from 'components/react-app.jsx';
import SignIn from 'components/Signs/signIn.jsx';
import SignUp from 'components/Signs/signup.jsx';
import SignupInfo from 'components/Signs/signupinfo.jsx';
import SettingFace from 'components/Signs/settingface.jsx';
import Forgot1 from 'components/Signs/forgot1.jsx';
import Forgot2 from 'components/Signs/forgot2.jsx';
import Finish from 'components/Signs/finish.jsx';
import Organizer from 'components/Activity/organizer.jsx';
import New1 from 'components/Activity/new1.jsx';
import NewPic from 'components/Activity/newPic.jsx';
import NewInfo from 'components/Activity/newInfo.jsx';
import NewDetails from 'components/Activity/newDetails.jsx';
import UpdatePic from 'components/Activity/updatePic.jsx';
import UpdateInfo from 'components/Activity/updateInfo.jsx';
import UpdateDetails from 'components/Activity/updateDetails.jsx';
// import Bar from 'components/bar.jsx';
// import Homepage from 'components/Profile/editSignupInformation.jsx';
import HomepageAfterLogin from 'components/Homepage/homepageAfterLogin.jsx';
import HomepageBeforeLogin from 'components/Homepage/homepageBeforeLogin.jsx';
import SearchInfo from 'components/Homepage/searchInfo.jsx';
import Profile from 'components/Profile/profile.jsx';
import UpdatePassword from 'components/Profile/updatePassword.jsx';
import SignupSituation from 'components/Profile/signupSituation.jsx';
import EditSignupInfo from 'components/Profile/editSignupInformation.jsx';
import TrainingFace from 'components/Profile/trainingFace.jsx';
import OrganizerInfo from 'components/Profile/organizerInfo.jsx';
import ManageActivity from 'components/Profile/manageActivity.jsx';
import ParticipantList from 'components/Profile/participantList.jsx';
import Activity from 'pages/Activity/index.jsx'

class Layout extends React.Component {

  render() {
    const routes = routess;
    return (

      <>
      {/* <Header routes={routes}/> */}
      {routes.map((page,key) => (
        <Route exact ={page.exact} path={page.path} component={page.component} key={key}/>
      ))}

      <Route path="/ActivityInfo" component={Activity}/>
      <Route path="/signIn" component={SignIn} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/signupInfo" component={SignupInfo} />
      <Route path="/settingFace" component={SettingFace} />
      <Route path="/forgot1" component={Forgot1} />
      <Route path="/forgot2" component={Forgot2} />
      <Route path="/finish" component={Finish} />
      <Route path="/organizer" component={Organizer} />
      <Route path="/new1" component={New1} />
      <Route path="/newPic" component={NewPic} />
      <Route path="/newInfo" component={NewInfo} />
      <Route path="/newDetails" component={NewDetails} />
      <Route path="/updatePic" component={UpdatePic} />
      <Route path="/updateInfo" component={UpdateInfo} />
      <Route path="/updateDetails" component={UpdateDetails} />
      {/* <Route path="/editSignupInformation" component={Homepage} /> */}
      <Route path="/homepageAfterLogin" component={HomepageAfterLogin} />
      <Route path="/homepageBeforeLogin" component={HomepageBeforeLogin} />
      <Route path="/searchInfo" component={SearchInfo} />
      <Route path="/profile" component={Profile} />
      <Route path="/updatePassword" component={UpdatePassword} />
      <Route path="/signupSituation" component={SignupSituation} />
      <Route path="/trainingFace" component={TrainingFace} />
      <Route path="/organizerInfo" component={OrganizerInfo} />
      <Route path="/manageActivity" component={ManageActivity} />
      <Route path="/participantList" component={ParticipantList} />
      <Route path="/editSignupInformation" component={EditSignupInfo} />
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
