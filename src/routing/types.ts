import { RouteComponentProps } from 'react-router-dom';

interface RouteComponentPropsWithChildren extends RouteComponentProps {
  children?: React.ReactNode;
  routes?: RouteConfig[];
}

export interface SidebarItemConfig {
  path: string;
  sidebarLabel: string;
  iconName: string;
  subroutes?: SidebarItemConfig[];
}

type SidebarRouteConfig =
  | {
      sidebarLabel: string;
      iconName?: string;
    }
  | {
      sidebarLabel?: never;
      iconName?: never;
    };

export interface RouteConfigBase {
  path: string;
  component: React.ComponentType<RouteComponentPropsWithChildren>;
  shouldRender?: boolean;
  routes?: RouteConfig[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props?: Record<string, any>;
}

export type RouteConfig = RouteConfigBase & SidebarRouteConfig;
