import HomePage from 'components/Homepage/homepageBeforeLogin.jsx';
// import Activity from 'pages/Activity/index.jsx';
// import News from 'pages/News/index.jsx';
// import Album from 'pages/MyAlbum/index.jsx';
// import ActAlbum from 'pages/ActivityAlbum/index.jsx';

const routess = [
  {
    exact: true,
    path: "/",
    name: 'home',
    component: HomePage,
    title: '首頁',
  },
  // {
  //   path: '/news',
  //   name: 'news',
  //   component: News,
  //   title: '最新消息',
  // },
  // {
  //   path: '/activityList',
  //   name: "activityList",
  //   component: Home,
  //   title: "活動總覽",
  // },
  {/*
    path: "/",
    name: "activity",
    component: ActAlbum,
    title: "活動相簿",
  },
  {
    path: "/Myalbum",
    name: "activity",
    component: Album,
    title: "我的相簿",
  },*/}

];

export default routess;
