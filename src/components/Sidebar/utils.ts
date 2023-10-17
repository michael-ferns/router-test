import { CustomRouteObject } from '../../routing/routes';
import { SidebarConfigItem } from './Sidebar.types';

export const generateSidebarItems = (
  routes: CustomRouteObject[],
  parentPath: string = '',
  depth: number = 1,
): SidebarConfigItem[] => {
  if (depth > 2) {
    throw new Error('Config items are nested more than a single level deep.');
  }

  const output: SidebarConfigItem[] = [];

  for (const route of routes) {
    if (route.path && route.sidebarLabel) {
      const fullPath = parentPath ? `${parentPath}/${route.path}` : route.path;

      const configItem: SidebarConfigItem = {
        path: fullPath.startsWith('/') ? fullPath : `/${fullPath}`,
        sidebarLabel: route.sidebarLabel,
      };

      if (route.sidebarLeadIcon)
        configItem.sidebarLeadIcon = route.sidebarLeadIcon;

      // Process children and add to config item only if valid children exist
      const children = route.children
        ? generateSidebarItems(route.children, fullPath, depth + 1)
        : [];
      if (children.length > 0) {
        configItem.children = children;
      }

      output.push(configItem);
    }
  }

  return output;
};
