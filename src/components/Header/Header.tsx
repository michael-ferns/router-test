import React from 'react';
import { useDispatch } from 'react-redux';
import MUICircleButton from '../mui/MUICircleButton';
import { toggleSidebar } from '../../redux/slices/uiSlice';
import { HeaderContainer, HeaderSection } from './styles';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <HeaderSection>
        <MUICircleButton
          iconName="Menu"
          onClick={() => dispatch(toggleSidebar())}
        />
      </HeaderSection>
    </HeaderContainer>
  );
};

export default Header;
