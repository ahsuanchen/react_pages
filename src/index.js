import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';

//import App from './App';
import ReactApp from './components/react-app.jsx';
import signIn from './components/Signs/signIn.jsx';
import signUp from './components/Signs/signup.jsx';
import SignupInfor from './components/Signs/signupinfor.jsx';
import SettingFace from './components/Signs/settingface.jsx';
import Forgot1 from './components/Signs/forgot1.jsx';
import Forgot2 from './components/Signs/forgot2.jsx';
import Finish from './components/Signs/finish.jsx';
import Organizer from './components/Activity/organizer.jsx';
import New1 from './components/Activity/new1.jsx';
import New1B from './components/Activity/new1-button.jsx';
import New2 from './components/Activity/new2.jsx';
import New3 from './components/Activity/new3.jsx';
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
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomepageAfterLogin} />
            <Route path="/signIn" component={signIn} />
            <Route path="/signUp" component={signUp} />
            <Route path="/signupInfor" component={SignupInfor} />
            <Route path="/settingFace" component={SettingFace} />
            <Route path="/forgot1" component={Forgot1} />
            <Route path="/forgot2" component={Forgot2} />
            <Route path="/finish" component={Finish} />
            <Route path="/bar" component={Bar} />
            <Route path="/organizer" component={Organizer} />
            <Route path="/new1" component={New1} />
            <Route path="/new1-button" component={New1B} />
            <Route path="/new2" component={New2} />
            <Route path="/new3" component={New3} />
            <Route path="/editSignupInformation" component={Homepage} />
            <Route path="/homepageAfterLogin" component={HomepageAfterLogin} />
            <Route path="/homepageBeforeLogin" component={HomepageBeforeLogin} />
            <Route path="/profile" component={Profile} />
            <Route path="/signupSituation" component={SignupSituation} />
            <Route path="/trainingFace" component={TrainingFace} />
            <Route path="/organizerInfo" component={OrganizerInfo} />
            <Route path="/manageActivity" component={ManageActivity} />
            <Route path="/participantList" component={ParticipantList} />
            <Route path="/addParticipant" component={AddParticipant} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();




// ReactDOM.render(<Homepage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
