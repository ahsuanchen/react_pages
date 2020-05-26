//活動內容頁面
import React , { useState , useEffect } from 'react';
import axios from 'axios';
import ActivityInformation from 'components/Activity/activityInfo.jsx';
import ActivityContent from 'components/Activity/activityContent.jsx';
import Header1 from 'components/Header/PF_header.jsx';
import Header2 from 'components/Header/PF_header2.jsx';
import BottomBar from 'components/Homepage/bottomBar.jsx';

export default function MenuApp() {
  const [member , setMember] = useState([]);
  useEffect(() => {
    async function fetchData() {
            let url = "/api/login/name"
            await axios.get(url)
            .then(result => {
                setMember(result.data);
            })
            .catch(err => {
                console.log(err.response.status);
            })
    }
    fetchData();
  }, []);
  
  return (
    <div>
      {member.memberEmail === undefined ?
        <Header2/>
        :
        <Header1/> 
      }
      <ActivityInformation/>
      <ActivityContent/>
      <br/>
      <BottomBar/>
    </div>
  );
}
