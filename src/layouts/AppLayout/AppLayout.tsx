import { useCallback, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import {
  AppLayoutContainer,
  AppLayoutContentArea,
  AppLayoutContentContainer,
} from './AppLayout.styles';

const AppLayout: React.FC = () => {
  const [showFooter] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    console.log('sidebarOpen', sidebarOpen);
  }, [sidebarOpen]);

  const handleToggleSidebar = useCallback(() => {
    setSidebarOpen(!sidebarOpen);
  }, [sidebarOpen]);

  const handleCloseSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, [setSidebarOpen]);

  return (
    <AppLayoutContainer>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <AppLayoutContentContainer showFooter={showFooter}>
        <Sidebar isOpen={sidebarOpen} handleCloseSidebar={handleCloseSidebar} />
        <AppLayoutContentArea>
          <Outlet />
        </AppLayoutContentArea>
      </AppLayoutContentContainer>
      <Footer />
    </AppLayoutContainer>
  );
};

export default AppLayout;
