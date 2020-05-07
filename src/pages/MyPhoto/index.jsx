//我的照片頁面
import React from 'react';
import MyPhoto from 'components/Album/myPhoto.jsx';
import Header from 'components/Header/PF_header.jsx';

class ActivityPhoto extends React.Component {

  render(){

    return (
      <>
        <Header/>
        <MyPhoto/>
      </>
    )
  }
}
export default ActivityPhoto;
