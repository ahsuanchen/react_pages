import React from 'react';
import Album from 'components/Album/myAlbum.jsx';
import Header from 'components/Header/PF_header.jsx';

class Albumpage extends React.Component {

  render(){

    return (
        <>
        <Header/>
        <Album />
      </>
    )
  }
}
export default Albumpage;
