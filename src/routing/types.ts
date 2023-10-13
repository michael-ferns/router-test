import { ComponentType } from 'react';
import { IconName } from '../components/MUI/MUIIcon';

export interface RouteConfigBase {
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: ComponentType<any>; // This defines that the 'component' can be any valid React component.
  shouldRender?: boolean; // Optional, as it should only be considered false if it's actually set to false.
}

export interface TopLevelRouteConfig extends RouteConfigBase {
  routes?: SecondLevelRouteConfig[]; // Allows for nested routes at the second level.
  sidebarLabel?: string; // Can optionally have a 'sidebarLabel' property.
  sidebarIconName?: IconName;
}

export interface SecondLevelRouteConfig extends RouteConfigBase {
  sidebarLabel?: string; // Can optionally have a 'sidebarLabel' property.
}

// Union type to accommodate both top-level and second-level route configs.
export type RouteConfig = TopLevelRouteConfig | SecondLevelRouteConfig;

// SidebarItem config
export interface SidebarItemConfig {
  path: string;
  sidebarLabel: string;
  sidebarIconName?: IconName;
  subroutes?: SidebarItemConfig[];
}
