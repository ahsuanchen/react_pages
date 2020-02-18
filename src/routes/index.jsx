import Home from 'pages/Home';
import News from 'pages/News';

const indexRoutes = [
  {
    exact: "true",
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/news",
    name: "news",
    component: News,
  },
];

export default indexRoutes;
