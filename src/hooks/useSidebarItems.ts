import { useMemo } from 'react';
import useRoutes from './useRoutes';
import { TopLevelRouteConfig, SidebarItemConfig } from '../routing/types';

export const parseSidebarItems = (
  routes: TopLevelRouteConfig[],
  depth: number = 0,
  parentPath: string = '',   // Adding an optional parentPath parameter
): SidebarItemConfig[] => {
  if (depth > 2) {
    throw new Error(
      'Subroutes cannot go deeper than two levels with a sidebarLabel.',
    );
  }

  return routes
    .filter((route) => route.sidebarLabel)
    .map((route) => {
      const fullPath = `${parentPath}${route.path}`;  // Construct the full path
      return {
        path: fullPath,
        sidebarLabel: route.sidebarLabel!,
        sidebarIconName: route.sidebarIconName,
        subroutes: route.routes
          ? parseSidebarItems(route.routes, depth + 1, fullPath)  // Pass the fullPath when parsing nested routes
          : undefined,
      };
    });
};

const useSidebarItems = (): SidebarItemConfig[] => {
  const routes = useRoutes();

  const sidebarItems = useMemo(() => {
    return parseSidebarItems(routes);
  }, [routes]);

  return sidebarItems;
};

export default useSidebarItems;
