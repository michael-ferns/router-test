import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

type SidebarListProps = { isMainMenu?: boolean; isVisible: boolean };

const slideIn = keyframes`
  0% {
    left: -300px;
  }
  100% {
    left: 0;
  }
`;

const slideOut = keyframes`
  0% {
    left: 0;
  }
  100% {
    left: -300px;
  }
`;

export const SidebarBackdrop = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(18, 18, 39, 0.85);
  z-index: 10;
`;

export const SidebarMenu = styled('div')<{ animateOut: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100%;
  padding: 24px 12px;
  background-color: #ffffff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  animation: ${(props) => (props.animateOut ? slideOut : slideIn)} 0.25s 1
    forwards;
`;

export const SidebarMenuContent = styled('div')`
  position: relative;
  flex: 1;
  overflow-x: hidden;
`;

export const SidebarList = styled('div')<SidebarListProps>`
  width: 100%;
  position: absolute; // Add this
  top: 0; // Add this
  left: 0; // Add this
  ${(props) =>
    props.isVisible
      ? {
          transform: props.isMainMenu ? 'translateX(0)' : 'translateX(0)',
        }
      : {
          transform: props.isMainMenu
            ? 'translateX(-100%)'
            : 'translateX(100%)',
        }}

  transition: transform 0.25s ease-out;

  & > *:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const SidebarDesktopMenu = styled('div')`
  padding: ${(props) => props.theme.custom.spacing.defaultGutter};
  width: 225px;
  background-color: white;
  border-radius: 8px;
`;

export const SidebarDivider = styled('hr')`
  width: 100%;
  border: 0;
  border-top: 1px solid #ccc; // you can adjust the color accordingly
  margin: 8px 0; // adjust the margin to set the spacing above and below the divider
`;

export const SidebarItemLinkContainer = styled(Link)`
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

export const SidebarItemClickContainer = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
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
