import { Outlet } from 'react-router';
import { AccountMenuContainer } from './AccountMenu.styles';

const AccountMenu: React.FC = () => {
  return (
    <AccountMenuContainer>
      <Outlet />
    </AccountMenuContainer>
  );
};

export default AccountMenu;
