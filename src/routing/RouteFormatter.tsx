import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const RouteFormatter: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.endsWith('/')) {
      navigate(location.pathname.slice(0, -1), { replace: true });
    }
  }, [location, navigate]);

  return <Outlet />;
};

export default RouteFormatter;
