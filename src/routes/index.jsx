import Home from 'pages/Home/index.jsx';
import News from 'pages/News/index.jsx';
import ActivityList from 'pages/Activity/index.jsx';

const routess = [
  {
    exact: true,
    path: "/",
    name: 'home',
    component: Home,
    title: '首頁',
  },
  {
    path: '/news',
    name: 'news',
    component: News,
    title: '最新消息',
  },
  {
    path: '/activityList',
    name: "activityList",
    component: ActivityList,
    title: "活動總覽",
  },
  {
    path: "/activity",
    name: "activity",
    component: ActivityList,
    title: "個人檔案",
  },
  {
    path: "/activity",
    name: "activity",
    component: ActivityList,
    title: "建立活動",
  },
];

export default routess;
