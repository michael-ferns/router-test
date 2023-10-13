import { useMemo } from 'react';
import useRoutes from './useRoutes';
import { RouteConfig, SidebarItemConfig } from '../routing/types';

export const parseSidebarItems = (
  routes: RouteConfig[],
): SidebarItemConfig[] => {
  return routes
    .filter((route) => route.sidebarLabel)
    .map((route) => ({
      path: route.path,
      sidebarLabel: route.sidebarLabel!,
      iconName: route.iconName!,
      subroutes: parseSidebarItems(route.routes || []),
    }));
};

const useSidebarItems = (): SidebarItemConfig[] => {
  const routes = useRoutes();

  const sidebarItems = useMemo(() => {
    return parseSidebarItems(routes);
  }, [routes]);

  return sidebarItems;
};

export default useSidebarItems;
