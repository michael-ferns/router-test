import { MouseEvent, ReactNode, useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { closeSidebar } from '../../redux/slices/uiSlice';
import { SidebarBackdropContainer } from './Sidebar.styles';

interface SidebarBackdropProps {
  children: ReactNode;
}

const SidebarBackdrop: React.FC<SidebarBackdropProps> = ({ children }) => {
  const dispatch = useDispatch();
  const sidebarBackdropRef = useRef<HTMLDivElement>(null);

  const handleBackdropClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (e.target === sidebarBackdropRef.current) {
        dispatch(closeSidebar());
      }
    },
    [dispatch],
  );

  return (
    <SidebarBackdropContainer
      ref={sidebarBackdropRef}
      onClick={handleBackdropClick}
    >
      {children}
    </SidebarBackdropContainer>
  );
};

export default SidebarBackdrop;
