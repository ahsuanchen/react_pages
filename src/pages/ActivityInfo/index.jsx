//活動內容頁面
import React from 'react';
import ActivityInformation from 'components/Activity/activityInfo.jsx';
import ActivityContent from 'components/Activity/activityContent.jsx';

class ActivityInfo extends React.Component {

  render(){

    return (
      <>
        <ActivityInformation />
        <ActivityContent/>
      </>
    )
  }
}
export default ActivityInfo;
