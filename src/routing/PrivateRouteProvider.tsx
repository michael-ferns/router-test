import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router';
import { RootState } from '../redux/store';

const PrivateRouteProvider: React.FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { replace: true });
    }
  }, [navigate, isAuthenticated]);

  return isAuthenticated ? <Outlet /> : null;
};

export default PrivateRouteProvider;
