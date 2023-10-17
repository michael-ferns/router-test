import { IconName } from '../MUI/MUIIcon';

export interface SidebarConfigItem {
  path?: string;
  sidebarLabel: string;
  sidebarLeadIcon?: IconName;
  sidebarTrailIcon?: IconName;
  children?: SidebarConfigItem[];
}

export interface SidebarProps {
  items: SidebarConfigItem[];
  activeItem: SidebarConfigItem | null;
  setActiveItem: React.Dispatch<React.SetStateAction<SidebarConfigItem | null>>;
}
