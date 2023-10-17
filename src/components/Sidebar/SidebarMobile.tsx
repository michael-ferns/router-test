import { useSelector } from 'react-redux';
import SidebarAccountSwitcher from './SidebarAccountSwitcher';
import SidebarBackdrop from './SidebarBackdrop';
import { RootState } from '../../redux/store';
import { SidebarMenu } from './Sidebar.styles';
import { SidebarProps } from './Sidebar.types';

const SidebarMobile: React.FC<SidebarProps> = ({ items }) => {
  const sidebarOpen = useSelector((state: RootState) => state.ui.sidebarOpen);

  return sidebarOpen ? (
    <SidebarBackdrop>
      <SidebarMenu>
        <SidebarAccountSwitcher />
        Sidebar Mobile
      </SidebarMenu>
    </SidebarBackdrop>
  ) : null;
};

export default SidebarMobile;
