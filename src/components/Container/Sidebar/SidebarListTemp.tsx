import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SidebarItemConfig } from '../../../routing/types';
import styled from '../../../styles/styled';

interface SidebarClickableItemConfig extends Omit<SidebarItemConfig, 'path'> {
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
  transform: ${(props) =>
    props.isActive ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease;
`;

const SidebarListSubMenu = styled.div<SidebarListMenuProps>`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  transform: ${(props) =>
    props.isActive ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease;
`;

const SidebarListItemContainer = styled.li`
  list-style-type: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  padding: 10px 20px;
  display: block;
  &:hover {
    background-color: #f5f5f5;
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
  const location = useLocation();

  if (item.path) {
    // If the current path is the same as the item path, render ClickableElement instead
    if (
      location.pathname.startsWith(item.path) &&
      location.pathname !== item.path
    ) {
      console.log('this hits', item.path);

      return (
        <SidebarListItemContainer>
          <ClickableElement onClick={onClick}>
            {item.sidebarLabel}
          </ClickableElement>
        </SidebarListItemContainer>
      );
    }

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
  const [activeSubMenu, setActiveSubMenu] = useState<SidebarItemConfig | null>(
    null,
  );

  useEffect(() => {
    const matchingSubroute = items.find(
      (item) =>
        item.subroutes &&
        item.subroutes.some((subItem) =>
          location.pathname.startsWith(subItem.path),
        ),
    );

    if (matchingSubroute) {
      setActiveSubMenu(matchingSubroute);
    }
  }, [items, location]);

  const handleMainMenuClick = (item: SidebarItemConfig) => {
    if (item.subroutes) {
      setActiveSubMenu(item);
    }
  };

  return (
    <SidebarListContainer>
      <SidebarListMainMenu isActive={!activeSubMenu}>
        <SidebarListMenu>
          {items.map((item, i) => (
            <SidebarListItem
              key={i}
              item={item}
              onClick={() => handleMainMenuClick(item)}
            />
          ))}
        </SidebarListMenu>
      </SidebarListMainMenu>
      <SidebarListSubMenu isActive={!!activeSubMenu}>
        <SidebarListItem
          item={{ sidebarLabel: 'Back' }}
          onClick={() => setActiveSubMenu(null)}
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
