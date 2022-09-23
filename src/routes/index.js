import Home from '../pages/Home';
import Details from '../pages/Details';

export const Routes = [
  {
    path: '/',
    name: 'Home',
    key: 'home',
    element: <Home />,
    exact: true
  },
  {
    path: '/details/:listId',
    name: 'Home',
    key: 'home',
    element: <Details />,
    exact: true
  }
];
