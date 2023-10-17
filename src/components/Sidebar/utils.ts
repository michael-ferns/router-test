import { CustomRouteObject } from '../../routing/routes';
import { SidebarConfigItem } from './Sidebar.types';

export const filterSidebarItems = (
  routes: CustomRouteObject[],
): SidebarConfigItem[] => {
  const processRoutes = (routes: CustomRouteObject[]): SidebarConfigItem[] => {
    const output: SidebarConfigItem[] = [];

    for (const route of routes) {
      if (route.path && route.sidebarLabel) {
        const configItem: SidebarConfigItem = {
          path: route.path,
          sidebarLabel: route.sidebarLabel,
        };

        if (route.sidebarLeadIcon)
          configItem.sidebarLeadIcon = route.sidebarLeadIcon;

        const children = route.children ? processRoutes(route.children) : [];
        if (children.length > 0) {
          configItem.children = children;
        }

        output.push(configItem);
      }
    }

    return output;
  };

  return processRoutes(routes);
};
