import React, { FC } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';

// do something globally
const Root: FC<RouteConfigComponentProps> = (props) => {
  const { route = {} } = props;
  const { routes = [] } = route;
  const { pathname } = useLocation();
  if (pathname === '/') {
    return <Redirect to="/login"></Redirect>;
  }
  if (pathname === '/admin') {
    return <Redirect to="/admin/dashboard"></Redirect>;
  }
  return renderRoutes(routes);
};

export default Root;
