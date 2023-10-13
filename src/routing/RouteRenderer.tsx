import React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';
import { RouteConfig } from './types';

interface RouteRendererProps {
  routes: RouteConfig[];
  parentPath?: string;
}

const RouteRenderer: React.FC<RouteRendererProps> = ({
  routes,
  parentPath = '',
}) => (
  <Switch>
    {routes.map((route, i) => {
      const fullPath = `${parentPath}/${route.path}`.replace(/\/+/g, '/');

      return (
        <Route
          key={i}
          path={fullPath}
          exact={!route.routes}
          render={(props: RouteComponentProps) => {
            const Component = route.component;
            return (
              <Component {...props} {...route.props}>
                {route.routes && (
                  <RouteRenderer routes={route.routes} parentPath={fullPath} />
                )}
              </Component>
            );
          }}
        />
      );
    })}
  </Switch>
);

export default RouteRenderer;
