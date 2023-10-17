import { useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import MUICircleButton from '../MUI/MUICircleButton/MUICircleButton';
import { toggleSidebar } from '../../redux/slices/uiSlice';
import { HeaderContainer, HeaderSection } from './Header.styles';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <HeaderSection>
        <MUICircleButton
          iconName="Person"
          handleClick={() => dispatch(toggleSidebar())}
        />
        <Typography variant="h1" sx={{ fontSize: 32 }}>
          Admin Portal
        </Typography>
      </HeaderSection>
      <HeaderSection>
        <Typography>TESTING SOMETHING</Typography>
      </HeaderSection>
    </HeaderContainer>
  );
};

export default Header;
