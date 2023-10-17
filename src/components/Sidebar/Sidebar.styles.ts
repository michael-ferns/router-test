import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const SidebarBackdropContainer = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(18, 18, 39, 0.85);
  z-index: 10;
  display: flex;
  align-items: start;
  justify-content: start;
`;

export const SidebarMenu = styled('div')`
  padding: ${(props) => props.theme.custom.spacing.defaultGutter};
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100%;
  background-color: white;
  overflow-y: auto;
`;

export const SidebarDesktopMenu = styled('div')`
  padding: ${(props) => props.theme.custom.spacing.defaultGutter};
  width: 225px;
  background-color: white;
  border-radius: 8px;
`;

export const SidebarList = styled('div')`
  display: flex;
  flex-direction: column;
  overflow: auto;

  & > *:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const SidebarDivider = styled('hr')`
  width: 100%;
  border: 0;
  border-top: 1px solid #ccc; // you can adjust the color accordingly
  margin: 8px 0; // adjust the margin to set the spacing above and below the divider
`;

export const SideBarItemContainer = styled(Link)`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  text-decoration: none;
  border-radius: 8px;
  &:hover {
    background-color: #f5f7f7;
  }
`;

export const SidebarItemContent = styled('div')`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 18px;
  }
`;

export const SidebarItemLabel = styled(Typography)``;
