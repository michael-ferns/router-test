import { useDispatch } from 'react-redux';
import MUIIcon from '../MUI/MUIIcon';
import { closeSidebar } from '../../redux/slices/uiSlice';
import {
  SideBarItemContainer,
  SidebarItemContent,
  SidebarItemLabel,
} from './Sidebar.styles';
import { SidebarConfigItem } from './Sidebar.types';

interface SidebarItemProps {
  item: SidebarConfigItem;
  closeOnClick: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  item,
  closeOnClick = true,
}) => {
  const dispatch = useDispatch();
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
    if (closeOnClick) {
      dispatch(closeSidebar());
    }
  };

  return (
    <SideBarItemContainer to={item.path} onClick={handleItemClick}>
      <SidebarItemContent>
        {leadIcon}
        <SidebarItemLabel>{sidebarLabel}</SidebarItemLabel>
      </SidebarItemContent>
      {trailIcon}
    </SideBarItemContainer>
  );
};

export default SidebarItem;
