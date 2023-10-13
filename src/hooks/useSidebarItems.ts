import { useMemo } from 'react';
import useRoutes from './useRoutes';
import { TopLevelRouteConfig, SidebarItemConfig } from '../routing/types';

export const parseSidebarItems = (
  routes: TopLevelRouteConfig[],
  depth: number = 0,
): SidebarItemConfig[] => {
  if (depth > 2) {
    throw new Error(
      'Subroutes cannot go deeper than two levels with a sidebarLabel.',
    );
  }

  return routes
    .filter((route) => route.sidebarLabel)
    .map((route) => ({
      path: route.path,
      sidebarLabel: route.sidebarLabel!,
      subroutes: parseSidebarItems(route.routes || [], depth + 1),
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
