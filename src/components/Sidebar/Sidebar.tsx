import { useEffect, useMemo } from 'react';
import useBreakpoint from '../../hooks/useBreakpoint';
import SidebarDesktop from './SidebarDesktop';
import SidebarMobile from './SidebarMobile';
import { appLayoutPrivateRoutes } from '../../routing/routes';
import { SidebarConfigItem } from './Sidebar.types';
import { filterSidebarItems } from './utils';

const Sidebar: React.FC = () => {
  const isMobile = useBreakpoint('md');

  const items = useMemo(
    (): SidebarConfigItem[] => filterSidebarItems(appLayoutPrivateRoutes),
    [],
  );

  console.log(items);

  useEffect(() => {
    console.log('isMobile', isMobile);
    // console.log(sidebarItems);
  }, [isMobile]);

  return isMobile ? (
    <SidebarMobile items={items} />
  ) : (
    <SidebarDesktop items={items} />
  );
};

export default Sidebar;
