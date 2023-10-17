import {
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import SidebarAccountSwitcher from './SidebarAccountSwitcher';
import SidebarItem from './SidebarItem';
import useBreakpoint from '../../hooks/useBreakpoint';
import { appLayoutPrivateRoutes } from '../../routing/routes';
import {
  SidebarBackdrop,
  SidebarMenu,
  SidebarDivider,
  SidebarList,
  SidebarDesktopMenu,
  SidebarMenuContent,
} from './Sidebar.styles';
import { SidebarConfigItem } from './Sidebar.types';
import { generateSidebarItems } from './utils';

interface SidebarProps {
  isOpen: boolean;
  handleCloseSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, handleCloseSidebar }) => {
  const isMobile = useBreakpoint('md');
  const sidebarBackdropRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<SidebarConfigItem | null>(null);
  const [menuView, setMenuView] = useState<'MAIN' | 'SUB'>('MAIN');
  const [animateOut, setAnimateOut] = useState(isOpen);
  const [renderSidebar, setRenderSidebar] = useState(isOpen);

  useEffect(() => {
    if (
      activeItem &&
      activeItem?.children &&
      activeItem.children.length > 0 &&
      !renderSidebar
    ) {
      setMenuView('SUB');
    }
  }, [renderSidebar, activeItem]);

  useEffect(() => {
    let timer: number | null = null;

    if (isOpen) {
      setRenderSidebar(true);
    } else {
      setAnimateOut(true);
      timer = setTimeout(() => {
        setRenderSidebar(false);
        setAnimateOut(false); // Reset for the next time
      }, 250); // Match the animation duration
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isOpen]);

  const items = useMemo(() => generateSidebarItems(appLayoutPrivateRoutes), []);

  const sidebarItems = useMemo(() => {
    const handleItemClick = (item: SidebarConfigItem) => {
      const hasChildren = item?.children && item.children.length > 0;

      if (item !== activeItem) {
        setActiveItem(item);
      }

      if (hasChildren) {
        setMenuView('SUB');
      }

      if (!hasChildren || !isMobile) {
        handleCloseSidebar();
      }
    };

    return items.map((item) => (
      <SidebarItem
        key={item.sidebarLabel}
        item={item}
        onClick={() => handleItemClick(item)}
        isActive={item === activeItem}
      />
    ));
  }, [items, activeItem, isMobile, handleCloseSidebar]);

  const sidebarSubMenuItems = useMemo(() => {
    if (activeItem?.children) {
      return activeItem.children.map((item) => (
        <SidebarItem
          key={item.sidebarLabel}
          item={item}
          onClick={handleCloseSidebar}
        />
      ));
    }
    return null;
  }, [activeItem, handleCloseSidebar]);

  const shouldShowMainMenu = useMemo(
    () => menuView === 'MAIN' || !isMobile,
    [menuView, isMobile],
  );
  const shouldShowSubMenu = useMemo(
    () =>
      Boolean(
        isMobile &&
          activeItem?.children &&
          activeItem.children.length > 0 &&
          menuView === 'SUB',
      ),
    [isMobile, activeItem, menuView],
  );

  const handleBackdropClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (e.target === sidebarBackdropRef.current) {
        handleCloseSidebar();
      }
    },
    [handleCloseSidebar],
  );

  return (
    <>
      {renderSidebar && (
        <SidebarBackdrop ref={sidebarBackdropRef} onClick={handleBackdropClick}>
          <SidebarMenu animateOut={animateOut}>
            <SidebarAccountSwitcher />
            <SidebarDivider />
            <SidebarMenuContent>
              <SidebarList isMainMenu isVisible={shouldShowMainMenu}>
                {sidebarItems}
              </SidebarList>
              <SidebarList isMainMenu={false} isVisible={shouldShowSubMenu}>
                <SidebarItem
                  item={{
                    sidebarLabel: 'Back',
                    sidebarLeadIcon: 'ChevronLeft',
                  }}
                  onClick={() => setMenuView('MAIN')}
                />
                {sidebarSubMenuItems}
              </SidebarList>
            </SidebarMenuContent>
          </SidebarMenu>
        </SidebarBackdrop>
      )}
      {!isMobile && sidebarSubMenuItems && (
        <SidebarDesktopMenu>{sidebarSubMenuItems}</SidebarDesktopMenu>
      )}
    </>
  );
};

export default Sidebar;
