import { RouteObject } from 'react-router';
import { Navigate } from 'react-router-dom';
// Providers
import RouteFormatter from './RouteFormatter';
import PublicRouteProvider from './PublicRouteProvider';
import PrivateRouteProvider from './PrivateRouteProvider';
// Layouts
import AppLayout from '../layouts/AppLayout/AppLayout';
import FullScreenLayout from '../layouts/FullScreenLayout/FullScreenLayout';
// Components
import Dashboard from '../Pages/Dashboard/Dashboard';
import Login from '../Pages/Login/Login';
import Profile from '../Pages/Profile/Profile';
import AccountMenu from '../Pages/AccountMenu/AccountMenu';
import AccountMenuItems from '../Pages/AccountMenu/AccountMenuItems/AccountMenuItems';
import AccountMenuSections from '../Pages/AccountMenu/AccountMenuSections/AccountMenuSections';
// MUI Icon Type
import { IconName } from '../components/MUI/MUIIcon';

export type CustomRouteObject = RouteObject & {
  sidebarLabel?: string;
  sidebarLeadIcon?: IconName;
  children?: CustomRouteObject[];
};

const publicRoutes: RouteObject[] = [
  {
    Component: FullScreenLayout,
    children: [
      {
        path: '/login',
        Component: Login,
      },
    ],
  },
];

export const appLayoutPrivateRoutes: CustomRouteObject[] = [
  {
    path: '/dashboard',
    Component: Dashboard,
    sidebarLabel: 'Dashboard',
    sidebarLeadIcon: 'Dashboard',
  },
  {
    path: '/profile',
    Component: Profile,
    sidebarLabel: 'Profile',
    sidebarLeadIcon: 'Person',
  },
  {
    path: '/menu',
    Component: AccountMenu,
    sidebarLabel: 'Account Menu',
    sidebarLeadIcon: 'RestaurantMenu',
    children: [
      {
        path: '',
        index: true,
        element: <Navigate to={'/menu/items'} />,
      },
      {
        path: 'items',
        Component: AccountMenuItems,
        sidebarLabel: 'Items',
      },
      {
        path: 'sections',
        Component: AccountMenuSections,
        sidebarLabel: 'Sections',
      },
    ],
  },
];

const privateRoutes: RouteObject[] = [
  {
    Component: AppLayout,
    children: appLayoutPrivateRoutes,
  },
];

const routes: RouteObject[] = [
  {
    Component: RouteFormatter,
    children: [
      {
        Component: PublicRouteProvider,
        children: publicRoutes,
      },
      {
        Component: PrivateRouteProvider,
        children: privateRoutes,
      },
    ],
  },
];

export default routes;
