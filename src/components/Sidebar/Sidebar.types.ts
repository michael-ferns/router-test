import { IconName } from '../MUI/MUIIcon';
import { CustomRouteObject } from '../../routing/routes';

// Guard
export const isSidebarConfigItem = (
  item: CustomRouteObject,
): item is SidebarConfigItem => {
  return item.sidebarLabel !== undefined;
};

export interface SidebarConfigItem {
  path: string;
  sidebarLabel: string;
  sidebarLeadIcon?: IconName;
  sidebarTrailIcon?: IconName;
  children?: SidebarConfigItem[];
}

export interface SidebarProps {
  items: SidebarConfigItem[];
}
