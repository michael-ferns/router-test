import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import { RootState } from '../../redux/store';
import {
  AppLayoutContainer,
  AppLayoutContentArea,
  AppLayoutContentContainer,
} from './AppLayout.styles';

const AppLayout: React.FC = () => {
  const showFooter = useSelector((state: RootState) => state.ui.showFooter);

  return (
    <AppLayoutContainer>
      <Header />
      <AppLayoutContentContainer showFooter={showFooter}>
        <Sidebar />
        <AppLayoutContentArea>
          <Outlet />
        </AppLayoutContentArea>
      </AppLayoutContentContainer>
      <Footer />
    </AppLayoutContainer>
  );
};

export default AppLayout;
