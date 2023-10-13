import { useMemo } from 'react';
import About from '../components/About/About';
import Dashboard from '../components/Dashboard/Dashboard';
import DashboardList from '../components/Dashboard/DashboardList';
import NotFound from '../components/NotFound/NotFound';
import Profile from '../components/Profile/Profile';
import { RouteConfig } from '../routing/types';

const useRoutes = () => {
  const routes = useMemo(
    (): RouteConfig[] =>
      [
        {
          path: '/dashboard',
          component: Dashboard,
          shouldRender: true,
          routes: [
            {
              path: 'list',
              component: DashboardList,
              shouldRender: true,
            },
          ],
          sidebarLabel: 'Dashboard',
          iconName: 'Person',
        },
        {
          path: '/about',
          component: About,
          shouldRender: false,
        },
        {
          path: '/profile',
          component: Profile,
          sidebarLabel: 'Profile',
        },
        {
          path: '*',
          component: NotFound,
          shouldRender: true,
        },
      ].filter((route) => route.shouldRender !== false),
    [],
  );

  return routes;
};

export default useRoutes;
