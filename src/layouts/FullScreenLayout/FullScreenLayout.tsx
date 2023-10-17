import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { FullScreenLayoutContainer } from './FullScreenLayout.styles';

const FullScreenLayout: React.FC = () => {
  return (
    <FullScreenLayoutContainer>
      <Outlet />
      <Footer />
    </FullScreenLayoutContainer>
  );
};

export default FullScreenLayout;
