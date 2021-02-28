import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';
interface Props {
  condition: boolean,
  component: FC, 
  redirectTo?: string,
  path?: string, 
  exact?: boolean
}

const ConditionalRoute: FC<Props> = ({ component: RouteComponent, condition = false, redirectTo='/login', ...rest }) => (
    <Route 
      {...rest} 
      render={routeProps => (
      condition ?
          <RouteComponent {...rest} {...routeProps} /> : 
          <Redirect to={redirectTo} />   
    )} />
  );

export default ConditionalRoute;
