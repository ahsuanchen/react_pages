//活動報名頁面
import React from 'react';
import ActivitySU from 'components/Activity/activitySignUp.jsx';
import Header from 'components/Header/PF_header.jsx';
import BottomBar from 'components/Homepage/bottomBar.jsx';

class ActivitySignUp extends React.Component {

  render(){

    return (
      <>
        <Header/>
        <ActivitySU />
        <br/>
        <BottomBar/>
      </>
    )
  }
}
export default ActivitySignUp;
