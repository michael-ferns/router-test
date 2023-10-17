import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const FooterContainer = styled('footer')`
  padding: ${(props) => props.theme.custom.spacing.defaultGutter};
  display: flex;
  align-items: center;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const FooterCopyrightText = styled(Typography)`
  text-align: center;
  font-size: 14px;
  color: ${(props) => props.theme.custom.colors.textGrey};
`;

export const FooterNavContainer = styled('div')`
  display: flex;
  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.custom.colors.primaryBlue};
  text-decoration: none;

  &:visited,
  &:hover,
  &:active,
  &:focus {
    color: ${(props) => props.theme.custom.colors.primaryBlue};
  }
`;
