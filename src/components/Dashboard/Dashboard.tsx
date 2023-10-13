import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import withLoading from '../../hoc/withLoading';
import { setDashboard } from '../../redux/slices/containers/dashboardSlice';
import { DashboardContainer, DashboardTitle, NavigationButton } from './styles';

interface DashboardProps {
  children?: React.ReactNode;
}

const onDashboardLoad = (dispatch: ReturnType<typeof useDispatch>) => {
  dispatch(setDashboard('some dashboard value'));
};

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  const history = useHistory();

  const navigateToDashboard = () => {
    history.push('/dashboard');
  };

  const navigateToList = () => {
    history.push('/dashboard/list');
  };

  return (
    <DashboardContainer>
      <DashboardTitle>Dashboard</DashboardTitle>
      <NavigationButton onClick={navigateToDashboard}>
        Go to Dashboard
      </NavigationButton>
      <NavigationButton onClick={navigateToList}>Go to List</NavigationButton>
      {children}
    </DashboardContainer>
  );
};

const WrappedDashboard = withLoading(Dashboard, 'dashboard', onDashboardLoad);

export default WrappedDashboard;
