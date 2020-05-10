//活動照片頁面
import React from 'react';
import Photo from 'components/Album/photo.jsx';
import Header from 'components/Header/PF_header.jsx';

class ActivityPhoto extends React.Component {

  render(){

    return (
      <>
        <Header/>
        <Photo/>
      </>
    )
  }
}
export default ActivityPhoto;
