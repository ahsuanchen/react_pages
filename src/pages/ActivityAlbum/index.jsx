//活動相簿頁面
import React from 'react';
import Album from 'components/Album/album.jsx';
import Header from 'components/Header/PF_header.jsx';

class ActivityAlbum extends React.Component {

  render(){

    return (
      <>
        <Header/>
        <Album />
      </>
    )
  }
}
export default ActivityAlbum;
