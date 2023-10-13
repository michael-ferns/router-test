import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { css, keyframes } from '@emotion/react';
import { SidebarItemConfig } from '../../../routing/types';
import styled from '../../../styles/styled';

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOutToLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const slideOutToRight = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

interface SidebarClickableItemConfig extends Omit<SidebarItemConfig, 'path'>{
  path?: string;
}

interface SidebarListProps {
  items: SidebarItemConfig[];
}

interface SidebarListItemProps {
  item: SidebarItemConfig | SidebarClickableItemConfig;
  onClick?: () => void;
}

interface SidebarListMenuProps {
  isActive: boolean;
  hasInteracted: boolean;
}

const SidebarListContainer = styled.div`
  flex-grow: 1;
  overflow: hidden;
  position: relative;
`;

const SidebarListMenu = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const SidebarListMainMenu = styled.div<SidebarListMenuProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: translateX(0);
  animation: ${(props) => {
    if (props.isActive && props.hasInteracted) {
      return css`
        ${slideOutToLeft} 0.3s forwards
      `;
    }
    if (props.hasInteracted) {
      return css`
        ${slideInFromLeft} 0.3s forwards
      `;
    }
    return 'none';
  }};
`;

const SidebarListSubMenu = styled.div<SidebarListMenuProps>`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  transform: translateX(100%);
  animation: ${(props) => {
    if (props.isActive && props.hasInteracted) {
      return css`
        ${slideInFromRight} 0.3s forwards
      `;
    }
    if (props.hasInteracted) {
      return css`
        ${slideOutToRight} 0.3s forwards
      `;
    }
    return 'none';
  }};
`;

const SidebarListItemContainer = styled.li`
  list-style-type: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333; // or any color you prefer
  padding: 10px 20px;
  display: block;
  &:hover {
    background-color: #f5f5f5; // or any hover color you prefer
  }
`;

const ClickableElement = styled.div`
  text-decoration: none;
  color: #333;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const SidebarListItem: React.FC<SidebarListItemProps> = ({ item, onClick }) => {
  if (item.path) {
    return (
      <SidebarListItemContainer>
        <StyledLink to={item.path} onClick={onClick}>
          {item.sidebarLabel}
        </StyledLink>
      </SidebarListItemContainer>
    );
  } else {
    return (
      <SidebarListItemContainer>
        <ClickableElement onClick={onClick}>
          {item.sidebarLabel}
        </ClickableElement>
      </SidebarListItemContainer>
    );
  }
};

const SidebarList: React.FC<SidebarListProps> = ({ items }) => {
  const location = useLocation();
  const [hasInteracted, setHasInteracted] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<SidebarItemConfig | null>(
    null,
  );

  useEffect(() => {
    const matchingItem = items.find((item) =>
      location.pathname.startsWith(item.path),
    );

    if (matchingItem) {
      console.log('MATCH');
      setActiveSubMenu(matchingItem);
    }
  }, [items, location]);

  return (
    <SidebarListContainer>
      <SidebarListMainMenu
        isActive={!!activeSubMenu}
        hasInteracted={hasInteracted}
      >
        <SidebarListMenu>
          {items.map((item, i) => (
            <SidebarListItem
              key={i}
              item={item}
              onClick={() => {
                if (item.subroutes) {
                  setActiveSubMenu(item);
                  setHasInteracted(true);
                }
              }}
            />
          ))}
        </SidebarListMenu>
      </SidebarListMainMenu>
      <SidebarListSubMenu
        isActive={!!activeSubMenu}
        hasInteracted={hasInteracted}
      >
        <SidebarListItem
          item={{ sidebarLabel: 'Back' }}
          onClick={() => {
            setActiveSubMenu(null);
            setHasInteracted(true);
          }}
        />
        <SidebarListMenu>
          {activeSubMenu?.subroutes?.map((subItem, i) => (
            <SidebarListItem key={i} item={subItem} />
          ))}
        </SidebarListMenu>
      </SidebarListSubMenu>
    </SidebarListContainer>
  );
};

export default SidebarList;
