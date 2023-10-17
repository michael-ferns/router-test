import { Typography } from '@mui/material';
import {
  FooterContainer,
  FooterCopyrightText,
  FooterNavContainer,
  StyledLink,
} from './Footer.styles';

const Footer: React.FC = () => {
  return (
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
  );
};

export default Footer;
