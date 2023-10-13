import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeSidebar } from '../../../redux/slices/uiSlice';
import { SidebarItemConfig } from '../../../routing/types';
import {
  SidebarListContainer,
  SidebarListItem,
  SidebarListLink,
} from './styles';

interface SidebarListProps {
  items: SidebarItemConfig[];
}

const SidebarList: React.FC<SidebarListProps> = ({ items }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLinkClick = useCallback(() => {
    const unlisten = history.listen(() => {
      dispatch(closeSidebar());
      unlisten();
    });
  }, [dispatch, history]);

  return (
    <SidebarListContainer>
      {items.map((item, index) => (
        <SidebarListItem key={index}>
          <SidebarListLink to={item.path} onClick={handleLinkClick}>
            {/* Placeholder for actual icons */}
            {item.sidebarLabel}
          </SidebarListLink>
          {item.subroutes && <SidebarList items={item.subroutes} />}
        </SidebarListItem>
      ))}
    </SidebarListContainer>
  );
};

export default SidebarList;
