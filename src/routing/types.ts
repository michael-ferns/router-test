import { RouteComponentProps } from 'react-router-dom';
import * as Icons from '@mui/icons-material';

export type IconName = keyof typeof Icons;

interface RouteComponentPropsWithChildren extends RouteComponentProps {
  children?: React.ReactNode;
  routes?: SubRouteConfig[];
}

export interface RouteConfigBase {
  path: string;
  component: React.ComponentType<RouteComponentPropsWithChildren>;
  shouldRender?: boolean;
}

export interface SubRouteConfig extends RouteConfigBase {
  sidebarLabel?: string;
}

export interface TopLevelRouteConfig extends RouteConfigBase {
  sidebarLabel?: string;
  routes?: SubRouteConfig[];
}

export interface SidebarItemConfig {
  path: string;
  sidebarLabel: string;
  subroutes?: SidebarItemConfig[];
}
