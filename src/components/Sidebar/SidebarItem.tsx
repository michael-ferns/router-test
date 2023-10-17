import MUIIcon from '../MUI/MUIIcon';
import {
  SidebarItemLinkContainer,
  SidebarItemClickContainer,
  SidebarItemContent,
  SidebarItemLabel,
} from './Sidebar.styles';
import { SidebarConfigItem } from './Sidebar.types';

interface SidebarItemProps {
  item: SidebarConfigItem;
  onClick?: () => void;
  isActive?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  item,
  onClick,
  isActive = false,
}) => {
  const { sidebarLabel, sidebarLeadIcon, sidebarTrailIcon } = item;

  const leadIcon =
    sidebarLeadIcon !== undefined ? (
      <MUIIcon iconName={sidebarLeadIcon} />
    ) : null;
  const trailIcon =
    sidebarTrailIcon !== undefined ? (
      <MUIIcon iconName={sidebarTrailIcon} />
    ) : null;

  const handleItemClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return item.path && !isActive ? (
    <SidebarItemLinkContainer to={item.path} onClick={handleItemClick}>
      <SidebarItemContent>
        {leadIcon}
        <SidebarItemLabel>{sidebarLabel}</SidebarItemLabel>
      </SidebarItemContent>
      {trailIcon}
    </SidebarItemLinkContainer>
  ) : (
    <SidebarItemClickContainer onClick={handleItemClick}>
      <SidebarItemContent>
        {leadIcon}
        <SidebarItemLabel>{sidebarLabel}</SidebarItemLabel>
      </SidebarItemContent>
      {trailIcon}
    </SidebarItemClickContainer>
  );
};

export default SidebarItem;
