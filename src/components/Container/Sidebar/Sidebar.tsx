import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useSidebarItems from '../../../hooks/useSidebarItems';
import { closeSidebar } from '../../../redux/slices/uiSlice';
import { RootState } from '../../../redux/store';
import SidebarList from './SidebarList';
import { SidebarContainer, SidebarMenu } from './styles';

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const sidebarOpen = useSelector((state: RootState) => state.ui.sidebarOpen);
  const [animateOut, setAnimateOut] = useState(sidebarOpen);
  const [renderSidebar, setRenderSidebar] = useState(sidebarOpen);
  const sidebarItems = useSidebarItems();

  useEffect(() => {
    console.log('sidebarItems changed', sidebarItems);
  }, [sidebarItems]);

  useEffect(() => {
    let timer: number | null = null; // Change this line

    if (sidebarOpen) {
      setRenderSidebar(true);
    } else {
      setAnimateOut(true);
      timer = window.setTimeout(() => {
        setRenderSidebar(false);
        setAnimateOut(false); // Reset for next time
      }, 250); // Match the animation duration
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [sidebarOpen]);

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === sidebarRef.current) {
      dispatch(closeSidebar());
    }
  };

  return renderSidebar ? (
    <SidebarContainer ref={sidebarRef} onClick={handleBackdropClick}>
      <SidebarMenu animateOut={animateOut}>
        <SidebarList items={sidebarItems} />
      </SidebarMenu>
    </SidebarContainer>
  ) : null;
};

export default Sidebar;
