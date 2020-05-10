//活動內容頁面
import React from 'react';
import ActivityInformation from 'components/Activity/activityInfo.jsx';
import ActivityContent from 'components/Activity/activityContent.jsx';
import Header from 'components/Header/PF_header.jsx';

class ActivityInfo extends React.Component {

  render(){

    return (
      <>
        <Header/>
        <ActivityInformation />
        <ActivityContent/>
      </>
    )
  }
}
export default ActivityInfo;
