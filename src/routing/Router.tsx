import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RouteRenderer from './RouteRenderer';
import Container from '../components/Container/Container';
import useRoutes from '../hooks/useRoutes';
import Login from '../components/Login/Login';
import { RootState } from '../redux/store';

const Router: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const routes = useRoutes();

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route
          render={() => {
            if (!isAuthenticated && window.location.pathname !== '/') {
              return <Redirect to="/" />;
            }

            return (
              <Container>
                <RouteRenderer routes={routes} />
              </Container>
            );
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
