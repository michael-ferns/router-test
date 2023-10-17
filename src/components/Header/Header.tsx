import { Typography } from '@mui/material';
import MUICircleButton from '../MUI/MUICircleButton/MUICircleButton';
import { HeaderContainer, HeaderSection } from './Header.styles';

interface HeaderProps {
  handleToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleToggleSidebar }) => {
  return (
    <HeaderContainer>
      <HeaderSection>
        <MUICircleButton iconName="Person" handleClick={handleToggleSidebar} />
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
