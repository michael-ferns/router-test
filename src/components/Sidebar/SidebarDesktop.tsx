import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import SidebarAccountSwitcher from './SidebarAccountSwitcher';
import SidebarBackdrop from './SidebarBackdrop';
import SidebarItem from './SidebarItem';
import { RootState } from '../../redux/store';
import {
  SidebarMenu,
  SidebarDesktopMenu,
  SidebarDivider,
  SidebarList,
} from './Sidebar.styles';
import { SidebarProps } from './Sidebar.types';

const SidebarDesktop: React.FC<SidebarProps> = ({ items }) => {
  const sidebarOpen = useSelector((state: RootState) => state.ui.sidebarOpen);

  const sidebarItems = useMemo(
    () => items.map((item, index) => <SidebarItem key={index} item={item} />),
    [items],
  );

  return (
    <>
      {sidebarOpen ? (
        <SidebarBackdrop>
          <SidebarMenu>
            <SidebarAccountSwitcher />
            <SidebarDivider />
            <SidebarList>{sidebarItems}</SidebarList>
          </SidebarMenu>
        </SidebarBackdrop>
      ) : null}

      <SidebarDesktopMenu>Desktop Menu</SidebarDesktopMenu>
    </>
  );
};

export default SidebarDesktop;
