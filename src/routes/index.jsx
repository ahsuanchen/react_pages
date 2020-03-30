import Homepage from 'components/Homepage/homepageAfterLogin.jsx';
import Home from 'pages/Home/index.jsx';
import News from 'pages/News/index.jsx';
import ActivityList from 'pages/Activity/index.jsx';

const routess = [
  {
    exact: true,
    path: "/",
    name: 'home',
    component: Homepage,
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
    component: Homepage,
    title: "個人檔案",
  },
  {
    path: "/",
    name: "activity",
    component: Homepage,
    title: "建立活動",
  */},
];

export default routess;
