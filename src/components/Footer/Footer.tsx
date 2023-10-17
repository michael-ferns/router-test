import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { RootState } from '../../redux/store';
import {
  FooterContainer,
  FooterCopyrightText,
  FooterNavContainer,
  StyledLink,
} from './Footer.styles';

const Footer: React.FC = () => {
  const showFooter = useSelector((state: RootState) => state.ui.showFooter);

  return showFooter ? (
    <FooterContainer>
      <FooterCopyrightText>
        © 2023 Heartland Payment Systems, LLC - a Global Payments company. All
        rights reserved.
      </FooterCopyrightText>
      <FooterNavContainer>
        <StyledLink to="#">Terms of Use</StyledLink>
        <Typography>|</Typography>
        <StyledLink to="#">Privacy Policy</StyledLink>
      </FooterNavContainer>
    </FooterContainer>
  ) : null;
};

export default Footer;
