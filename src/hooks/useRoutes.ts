import { useMemo } from 'react';
import About from '../components/About/About';
import Dashboard from '../components/Dashboard/Dashboard';
import DashboardList from '../components/Dashboard/DashboardList';
import NotFound from '../components/NotFound/NotFound';
import Profile from '../components/Profile/Profile';
import { RouteConfig } from '../routing/types';

const useRoutes = (): RouteConfig[] => {
  const routes = useMemo((): RouteConfig[] => {
    const routeConfig: RouteConfig[] = [
      {
        path: '/dashboard',
        component: Dashboard,
        shouldRender: true,
        sidebarLabel: 'Dashboard',
        sidebarIconName: 'Person',
        routes: [
          {
            path: '/list',
            component: DashboardList,
            sidebarLabel: 'DashboardList',
          },
        ],
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
    ];

    return routeConfig.filter((route) => route.shouldRender !== false);
  }, []);

  return routes;
};

export default useRoutes;
