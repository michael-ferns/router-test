import { Link } from 'react-router-dom';
import { keyframes } from '@emotion/react';
import styled from '../../../styles/styled';

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

interface SidebarMenuProps {
  animateOut: boolean;
}

export const SidebarContainer = styled.div`
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
  font-family: 'Inter';
  font-style: normal;
`;

export const SidebarBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const SidebarMenu = styled.div<SidebarMenuProps>`
  position: relative;
  width: 300px;
  height: 100%;
  padding: 24px 12px;
  background-color: #ffffff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  animation: ${(props) => (props.animateOut ? slideOut : slideIn)} 0.25s 1
    forwards;
`;

// Sidebar List
export const SidebarListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const SidebarListItem = styled.li`
  display: block;
  width: 100%;
  padding: 8px 16px;

  &:hover {
    background-color: #f7f7f7;
  }
`;

export const SidebarListLink = styled(Link)`
  display: block;
  width: 100%;
  text-decoration: none;
  color: inherit;
`;
