import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';

//import App from './App';
import ReactApp from './components/react-app.jsx';
import signInSide from './components/signs/signinside.jsx';
import signUp from './components/signs/signup.jsx';
import SignupInfor from './components/signs/signupinfor.jsx';
import Face from './components/signs/settingface.jsx';
import Forgot1 from './components/signs/forgot1.jsx';
import Forgot2 from './components/signs/forgot2.jsx';
import Finish from './components/signs/finish.jsx';
import Organizer from './components/activity/organizer.jsx';
import New1 from './components/activity/new1.jsx';
import New1B from './components/activity/new1-button.jsx';
import New2 from './components/activity/new2.jsx';
import New3 from './components/activity/new3.jsx';
import Bar from './components/bar.jsx';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/signinside" component={signInSide} />
            <Route path="/signup" component={signUp} />
            <Route path="/signupinfor" component={SignupInfor} />
            <Route path="/settingface" component={Face} />
            <Route path="/forgot1" component={Forgot1} />
            <Route path="/forgot2" component={Forgot2} />
            <Route path="/finish" component={Finish} />
            <Route path="/bar" component={Bar} />
            <Route path="/organizer" component={Organizer} />
            <Route path="/new1" component={New1} />
            <Route path="/new1-button" component={New1B} />
            <Route path="/new2" component={New2} />
            <Route path="/new3" component={New3} />
            <Route path="/" component={ReactApp} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

